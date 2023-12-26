package com.aizuda.easy.retry.server.job.task.support.executor.workflow;

import akka.actor.ActorRef;
import cn.hutool.core.lang.Assert;
import cn.hutool.core.lang.Opt;
import cn.hutool.core.util.StrUtil;
import com.aizuda.easy.retry.common.core.constant.SystemConstants;
import com.aizuda.easy.retry.common.core.enums.JobOperationReasonEnum;
import com.aizuda.easy.retry.common.core.enums.JobTaskBatchStatusEnum;
import com.aizuda.easy.retry.common.core.enums.JobTaskStatusEnum;
import com.aizuda.easy.retry.common.core.enums.WorkflowNodeTypeEnum;
import com.aizuda.easy.retry.common.core.util.JsonUtil;
import com.aizuda.easy.retry.server.common.akka.ActorGenerator;
import com.aizuda.easy.retry.server.common.enums.JobTriggerTypeEnum;
import com.aizuda.easy.retry.server.common.exception.EasyRetryServerException;
import com.aizuda.easy.retry.server.job.task.dto.JobLogDTO;
import com.aizuda.easy.retry.server.job.task.dto.WorkflowNodeTaskExecuteDTO;
import com.aizuda.easy.retry.server.job.task.support.WorkflowTaskConverter;
import com.aizuda.easy.retry.server.job.task.support.generator.batch.JobTaskBatchGenerator;
import com.aizuda.easy.retry.server.job.task.support.generator.batch.JobTaskBatchGeneratorContext;
import com.aizuda.easy.retry.template.datasource.persistence.mapper.JobTaskMapper;
import com.aizuda.easy.retry.template.datasource.persistence.po.JobTask;
import com.aizuda.easy.retry.template.datasource.persistence.po.JobTaskBatch;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * @author xiaowoniu
 * @date 2023-12-24 08:17:11
 * @since 2.6.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ConditionWorkflowExecutor extends AbstractWorkflowExecutor {

    private static final ExpressionParser ENGINE = new SpelExpressionParser();

    private final JobTaskBatchGenerator jobTaskBatchGenerator;
    private final JobTaskMapper jobTaskMapper;

    @Override
    public WorkflowNodeTypeEnum getWorkflowNodeType() {
        return WorkflowNodeTypeEnum.CONDITION;
    }

    @Override
    public void doExecute(WorkflowExecutorContext context) {
        int taskBatchStatus = JobTaskBatchStatusEnum.SUCCESS.getStatus();
        int operationReason = JobOperationReasonEnum.NONE.getReason();
        int jobTaskStatus = JobTaskStatusEnum.SUCCESS.getStatus();
        String message = StrUtil.EMPTY;

        Boolean result = Optional.ofNullable(context.getEvaluationResult()).orElse(Boolean.FALSE);

        if (result) {
            // 多个条件节点直接是或的关系，只要一个成功其他节点就取消
            taskBatchStatus = JobTaskBatchStatusEnum.CANCEL.getStatus();
        } else {
            try {
                Map<String, Object> contextMap = new HashMap<>();
                // 根据配置的表达式执行
                if (StrUtil.isNotBlank(context.getResult())) {
                    contextMap = JsonUtil.parseHashMap(context.getResult());
                }
                result = doEval(context.getNodeExpression(), contextMap);
                log.info("执行条件表达式：[{}]，参数: [{}] 结果：[{}]", context.getNodeExpression(), context.getResult(), result);
            } catch (Exception e) {
                taskBatchStatus = JobTaskBatchStatusEnum.FAIL.getStatus();
                operationReason = JobOperationReasonEnum.WORKFLOW_CONDITION_NODE_EXECUTOR_ERROR.getReason();
                jobTaskStatus = JobTaskStatusEnum.FAIL.getStatus();
                message = e.getMessage();
            }
        }

        if (result) {
            // 若是工作流则开启下一个任务
            try {
                WorkflowNodeTaskExecuteDTO taskExecuteDTO = new WorkflowNodeTaskExecuteDTO();
                taskExecuteDTO.setWorkflowTaskBatchId(context.getWorkflowTaskBatchId());
                taskExecuteDTO.setTriggerType(JobTriggerTypeEnum.AUTO.getType());
                taskExecuteDTO.setParentId(context.getWorkflowNodeId());
                taskExecuteDTO.setResult(context.getResult());
                ActorRef actorRef = ActorGenerator.workflowTaskExecutorActor();
                actorRef.tell(taskExecuteDTO, actorRef);
            } catch (Exception e) {
                log.error("工作流执行失败", e);
            }
        }

        // 回传执行结果
        context.setEvaluationResult(result);

        JobTaskBatchGeneratorContext generatorContext = WorkflowTaskConverter.INSTANCE.toJobTaskBatchGeneratorContext(context);
        generatorContext.setTaskBatchStatus(taskBatchStatus);
        generatorContext.setOperationReason(operationReason);
        generatorContext.setJobId(SystemConstants.CONDITION_JOB_ID);
        JobTaskBatch jobTaskBatch = jobTaskBatchGenerator.generateJobTaskBatch(generatorContext);

        // 生成执行任务实例
        JobTask jobTask = new JobTask();
        jobTask.setGroupName(context.getGroupName());
        jobTask.setNamespaceId(context.getNamespaceId());
        jobTask.setJobId(SystemConstants.CONDITION_JOB_ID);
        jobTask.setClientInfo(StrUtil.EMPTY);
        jobTask.setTaskBatchId(jobTaskBatch.getId());
        jobTask.setArgsType(1);
        jobTask.setArgsStr(Optional.ofNullable(context.getResult()).orElse(StrUtil.EMPTY));
        jobTask.setTaskStatus(jobTaskStatus);
        jobTask.setResultMessage(String.valueOf(result));
        Assert.isTrue(1 == jobTaskMapper.insert(jobTask), () -> new EasyRetryServerException("新增任务实例失败"));

        // 保存执行的日志
        JobLogDTO jobLogDTO = new JobLogDTO();
        // TODO 等实时日志处理完毕后，再处理
        jobLogDTO.setMessage(message);
        jobLogDTO.setTaskId(jobTask.getId());
        jobLogDTO.setJobId(SystemConstants.CONDITION_JOB_ID);
        jobLogDTO.setGroupName(context.getGroupName());
        jobLogDTO.setNamespaceId(context.getNamespaceId());
        jobLogDTO.setTaskBatchId(jobTaskBatch.getId());
        ActorRef actorRef = ActorGenerator.jobLogActor();
        actorRef.tell(jobLogDTO, actorRef);
    }

    protected Boolean doEval(String expression, Map<String, Object> context) {
        try {
            final EvaluationContext evaluationContext = new StandardEvaluationContext();
            context.forEach(evaluationContext::setVariable);
            return ENGINE.parseExpression(expression).getValue(evaluationContext, Boolean.class);
        } catch (Exception e) {
            throw new EasyRetryServerException("SpEL表达式解析异常. expression:[{}] context:[{}]",
                    expression, JsonUtil.toJsonString(context), e);
        }

    }
}
