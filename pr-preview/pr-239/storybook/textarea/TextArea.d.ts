import { ValidationResult, TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
import * as React from 'react';
export interface TextAreaProps extends AriaTextFieldProps {
    /** Specify label displayed above the TextArea*/
    label?: string;
    /** Specify description displayed below the label */
    description?: string;
    /** Set number of rows for the TextArea */
    rows?: number;
    /** Set number of characters that are allowed before the TextArea is put in an invalid state */
    maxCharacters?: number;
    /**
     * Whether to show the character counter or not
     * @default
     * false
     */
    showCounter?: boolean;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare const TextArea: React.FC<TextAreaProps>;
