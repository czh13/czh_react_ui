import Mask from '@/Mask';
import { animated, useIsomorphicLayoutEffect, useSpring } from '@react-spring/web';
import cx from 'classnames';
import React, { useState } from 'react';
import './styles/index.scss';

export interface PopupProps {
  position?: 'left' | 'top' | 'bottom' | 'right';
  style?: React.CSSProperties;
  className?: string;
  visible: boolean;
  mask?: boolean;
  children?: React.ReactNode;
  onMaskClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  afterShow?: () => void;
  afterClose?: () => void;
}

const classPrefix = 'czh-popup';

const Popup: React.FC<PopupProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActive] = useState(false);

  const { percent } = useSpring({
    percent: props.visible ? 0 : 100,
    config: {
      tension: 170,
      friction: 26,
      precision: 0.1,
      mass: 0.4,
    },
    onRest: () => {
      setActive(props.visible);
      if (props.visible) {
        props.afterShow?.();
      } else {
        props.afterClose?.();
      }
    },
  });

  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);

  return (
    <div className={classPrefix}>
      {props.mask && <Mask visible={props.visible} onMaskClick={props.onMaskClick} />}
      <animated.div
        className={cx(`${classPrefix}-body`, props.className, `${classPrefix}-${props.position}`)}
        style={{
          ...props.style,
          transform: percent.to((v) => {
            const redirect = {
              left: `translate(-${v}%,0)`,
              right: `translate(${v}%,0)`,
              top: `translate(0,-${v}%)`,
              bottom: `translate(0,${v}%)`,
            };
            if (props.position) {
              return redirect[props.position];
            }
            return 'none';
          }),
        }}
      >
        {props.children}
      </animated.div>
    </div>
  );
};

Popup.defaultProps = {
  visible: false,
  mask: true,
};

export default Popup;
