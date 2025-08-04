import { Key } from 'react-aria-components';
export type ListBoxItemElement = {
    children?: never;
    id: Key;
    name: string | React.ReactNode;
    /**
     * Textual representation of `name` in case it is not a string. Used for searching.
     */
    textValue?: string;
    /**
     * Additional properties.
     */
    [prop: string]: unknown;
};
export type ListBoxSectionElement = {
    children: ListBoxItemElement[];
    name: string;
    /**
     * Additional properties for backwards compatibility.
     */
    [prop: string]: unknown;
};
export type ListBoxOption = ListBoxItemElement | ListBoxSectionElement;
