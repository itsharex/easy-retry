package com.aizuda.easy.retry.client.core.intercepter;

import cn.hutool.core.lang.Assert;
import com.aizuda.easy.retry.client.core.RetrySiteSnapshotContext;
import com.aizuda.easy.retry.client.core.exception.EasyRetryClientException;

/**
 * @author: shuguang.zhang
 * @date : 2023-08-09 16:34
 */
public class ThreadLockRetrySiteSnapshotContext<T> implements RetrySiteSnapshotContext<T> {

   private final ThreadLocal<T> threadLocal;

    public ThreadLockRetrySiteSnapshotContext(ThreadLocal<T> threadLocal) {
        Assert.notNull(threadLocal, ()-> new EasyRetryClientException("thread local can not be null"));
        this.threadLocal = threadLocal;
    }

    @Override
    public void set(T value) {
        threadLocal.set(value);
    }

    @Override
    public void remove() {
        threadLocal.remove();
    }

    @Override
    public T get() {
        return threadLocal.get();
    }
}
