/*
 * @Author: milton
 * @Date: 2023-12-07 12:07:52
 * @LastEditors: milton caizhihao@guidefuture.com
 * @LastEditTime: 2023-12-19 16:31:54
 * @FilePath: \react-cocashy-payf:\test\project\react\flb-cashier-ssr\base\Toast\toast.tsx
 * @Description:
 *
 */
import Loading from '@/Loading';
import cx from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './styles/index.scss';

export interface ToastProps {
  content?: React.ReactNode;
  duration?: number;
  afterClose?: () => void;
  unmount?: () => void;
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode;
}

const classPrefix = 'czh_toast';

const Toast: React.FC<ToastProps> = React.memo(({ icon, duration, content, afterClose, unmount }) => {
  const timerRef = useRef(0);
  const [, setVisible] = useState<boolean>(true);

  const iconElement = useMemo(() => {
    if (icon === null || icon === undefined) return null;
    switch (icon) {
      // case 'success':
      // 	return <CheckOutline />
      // case 'fail':
      // 	return <CloseOutline />
      case 'loading':
        return <Loading color="#4507ac" />;
      default:
        return icon;
    }
  }, [icon]);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setVisible(false);
      // 只是单纯的文字会自动消除，一般loading都是我们主动消除
      if (!iconElement && iconElement !== 'loading') {
        unmount?.();
      }
    }, duration);
    return () => clearInterval(timerRef.current);
  }, [duration, iconElement, unmount]);

  // 可以在关闭（相当于组件卸载）时候执行回调
  useEffect(() => {
    return () => {
      afterClose?.();
    };
  }, [afterClose]);

  return (
    <div className={classPrefix}>
      <div className={cx(`${classPrefix}_main`, icon ? `${classPrefix}_main_icon` : `${classPrefix}_main_text`)}>
        {iconElement && <div className={`${classPrefix}_icon`}>{iconElement}</div>}
        {content && <div className={`${classPrefix}_text`}>{content}</div>}
      </div>
    </div>
  );
});

Toast.displayName = 'Toast';

Toast.defaultProps = { duration: 3000 };

export default Toast;
