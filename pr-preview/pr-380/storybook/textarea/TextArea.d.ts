import { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import * as React from 'react';
export interface TextAreaProps extends AriaTextAreaProps {
    /**
     * Whether to show the character counter or not
     * @default
     * false
     */
    showCounter?: boolean;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
