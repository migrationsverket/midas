import { RowProps, TableHeaderProps, ColumnProps, TableProps as AriaTableProps, CellProps, TableBodyProps } from 'react-aria-components';
import { Size } from '../common/types';
export interface TableProps extends AriaTableProps {
    /** Row height (large: 48px, medium: 40px)
     *  @default 'large'
     * */
    size?: Size;
    /**
     * Alternating colors for rows
     */
    striped?: boolean;
}
export declare const Table: ({ size, striped, className, ...rest }: TableProps) => import("react/jsx-runtime").JSX.Element;
export declare const TableHeader: <T extends object>({ columns, children, className, }: TableHeaderProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Row: <T extends object>({ id, columns, children, className, ...rest }: RowProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Column: ({ children, className, ...rest }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export declare const Cell: ({ className, ...rest }: CellProps) => import("react/jsx-runtime").JSX.Element;
export declare const TableBody: <T extends object>({ className, ...rest }: TableBodyProps<T>) => import("react/jsx-runtime").JSX.Element;
