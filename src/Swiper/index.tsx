import InternalSwiper from './swiper';
import SwiperItem from './swiperItem';

export type { SwiperProps, SwiperRef } from './swiper';
export type { SwiperItemProps } from './swiperItem';

type InternalSwiperType = typeof InternalSwiper;
export interface FinalSwiperProps extends InternalSwiperType {
  Item: typeof SwiperItem;
}

const Swiper = InternalSwiper as FinalSwiperProps;

Swiper.Item = SwiperItem;

export default Swiper;
