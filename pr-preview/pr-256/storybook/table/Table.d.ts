import { RowProps, TableHeaderProps, ColumnProps, TableProps as AriaTableProps, CellProps, TableBody } from 'react-aria-components';
export interface TableProps<T> extends AriaTableProps {
    narrow?: boolean;
    striped?: boolean;
    rows: T[];
}
export declare const Table: <T extends object>({ narrow, striped, ...rest }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const TableHeader: <T extends object>({ columns, children, }: TableHeaderProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Row: <T extends object>({ id, columns, children, ...rest }: RowProps<T>) => import("react/jsx-runtime").JSX.Element;
export declare const Column: ({ children, ...rest }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export declare const Cell: ({ ...rest }: CellProps) => import("react/jsx-runtime").JSX.Element;
export { TableBody };
