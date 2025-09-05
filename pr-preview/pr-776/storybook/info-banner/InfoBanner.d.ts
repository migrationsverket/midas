import { FeedbackStatus } from '../common/types';
import * as React from 'react';
export interface InfoBannerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).
     **/
    type: FeedbackStatus;
    /** The title of the banner. */
    title?: string;
    /** The message to be displayed in the banner. Can be a string or a React node. */
    message?: string | React.ReactNode;
    /** Additional elements to be displayed inside the banner. */
    children?: React.ReactNode;
    /**
     * If true, a dismiss button will be displayed in the top right corner.
     */
    isDismissable?: boolean;
    /**
     * The initial visibility of the banner when it is uncontrolled.
     */
    defaultOpen?: boolean;
    /**
     * Controls the visibility of the banner when it is controlled.
     */
    isOpen?: boolean;
    /**
     * Callback fired when the visibility of the banner changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
}
/**
 * Displays a static message as an inline banner
 */
export declare const InfoBanner: React.FC<InfoBannerProps>;
