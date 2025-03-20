import { AriaDialogProps } from 'react-aria';
import { OverlayTriggerProps } from '@react-types/overlays';
import * as React from 'react';
interface DialogProps extends AriaDialogProps {
    /**
     * An optional title for the dialog. If omitted, please provide an aria-label for accessibility.
     */
    title?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Dialog: React.FC<DialogProps>;
export declare const ModalTrigger: React.FC<OverlayTriggerProps & {
    isDismissable?: boolean;
} & {
    children: (close: () => void) => JSX.Element;
    label?: string | undefined;
}>;
export {};
