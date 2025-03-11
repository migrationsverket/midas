import * as React from 'react';
type Variant = 'normal' | 'compact';
type Component = 'p' | 'span';
export interface BodyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
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
    isExternal?: boolean;
}
export declare const Body: React.FC<BodyProps>;
export {};
