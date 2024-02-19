import cx from 'classnames';
import React from 'react';
import './styles/index.scss';

export interface DividerProps {
  contentPosition?: 'left' | 'right' | 'center';
  dashed?: boolean;
  direction?: 'vertical' | 'horizontal';
  hairline?: boolean /** 是否使用 0.5px 线 */;
  children?: React.ReactNode;
  borderColor?: string;
  style?: React.CSSProperties & Partial<Record<'--border-width' | '--border-padding' | '--text-color', string>>;
}

const classPrefix = 'czh-divider';

const Divider: React.FC<DividerProps> = (props) => {
  return (
    <div
      style={{ ...props.style, borderColor: props.borderColor }}
      className={cx(classPrefix, `${classPrefix}-${props.direction}`, `${classPrefix}-${props.contentPosition}`, {
        [`${classPrefix}-hairline`]: props.hairline,
        [`${classPrefix}-dashed`]: props.dashed,
      })}
    >
      {props.children && <div className={`${classPrefix}-content`}>{props.children}</div>}
    </div>
  );
};

Divider.defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal',
  hairline: true,
  borderColor: '#c1c1c1',
};

export default Divider;
