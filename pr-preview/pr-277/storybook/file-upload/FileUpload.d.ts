import { FileTriggerProps as AriaFileTriggerProps } from 'react-aria-components';
import { default as React } from '../../../../node_modules/react';
export interface FileTriggerProps extends AriaFileTriggerProps {
    /** Label for the file upload button */
    label?: string;
    /**  Additional description field */
    description?: string;
    /**  Use DropZone version */
    dropzone?: boolean;
}
export declare const FileUpload: React.FC<FileTriggerProps>;
