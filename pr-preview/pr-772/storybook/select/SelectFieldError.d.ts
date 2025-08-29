import { ListBoxOption } from '../list-box';
import { MultiSelectState, SelectProps } from './types';
import * as React from 'react';
interface SelectFieldErrorProps extends SelectProps {
    state: MultiSelectState<ListBoxOption>;
}
export declare const SelectFieldError: React.FC<SelectFieldErrorProps>;
export {};
