import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Table, TableHeader, Column, TableBody, Row, Cell } from './Table'
import styles from './Table.module.css'

import { TableLayout, Virtualizer } from 'react-aria-components'

type Story = StoryObj<typeof Table>

interface Column {
  name: string
  id: keyof Row
  isRowHeader?: boolean
}

interface Row {
  id: number
  name: string
  date: string
  type: string
}

const columns = [
  { name: 'Name', id: 'name', isRowHeader: true },
  { name: 'Type', id: 'type' },
  { name: 'Date Modified', id: 'date' },
] satisfies Column[]

const rows = [
  { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
  { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
  { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
  { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
] satisfies Row[]

export default {
  component: Table,
  subcomponents: {
    TableHeader: TableHeader as React.ComponentType<unknown>,
    Column: Column as React.ComponentType<unknown>,
    TableBody: TableBody as React.ComponentType<unknown>,
    Row: Row as React.ComponentType<unknown>,
    Cell: Cell as React.ComponentType<unknown>,
  },
  title: 'Components/Table',
  tags: ['autodocs'],
  args: {
    'aria-label': 'Files',
    selectionMode: 'multiple',
  },
  argTypes: {
    size: {
      control: false,
    },
  },

  render: args => {
    return (
      <Table {...args}>
        <TableHeader columns={columns}>
          {column => (
            <Column isRowHeader={column.isRowHeader}>{column.name}</Column>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {item => (
            <Row columns={columns}>
              {column => <Cell>{item[column.id]}</Cell>}
            </Row>
          )}
        </TableBody>
      </Table>
    )
  },
} satisfies Meta<typeof Table>

export const Primary: Story = {}

export const Striped: Story = {
  args: {
    striped: true,
    className: 'my-class',
  },
  play: async ({ canvas, step, args }) => {
    const table = canvas.getByLabelText(args['aria-label'] as string)

    await step('Class names should be appended', async () => {
      await expect(table).toHaveClass(styles.table, args.className as string)
    })
  },
}

export const Virtualized: Story = {
  render: args => {
    const rows = []

    for (let i = 0; i < 5000; i++) {
      rows.push({ id: i, foo: `Foo ${i}`, bar: `Bar ${i}`, baz: `Baz ${i}` })
    }

    return (
      <Virtualizer
        layout={TableLayout}
        layoutOptions={{
          rowHeight: 48,
          headingHeight: 48,
        }}
      >
        <Table
          {...args}
          style={{ height: 300, overflow: 'auto', scrollPaddingTop: 48 }}
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
  },
}
