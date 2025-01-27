import React, { useState, useEffect } from 'react';
import { AutoComplete as AntAutoComplete, AutoCompleteProps } from 'antd';

type IAutoCompleteProps = AutoCompleteProps & {
  isPermission?: boolean;
  permission?: string | any;
  onChange?: any;
};

const AutoCompleteUI = ({
  className,
  isPermission = false,
  value,
  onChange,
  options = [],
  ...rest
}: IAutoCompleteProps) => {
  const [displayValue, setDisplayValue] = useState<string | undefined>(value);

  const handleSelect = (selectedValue: string) => {
    const selectedOption = options?.find((option: any) => option?.value === selectedValue);
    setDisplayValue((selectedOption?.label as any) || selectedValue);
  };

  const handleChange = (inputValue: string) => {
    setDisplayValue(inputValue);
    onChange?.(inputValue);
  };

  useEffect(() => {
    if (value) {
      const selectedOption = options?.find((option: any) => option?.value === value);
      setDisplayValue(selectedOption?.label || value);
    }
  }, [value, options]);

  return (
    <AntAutoComplete
      size={rest?.size || 'large'}
      disabled={isPermission}
      className={`auto-complete-layout ${className ?? ''}`}
      value={displayValue}
      onSelect={handleSelect}
      onChange={handleChange}
      options={options}
      {...rest}
    />
  );
};

export default AutoCompleteUI;
