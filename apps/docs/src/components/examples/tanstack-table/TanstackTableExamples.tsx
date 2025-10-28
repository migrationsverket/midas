import React from 'react'
import '@midas-ds/table-styles/lib/tanstack-table.css'

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { makeData } from './makeData'
import { Button, TextField, Select, ListBoxItem } from '@midas-ds/components'
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from 'lucide-react'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: () => 'First Name',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  },
  {
    accessorFn: row => row.lastName,
    id: 'lastName',
    cell: info => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: props => props.column.id,
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
    footer: props => props.column.id,
  },
  {
    accessorKey: 'visits',
    header: () => <span>Visits</span>,
    footer: props => props.column.id,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    footer: props => props.column.id,
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    footer: props => props.column.id,
  },
]

export const PaginationExample = () => {
  const [data] = React.useState(() => makeData(1000))
  const [columns] = React.useState<typeof defaultColumns>(() => [
    ...defaultColumns,
  ])

  // Create the table and pass your options
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  // Manage your own state
  const [state, setState] = React.useState(table.initialState)

  // Override the state managers for the table to your own
  table.setOptions(prev => ({
    ...prev,
    state,
    onStateChange: setState,
    // These are just table options, so if things
    // need to change based on your state, you can
    // derive them here
  }))

  return (
    <div>
      <table className='table'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
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
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div />
      <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
        <Button
          onPress={() => table.setPageIndex(0)}
          isDisabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft />
        </Button>
        <Button
          onPress={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>
        <Button
          onPress={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </Button>
        <Button
          onPress={() => table.setPageIndex(table.getPageCount() - 1)}
          isDisabled={!table.getCanNextPage()}
        >
          <ChevronsRight />
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
        <TextField
          value={`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}
          isReadOnly
          label='Page'
        />
        <TextField
          label='Go to page'
          type='number'
          min={1}
          max={table.getPageCount()}
          value={(table.getState().pagination.pageIndex + 1).toString()}
          onChange={e => {
            const page = e ? Number(e) - 1 : 0
            table.setPageIndex(page)
          }}
        />
        <Select
          style={{ minWidth: '200px' }}
          label='Rows per page'
          value={table.getState().pagination.pageSize.toString()}
          onChange={key =>
            key !== null &&
            table.setPageSize(typeof key === 'string' ? parseInt(key) : key)
          }
          items={[10, 20, 30, 40, 50].map(pageSize => ({
            id: pageSize.toString(),
            name: `Show ${pageSize}`,
          }))}
        >
          {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
        </Select>
      </div>
    </div>
  )
}
