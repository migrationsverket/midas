import { default as React, ReactNode } from '../../../../node_modules/react';
import { TextFieldProps as AriaTextFieldProps, ValidationResult } from 'react-aria-components';
export interface TextFieldProps extends AriaTextFieldProps {
    children?: ReactNode;
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string) | undefined;
    validationType?: 'ssn' | RegExp;
    maxCharacters?: number;
    showCounter?: boolean;
}
export declare const TextField: React.FC<TextFieldProps>;
type InputWrapperProps = Pick<TextFieldProps, 'label' | 'description' | 'errorMessage' | 'children'>;
export declare const InputWrapper: ({ label, description, errorMessage, children, }: InputWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const ssnRegEx: RegExp;
export {};
