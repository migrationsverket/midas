import { MultiSelectState, SelectProps } from './types';
import { ListBoxOption } from '../list-box';
import * as React from 'react';
interface MultiSelectValueTagProps extends SelectProps {
    state: MultiSelectState<ListBoxOption>;
    parentWidth: number;
    onClear: () => void;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
}
export declare const MultiSelectValueTag: React.FC<MultiSelectValueTagProps>;
export {};
