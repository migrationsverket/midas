import { default as React } from '../../../../node_modules/react';
type SkeletonProps = {
    width?: string | number;
    height?: string | number;
    variant?: 'circle' | 'rectangular';
    animation?: 'wave';
};
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
