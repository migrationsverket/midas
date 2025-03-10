import { default as React } from '../../../../node_modules/react';
import { CheckboxGroupProps as AriaCheckboxGroupProps, ValidationResult } from 'react-aria-components';
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
    children?: React.ReactNode;
    label?: string;
    description?: string;
    showSelectAll?: boolean;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare const CheckboxGroup: ({ label, description, errorMessage, showSelectAll, children, ...props }: CheckboxGroupProps) => import("react/jsx-runtime").JSX.Element;
