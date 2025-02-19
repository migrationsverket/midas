import { AriaDialogProps } from 'react-aria';
import { OverlayTriggerProps } from '@react-types/overlays';
import * as React from 'react';
interface DialogProps extends AriaDialogProps {
    title?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Dialog: React.FC<DialogProps>;
export declare const ModalTrigger: React.FC<OverlayTriggerProps & {
    isDismissable?: boolean;
} & {
    children: (close: () => void) => any;
    label?: string | undefined;
}>;
export {};
