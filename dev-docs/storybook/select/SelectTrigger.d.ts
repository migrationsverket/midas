import { default as React } from '../../../../node_modules/react';
import { AriaButtonProps } from 'react-aria';
import { SelectProps, MultiSelectState } from './types';
import { ListBoxOption } from '../list-box';
interface SelectTriggerProps extends Omit<SelectProps, 'children'>, AriaButtonProps<'button'> {
    state: MultiSelectState<ListBoxOption>;
    triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
}
export declare const SelectTrigger: React.FC<SelectTriggerProps>;
export {};
