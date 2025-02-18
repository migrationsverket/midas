import { TextFieldProps as AriaTextFieldProps, ValidationResult } from 'react-aria-components';
import * as React from 'react';
export interface TextFieldProps extends AriaTextFieldProps {
    children?: React.ReactNode;
    /** Specify label displayed above the TextField*/
    label?: string;
    /** Specify description displayed below the label */
    description?: string;
    /** Custom error messages */
    errorMessage?: string | ((validation: ValidationResult) => string) | undefined;
    /** Enable validations or add your own regex */
    validationType?: 'ssn' | 'dossnr' | RegExp;
    /** Set number of characters that are allowed before the TextField is put in an invalid state */
    maxCharacters?: number;
    /**
     * Whether to show the character counter or not
     * @default
     * false
     */
    showCounter?: boolean;
}
export declare const TextField: React.FC<TextFieldProps>;
type InputWrapperProps = Pick<TextFieldProps, 'label' | 'description' | 'errorMessage' | 'children'>;
export declare const InputWrapper: ({ label, description, errorMessage, children, }: InputWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const ssnRegEx: RegExp;
export declare const dossNrRegEx: RegExp;
export {};
