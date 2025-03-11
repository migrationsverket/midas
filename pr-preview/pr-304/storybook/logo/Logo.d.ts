import * as React from 'react';
export interface LogoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     *  Display logo in primary color, set to false for monochrome/dark version of the logo
     */
    primary?: boolean;
    /**
     * Specify logo size
     */
    size?: 'x-small' | 'small' | 'medium' | 'large';
    /** There must be whitespace around the logo. By disabling our built in padding you must add at least an equal amount yourself. */
    padding?: boolean;
}
export declare const Logo: React.FC<LogoProps>;
