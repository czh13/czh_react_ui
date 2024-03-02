import cx from 'classnames';
import React, { InputHTMLAttributes, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import './styles/index.scss';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  clearable?: boolean;
  className?: string;
  style?: React.CSSProperties & Partial<Record<'--color' | '--placeholder-color', string>>;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onValueChange?: (val: string) => void;
  onClear?: () => void;
}
export interface InputRef {
  setValue: (value: string) => void;
  clear: () => void;
  focus: () => void;
  blur: () => void;
}

const classPrefix = `czh-input`;

// 使用forwardRef包裹，useImperativeHandle暴露方法

const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
  const navtiveInputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(props.value);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    blur: () => {
      navtiveInputRef.current?.blur();
    },
    focus: () => {
      navtiveInputRef.current?.focus();
    },
    setValue: (value: string) => {
      setValue(value);
    },
  }));

  const showClearable = useMemo(() => {
    if (!props.clearable || !value || props.readOnly) return false;
    return true;
  }, [props.clearable, value, props.readOnly]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (props.onEnterPress && e.code === 'Enter') {
        props.onEnterPress(e);
      }
    },
    [props.onEnterPress],
  );

  return (
    <div className={cx(classPrefix, { [`${classPrefix}-disabled`]: props.disabled })}>
      <input
        ref={navtiveInputRef}
        {...props}
        id={props.id}
        value={value}
        className={cx(`${classPrefix}-element`, props.className)}
        style={props.style}
        onChange={(e) => {
          setValue(e.target.value);
          props.onValueChange?.(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {showClearable && (
        <div
          className={`${classPrefix}-clear`}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onClick={() => {
            setValue('');
            props.onClear?.();
          }}
        >
          <FiX />
        </div>
      )}
    </div>
  );
});

Input.defaultProps = {
  value: '',
  id: 'czh-input',
  type: 'text',
};

Input.displayName = 'Input';

export default Input;
