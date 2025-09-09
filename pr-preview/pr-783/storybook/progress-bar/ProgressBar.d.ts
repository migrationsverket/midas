import { LabelProps, ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';
import * as React from 'react';
export interface ProgressBarProps extends AriaProgressBarProps {
    /**
     * A visual label
     * */
    label?: string;
    /**
     * Props for the visual label and/or the value label
     * */
    labelProps?: LabelProps;
    /**
     * Show the value label
     */
    showValueLabel?: boolean;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
