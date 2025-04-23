import { TextFieldBaseProps } from './TextFieldBase';
import { InputProps } from './Input';
import * as React from 'react';
export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'> {
    inputProps?: InputProps;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
