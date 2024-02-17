import React, { useState } from 'react';
import './styles/index.scss';

export interface EllipsisProps {
  text: string;
  rows?: number;
  collapse?: React.ReactNode;
  expand?: React.ReactNode;
}

const classPrefix = 'czh-ellipsis';

const Ellipsis: React.FC<EllipsisProps> = (props) => {
  const [exceeded, setExceeded] = useState(false); //是否溢出
  const [expanded, setExpanded] = useState(false); //是否展开
  const [ellipsised, setEllipsised] = useState('');

  const renderContent = () => {
    return <div></div>;
  };

  return <div className={classPrefix}> {renderContent()}</div>;
};

Ellipsis.defaultProps = {
  text: '',
  rows: 1,
  expand: '',
  collapse: '',
};

export default Ellipsis;
