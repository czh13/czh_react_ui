import { useScrollLock } from '@/hooks/useScrollLock';
import { animated, useIsomorphicLayoutEffect, useSpring } from '@react-spring/web';
import React, { useCallback, useState } from 'react';
import './styles/index.scss';

export interface MaskProps {
  visible: boolean;
  onMaskClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties & Partial<Record<'--z-index' | '--background', string>>;
}

const classPrefix = 'czh-mask';

const Mask: React.FC<MaskProps> = (props) => {
  const [active, setActive] = useState(false);

  const { opacity } = useSpring({
    opacity: props.visible ? 1 : 0,
    //动画过程
    config: {
      tension: 250,
      friction: 30,
      clamp: true,
    },
    // 动画执行结束之后回调
    onRest: () => {
      setActive(props.visible);
    },
  });

  useScrollLock(props.visible);

  // 点击遮罩层时
  const onMask = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      props.onMaskClick?.(e);
    },
    [props.onMaskClick],
  );

  // 让active的初始值等于传入进来的，同时根据传入的值控制是否显示
  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);

  return <animated.div className={classPrefix} style={{ ...props.style, opacity, display: active ? undefined : 'none' }} onClick={onMask} />;
};

export default Mask;
