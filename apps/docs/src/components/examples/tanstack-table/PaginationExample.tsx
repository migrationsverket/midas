import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table'
import { Pagination } from '@midas-ds/components'
import '@midas-ds/table-styles/lib/tanstack-table.css'

type Person = {
  id: number
  name: string
  email: string
  age: number
}

const data: Person[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  email: `person${i + 1}@example.com`,
  age: 20 + (i % 50),
}))

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
]

export function PaginationExample() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  })

  const {
    pagination: { pageIndex, pageSize },
  } = table.getState()

  return (
    <div style={{ marginBottom: '1rem' }}>
      <table
        className='midas-tanstack-table'
        style={{ marginBottom: 0 }}
      >
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  <div className='headerCell'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </div>
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
      <Pagination
        getCanNextPage={table.getCanNextPage}
        getCanPreviousPage={table.getCanPreviousPage}
        getPageCount={table.getPageCount}
        getRowCount={table.getRowCount}
        nextPage={table.nextPage}
        pageIndex={pageIndex}
        pageSize={pageSize}
        previousPage={table.previousPage}
        setPageIndex={table.setPageIndex}
        setPageSize={table.setPageSize}
      />
    </div>
  )
}
