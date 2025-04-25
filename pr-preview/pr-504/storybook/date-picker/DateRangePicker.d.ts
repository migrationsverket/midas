import { DateRangePickerProps as AriaDateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import * as React from 'react';
export interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    label?: string;
}
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
