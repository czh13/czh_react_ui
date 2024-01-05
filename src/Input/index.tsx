import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}
export interface InputRef {
  setValue: (value: string) => void;
}

const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
  console.log('🚀 ~ file: index.tsx:11 ~ Input ~ props, ref:', props, ref);

  return <div></div>;
});

Input.defaultProps = {
  value: '',
  id: 'czh-input',
  type: 'text',
};

Input.displayName = 'Input';

export default Input;
