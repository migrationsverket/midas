import { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import * as React from 'react';
interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    label?: string;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
