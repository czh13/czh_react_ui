import cx from 'classnames';
import React from 'react';

export interface DividerProps {
  contentPosition?: 'left' | 'right' | 'center';
  dashed?: boolean;
  direction?: 'vertical' | 'horizontal';
  hairline?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties & Partial<Record<'--border-width' | '--border-padding' | '--text-color' | '--border-color', string>>;
}

const classPrefix = 'czh-divider';

const Divider: React.FC<DividerProps> = (props) => {
  return <div className={cx(classPrefix)}>{props.children && <div className={`${classPrefix}-content`}>{props.children}</div>}</div>;
};

Divider.defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal',
  hairline: true,
};

export default Divider;
