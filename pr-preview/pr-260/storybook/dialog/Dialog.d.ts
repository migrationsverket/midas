import { AriaDialogProps } from 'react-aria';
import { default as React } from '../../../../node_modules/react';
interface DialogProps extends AriaDialogProps {
    title?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Dialog: React.FC<DialogProps>;
export declare const ModalTrigger: React.FC<any>;
export {};
