import React, { useMemo } from 'react';

import './styles/gridItem.scss';

export interface GridItemProps {
  span?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}
const classPrefix = 'czh-grid-item';

const GridItem: React.FC<GridItemProps> = React.memo((props) => {
  const style = useMemo(() => {
    return {
      '--item-span': props.span,
    };
  }, [props.span]);

  return (
    <div className={classPrefix} style={style as React.CSSProperties} onClick={props.onClick}>
      {props.children}
    </div>
  );
});

export default GridItem;
