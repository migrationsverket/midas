import { MenuTriggerState } from '@react-stately/menu';
import { Key } from 'react-aria';
import { MultiSelectListState } from './useMultiSelectListState';
import { OverlayTriggerProps } from '@react-types/overlays';
import { AsyncLoadable, CollectionBase, FocusableProps, InputBase, LabelableProps, MultipleSelection, TextInputBase, Validation } from '@react-types/shared';
/** Added this for a better output, will see how this plays out */
interface ArraySelection extends Omit<MultipleSelection, 'onSelectionChange'> {
    onSelectionChange?: (value: Selection | Key[]) => void;
}
export interface MultiSelectProps<T> extends CollectionBase<T>, AsyncLoadable, Omit<InputBase, 'isReadOnly'>, Validation, LabelableProps, TextInputBase, ArraySelection, FocusableProps, OverlayTriggerProps {
    /**
     * Whether the menu should automatically flip direction when space is limited.
     * @default true
     */
    shouldFlip?: boolean;
}
export interface MultiSelectState<T> extends MultiSelectListState<T>, MenuTriggerState {
    /** Whether the select is currently focused. */
    isFocused: boolean;
    /** Sets whether the select is focused. */
    setFocused(isFocused: boolean): void;
}
export declare function useMultiSelectState<T extends object>(props: MultiSelectProps<T>): MultiSelectState<T>;
export {};
