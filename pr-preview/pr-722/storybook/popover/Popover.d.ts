import { PopoverProps } from 'react-aria-components';
import * as React from 'react';
interface MidasPopoverProps extends Omit<PopoverProps, 'children'> {
    children: React.ReactNode;
}
export declare function Popover({ children, className, offset, ...props }: MidasPopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
