/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import React from 'react';

type ButtonProps = AntButtonProps & {
  isPermission?: boolean;
  permission?: string | any;
  ref?: React.Ref<HTMLButtonElement>;
  size?: 'small' | 'middle' | 'large';
};

const ButtonUI = React.forwardRef(({ className, type = 'default', isPermission, ...rest }: ButtonProps, ref: any) => {
  const buttonClassName = `button-layout ${className ?? ''}   `;
  return (
    <AntButton
      disabled={isPermission}
      className={buttonClassName}
      type={type}
      size={rest.size ? rest.size : 'large'}
      ref={ref}
      {...rest}
    >
      {rest.children}
    </AntButton>
  );
});

export default ButtonUI;
