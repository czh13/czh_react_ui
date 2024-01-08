import React from 'react';
import './styles/swiper-item.scss';

export interface SwiperItemProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

const classPrefix = 'czh-swiper-item';

const SwiperItem: React.FC<SwiperItemProps> = (props) => {
  return (
    <div className={classPrefix} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

SwiperItem.displayName = 'SwiperItem';

export default SwiperItem;
