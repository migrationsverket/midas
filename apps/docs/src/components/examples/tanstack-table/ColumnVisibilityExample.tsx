import { useState } from 'react'
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table'
import { Checkbox, Popover, Button, DialogTrigger } from '@midas-ds/components'
import { Settings } from 'lucide-react'
import { type Employee, employees } from '@midas-ds/test-utils'
import '@midas-ds/table-styles/lib/tanstack-table.css'

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
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
  },
]

export function ColumnVisibilityExample() {
  const [columnVisibility, setColumnVisibility] = useState({})

  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
  })

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {table.getAllLeafColumns().map(column => (
          <Checkbox
            key={column.id}
            isSelected={column.getIsVisible()}
            onChange={isSelected => column.toggleVisibility(isSelected)}
          >
            {typeof column.columnDef.header === 'string'
              ? column.columnDef.header
              : column.id}
          </Checkbox>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          marginBottom: '1rem',
        }}
      ></div>

      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table className='midas-tanstack-table'>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
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
        </table>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Kolumnsynlighet kan också läggas i en popover:
          <DialogTrigger>
            <Button variant='icon'>
              <Settings />
            </Button>
            <Popover>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <strong>Visa kolumner:</strong>
                {table.getAllLeafColumns().map(column => (
                  <Checkbox
                    key={column.id}
                    isSelected={column.getIsVisible()}
                    onChange={isSelected => column.toggleVisibility(isSelected)}
                  >
                    {typeof column.columnDef.header === 'string'
                      ? column.columnDef.header
                      : column.id}
                  </Checkbox>
                ))}
              </div>
            </Popover>
          </DialogTrigger>
        </div>
      </div>
    </div>
  )
}
