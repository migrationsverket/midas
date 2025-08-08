import { RowProps, TableHeaderProps, ColumnProps, TableProps as AriaTableProps, CellProps, TableBody } from 'react-aria-components';
import { Size } from '../common/types';
export interface TableProps extends AriaTableProps {
    /**
     *  A more compact version of the table
     *  @deprecated since v10.1.1, please use the `size` prop instead.
     */
    narrow?: boolean;
    /** Row height (large: 48px, medium: 40px)
     *  @default 'large'
     * */
    size?: Size;
    /**
     * Alternating colors for rows
     */
    striped?: boolean;
}
export declare const Table: ({ narrow, size, striped, className, ...rest }: TableProps) => import("react/jsx-runtime").JSX.Element;
export declare const TableHeader: <T extends object>({ columns, children, }: TableHeaderProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Row: <T extends object>({ id, columns, children, ...rest }: RowProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Column: ({ children, ...rest }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export declare const Cell: ({ ...rest }: CellProps) => import("react/jsx-runtime").JSX.Element;
export { TableBody };
