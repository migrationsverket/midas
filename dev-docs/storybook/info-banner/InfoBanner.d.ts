import { FeedbackStatus } from '../common/types';
import * as React from 'react';
export interface InfoBannerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).
     **/
    type: FeedbackStatus;
    /** Specify the title */
    title?: string;
    /** Specify the message. Element or string */
    message?: string | React.ReactNode;
    /** Additional elements displayed inside the banner */
    children?: React.ReactNode;
    /**
     *  Specify if the InfoBanner should have a dismiss button in the top right corner
     *  @deprecated since 10.0.1. Please use `isDismissable` instead
     */
    dismissable?: boolean;
    /**
     *  Specify if the InfoBanner should have a dismiss button in the top right corner
     */
    isDismissable?: boolean;
}
/**
 * Displays a static message as an inline banner
 */
export declare const InfoBanner: React.FC<InfoBannerProps>;
