// rafce
import cx from 'classnames';
import React, { useMemo } from 'react';
import './styles/swiper-page-indicator.scss';

export interface SwiperIndicatorProps {
  currentIndex: number;
  total: number;
  indicatorClassName?: string;
}
const classPrefix = 'czh-swiper-page-indicator';

const SwiperIndicator: React.FC<SwiperIndicatorProps> = (props) => {
  const dots: React.ReactElement[] = useMemo(() => {
    // Array(props.total).fill(0) 只是为生成一个数量为total的数组,内容无所谓
    return Array(props.total)
      .fill(0)
      .map((_, index) => {
        return (
          <div
            key={index}
            className={cx(`${classPrefix}-dot`, {
              [`${classPrefix}-dot-active`]: props.currentIndex === index,
            })}
          />
        );
      });
  }, [props]);

  return <div className={classPrefix}>{dots}</div>;
};

export default SwiperIndicator;
