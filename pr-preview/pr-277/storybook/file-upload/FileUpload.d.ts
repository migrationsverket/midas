import { FC, ReactNode } from '../../../../node_modules/react';
export interface FileTriggerProps {
    /** Label for the file upload button */
    label?: string;
    /**  Additional description field */
    description?: string;
    /**  Use DropZone version */
    dropzone?: boolean;
    /**
     * Specifies what mime type of files are allowed.
     */
    acceptedFileTypes?: Array<string>;
    /**
     * Whether multiple files can be selected.
     */
    allowsMultiple?: boolean;
    /**
     * Specifies the use of a media capture mechanism to capture the media on the spot.
     */
    defaultCamera?: 'user' | 'environment';
    /**
     * Handler when a user selects a file.
     */
    onSelect?: (files: FileList | null) => void;
    /**
     * The children of the component.
     */
    children?: ReactNode;
    /**
     * Enables the selection of directories instead of individual files.
     */
    acceptDirectory?: boolean;
}
export declare const FileUpload: FC<FileTriggerProps>;
