import React from 'react';

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

// 监听指定 DOM 元素的大小变化,执行某个回调
const useResizeObserver = <T extends HTMLElement>(callback: (target: T) => void, targetRef: React.RefObject<T>) => {
  useIsomorphicLayoutEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        callback(element);
      });
      observer.observe(element); // 观察目标元素的大小变化
      return () => {
        observer.disconnect();
      };
    }
    callback(element);

    return () => null;
  }, []);
};

export default useResizeObserver;
