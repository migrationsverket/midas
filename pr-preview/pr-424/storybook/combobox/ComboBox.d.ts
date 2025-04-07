import { default as React } from '../../../../node_modules/react';
import { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps } from 'react-aria-components';
import { ErrorPosition, ErrorMessage } from '../field-error';
export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: ErrorMessage;
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
    placeholder?: string;
    errorPosition?: ErrorPosition;
}
export declare function ComboBox<T extends object>({ label, description, errorMessage, children, items, className, errorPosition, ...props }: ComboBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
