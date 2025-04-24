import { ValidationResult } from 'react-aria-components';
import * as React from 'react';
export interface DatePickerContentProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    isInvalid?: boolean;
    isDisabled?: boolean;
}
export declare const DatePickerContent: React.ForwardRefExoticComponent<DatePickerContentProps & React.RefAttributes<HTMLDivElement>>;
