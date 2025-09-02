import { RefObject } from '../../../../node_modules/react';
import { MultiSelectDOMProps, MultiSelectProps, MultiSelectState } from './types';
import { ListBoxOption } from '../list-box';
export declare function useMultiSelect<T extends ListBoxOption>(props: MultiSelectProps<T>, state: MultiSelectState<T>, ref: RefObject<HTMLElement | null>): MultiSelectDOMProps<T>;
