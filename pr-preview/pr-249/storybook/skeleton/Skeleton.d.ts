import { default as React } from '../../../../node_modules/react';
type SkeletonProps = {
    width?: string | number;
    height?: string | number;
    variant?: 'text' | 'circle' | 'rectangular';
    animation?: 'pulse' | 'wave';
};
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
