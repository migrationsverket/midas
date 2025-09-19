import { AriaCheckboxGroupProps } from 'react-aria';
import { InfoPopoverProps } from '../label';
import * as React from 'react';
export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
    children: React.ReactNode;
    showSelectAll?: boolean;
    selectAllLabel?: string;
    errorPosition?: 'top' | 'bottom';
    popover?: InfoPopoverProps;
}
export declare function CheckboxGroup(props: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
