import * as React from 'react';
export interface SkeletonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units
     */
    width?: React.CSSProperties['width'];
    /**
     * Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units
     */
    height?: React.CSSProperties['height'];
    /**
     * Circular or rectangular Skeleton component. When using circle, only `width` is allowed to control size.
     */
    variant?: 'circle' | 'rectangle';
    /**
     * Displays the skeleton component with a wave animation
     * @default true
     */
    isAnimated?: boolean;
    /**
     * If skeleton is on a layer01 background light-dark( #f2f2f2, #262626)
     * @default false
     */
    isOnLayer01?: boolean;
}
export declare const Skeleton: React.FC<SkeletonProps>;
