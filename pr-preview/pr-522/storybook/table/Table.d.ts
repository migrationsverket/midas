import { RowProps, TableHeaderProps, ColumnProps, TableProps as AriaTableProps, CellProps, TableBody } from 'react-aria-components';
export interface TableProps extends AriaTableProps {
    /**
     *  @deprecated since v8.0.0 This variant will be replaced with a new scaling api accross all components.
     */
    narrow?: boolean;
    /**
     * Alternating colors for rows
     */
    striped?: boolean;
}
export declare const Table: ({ narrow, striped, className, ...rest }: TableProps) => import("react/jsx-runtime").JSX.Element;
export declare const TableHeader: <T extends object>({ columns, children, }: TableHeaderProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Row: <T extends object>({ id, columns, children, ...rest }: RowProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Column: ({ children, ...rest }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export declare const Cell: ({ ...rest }: CellProps) => import("react/jsx-runtime").JSX.Element;
export { TableBody };
