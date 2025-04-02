import { TextFieldProps, ValidationResult } from 'react-aria-components';
import * as React from 'react';
export interface TextFieldBaseProps extends Omit<TextFieldProps, 'className'> {
    children?: React.ReactNode;
    /** Specify label displayed above the TextField*/
    label?: string;
    /** Specify description displayed below the label */
    description?: string;
    /** Custom error messages */
    errorMessage?: string | ((validation: ValidationResult) => string) | undefined;
    /**
     * Whether to show the character counter or not
     * @default
     * false
     */
    showCounter?: boolean;
}
export declare const TextFieldBase: React.ForwardRefExoticComponent<TextFieldBaseProps & React.RefAttributes<HTMLDivElement>>;
