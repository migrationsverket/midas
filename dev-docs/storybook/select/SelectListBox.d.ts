import { ListBoxOption } from '../list-box';
import { AriaListBoxOptions } from '@react-aria/listbox';
import { MultiSelectState } from './types';
interface ListBoxProps<T extends ListBoxOption> extends AriaListBoxOptions<T> {
    state: MultiSelectState<T>;
}
export declare const SelectListBox: <T extends ListBoxOption>({ state, ...rest }: ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
