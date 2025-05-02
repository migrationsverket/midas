import * as React from 'react';
export interface InfoBannerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     *  Specify what state the InfoBanner represents
     **/
    type: 'success' | 'info' | 'important' | 'warning';
    /** Specify the title */
    title?: string;
    /** Specify the message. Element or string */
    message?: string | React.ReactNode;
    /** Additional elements displayed inside the banner */
    children?: React.ReactNode;
    /**
     *  Specify if the InfoBanner should have a dismiss button in the top right corner
     */
    dismissable?: boolean;
}
/**
 * Displays a static message as an inline banner
 */
export declare const InfoBanner: React.FC<InfoBannerProps>;
