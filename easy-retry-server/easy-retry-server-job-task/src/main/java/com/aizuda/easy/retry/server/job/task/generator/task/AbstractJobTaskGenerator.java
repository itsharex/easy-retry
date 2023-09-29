package com.aizuda.easy.retry.server.job.task.generator.task;

import com.aizuda.easy.retry.template.datasource.persistence.po.JobTask;
import org.springframework.beans.factory.InitializingBean;

import java.util.List;

/**
 * @author www.byteblogs.com
 * @date 2023-10-02 13:08:14
 * @since 2.4.0
 */
public abstract class AbstractJobTaskGenerator implements JobTaskGenerator, InitializingBean {

    @Override
    public List<JobTask> generate(JobTaskGenerateContext context) {
        return doGenerate(context);
    }

    protected abstract List<JobTask> doGenerate(JobTaskGenerateContext context);

    @Override
    public void afterPropertiesSet() throws Exception {
        JobTaskGeneratorFactory.registerTaskInstance(getTaskInstanceType(), this);
    }
}
