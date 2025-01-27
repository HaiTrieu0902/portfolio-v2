import React from 'react';
import { Form, FormItemProps } from 'antd';

interface CustomInputProps extends FormItemProps {
  isCheck?: boolean;
}

const FormItemUI = ({ name, label, rules, children, ...rest }: CustomInputProps) => {
  return (
    <Form.Item name={name} label={<span className="text-primary fw-bold">{label}</span>} rules={rules} {...rest}>
      {children}
    </Form.Item>
  );
};

export default FormItemUI;
