import { useCallback, useRef } from 'react';

// 确保在同一时间只有一个实例在执行，避免了并发的问题。
// 一个带有锁定功能的异步函数。主要目的是确保异步函数在执行期间不被重复调用，避免并发问题。
export const useLockFn = <P extends any[] = any[], V = any>(fn: (...args: P) => Promise<V>) => {
  const lockRef = useRef(false);

  return useCallback(
    async (...args: P) => {
      if (lockRef.current) return;

      lockRef.current = true;
      try {
        const res = await fn(...args);
        lockRef.current = false;
        return res;
      } catch (e) {
        lockRef.current = false;
        throw e;
      } finally {
      }
    },
    [fn],
  );
};
