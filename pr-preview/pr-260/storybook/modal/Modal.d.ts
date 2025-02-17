import * as React from 'react';
interface MidasModal extends React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
    /** Id for accessibility */
    id: string;
    /** Heading for the modal window */
    title: string;
    /** Whether the modal is open or not */
    isOpen: boolean;
    /** State handler to toggle isOpen */
    onOpenChange: (isOpen: boolean) => void;
}
export declare const Modal: React.FC<MidasModal>;
export {};
