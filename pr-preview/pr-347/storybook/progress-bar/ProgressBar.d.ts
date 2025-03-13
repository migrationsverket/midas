import { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';
import * as React from 'react';
interface Step {
    id: number;
    title: string;
}
interface ProgressBarProps extends AriaProgressBarProps {
    steps: Step[];
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export {};
