import { TextFieldBaseProps } from './TextFieldBase';
import { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import * as React from 'react';
export type TextAreaProps = Omit<TextFieldBaseProps, 'type' | 'pattern'> & AriaTextAreaProps;
export declare const TextArea: React.ForwardRefExoticComponent<Omit<TextFieldBaseProps, "type" | "pattern"> & AriaTextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
