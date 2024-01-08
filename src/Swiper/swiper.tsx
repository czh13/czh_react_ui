import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import './styles/swiper.scss';
import SwiperIndicator from './swiperIndicator';
import SwiperItem from './swiperItem';
import { handleFinalPositon } from './utils';

export interface SwiperProps {
  loop?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
  defultIndex?: number;
  showIndicator?: boolean;
  indicatorClassName?: string;
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties & Partial<Record<'--height' | '--width' | '--border-radius' | '--track-padding', string>>;
}

export interface SwiperRef {
  swiperTo: (index: number) => void;
  swiperNext: () => void;
  swiperPrev: () => void;
}

const classPrefix = 'czh-swiper';

const Swiper = React.forwardRef<SwiperRef, SwiperProps>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(props.defultIndex || 0);
  const [dragging, setDragging] = useState(false);

  const startRef = useRef(0);
  const slideRatioRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef(false); //判断当前是否在播放
  const intervalRef = useRef(0); //存放定时器,是个number

  // 对传入进来的子元素进行判断,是否是Swiper.Item
  const { validChildren, count } = useMemo(() => {
    let count = 0;
    const validChildren = React.Children.map(props.children, (child) => {
      // 验证对象是否是一个React元素
      if (!React.isValidElement(child)) return null;
      // 验证是否是一个SwiperItem类型
      if (child.type !== SwiperItem) {
        console.warn('Swiper children must be Swiper.Item components');
      }
      count++;
      return child;
    });

    return { validChildren, count };
  }, [props.children]);

  const getFinalPosition = (index: number) => {
    // 0 * 100 + 0 * 100
    // 0.3 * 100 + 0 * 100
    let finalPosition = -currentIndex * 100 + index * 100;
    if (!props.loop) return finalPosition;

    // 实现无限轮播
    // 改变样式position,实现1-4,4-1
    // position改变前 position 0 -100 -200 -300
    // 1234 => 2341 =>3412 => 4123
    // 比如1234,currentIndex为0, 第一张是position是0,那么他的前一张是第4张,那么第四张是-100
    // 4=> 300, (300 + 200) % 400 = 100 - 200 = -100
    // 1=> 0,(0 + 200) % 400 = 200 - 200 = 0
    // 2=> 100,(100 + 200) % 400 = 100 - 200 = 100
    // 3=> 200,(200 + 200) % 400 = 0 - 200 = -200
    // position改变后 position 0 100 -200 -100
    const totalWidth = count * 100; //总宽度
    const flagWidth = totalWidth / 2; // 无限轮播时，当前图的前后平均分配轮播图
    finalPosition = handleFinalPositon(finalPosition + flagWidth, totalWidth) - flagWidth;
    return finalPosition;
  };

  const getTransition = (position: number) => {
    if (dragging) {
      return '';
    }

    // 清除自动播放的时候的闪动
    if (autoplayRef.current) {
      if (position === -100 || position === 0) {
        return 'transform 0.3s ease-out';
      } else {
        return '';
      }
    }

    // 排除4张里位移看不见的, 4 1 2,第三张就看不见
    if (position < -100) {
      return '';
    }

    return 'transform 0.3s ease-out';
  };

  const renderChild = () => {
    return (
      <div className={`${classPrefix}-track-inner`}>
        {React.Children.map(validChildren, (child, index) => {
          const position = getFinalPosition(index);
          return (
            <div
              className={`${classPrefix}-slide`}
              style={{
                left: `-${index * 100}%`,
                transform: `translate3d(${position}%,0,0)`,
                transition: getTransition(position),
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  };

  // 获取当前图片滑动比例，是0.5以下，还是0.5以上
  const getSlideRatio = (diff: number) => {
    const ele = trackRef.current;
    if (!ele) return 0;
    return diff / ele.offsetWidth; //offsetWidth可以获取元素宽度
  };

  // 处理第一张和最好一张不能再往前后移动,限制最大值最小值
  const boundIndex = useCallback(
    (targetIndex: number) => {
      let min = 0;
      let max = count - 1; //  React.Children.count可以获取子元素的数量
      let ret = targetIndex;
      ret = Math.max(targetIndex, min);
      ret = Math.min(ret, max);
      return ret;
    },
    [count],
  );

  const swiperTo = useCallback(
    (finalInex: number) => {
      const targetIndex = props.loop ? handleFinalPositon(finalInex, count) : boundIndex(finalInex); //超过就下一张
      setCurrentIndex(targetIndex);
    },
    [boundIndex, count, props.loop],
  );

  const swiperNext = useCallback(() => {
    swiperTo(currentIndex + 1);
  }, [currentIndex, swiperTo]);

  const swiperPrev = useCallback(() => {
    swiperTo(currentIndex - 1);
  }, [currentIndex, swiperTo]);

  const handleTouchmove = (e: TouchEvent) => {
    const currentX = e.changedTouches[0].clientX;
    const diff = startRef.current - currentX; // 获取滑动的距离
    slideRatioRef.current = getSlideRatio(diff);

    // 作用于展示图片滑动过程,因为currentIndex与样式transform的X轴位移有关(finalPosition)
    // 如果不写,图片切换就是一闪而过
    let slideIndex = currentIndex + slideRatioRef.current;

    //当不支持循环时,第一张和最后一张不能在往前后滑动
    if (!props.loop) {
      slideIndex = boundIndex(slideIndex);
    }

    setCurrentIndex(slideIndex);
  };

  // 滑动结束确认轮播图最终情况
  const handleTouchend = () => {
    const index = Math.round(slideRatioRef.current); //四舍五入判断滑动是否超过50%
    swiperTo(index + currentIndex);
    setDragging(false);
    // 清除监听
    window.removeEventListener('touchmove', handleTouchmove);
    window.removeEventListener('touchend', handleTouchend);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    startRef.current = e.changedTouches[0].clientX; //获取一开始点击坐标
    clearInterval(intervalRef.current); //拖动就不需要自动播放
    autoplayRef.current = false;
    // 监听滑动过程/滑动结束
    document.addEventListener('touchmove', handleTouchmove);
    document.addEventListener('touchend', handleTouchend);
  };

  useImperativeHandle(ref, () => ({
    swiperTo,
    swiperNext,
    swiperPrev,
  }));

  useEffect(() => {
    if (!props.autoplay || dragging) return;

    intervalRef.current = window.setInterval(() => {
      autoplayRef.current = true;
      swiperNext();
    }, props.autoplayDuration);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [dragging, props.autoplay, props.autoplayDuration, swiperNext]);

  if (count === 0 || !validChildren) {
    console.warn('Swiper at least one child element is required');
    return null;
  }

  return (
    <div className={classPrefix} style={props.style}>
      <div className={`${classPrefix}-track`} onTouchStart={(e) => handleTouchStart(e)} ref={trackRef}>
        {renderChild()}
      </div>
      {props.showIndicator && (
        <div className={`${classPrefix}-indicator`}>
          <SwiperIndicator
            total={count}
            currentIndex={slideRatioRef.current > 0 ? Math.floor(currentIndex) : Math.ceil(currentIndex)}
            indicatorClassName={props.indicatorClassName}
          />
        </div>
      )}
    </div>
  );
});

export default Swiper;

Swiper.defaultProps = {
  autoplay: false,
  loop: false,
  defultIndex: 0,
  showIndicator: true,
  autoplayDuration: 3000,
};

Swiper.displayName = 'Swiper';
