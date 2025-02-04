import { ValidationResult } from 'react-aria-components';
import { Key } from 'react-stately';
import * as React from 'react';
interface MidasMultiSelect {
    /** placeholder for multiselect */
    placeholder?: string;
    /** Label for multiselect */
    label: string;
    /** Description for multiselect */
    description?: string;
    /** Array of items that will be included in the list */
    items: {
        name: string;
        id: string;
    }[];
    /** Handler for when list of selected item is changed */
    onSelectionChange?: (selectedKeys: Set<Key>) => void;
    /** Control selected keys */
    selectedKeys?: string[];
    /** Set list of pre-selected keys, or 'all' */
    defaultSelectedKeys?: string[] | 'all';
    /** Set MultiSelect in disabled state */
    isDisabled?: boolean;
    /** Set MultiSelect in invalid state */
    isInvalid?: boolean;
    /** Set error message as string or as a validation function */
    errorMessage?: string | ((validation: ValidationResult) => string) | undefined;
}
export declare const MultiSelect: React.FC<MidasMultiSelect>;
export {};
