import React, { useEffect, useState } from 'react';

export interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  targetRef: React.RefObject<Element | null>,
  { threshold = 0, rootMargin = '0%', root = null, freezeOnceVisible = false }: IntersectionObserverOptions,
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const element = targetRef.current;

    if (!element || frozen) return;

    const observerParams = { threshold, rootMargin, root };

    const ob = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
      setEntry(entry);
    }, observerParams);

    ob.observe(element);

    return () => {
      ob.disconnect();
    };
  }, [frozen, root, rootMargin, targetRef, threshold]);

  return entry;
};
