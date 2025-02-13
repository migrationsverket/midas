import { default as React } from '../../../../node_modules/react';
type SkeletonProps = {
    width?: string | number;
    height?: string | number;
    variant?: 'text' | 'circle' | 'rectangular' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    animation?: 'pulse' | 'wave';
};
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
