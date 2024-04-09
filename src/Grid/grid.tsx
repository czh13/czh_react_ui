import React, { useMemo } from 'react';

import { formatGap } from '@/utils/formatGap';
import './styles/grid.scss';

export interface GridProps {
  columns: number;
  gap?: number | string | [number | string, number | string];
  children?: React.ReactNode;
}

const classPrefix = 'czh-grid';

const Grid: React.FC<GridProps> = (props) => {

  const style = useMemo(() => {
    if (props.gap) {
      if (Array.isArray(props.gap)) {
        const [gapV, gapH] = props.gap;
        return {
          '--gap-horizontal': formatGap(gapH),
          '--gap-vertical': formatGap(gapV),
          '--columns': props.columns,
        };
      } else {
        return { '--gap': formatGap(props.gap), '--columns': props.columns };
      }
    }

    return { '--columns': props.columns };
  }, []);
  return (
    <div className={classPrefix} style={style as React.CSSProperties}>
      {props.children}
    </div>
  );
};

Grid.displayName = 'Grid';

export default Grid;
