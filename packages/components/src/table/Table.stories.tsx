import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, Column, TableBody, Row, Cell } from './Table'
import { expect, userEvent } from '@storybook/test'
import styles from './Table.module.css'
import { lightDark } from '../utils/test'

const meta: Meta<typeof Table> = {
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
  },
}
export default meta
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

export const Primary: Story = {
  render: ({ ...args }) => {
    return (
      <Table
        selectionMode='multiple'
        {...args}
      >
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
}

export const Striped: Story = {
  ...Primary,
  args: {
    striped: true,
    className: 'my-class',
  },
  play: async ({ canvas, step, args }) => {
    const table = canvas.getByLabelText(args['aria-label'] as string)

    await step('Class names should be appended', async () => {
      expect(table).toHaveClass(styles.table, 'my-class')
    })

    await step('The rows should change background color on hover', async () => {
      const anOddRow = await canvas.findByText(rows[2].name)
      await userEvent.hover(anOddRow)
      expect(anOddRow).toHaveStyle({
        backgroundColor: lightDark('rgb(230, 230, 230)', 'rgb(51, 51, 51)'),
      })
    })
  },
}
