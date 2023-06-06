package com.aizuda.easy.retry.server.service.impl;

import com.aizuda.easy.retry.server.persistence.mybatis.mapper.RetryTaskLogMapper;
import com.aizuda.easy.retry.server.persistence.mybatis.mapper.ServerNodeMapper;
import com.aizuda.easy.retry.server.persistence.mybatis.po.RetryTaskLog;
import com.aizuda.easy.retry.server.persistence.mybatis.po.ServerNode;
import com.aizuda.easy.retry.server.service.convert.ServerNodeResponseVOConverter;
import com.aizuda.easy.retry.server.web.model.base.PageResult;
import com.aizuda.easy.retry.server.web.model.request.ServerNodeQueryVO;
import com.aizuda.easy.retry.server.web.model.response.ServerNodeResponseVO;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.aizuda.easy.retry.common.core.enums.NodeTypeEnum;
import com.aizuda.easy.retry.common.core.enums.RetryStatusEnum;
import com.aizuda.easy.retry.server.service.DashBoardService;
import com.aizuda.easy.retry.server.web.model.enums.DateTypeEnum;
import com.aizuda.easy.retry.server.web.model.response.ActivePodQuantityResponseVO;
import com.aizuda.easy.retry.server.web.model.response.DispatchQuantityResponseVO;
import com.aizuda.easy.retry.server.web.model.response.SceneQuantityRankResponseVO;
import com.aizuda.easy.retry.server.web.model.response.TaskQuantityResponseVO;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author: www.byteblogs.com
 * @date : 2022-04-22 20:19
 * @since 1.0.0
 */
@Service
public class DashBoardServiceImpl implements DashBoardService {

    @Autowired
    private RetryTaskLogMapper retryTaskLogMapper;

    @Autowired
    private ServerNodeMapper serverNodeMapper;

    @Override
    public TaskQuantityResponseVO countTask() {

        TaskQuantityResponseVO taskQuantityResponseVO = new TaskQuantityResponseVO();
        taskQuantityResponseVO.setTotal(retryTaskLogMapper.countTaskTotal());

        taskQuantityResponseVO.setFinish(retryTaskLogMapper.countTaskByRetryStatus(RetryStatusEnum.FINISH.getStatus()));
        taskQuantityResponseVO.setMaxRetryCount(retryTaskLogMapper.countTaskByRetryStatus(RetryStatusEnum.MAX_RETRY_COUNT.getStatus()));
        taskQuantityResponseVO.setRunning(taskQuantityResponseVO.getTotal() - taskQuantityResponseVO.getFinish() - taskQuantityResponseVO.getMaxRetryCount());

        return taskQuantityResponseVO;
    }

    @Override
    public DispatchQuantityResponseVO countDispatch() {
        DispatchQuantityResponseVO dispatchQuantityResponseVO = new DispatchQuantityResponseVO();

        Long total = retryTaskLogMapper.selectCount(null);
        dispatchQuantityResponseVO.setTotal(total);

        if (total == 0) {
            return dispatchQuantityResponseVO;
        }

        Long success = retryTaskLogMapper.selectCount(new LambdaQueryWrapper<RetryTaskLog>()
                .in(RetryTaskLog::getRetryStatus, RetryStatusEnum.MAX_RETRY_COUNT.getStatus(),
                        RetryStatusEnum.FINISH.getStatus()));
        dispatchQuantityResponseVO.setSuccessPercent(BigDecimal.valueOf(success).divide(BigDecimal.valueOf(total), 2, RoundingMode.HALF_UP).multiply(BigDecimal.valueOf(100)));

        return dispatchQuantityResponseVO;
    }

    @Override
    public ActivePodQuantityResponseVO countActivePod() {

        ActivePodQuantityResponseVO activePodQuantityResponseVO = new ActivePodQuantityResponseVO();
        activePodQuantityResponseVO.setTotal(serverNodeMapper.selectCount(null));
        activePodQuantityResponseVO.setServerTotal(serverNodeMapper.selectCount(new LambdaQueryWrapper<ServerNode>().eq(ServerNode::getNodeType, NodeTypeEnum.SERVER.getType())));
        activePodQuantityResponseVO.setClientTotal(serverNodeMapper.selectCount(new LambdaQueryWrapper<ServerNode>().eq(ServerNode::getNodeType, NodeTypeEnum.CLIENT.getType())));

        return activePodQuantityResponseVO;
    }

    @Override
    public List<SceneQuantityRankResponseVO> rankSceneQuantity(String groupName, String type, String startTime, String endTime) {
        LocalDateTime startDateTime = LocalDateTime.now();
        if (StringUtils.isNotBlank(startTime)) {
            startDateTime = LocalDateTime.parse(startTime, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        }

        LocalDateTime endDateTime = LocalDateTime.now();
        if (StringUtils.isNotBlank(endTime)) {
            endDateTime = LocalDateTime.parse(endTime, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        }

        DateTypeEnum dateTypeEnum = DateTypeEnum.valueOf(type.toUpperCase());
        startDateTime = dateTypeEnum.getStartTime().apply(startDateTime);
        endDateTime = dateTypeEnum.getEndTime().apply(endDateTime);

        return retryTaskLogMapper.rankSceneQuantity(groupName, startDateTime, endDateTime);
    }

    @Override
    public List<DispatchQuantityResponseVO> lineDispatchQuantity(String groupName, String type, String startTime, String endTime) {

        DateTypeEnum dateTypeEnum = DateTypeEnum.valueOf(type.toUpperCase());

        LocalDateTime startDateTime = LocalDateTime.now();
        if (StringUtils.isNotBlank(startTime)) {
            startDateTime = LocalDateTime.parse(startTime, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        }

        LocalDateTime endDateTime = LocalDateTime.now();
        if (StringUtils.isNotBlank(endTime)) {
            endDateTime = LocalDateTime.parse(endTime, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        }

        startDateTime = dateTypeEnum.getStartTime().apply(startDateTime);
        endDateTime = dateTypeEnum.getEndTime().apply(endDateTime);

        List<DispatchQuantityResponseVO> totalDispatchQuantityResponseList = retryTaskLogMapper.lineDispatchQuantity(groupName, null, type, startDateTime, endDateTime);

        List<DispatchQuantityResponseVO> successDispatchQuantityResponseList = retryTaskLogMapper.lineDispatchQuantity(groupName, RetryStatusEnum.FINISH.getStatus(), type, startDateTime, endDateTime);
        Map<String, DispatchQuantityResponseVO> successDispatchQuantityResponseVOMap = successDispatchQuantityResponseList.stream().collect(Collectors.toMap(DispatchQuantityResponseVO::getCreateDt, i -> i));
        for (DispatchQuantityResponseVO dispatchQuantityResponseVO : totalDispatchQuantityResponseList) {

            DispatchQuantityResponseVO quantityResponseVO = successDispatchQuantityResponseVOMap.get(dispatchQuantityResponseVO.getCreateDt());
            if (Objects.isNull(quantityResponseVO)) {
                dispatchQuantityResponseVO.setSuccess(0L);
            } else {
                dispatchQuantityResponseVO.setSuccess(quantityResponseVO.getTotal());
            }

            dispatchQuantityResponseVO.setFail(dispatchQuantityResponseVO.getTotal() - dispatchQuantityResponseVO.getSuccess());

        }

        dateTypeEnum.getConsumer().accept(totalDispatchQuantityResponseList);

        return totalDispatchQuantityResponseList.stream().sorted(Comparator.comparing(DispatchQuantityResponseVO::getCreateDt)).collect(Collectors.toList());
    }

    @Override
    public PageResult<List<ServerNodeResponseVO>> pods(ServerNodeQueryVO queryVO) {
        PageDTO<ServerNode> pageDTO = new PageDTO<>(queryVO.getPage(), queryVO.getSize());

        LambdaQueryWrapper<ServerNode> serverNodeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        if (StringUtils.isNotBlank(queryVO.getGroupName())) {
            serverNodeLambdaQueryWrapper.eq(ServerNode::getGroupName, queryVO.getGroupName());
        }

        PageDTO<ServerNode> serverNodePageDTO = serverNodeMapper.selectPage(pageDTO, serverNodeLambdaQueryWrapper.orderByDesc(ServerNode::getNodeType));

        List<ServerNodeResponseVO> serverNodeResponseVOS = ServerNodeResponseVOConverter.INSTANCE.toServerNodeResponseVO(serverNodePageDTO.getRecords());
        return new PageResult<>(serverNodePageDTO, serverNodeResponseVOS);
    }

}
