/*
 * @Author: milton
 * @Date: 2023-12-07 16:10:00
 * @LastEditors: milton caizhihao@guidefuture.com
 * @LastEditTime: 2023-12-07 17:41:50
 * @FilePath: \react-cocashy-payf:\test\project\react\flb-cashier-ssr\base\Loading\index.tsx
 * @Description:
 *
 */
import React from 'react';
import './style/index.scss';

export interface LoadingProps {
  color?: string;
  size?: number;
  type?: 'default' | 'special';
  dataTestid?: string;
}
type LoadingStyleType = React.CSSProperties & Partial<Record<'--color', string>>;

const classPrefix = 'czh_loading';

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <div data-testid={props.dataTestid} className={classPrefix} style={{ '--color': props.color, '--size': `${props.size}px` } as LoadingStyleType}>
      <div className={`${classPrefix}_main_${props.type}`}></div>
    </div>
  );
};

Loading.displayName = 'Loading';

Loading.defaultProps = {
  type: 'default',
  size: 30,
};

export default Loading;
