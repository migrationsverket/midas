import { FileTriggerProps as AriaFileTriggerProps } from 'react-aria-components';
import { InfoPopoverProps } from '../label';
import * as React from 'react';
export interface FileTriggerProps extends AriaFileTriggerProps {
    /** Label for the file upload button */
    label?: string;
    /**  Additional description field */
    description?: string;
    /**  Use DropZone version */
    dropzone?: boolean;
    /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
    popover?: InfoPopoverProps;
    className?: string;
}
export declare const FileUpload: React.FC<FileTriggerProps>;
