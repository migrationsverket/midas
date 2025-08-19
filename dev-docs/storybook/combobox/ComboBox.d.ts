import { default as React } from '../../../../node_modules/react';
import { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps, ValidationResult } from 'react-aria-components';
import { InfoPopoverProps } from '../label';
import { Size } from '../common/types';
import { ListBoxOption, ListBoxItemElement, ListBoxSectionElement } from '../list-box';
export interface ComboBoxProps<T extends ListBoxOption> extends Omit<AriaComboBoxProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
    placeholder?: string;
    errorPosition?: 'top' | 'bottom';
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     * */
    size?: Size;
    popover?: InfoPopoverProps;
}
export declare function ComboBox<T extends ListBoxOption>({ label, description, errorMessage, children, items, className, errorPosition, size, popover, ...props }: ComboBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxItem<T extends ListBoxItemElement>(props: ListBoxItemProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxSection<T extends ListBoxSectionElement>(props: T): import("react/jsx-runtime").JSX.Element;
