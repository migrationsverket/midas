import { FocusableElement, RefObject } from '@react-types/shared';
import { default as React, ReactNode } from '../../../../node_modules/react';
import { MultiSelectState } from './types';
import { ListBoxOption } from '../list-box';
export interface AriaHiddenMultiSelectProps {
    /**
     * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
     */
    autoComplete?: string;
    /** The text label for the select. */
    label?: ReactNode;
    /** HTML form input name. */
    name?: string;
    /** Sets the disabled state of the select and input. */
    isDisabled?: boolean;
    /** Sets the required state of the select and input. */
    isRequired?: boolean;
}
export interface HiddenMultiSelectProps<T extends ListBoxOption> extends AriaHiddenMultiSelectProps {
    /** State for the select. */
    state: MultiSelectState<T>;
    /** A ref to the trigger element. */
    triggerRef: RefObject<FocusableElement | null>;
}
interface AriaHiddenMultiSelectOptions extends AriaHiddenMultiSelectProps {
    /** A ref to the hidden `<select>` element. */
    selectRef?: RefObject<HTMLSelectElement | null>;
}
interface HiddenMultiSelectAria {
    /** Props for the container element. */
    containerProps: React.HTMLAttributes<FocusableElement>;
    /** Props for the hidden input element. */
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
    /** Props for the hidden select element. */
    selectProps: React.SelectHTMLAttributes<HTMLSelectElement>;
}
/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */
export declare function useHiddenMultiSelect<T extends ListBoxOption>({ autoComplete, name, isDisabled, isRequired, selectRef, }: AriaHiddenMultiSelectOptions, state: MultiSelectState<T>, triggerRef: RefObject<FocusableElement | null>): HiddenMultiSelectAria;
/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */
export declare function HiddenMultiSelect<T extends ListBoxOption>(props: HiddenMultiSelectProps<T>): import("react/jsx-runtime").JSX.Element | null;
export {};
