import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import cx from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import './styles/index.scss';
import { getTimeItems } from './utils';

export interface CountdownProps {
  time: number;
  format?: string;
  endText?: string;
  numberClassName?: string;
  symbolClassName?: string;
  endTextClassName?: string;
}

// xx:xx:xx
type TimeItemType = {
  num: string;
  symbol: string;
}[];

const classPrefix = 'czh-countdown';

const Countdown: React.FC<CountdownProps> = (props) => {
  const [timeItems, setTimeItems] = useState<TimeItemType>([]);
  const [timeEnd, setTimeEnd] = useState(false);

  const computeTimeRef = useRef(props.time);
  const timerRef = useRef(0);

  const endTimeMs = useMemo(() => Date.now() + computeTimeRef.current, []);

  const setCountdownTimeItems = useCallback(() => {
    if (computeTimeRef.current <= 0) {
      setTimeEnd(true);
      clearTimeout(timerRef.current);
    }

    const currentTimeItems = getTimeItems(props.format!, computeTimeRef.current);
    setTimeItems(currentTimeItems);
  }, [props.format]);

  const initCountdown = useCallback(() => {
    clearTimeout(timerRef.current);
    const now = Date.now();
    computeTimeRef.current = endTimeMs - now;
    timerRef.current = window.setTimeout(() => {
      initCountdown();
    });
    setCountdownTimeItems();
  }, [endTimeMs, setCountdownTimeItems]);

  useIsomorphicLayoutEffect(() => {
    initCountdown();
    return () => clearTimeout(timerRef.current);
  }, [initCountdown]);

  return (
    <div className={classPrefix}>
      {timeEnd && props.endText ? (
        <div className={props.endTextClassName}>{props.endText}</div>
      ) : (
        timeItems.map((item, index) => {
          return (
            <div key={index} className={`${classPrefix}-item`}>
              <div className={cx(`${classPrefix}-num`, props.numberClassName)}>{item.num}</div>
              <div className={cx(`${classPrefix}-symbol`, props.symbolClassName)}>{item.symbol}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

Countdown.defaultProps = {
  format: 'hh:mm:ss',
};

export default Countdown;
