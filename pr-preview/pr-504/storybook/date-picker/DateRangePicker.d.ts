import { DateRangePickerProps as AriaDateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { default as React } from '../../../../node_modules/react';
export interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
}
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
