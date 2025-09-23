import { TextFieldBaseProps } from './TextFieldBase';
import { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import * as React from 'react';
export type TextAreaProps = TextFieldBaseProps & AriaTextAreaProps;
export declare const TextArea: React.ForwardRefExoticComponent<TextFieldBaseProps & AriaTextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
