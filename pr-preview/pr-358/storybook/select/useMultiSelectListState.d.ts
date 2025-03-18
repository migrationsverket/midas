import { ListState } from '@react-stately/list';
import { Key, CollectionBase, MultipleSelection, Node } from '@react-types/shared';
export interface MultiSelectListProps<T> extends CollectionBase<T>, MultipleSelection {
}
export interface MultiSelectListState<T> extends ListState<T> {
    /** The keys for the currently selected items. */
    selectedKeys: Set<Key>;
    /** Sets the selected keys. */
    setSelectedKeys(keys: Iterable<Key>): void;
    /** The value of the currently selected items. */
    selectedItems: Node<T>[] | null;
    /** The type of selection. */
    selectionMode: MultipleSelection['selectionMode'];
}
export declare function useMultiSelectListState<T extends object>(props: MultiSelectListProps<T>): MultiSelectListState<T>;
