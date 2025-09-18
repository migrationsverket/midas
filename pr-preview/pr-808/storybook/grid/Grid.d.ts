import * as React from 'react';
export interface GridProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    /** A contained grid has a max-width and centered positioning on large screens. */
    isContained?: boolean;
    /** Removes outer margins. */
    removeMargins?: boolean;
}
/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */
export declare const Grid: React.FC<GridProps>;
