import { TextFieldBaseProps } from './TextFieldBase';
import { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import * as React from 'react';
export type TextAreaProps = Omit<TextFieldBaseProps, 'children' | 'type' | 'pattern'> & Pick<AriaTextAreaProps, 'className' | 'cols' | 'dirName' | 'rows' | 'wrap'>;
export declare const TextArea: React.ForwardRefExoticComponent<Omit<TextFieldBaseProps, "children" | "type" | "pattern"> & Pick<AriaTextAreaProps, "className" | "cols" | "dirName" | "wrap" | "rows"> & React.RefAttributes<HTMLTextAreaElement>>;
