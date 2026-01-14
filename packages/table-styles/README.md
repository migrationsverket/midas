# @midas-ds/table-styles

React components and styles for TanStack Table with Midas design system.

## Installation

```bash
npm install @midas-ds/table-styles @tanstack/react-table
```

## Usage

### Import the component and styles

```typescript
import { Pagination } from '@midas-ds/table-styles'
import '@midas-ds/table-styles/tanstack-table.css'
```

### Basic example with TanStack Table

```typescript
import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table'
import { Pagination } from '@midas-ds/table-styles'
import '@midas-ds/table-styles/tanstack-table.css'

function MyTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const { pagination: { pageIndex, pageSize } } = table.getState()

  return (
    <>
      <table className="midas-tanstack-table">
        {/* Your table markup */}
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
    </>
  )
}
```

## Documentation

For complete documentation and examples, visit [Midas Design System](https://designsystem.migrationsverket.se/)
