
import React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  useReactTable,
  ColumnOrderState,
} from '@tanstack/react-table'
import { faker } from '@faker-js/faker'
import styles from './app.module.css'
import { Button, TextField, Select, Checkbox } from '@midas-ds/components'
import { ArrowUp, ArrowDown, ArrowDownUp, ChevronRight, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: 'relationship' | 'complicated' | 'single'
  progress: number
  subRows?: Person[]
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person['status']>([
      'relationship',
      'complicated',
      'single',
    ])[0]!,
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

const defaultData = makeData(100, 3);

const pageSizeOptions = [10, 20, 30, 40, 50].map(pageSize => ({
  id: pageSize,
  name: `Show ${pageSize}`,
  textValue: pageSize.toString(),
}));

const reorderColumn = (
  draggedColumnId: string,
  targetColumnId: string,
  columnOrder: string[]
): ColumnOrderState => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0] as string
  )
  return [...columnOrder]
}

const DraggableColumnHeader = ({ header, table }) => {
  const { getState, setColumnOrder } = table
  const { columnOrder } = getState()
  const { column } = header

  const handleDragStart = (e: React.DragEvent<HTMLTableHeaderCellElement>) => {
    e.dataTransfer.setData('columnId', column.id)
  }

  const handleDragOver = (e: React.DragEvent<HTMLTableHeaderCellElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLTableHeaderCellElement>) => {
    const draggedColumnId = e.dataTransfer.getData('columnId')
    const targetColumnId = column.id
    setColumnOrder(reorderColumn(draggedColumnId, targetColumnId, columnOrder))
  }

  return (
    <th
      key={header.id}
      colSpan={header.colSpan}
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {header.isPlaceholder ? null : (
        <div
          className={clsx(
            styles.headerCell,
            header.column.getCanSort() && 'cursor-pointer select-none'
          )}
          onClick={header.column.getToggleSortingHandler()}
        >
          {flexRender(
            header.column.columnDef.header,
            header.getContext()
          )}
          {{
            asc: <ArrowUp className="inline-block ml-4" size={16} />,
            desc: <ArrowDown className="inline-block ml-4" size={16} />,
          }[header.column.getIsSorted() as string] ?? (header.column.getCanSort() ? <ArrowDownUp className="inline-block ml-4" size={16} /> : null)}
        </div>
      )}
    </th>
  )
}

export default function App() {
  const [data, setData] = React.useState(() => [...defaultData])
  const [columns] = React.useState<typeof defaultColumns>(() => [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          aria-label="Select all rows"
          isSelected={table.getIsAllRowsSelected()}
          isIndeterminate={table.getIsSomeRowsSelected()}
          onChange={table.toggleAllRowsSelected}
        />
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <Checkbox
            aria-label="Select row"
            isSelected={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            isIndeterminate={row.getIsSomeSelected()}
            onChange={row.toggleSelected}
          />
        </div>
      ),
    },
    {
      id: 'expander',
      header: () => null,
      cell: ({ row }) => {
        return row.getCanExpand() ? (
          <Button
            variant="tertiary"
            aria-label={row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
            onClick={row.getToggleExpandedHandler()}
          >
            {row.getIsExpanded() ? <ChevronDown /> : <ChevronRight />}
          </Button>
        ) : null
      },
    },
    {
      accessorKey: 'firstName',
      header: 'First Name',
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
    },
    {
      accessorKey: 'age',
      header: 'Age',
    },
    {
      accessorKey: 'visits',
      header: 'Visits',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'progress',
      header: 'Profile Progress',
    },
  ])
  const [sorting, setSorting] = React.useState([])
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})
  const [expanded, setExpanded] = React.useState({})
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>(
    columns.map(column => column.id as string)
  )

  const rerender = () => {
    setData(() => makeData(100, 3))
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      rowSelection,
      expanded,
      columnOrder,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onExpandedChange: setExpanded,
    onColumnOrderChange: setColumnOrder,
    getSubRows: row => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  })

  return (
    <div className="p-2">
      <div>
        <TextField
          aria-label="Search all columns"
          value={globalFilter ?? ''}
          onChange={setGlobalFilter}
          placeholder="Search all columns..."
        />
      </div>
      <div className="h-2" />
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <DraggableColumnHeader key={header.id} header={header} table={table} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={styles.row}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <Button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </Button>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </Button>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </Button>
        <Button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </Button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <div className={styles.inputContainer}>
          <span className="flex items-center gap-1">
            | Go to page:
            <TextField
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={value => {
                const page = value ? Number(value) - 1 : 0
                table.setPageIndex(page)
              }}
            />
          </span>
        </div>
        <div className={styles.inputContainer}>
          <Select
            options={pageSizeOptions}
            selectedKey={table.getState().pagination.pageSize.toString()}
            onSelectionChange={keys => {
              const selectedKey = Array.from(keys)[0];
              table.setPageSize(Number(selectedKey));
            }}
          />
        </div>
      </div>
      <div>
        <Button onClick={() => rerender()}>
          Regenerate Data
        </Button>
      </div>
      <div>
        {Object.keys(rowSelection).length} of{' '}
        {table.getPreFilteredRowModel().rows.length} Total Rows Selected
      </div>
    </div>
  )
}
