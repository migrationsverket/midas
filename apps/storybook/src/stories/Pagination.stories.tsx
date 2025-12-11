import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination } from '@midas-ds/components'
import { useCallback, useState } from 'react'

type Story = StoryObj<typeof Pagination>

const data = [...Array(100).keys()]

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    pageSizeOptions: [10, 20, 30, 40, 50],
  },
  render: args => {
    const [pageIndex, setPageIndex] = useState(0)
    const [pageSize, setPageSize] = useState(10)

    const pageCount = Math.ceil(data.length / pageSize)

    const nextPage = useCallback(
      () => setPageIndex(p => (p < pageCount ? p + 1 : p)),
      [pageCount],
    )
    const getPageCount = useCallback(() => pageCount, [pageCount])
    const getCanNextPage = useCallback(
      () => pageIndex < pageCount - 1,
      [pageIndex, pageCount],
    )
    const getCanPreviousPage = useCallback(() => pageIndex > 0, [pageIndex])

    return (
      <Pagination
        {...args}
        getCanNextPage={getCanNextPage}
        getCanPreviousPage={getCanPreviousPage}
        getPageCount={getPageCount}
        getRowCount={() => data.length}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageSize={pageSize}
        previousPage={() => setPageIndex(p => (p ? p - 1 : 0))}
        setPageIndex={setPageIndex}
        setPageSize={setPageSize}
      />
    )
  },
} satisfies Meta<typeof Pagination>

export const Primary: Story = {}
