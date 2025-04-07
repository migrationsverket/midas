import { default as React } from '../../../../node_modules/react';
import { CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components';
import { ErrorPosition, ErrorMessage } from '../field-error';
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
    children?: React.ReactNode;
    label?: string;
    description?: string;
    showSelectAll?: boolean;
    errorMessage?: ErrorMessage;
    errorPosition?: ErrorPosition;
}
export declare const CheckboxGroup: ({ label, description, errorMessage, showSelectAll, children, errorPosition, ...props }: CheckboxGroupProps) => import("react/jsx-runtime").JSX.Element;
