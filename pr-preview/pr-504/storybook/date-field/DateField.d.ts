import { DateFieldProps as AriaDateFieldProps, DateValue, ValidationResult } from 'react-aria-components';
import * as React from 'react';
export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    label?: string;
}
export declare const DateField: React.FC<DateFieldProps>;
