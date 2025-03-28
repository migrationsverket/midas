import { TextFieldBaseProps } from './TextFieldBase';
import { InputProps } from '../input';
import * as React from 'react';
export declare const TextField: React.ForwardRefExoticComponent<TextFieldBaseProps & {
    className: InputProps["className"];
} & React.RefAttributes<HTMLInputElement>>;
