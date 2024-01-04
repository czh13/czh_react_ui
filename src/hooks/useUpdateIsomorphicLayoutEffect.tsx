import React from 'react';

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

// 只要在依赖更新的时候才触发回调
export const useUpdateIsomorphicLayoutEffect = (callback: React.EffectCallback, deep?: React.DependencyList) => {
  const isMounted = React.useRef<boolean>(false);

  // 卸载的时候初始化更新
  useIsomorphicLayoutEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // 第一次进来的时候不触发回调
  useIsomorphicLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      callback();
    }
  }, deep);
};
