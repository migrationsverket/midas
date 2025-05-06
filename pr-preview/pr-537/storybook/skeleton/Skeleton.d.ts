import * as React from 'react';
type SkeletonProps = {
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    variant?: 'circle' | 'rectangle'
    /**
     * @deprecated since v8.2.0 - Use 'rectangle' instead. This will be removed in future versions.
     */
     | 'rectangular';
    animation?: 'wave' | false;
};
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
