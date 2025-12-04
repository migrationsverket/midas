import React from 'react'
import type { Selection, SortDescriptor } from 'react-aria-components'
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
  TableProps,
} from '@midas-ds/components'

const columns = [
  { name: 'Namn', id: 'name', isRowHeader: true },
  { name: 'Beskrivning', id: 'description', width: 'max-content' },
]

const rows = [
  {
    id: 'apple',
    name: 'Apple',
    description: 'Pink lady is a good one',
  },
  {
    id: 'banana',
    name: 'Banana',
    description: 'A yellow fruit',
  },
  {
    id: 'pear',
    name: 'Pear',
    description: 'Usually green',
  },
]

export const BasicExample = () => (
  <div className='card'>
    <Table aria-label='Fruit'>
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Description</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Banana</Cell>
          <Cell>A yellow fruit</Cell>
        </Row>
        <Row>
          <Cell>Pear</Cell>
          <Cell>Usually green</Cell>
        </Row>
      </TableBody>
    </Table>
  </div>
)

export const FullExample: React.FC<TableProps> = props => (
  <div className='card'>
    <Table
      aria-label='Fruit'
      {...props}
    >
      <TableHeader columns={columns}>
        {column => {
          return <Column isRowHeader={column.isRowHeader}>{column.name}</Column>
        }}
      </TableHeader>
      <TableBody items={rows}>
        {item => {
          return (
            <Row columns={columns}>
              {column => {
                return <Cell>{item[column.id]}</Cell>
              }}
            </Row>
          )
        }}
      </TableBody>
    </Table>
  </div>
)

export const ControlledExample: React.FC<TableProps> = props => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['apple']),
  )

  return (
    <>
      <FullExample
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        selectionMode='multiple'
        {...props}
      />
      Valda rader: {Array.from(selectedKeys).join(', ')}
    </>
  )
}

export const SortingExample: React.FC<TableProps> = props => {
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  })

  const sortedRows = [...rows].sort((a, b) => {
    const first = a[sortDescriptor.column as keyof typeof a]
    const second = b[sortDescriptor.column as keyof typeof b]
    let cmp = 0

    if (typeof first === 'string' && typeof second === 'string') {
      cmp = first.localeCompare(second)
    } else if (typeof first === 'number' && typeof second === 'number') {
      cmp = first - second
    }

    if (sortDescriptor.direction === 'descending') {
      cmp *= -1
    }

    return cmp
  })

  return (
    <div className='card'>
      <Table
        aria-label='Fruit'
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        {...props}
      >
        <TableHeader columns={columns}>
          {column => (
            <Column
              isRowHeader={column.isRowHeader}
              allowsSorting
            >
              {column.name}
            </Column>
          )}
        </TableHeader>
        <TableBody items={sortedRows}>
          {item => (
            <Row columns={columns}>
              {column => <Cell>{item[column.id]}</Cell>}
            </Row>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
