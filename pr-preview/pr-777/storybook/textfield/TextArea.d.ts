import { TextFieldBaseProps } from './TextFieldBase';
import { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import * as React from 'react';
export interface TextAreaProps extends Omit<TextFieldBaseProps, 'children' | 'type' | 'pattern' | 'ref'> {
    className?: AriaTextAreaProps['className'];
    form?: string;
    ref?: React.RefObject<HTMLTextAreaElement | null>;
    rows?: number;
    wrap?: string;
}
export declare const TextArea: React.FC<TextAreaProps>;
