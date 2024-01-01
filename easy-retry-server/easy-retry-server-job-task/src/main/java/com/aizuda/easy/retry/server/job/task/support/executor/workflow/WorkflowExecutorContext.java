package com.aizuda.easy.retry.server.job.task.support.executor.workflow;

import com.aizuda.easy.retry.template.datasource.persistence.po.Job;
import lombok.Data;

/**
 * @author xiaowoniu
 * @date 2023-12-24
 * @since 2.6.0
 */
@Data
public class WorkflowExecutorContext {

    private String namespaceId;

    /**
     * 组名称
     */
    private String groupName;

    /**
     * 任务id
     */
    private Long jobId;

    /**
     * 工作流任务批次id
     */
    private Long workflowTaskBatchId;

    /**
     * 工作流节点id
     */
    private Long workflowNodeId;

    /**
     * 工作流父节点id
     */
    private Long parentWorkflowNodeId;

    /**
     * 任务属性
     */
    private Job job;

    /**
     * 客户端返回的结果
     */
    private String result;

    /**
     * 失败策略 1、跳过 2、阻塞
     */
    private Integer failStrategy;

    /**
     * 工作流节点状态 0、关闭、1、开启
     */
    private Integer workflowNodeStatus;

    /**
     * 条件节点的判定结果
     */
    private Boolean evaluationResult;

    /**
     * 调度任务id
     */
    private Long taskBatchId;

    /**
     * 节点信息
     */
    private String nodeInfo;


}
