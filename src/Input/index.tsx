import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  placeholder?: string;
  clearable?: boolean;
  style?: React.CSSProperties & Partial<Record<'--color' | '--placeholder-color', string>>;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
