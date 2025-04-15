import { CollectionChildren } from '@react-types/shared';
import { useMultiSelectState } from './useMultiSelectState';
import * as React from 'react';
export type OptionItem = {
    children?: never;
    id: string;
    name: string | React.ReactNode;
    /** Textual representation of `name` in case it is not a string. Used for searching. */
    textValue?: string;
    /** Allow additional properties for an option. */
    [prop: string]: unknown;
};
type OptionSection = {
    children: OptionItem[];
    name: string;
};
export type Option = OptionItem | OptionSection;
export type SelectionMode = 'single' | 'multiple';
export type SelectProps = {
    /** Whether the element should receive focus on render. */
    autoFocus?: boolean;
    children: CollectionChildren<Option>;
    /** Sets the CSS [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
    className?: string;
    /** Sets the default open state of the field (uncontrolled). */
    defaultOpen?: boolean;
    /** The initial selected keys in the collection (uncontrolled). */
    defaultSelectedKeys?: Parameters<typeof useMultiSelectState>['0']['defaultSelectedKeys'];
    /** The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with. */
    disabledKeys?: Parameters<typeof useMultiSelectState>['0']['disabledKeys'];
    excludeFromTabOrder?: boolean;
    items: Option[];
    /** Whether the field can be emptied. */
    isClearable?: boolean;
    /** Whether the field is disabled. */
    isDisabled?: boolean;
    /** Whether to show a button to select all items. */
    isSelectableAll?: boolean;
    /** Sets the open state of the field (controlled). */
    isOpen?: boolean;
    /** The content to display as the label. */
    label: string;
    /** Optional description */
    description?: string;
    /** Placeholder value */
    placeholder?: string;
    /** Show selected items as tags below select */
    showTags?: boolean;
    /** Handler that is called when the select's open state changes. */
    onOpenChange?: Parameters<typeof useMultiSelectState>['0']['onOpenChange'];
    /** Handler that is called when the selection changes. */
    onSelectionChange?: Parameters<typeof useMultiSelectState>['0']['onSelectionChange'];
    /** The currently selected keys in the collection (controlled). */
    selectedKeys?: Parameters<typeof useMultiSelectState>['0']['selectedKeys'];
    /**
     * The type of selection that is allowed in the collection.
     * @default 'single'
     */
    selectionMode: SelectionMode;
    /** The selection is valid or not  */
    isInvalid?: boolean;
    /** Error message to be displayed in case of invalid state*/
    errorMessage?: string;
    /** Whether the field is required. */
    isRequired?: boolean;
    /** Name of the field, for uncontrolled use */
    name?: string;
    errorPosition?: 'top' | 'bottom';
};
export declare const SelectComponent: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLButtonElement>>;
export declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "children" | "items"> & {
    /** Item objects in the collection. */
    options: Option[];
} & React.RefAttributes<HTMLButtonElement>>;
export {};
