import { ColumnDef } from '@tanstack/react-table';
import '@midas-ds/table-styles/tanstack-table.css';
interface BasicTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData>[];
}
export declare function BasicTable<TData>({ data, columns }: BasicTableProps<TData>): import("react").JSX.Element;
export {};
//# sourceMappingURL=BasicTable.d.ts.map