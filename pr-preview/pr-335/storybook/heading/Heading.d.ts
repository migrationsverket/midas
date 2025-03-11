import * as React from 'react';
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: React.ReactNode;
    /**
     * The heading element to render
     */
    variant?: Variant;
    /**
     * Override the semantic element of the component but keep the look of the variant property
     */
    component?: Variant;
    /**
     * Use the external/expressive look
     */
    isExternal?: boolean;
}
export declare const isSemanticElement: ({ element, component, variant, }: Pick<HeadingProps, "variant" | "component"> & {
    element: Variant;
}) => boolean;
export declare const Heading: React.FC<HeadingProps>;
export {};
