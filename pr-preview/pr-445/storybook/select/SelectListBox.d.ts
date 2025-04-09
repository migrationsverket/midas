import { MultiSelectState } from './useMultiSelectState';
import { AriaListBoxOptions } from '@react-aria/listbox';
import * as React from 'react';
interface ListBoxProps<T> extends AriaListBoxOptions<T> {
    listBoxRef?: React.RefObject<HTMLUListElement>;
    state: MultiSelectState<T>;
}
export declare const SelectListBox: <T>(props: ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
