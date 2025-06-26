import { default as React } from '../../../../node_modules/react';
/** Display an info-icon with popover next to the label to further explain what the user should enter in the field */
export interface InfoPopoverProps {
    /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
    children: React.ReactNode;
    /** An aria-label for the info icon button trigger */
    'aria-label'?: string;
}
export declare const InfoPopover: React.FC<InfoPopoverProps>;
