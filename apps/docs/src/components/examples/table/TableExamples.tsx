import React from 'react'
import type { Selection } from 'react-aria-components'
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
  TableLayout,
  TableProps,
  Virtualizer,
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

export const VirtualizedExample: React.FC<TableProps> = args => {
  const rows = [...Array.from(Array(5000).keys())].map(i => ({
    id: i,
    foo: `Foo: ${i}`,
    bar: `Bar: ${i}`,
    baz: `Baz: ${i}`,
  }))

  return (
    <Virtualizer
      layout={TableLayout}
      layoutOptions={{
        rowHeight: args.narrow ? 24 : 48,
        headingHeight: args.narrow ? 24 : 48,
      }}
    >
      <Table
        aria-label='Virtualized Table'
        selectionMode='multiple'
        striped
        style={{ height: 300, overflow: 'auto' }}
        {...args}
      >
        <TableHeader>
          <Column isRowHeader>Foo</Column>
          <Column>Bar</Column>
          <Column>Baz</Column>
        </TableHeader>
        <TableBody items={rows}>
          {item => (
            <Row data-even={item.id % 2 === 0}>
              <Cell>{item.foo}</Cell>
              <Cell>{item.bar}</Cell>
              <Cell>{item.baz}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </Virtualizer>
  )
}
