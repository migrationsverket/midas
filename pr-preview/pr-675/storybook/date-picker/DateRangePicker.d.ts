import { DateRangePickerProps as AriaDateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { Size } from '../common/types';
import * as React from 'react';
export interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    label?: string;
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     * */
    size?: Size;
}
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
