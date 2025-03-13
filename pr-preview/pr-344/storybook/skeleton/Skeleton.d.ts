import * as React from 'react';
type SkeletonProps = {
    width?: string | number;
    height?: string | number;
    variant?: 'circle' | 'rectangular';
    animation?: 'wave' | false;
};
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
