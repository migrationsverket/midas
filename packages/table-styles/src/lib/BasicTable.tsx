import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { useState } from 'react'
import './tanstack-table.css'

interface Person {
  id: number
  name: string
  role: string
}

const data: Person[] = [
  { id: 1, name: 'Anna Andersson', role: 'Utvecklare' },
  { id: 2, name: 'Bo Berg', role: 'Designer' },
  { id: 3, name: 'Cecilia Carlsson', role: 'Produktägare' },
  { id: 4, name: 'David Dahl', role: 'Utvecklare' },
]

const columns: ColumnDef<Person>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Namn' },
  { accessorKey: 'role', header: 'Roll' },
]

/**
 * Minimal real TanStack Table render exercising every selector in
 * tanstack-table.css: striped/hover rows, a sortable header (with its
 * neutral sort icon), and a drag handle. Used by both the DOM-assertion
 * spec and the visual-regression story — this is the CSS contract's only
 * fixture, so keep both in sync with it rather than each other.
 */
export const BasicTable = () => {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  })

  return (
    <table className='midas-tanstack-table'>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                <div
                  className='sortable-header'
                  onClick={header.column.getToggleSortingHandler()}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      header.column.getToggleSortingHandler()?.(e)
                    }
                  }}
                  role='button'
                  tabIndex={0}
                  style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  <ArrowUpDown
                    size={14}
                    className='sort-icon-neutral'
                  />
                </div>
                <span
                  className='drag-handle'
                  aria-hidden
                >
                  ⠿
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
