import { DateFieldProps as AriaDateFieldProps, DateValue, ValidationResult } from 'react-aria-components';
import * as React from 'react';
interface DateFieldProps extends AriaDateFieldProps<DateValue> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
}
export declare const DateField: React.FC<DateFieldProps>;
export {};
