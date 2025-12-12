import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination } from '@midas-ds/components'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
} from '@tanstack/react-table'

type Story = StoryObj<typeof Pagination>

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

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    pageSizeOptions: [10, 20, 30, 40, 50],
  },
  render: args => {
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

    return (
      <Pagination
        {...table}
        {...table.getState().pagination}
        pageSizeOptions={args.pageSizeOptions}
      />
    )
  },
} satisfies Meta<typeof Pagination>

export const Primary: Story = {}
