import { useAppSelector } from '@/store/store';
import { Select as AntSelect, SelectProps } from 'antd';

type ISelectProps = SelectProps & {
  isPermission?: boolean;
  permission?: string | any;
};
const SelectUI = ({ className, isPermission = false, ...rest }: ISelectProps) => {
  const { dict } = useAppSelector((state) => state.common);
  return (
    <AntSelect
      size={rest.size ? rest?.size : 'large'}
      disabled={isPermission}
      className={`select-layout ${className ?? ''}`}
      notFoundContent={dict?.common?.notification?.notFoundData}
      filterOption={(inputValue, option) => {
        return (option?.label ?? '').toString().toLowerCase().includes(inputValue.toLowerCase());
      }}
      showSearch
      {...rest}
    />
  );
};

export default SelectUI;
