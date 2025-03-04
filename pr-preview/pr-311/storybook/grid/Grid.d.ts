import * as React from 'react';
interface GridProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    /** Removes outer margins for nested use. First Flex on a page should have outer margins. */
    fluid?: boolean;
}
/**
 * Grid based on display: grid;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 */
export declare const Grid: React.FC<GridProps>;
export {};
