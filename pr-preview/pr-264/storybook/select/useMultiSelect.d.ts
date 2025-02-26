import { AriaListBoxOptions } from 'react-aria';
import { HTMLAttributes, RefObject } from '../../../../node_modules/react';
import { MultiSelectProps as MultiSelectStateProps, MultiSelectState } from './useMultiSelectState';
import { AriaButtonProps } from '@react-types/button';
import { AriaSelectProps } from '@react-types/select';
type MultiSelectProps<T> = Omit<AriaSelectProps<T>, 'onSelectionChange'> & {
    disallowEmptySelection?: boolean;
    onSelectionChange?: MultiSelectStateProps<T>['onSelectionChange'];
};
interface MultiSelectAria<T> {
    /** Props for the label element. */
    labelProps: HTMLAttributes<HTMLElement>;
    /** Props for the popup trigger element. */
    triggerProps: AriaButtonProps;
    /** Props for the element representing the selected value. */
    valueProps: HTMLAttributes<HTMLElement>;
    /** Props for the popup. */
    menuProps: AriaListBoxOptions<T>;
}
export declare function useMultiSelect<T>(props: MultiSelectProps<T>, state: MultiSelectState<T>, ref: RefObject<HTMLElement>): MultiSelectAria<T>;
export {};
