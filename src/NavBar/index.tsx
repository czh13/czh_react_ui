import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import './styles/index.scss';

export interface NavBarProps {
  leftArrow?: React.ReactNode;
  leftText?: string;
  right?: React.ReactNode;
  style?: React.CSSProperties & Partial<Record<'--nav-bar-height' | '--border-bottom', string>>;
  children?: React.ReactNode;
  onBack?: () => void;
}

const classPrefix = 'czh-nav-bar';

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-left`} onClick={props.onBack}>
        {<div className={`${classPrefix}-left-icon`}>{props.leftArrow ? props.leftArrow : <FiChevronLeft />}</div>}
        <div className={`${classPrefix}-left-text`}>{props.leftText}</div>
      </div>
      <div className={`${classPrefix}-title`}>{props.children}</div>
      <div className={`${classPrefix}-right`}>{props.right}</div>
    </div>
  );
};

NavBar.displayName = 'NavBar';

NavBar.defaultProps = {
  leftText: '',
  leftArrow: true,
};

export default NavBar;
