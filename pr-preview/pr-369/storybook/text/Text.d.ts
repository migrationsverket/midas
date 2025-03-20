import { TextProps as AriaTextProps } from 'react-aria-components';
import * as React from 'react';
export type TextVariant = 'body-01' | 'body-02';
export interface TextProps extends AriaTextProps {
    /**
     * The visual variant of the component
     */
    variant?: TextVariant;
    /**
     * Use the external/expressive look
     */
    isExpressive?: boolean;
}
export declare const Text: React.FC<TextProps>;
