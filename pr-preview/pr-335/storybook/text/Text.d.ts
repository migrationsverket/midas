import * as React from 'react';
type Variant = 'body-01' | 'body-02';
type Component = 'p' | 'span';
export interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    /**
     * The visual variant of the component
     */
    variant?: Variant;
    /**
     * The semantic element of the component
     */
    component?: Component;
    /**
     * Use the external/expressive look
     */
    isExpressive?: boolean;
}
export declare const Text: React.FC<TextProps>;
export {};
