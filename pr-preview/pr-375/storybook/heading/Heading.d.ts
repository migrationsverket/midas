import { HeadingProps as AriaHeadingProps } from 'react-aria-components';
import * as React from 'react';
export type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps extends AriaHeadingProps {
    /**
     * Override the semantic element of the component but keep the look of the level property
     */
    elementType?: ElementType;
    /**
     * Use the external/expressive look
     */
    isExpressive?: boolean;
}
export declare const Heading: React.FC<HeadingProps>;
