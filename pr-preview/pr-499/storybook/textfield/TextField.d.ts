import { TextFieldBaseProps } from './TextFieldBase';
import { InputProps } from './Input';
import * as React from 'react';
export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'>, Omit<InputProps, 'autoComplete' | 'children' | 'defaultValue' | 'onBeforeInput' | 'onBlur' | 'onChange' | 'onCompositionEnd' | 'onCompositionStart' | 'onCompositionUpdate' | 'onCopy' | 'onCut' | 'onFocus' | 'onInput' | 'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onSelect' | 'slot' | 'spellCheck' | 'style' | 'type' | 'value'> {
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
