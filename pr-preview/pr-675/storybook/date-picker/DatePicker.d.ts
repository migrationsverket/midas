import { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { Size } from '../common/types';
import * as React from 'react';
interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    label?: string;
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     * */
    size?: Size;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
