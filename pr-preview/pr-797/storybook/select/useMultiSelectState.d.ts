import { MultiSelectState, MultiSelectStateProps } from './types';
import { ListBoxOption } from '../list-box';
export declare function useMultiSelectState<T extends ListBoxOption>(props: MultiSelectStateProps<T>): MultiSelectState<T>;
