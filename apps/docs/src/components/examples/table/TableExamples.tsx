import React from 'react'
import type { Selection } from 'react-aria-components'
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
