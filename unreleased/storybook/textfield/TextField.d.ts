import { TextFieldBaseProps } from './TextFieldBase';
import { InputProps } from './Input';
import * as React from 'react';
export type TextFieldProps = TextFieldBaseProps & InputProps;
export declare const TextField: React.ForwardRefExoticComponent<TextFieldBaseProps & InputProps & React.RefAttributes<HTMLInputElement>>;
