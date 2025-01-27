/* eslint-disable @typescript-eslint/no-unused-vars */
import { DatePicker as AntDatePicker, DatePickerProps } from 'antd';
import { RangePickerTimeProps } from 'antd/es/time-picker';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);

type IRangePickerProps = {
  isPermission?: boolean;
  permission?: string | any;
  isDisableDate?: boolean;
  isOnlyFutureDates?: boolean;
} & Omit<RangePickerTimeProps<dayjs.Dayjs>, 'locale' | 'generateConfig' | 'hideHeader'>;

const { RangePicker } = AntDatePicker;

const RangePickerUI = ({
  className,
  isPermission = false,
  permission,
  isDisableDate = false,
  isOnlyFutureDates = false,
  ...rest
}: IRangePickerProps) => {
  const disablePastDates = (currentDate: dayjs.Dayjs) => {
    return currentDate && currentDate.isBefore(dayjs(), 'day');
  };

  const disableTodayAndPastDates = (currentDate: dayjs.Dayjs) => {
    return currentDate && currentDate.isSameOrBefore(dayjs(), 'day');
  };
  const rangePickerClassName = `rangepicker-layout ${className ?? ''} `;
  return (
    <RangePicker
      disabled={isPermission}
      size="large"
      className={rangePickerClassName}
      disabledDate={isOnlyFutureDates ? disableTodayAndPastDates : isDisableDate ? disablePastDates : undefined}
      format={'DD/MM/YYYY'}
      {...rest}
    />
  );
};

export default RangePickerUI;
