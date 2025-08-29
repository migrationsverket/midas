import { TooltipProps, TooltipTriggerComponentProps } from 'react-aria-components';
import * as React from 'react';
export interface MidasTooltipProps extends Omit<TooltipProps, 'children'> {
    children: React.ReactNode;
}
export declare function Tooltip({ children, className, ...props }: MidasTooltipProps): import("react/jsx-runtime").JSX.Element;
export declare function TooltipTrigger({ children, delay, ...props }: TooltipTriggerComponentProps): import("react/jsx-runtime").JSX.Element;
