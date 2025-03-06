import { default as React } from '../../../../node_modules/react';
import { ListBoxItemProps, SelectProps as AriaSelectProps, ValidationResult } from 'react-aria-components';
export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}
export declare function Select<T extends object>({ label, description, errorMessage, children, items, ...props }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Item(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
