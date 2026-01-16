import { useState } from 'react'
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table'
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  type DragEndEvent,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import { type Employee, employees } from '@midas-ds/test-utils'
import '@midas-ds/table-styles/lib/tanstack-table.css'

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 60,
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
    size: 100,
  },
]

interface DraggableTableHeaderProps {
  header: any
}

function DraggableTableHeader({ header }: DraggableTableHeaderProps) {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id: header.column.id,
    })

  const style: React.CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    whiteSpace: 'nowrap',
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <th
      colSpan={header.colSpan}
      ref={setNodeRef}
      style={style}
    >
      {header.isPlaceholder ? null : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {flexRender(header.column.columnDef.header, header.getContext())}
          <button
            {...attributes}
            {...listeners}
            className='drag-handle'
            style={{
              cursor: 'grab',
              touchAction: 'none',
              border: 'none',
              background: 'transparent',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <GripVertical size={16} />
          </button>
        </div>
      )}
    </th>
  )
}

interface DragAlongCellProps {
  cell: any
}

function DragAlongCell({ cell }: DragAlongCellProps) {
  const { isDragging, setNodeRef, transform } = useSortable({
    id: cell.column.id,
  })

  const style: React.CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition: 'width transform 0.2s ease-in-out',
    width: cell.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <td
      style={style}
      ref={setNodeRef}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}

export function ColumnDndExample() {
  const [data] = useState(() => [...employees])
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columns.map(c => c.id ?? (c as any).accessorKey),
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setColumnOrder(columnOrder => {
        const oldIndex = columnOrder.indexOf(active.id as string)
        const newIndex = columnOrder.indexOf(over.id as string)
        return arrayMove(columnOrder, oldIndex, newIndex)
      })
    }
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  )

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table className='midas-tanstack-table'>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                <SortableContext
                  items={columnOrder}
                  strategy={horizontalListSortingStrategy}
                >
                  {headerGroup.headers.map(header => (
                    <DraggableTableHeader
                      key={header.id}
                      header={header}
                    />
                  ))}
                </SortableContext>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                <SortableContext
                  items={columnOrder}
                  strategy={horizontalListSortingStrategy}
                >
                  {row.getVisibleCells().map(cell => (
                    <DragAlongCell
                      key={cell.id}
                      cell={cell}
                    />
                  ))}
                </SortableContext>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DndContext>
  )
}
