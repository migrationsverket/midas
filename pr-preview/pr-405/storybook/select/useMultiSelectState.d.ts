import { MenuTriggerState } from '@react-stately/menu';
import { MultiSelectListState } from './useMultiSelectListState';
import { OverlayTriggerProps } from '@react-types/overlays';
import { AsyncLoadable, CollectionBase, FocusableProps, InputBase, LabelableProps, MultipleSelection, TextInputBase, Validation } from '@react-types/shared';
import { FormValidationState } from '@react-stately/form';
export interface MultiSelectProps<T> extends CollectionBase<T>, AsyncLoadable, Omit<InputBase, 'isReadOnly'>, Validation, LabelableProps, TextInputBase, MultipleSelection, FocusableProps, OverlayTriggerProps {
    /**
     * Whether the menu should automatically flip direction when space is limited.
     * @default true
     */
    shouldFlip?: boolean;
}
export interface MultiSelectState<T> extends MultiSelectListState<T>, MenuTriggerState, FormValidationState {
    /** Whether the select is currently focused. */
    isFocused: boolean;
    /** Sets whether the select is focused. */
    setFocused(isFocused: boolean): void;
}
export declare function useMultiSelectState<T extends object>(props: MultiSelectProps<T>): MultiSelectState<T>;
