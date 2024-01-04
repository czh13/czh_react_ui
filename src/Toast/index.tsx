import { show } from './method';

export type { ToastShowProps } from './method';

export interface ToastProps {
  show: typeof show;
}

const Toast = {
  show,
};

export default Toast;
