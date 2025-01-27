/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input as AntInput, InputProps as AntInputProps, InputRef } from 'antd';
import React from 'react';

type InputProps = AntInputProps & {
  ref?: React.Ref<InputRef>;
};

const InputUI = React.forwardRef(({ className, type, ...rest }: InputProps, ref: any) => {
  const inputClassName = `input-layout ${className ?? ''} `;
  if (type === 'password')
    return <AntInput.Password className={inputClassName} size={rest.size ? rest.size : 'large'} {...rest} ref={ref} />;
  return (
    <AntInput
      autoComplete="off"
      className={inputClassName}
      type={type || 'text'}
      ref={ref}
      size={rest.size ? rest.size : 'large'}
      {...rest}
    />
  );
});

export default InputUI;
