/*
 * @Author: milton
 * @Date: 2024-01-15 15:03:04
 * @LastEditors: milton caizhihao@guidefuture.com
 * @LastEditTime: 2024-01-15 15:19:41
 * @FilePath: \react-cocashy-payf:\test\project\react\dumi_react_ui\src\Popup\index.tsx
 * @Description:
 *
 */
import React from 'react';

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

const Popup: React.FC<PopupProps> = (props) => {
  return <div>{props.children}</div>;
};

export default Popup;
