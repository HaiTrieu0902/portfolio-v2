/* eslint-disable @typescript-eslint/no-unused-vars */
import { DatePicker as AntDatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);
// import locale from 'antd/es/locale/vi_VN';

type IDatePickerProps = {
  isPermission?: boolean;
  permission?: string | any;
  isDisableDate?: boolean;
  isOnlyFutureDates?: boolean;
} & DatePickerProps;

const DatePickerUI = ({
  className,
  isPermission = false,
  permission,
  isDisableDate = false,
  isOnlyFutureDates = false,
  ...rest
}: IDatePickerProps) => {
  const disablePastDates = (currentDate: dayjs.Dayjs) => {
    return currentDate && currentDate.isBefore(dayjs(), 'day');
  };

  const disableTodayAndPastDates = (currentDate: dayjs.Dayjs) => {
    return currentDate && currentDate.isSameOrBefore(dayjs(), 'day');
  };

  const datePickerClassName = `datepicker-layout ${className ?? ''} `;

  return (
    <AntDatePicker
      disabled={isPermission}
      size="large"
      className={datePickerClassName}
      // locale={locale as any}
      disabledDate={isOnlyFutureDates ? disableTodayAndPastDates : isDisableDate ? disablePastDates : undefined}
      format={'DD/MM/YYYY'}
      {...rest}
    />
  );
};

export default DatePickerUI;
