/**
 * Mirrors Pagination.stories.tsx, but against a real TanStack Table v9
 * instance (aliased as `tanstack-table-v9` in package.json — see the root
 * README for why) instead of v8. Exists to prove `Pagination` still works
 * against v9's table-level API (table-styles' peerDependencies now spans
 * `^8.21.3 || ^9.0.0`), not to be a second user-facing demo.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination } from './Pagination'
import {
  useTable,
  tableFeatures,
  coreTablesFeature,
  rowPaginationFeature,
  createCoreRowModel,
  createPaginatedRowModel,
  type ColumnDef,
} from 'tanstack-table-v9'
import { useMemo } from 'react'

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

const features = tableFeatures({
  coreTablesFeature,
  rowPaginationFeature,
  coreRowModel: createCoreRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
})

const columns: ColumnDef<typeof features, Person>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'age', header: 'Age' },
]

export default {
  title: 'Components/Pagination/TanStack v9',
  component: Pagination,
  // Compat-test fixture, not a maintained visual baseline — renders
  // identically to Pagination.stories.tsx's Primary story.
  tags: ['!autodocs', '!snapshot'],
  args: {
    pageSizeOptions: [10, 20, 30, 40, 50],
    rows: 500,
  },
  render: ({ rows, ...args }) => {
    const slicedData = useMemo(() => data.slice(0, rows), [rows])

    const table = useTable({
      features,
      data: slicedData,
      columns,
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
        {...table.state.pagination}
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
