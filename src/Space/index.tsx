import { formatGap } from '@/utils/formatGap';
import cx from 'classnames';
import React, { useMemo } from 'react';
import './styles/index.scss';

export interface SpaceProps {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: boolean;
  block?: boolean;
  gap?: number | string | [number | string, number | string];
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

const classPrefix = `czh-space`;

const Space: React.FC<SpaceProps> = (props) => {
  const style = useMemo(() => {
    if (props.gap) {
      if (Array.isArray(props.gap)) {
        const [gapH, gapV] = props.gap;
        return {
          '--gap-vertical': formatGap(gapV),
          '--gap-horizontal': formatGap(gapH),
        };
      }
      return { '--gap': formatGap(props.gap) };
    }
    return {};
  }, [props.gap]);

  return (
    <div
      className={cx(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${props.direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
      onClick={props.onClick}
      style={style as React.CSSProperties}
    >
      {React.Children.map(props.children, (child) => {
        return child !== null && child !== undefined && <div className={`${classPrefix}-item`}>{child}</div>;
      })}
    </div>
  );
};

Space.defaultProps = {
  direction: 'horizontal',
  block: true,
};

Space.displayName = 'Space';

export default Space;
