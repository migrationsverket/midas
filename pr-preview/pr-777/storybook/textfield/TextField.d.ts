import { TextFieldBaseProps } from './TextFieldBase';
import { InputProps } from './Input';
import * as React from 'react';
export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'> {
    className?: InputProps['className'];
    form?: string;
    list?: string;
    ref?: React.RefObject<HTMLInputElement | null>;
}
export declare const TextField: React.FC<TextFieldProps>;
