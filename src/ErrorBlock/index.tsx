/*
 * @Author: milton
 * @Date: 2023-11-30 11:25:40
 * @LastEditors: milton caizhihao@guidefuture.com
 * @LastEditTime: 2024-01-02 16:02:59
 * @FilePath: \dumi_react_ui\src\ErrorBlock\index.tsx
 * @Description:
 *
 */
import React from 'react';

import ErrorImage from './errorImage';

import './styles/index.scss';

export interface ErrorBlockProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
}
const classPrefix = 'czh-error-block';
export const ErrorBlock: React.FC<ErrorBlockProps> = React.memo((props) => {
  let imageNode: React.ReactNode = ErrorImage;

  if (props.image) {
    imageNode = props.image;
  }
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-image`}>{imageNode}</div>
      <div className={`${classPrefix}-description`}>
        {props.title && <div className={`${classPrefix}-description-title`}>{props.title}</div>}
        {props.description && <div className={`${classPrefix}-description-subtitle`}>{props.description}</div>}
      </div>
    </div>
  );
});

ErrorBlock.defaultProps = {
  title: '页面遇到一些小问题',
  description: '请稍后重试',
};

ErrorBlock.displayName = 'ErrorBlock';

export default ErrorBlock;
