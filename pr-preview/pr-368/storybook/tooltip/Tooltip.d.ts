import { TooltipProps, TooltipTriggerComponentProps } from 'react-aria-components';
import * as React from 'react';
interface MidasTooltipProps extends Omit<TooltipProps, 'children'> {
    children: React.ReactNode;
    placement?: 'top' | 'right' | 'bottom' | 'left';
}
export declare function Tooltip({ children, placement, className, ...props }: MidasTooltipProps): import("react/jsx-runtime").JSX.Element;
export declare function TooltipTrigger({ children, delay, ...props }: TooltipTriggerComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
