import { InputProps as AriaInputProps } from 'react-aria-components';
import * as React from 'react';
export interface InputProps extends AriaInputProps {
    /** If the component should use local props and ref instead of a parent context
     * @default false
     */
    skipContext?: boolean;
    ref?: React.Ref<HTMLInputElement>;
}
export declare const Input: React.FC<InputProps>;
