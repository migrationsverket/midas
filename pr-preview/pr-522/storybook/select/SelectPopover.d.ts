import * as React from 'react';
type PopoverProps = {
    children: React.ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    triggerRef: React.RefObject<HTMLButtonElement>;
};
export declare const SelectPopover: React.FC<PopoverProps>;
export {};
