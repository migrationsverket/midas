import { TextFieldBaseProps } from './TextFieldBase';
import { InputProps } from './Input';
import * as React from 'react';
export type TextFieldProps = Omit<TextFieldBaseProps, 'children'> & Pick<InputProps, 'className' | 'list'>;
export declare const TextField: React.ForwardRefExoticComponent<Omit<TextFieldBaseProps, "children"> & Pick<InputProps, "className" | "list"> & React.RefAttributes<HTMLInputElement>>;
