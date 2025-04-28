import { TextFieldBaseProps } from './TextFieldBase';
import { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import * as React from 'react';
export interface TextAreaProps extends Omit<TextFieldBaseProps, 'children' | 'type' | 'pattern'> {
    className?: AriaTextAreaProps['className'];
    dir?: string;
    dirName?: string;
    form?: string;
    rows?: number;
    wrap?: string;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
