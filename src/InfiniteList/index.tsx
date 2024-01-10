import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLockFn } from '@/hooks/useLockFn';
import { Loading } from 'czh-react-mobile-ui';
import React, { useCallback, useEffect, useRef } from 'react';

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
