import { AriaDialogProps } from 'react-aria';
import { DialogTrigger } from 'react-aria-components';
import { AriaModalOverlayProps } from '@react-aria/overlays';
import { OverlayTriggerProps } from '@react-types/overlays';
import * as React from 'react';
interface DialogProps extends AriaDialogProps {
    /**
     * An optional title for the dialog. If omitted, please provide an aria-label for accessibility.
     */
    title?: React.ReactNode;
    children: React.ReactNode;
}
/** @deprecated since v6.0.0 use Modal instead.
 * See docs {@link https://designsystem.migrationsverket.se/|Midas}
 */
export declare const Dialog: React.FC<DialogProps>;
/** @deprecated since v6.0.0, use DialogTrigger instead.
 * See docs {@link https://designsystem.migrationsverket.se/|Midas}
 */
export declare const ModalTrigger: React.FC<OverlayTriggerProps & {
    isDismissable?: boolean;
} & {
    children: (close: () => void) => JSX.Element;
    label?: string | undefined;
}>;
export { DialogTrigger };
export declare const Modal: React.FC<AriaModalOverlayProps & DialogProps>;
