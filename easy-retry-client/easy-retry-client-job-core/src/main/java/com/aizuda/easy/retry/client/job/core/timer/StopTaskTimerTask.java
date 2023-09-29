package com.aizuda.easy.retry.client.job.core.timer;

import com.aizuda.easy.retry.client.job.core.cache.ThreadPoolCache;
import io.netty.util.Timeout;
import io.netty.util.TimerTask;

/**
 * @author www.byteblogs.com
 * @date 2023-10-08 22:28:53
 * @since 2.4.0
 */
public class StopTaskTimerTask implements TimerTask {

    private Long taskBatchId;

    public StopTaskTimerTask(Long taskBatchId) {
        this.taskBatchId = taskBatchId;
    }

    @Override
    public void run(Timeout timeout) throws Exception {
        ThreadPoolCache.stopThreadPool(taskBatchId);
    }
}
