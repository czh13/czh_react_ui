import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLockFn } from '@/hooks/useLockFn';
import { Loading } from 'czh-react-mobile-ui';
import React, { useCallback, useEffect, useRef } from 'react';

// 使用useIntersectionObserver和useLockFn
// 在子元素后面创建div，当可视化滑动到div，证明到底部了，开始请求后面的数据
// 这里需要保证页面只执行一个列表请求，避免并发，用户可能往上滑又往下滑
// 使用useRef声明一个锁定

export interface InfiniteScrollProps {
  hasMore: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  loadMore: () => Promise<void>;
}

const classPrefix = `czh-infinite-scroll`;

const InfiniteScroll: React.FC<InfiniteScrollProps> = React.memo((props) => {
  const intersectionEleRef = useRef<HTMLDivElement>(null);

  const observerEntry = useIntersectionObserver(intersectionEleRef, {});

  const doLoadMore = useLockFn(() => props.loadMore());

  const hanldeTouch = useCallback(async () => {
    if (!observerEntry?.isIntersecting || !props.hasMore) return;
    // 为true的时候，证明见到loading，开始发起请求
    await doLoadMore();
  }, [doLoadMore, observerEntry?.isIntersecting, props.hasMore]);

  useEffect(() => {
    hanldeTouch();
  }, [hanldeTouch]);

  return (
    <div>
      {props.children}
      <div className={`${classPrefix}-load`} ref={intersectionEleRef}>
        {props.footer && props.footer}
        {!props.footer && (props.hasMore ? <Loading size={15} /> : '')}
      </div>
    </div>
  );
});

InfiniteScroll.displayName = 'InfiniteScroll';

export default InfiniteScroll;
