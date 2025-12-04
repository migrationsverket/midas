import { useState } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { Person, mockPersonData } from './mockData';
import '@midas-ds/table-styles/lib/tanstack-table.css';

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 60,
  },
  {
    accessorKey: 'firstName',
    header: 'Förnamn',
  },
  {
    accessorKey: 'lastName',
    header: 'Efternamn',
  },
  {
    accessorKey: 'email',
    header: 'E-post',
  },
  {
    accessorKey: 'department',
    header: 'Avdelning',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 100,
  },
];

export function SortingExample() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: mockPersonData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  const getSortIcon = (isSorted: false | 'asc' | 'desc') => {
    if (isSorted === 'asc') {
      return <ArrowUp size={14} />;
    }
    if (isSorted === 'desc') {
      return <ArrowDown size={14} />;
    }
    return <ArrowUpDown size={14} className="sort-icon-neutral" />;
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table className="midas-tanstack-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={
                        header.column.getCanSort() ? 'sortable-header' : ''
                      }
                      onClick={header.column.getToggleSortingHandler()}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          header.column.getToggleSortingHandler()?.(e);
                        }
                      }}
                      role={header.column.getCanSort() ? 'button' : undefined}
                      tabIndex={header.column.getCanSort() ? 0 : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() &&
                        getSortIcon(header.column.getIsSorted())}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
