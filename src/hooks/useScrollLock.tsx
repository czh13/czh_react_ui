import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

// 锁定页面是否滚动，为true时，页面不可滚动
export const useScrollLock = (visible: boolean) => {
  useIsomorphicLayoutEffect(() => {
    if (!visible) return;

    const html = document.getElementsByTagName('html')[0];
    html.style.overflow = 'hidden';
    return () => {
      html.style.overflow = '';
    };
  }, [visible]);
};
