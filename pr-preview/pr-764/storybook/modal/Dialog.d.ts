import { AriaDialogProps } from 'react-aria';
import { DialogTrigger } from 'react-aria-components';
import { AriaModalOverlayProps } from '@react-aria/overlays';
import * as React from 'react';
export interface DialogProps extends AriaDialogProps {
    /**
     * An optional title for the dialog. If omitted, please provide an aria-label for accessibility.
     */
    title?: React.ReactNode;
    children: React.ReactNode;
}
export { DialogTrigger };
export declare const Modal: React.FC<AriaModalOverlayProps & DialogProps>;
