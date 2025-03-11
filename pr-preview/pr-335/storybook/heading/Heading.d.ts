import { HeadingProps as AriaHeadingProps } from 'react-aria-components';
import * as React from 'react';
export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export interface HeadingProps extends Omit<AriaHeadingProps, 'level'> {
    children?: React.ReactNode;
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
    isExpressive?: boolean;
}
export declare const Heading: React.FC<HeadingProps>;
