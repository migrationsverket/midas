import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination } from '@midas-ds/components'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
} from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react'

interface CustomProps {
  rows?: number
}

type StoryProps = React.ComponentProps<typeof Pagination> & CustomProps

type Story = StoryObj<StoryProps>

type Person = {
  id: number
  name: string
  email: string
  age: number
}

const data: Person[] = Array.from({ length: 500 }, (_, i) => ({
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

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    pageSizeOptions: [10, 20, 30, 40, 50],
    rows: 500,
  },
  argTypes: {
    rows: {
      type: 'number',
      control: {
        max: 500,
        min: 0,
      },
    },
  },
  render: ({ rows, ...args }) => {
    const slicedData = useMemo(() => data.slice(0, rows), [rows])

    const table = useReactTable({
      data: slicedData,
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

    return (
      <Pagination
        {...table}
        {...table.getState().pagination}
        pageSizeOptions={args.pageSizeOptions}
      />
    )
  },
} satisfies Meta<StoryProps>

export const Primary: Story = {
  args: {
    rows: 100,
  },
}

export const ServerSide: Story = {
  render: args => {
    const [serverData, setServerData] = useState<Person[]>([])

    const [pagination, setPagination] = useState({
      pageIndex: 0,
      pageSize: 50,
    })

    useEffect(() => {
      const fetchData = async (firstItem: number, lastItem: number) => {
        const result: Person[] = await new Promise(res => {
          setTimeout(() => res(data.slice(firstItem, lastItem)), 200)
        })

        setServerData(result)
      }

      fetchData(
        pagination.pageIndex * pagination.pageSize,
        pagination.pageIndex * pagination.pageSize + pagination.pageSize,
      )
    }, [pagination])

    const table = useReactTable({
      data: serverData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      manualPagination: true,
      rowCount: data.length,
      onPaginationChange: setPagination,
      state: {
        pagination,
      },
    })

    return (
      <Pagination
        {...table}
        {...table.getState().pagination}
        pageSizeOptions={args.pageSizeOptions}
      />
    )
  },
}
