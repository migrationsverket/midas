import { TextFieldProps, ValidationResult } from 'react-aria-components';
import { Size } from '../common/types';
import { InfoPopoverProps } from '../label';
import * as React from 'react';
export interface TextFieldBaseProps extends Omit<TextFieldProps, 'className'> {
    children?: React.ReactNode;
    /** Specify label displayed above the TextField*/
    label?: string;
    /** Specify description displayed below the label */
    description?: string;
    /** Custom error messages */
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    /**
     * Whether to show the character counter or not
     * @default
     * false
     */
    showCounter?: boolean;
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     * */
    size?: Size;
    popover?: InfoPopoverProps;
    ref?: React.RefObject<HTMLDivElement | null>;
}
export declare const TextFieldBase: React.FC<TextFieldBaseProps>;
