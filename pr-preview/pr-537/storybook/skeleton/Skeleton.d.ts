import * as React from 'react';
type SkeletonProps = {
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    variant?: 'circle' | 'rectangle'
    /**
     * @deprecated since v8.4.0 - Use 'rectangle' instead. This will be removed in future versions.
     */
     | 'rectangular';
    /**
     * @deprecated since v8.4.0 - Use 'isAnimated' instead. This will be removed in future versions.
     */
    animation?: 'wave' | false;
    isAnimated?: boolean;
};
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
