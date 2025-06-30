import { MultiSelectListProps, MultiSelectListState } from './types';
import { ListBoxOption } from '../list-box';
export declare function useMultiSelectListState<T extends ListBoxOption>(props: MultiSelectListProps<T>): MultiSelectListState<T>;
