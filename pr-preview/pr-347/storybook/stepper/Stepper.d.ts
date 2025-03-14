import { ProgressBarProps } from 'react-aria-components';
import * as React from 'react';
interface Step {
    id: number;
    title: string;
}
interface StepperProps {
    steps: Step[];
    progressBarProps: ProgressBarProps;
}
export declare const Stepper: React.FC<StepperProps>;
export {};
