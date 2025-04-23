import { TextFieldBaseProps } from './TextFieldBase';
import { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import * as React from 'react';
export interface TextAreaProps extends Omit<TextFieldBaseProps, 'children' | 'type'>, Omit<AriaTextAreaProps, 'autoComplete' | 'children' | 'defaultValue' | 'onBeforeInput' | 'onBlur' | 'onChange' | 'onCompositionEnd' | 'onCompositionStart' | 'onCompositionUpdate' | 'onCopy' | 'onCut' | 'onFocus' | 'onInput' | 'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onSelect' | 'slot' | 'spellCheck' | 'style' | 'type' | 'value'> {
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
