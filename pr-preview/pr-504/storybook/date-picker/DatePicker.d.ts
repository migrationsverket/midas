import { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { default as React } from '../../../../node_modules/react';
interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
