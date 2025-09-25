import { ColumnSize, OffsetSize } from '../common/types';
import * as React from 'react';
export interface GridItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    /** Column size and behaviour across different breakpoints   */
    size?: ColumnSize | {
        xs?: ColumnSize;
        sm?: ColumnSize;
        md?: ColumnSize;
        lg?: ColumnSize;
        xl?: ColumnSize;
    };
    /** Additional spacing between columns */
    offset?: OffsetSize | {
        xs?: OffsetSize;
        sm?: OffsetSize;
        md?: OffsetSize;
        lg?: OffsetSize;
        xl?: OffsetSize;
    };
}
/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */
export declare const GridItem: React.FC<GridItemProps>;
