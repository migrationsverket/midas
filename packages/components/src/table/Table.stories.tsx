import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent } from '@storybook/test'
import { hexToRgb, lightDark } from '../utils/test'
import { Table, TableHeader, Column, TableBody, Row, Cell } from './Table'
import styles from './Table.module.css'

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
  render: (args, { globals: { size } }) => {
    return (
      <Table
        {...args}
        size={size}
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
} satisfies Meta<typeof Table>

export const Primary: Story = {
  play: async ({ canvas, step, globals: { size } }) => {
    await step(
      'table headers should change size according to size prop',
      async () => {
        const tableHeaders = await canvas.findAllByRole('columnheader')

        tableHeaders.forEach(async column => {
          const { height } = column.getBoundingClientRect()
          await expect(height).toBe(size === 'large' ? 48 : 40)
        })
      },
    )
    await step('cells should change size according to size prop', async () => {
      const cells = await canvas.findAllByRole('gridcell')

      cells.forEach(async cell => {
        const { height } = cell.getBoundingClientRect()
        await expect(height).toBe(size === 'large' ? 48 : 40)
      })
    })
  },
}

export const Striped: Story = {
  args: {
    striped: true,
    className: 'my-class',
  },
  play: async ({ canvas, step, args, globals: { scheme } }) => {
    const table = canvas.getByLabelText(args['aria-label'] as string)

    await step('Class names should be appended', async () => {
      await expect(table).toHaveClass(styles.table, args.className as string)
    })

    await step('The rows should change background color on hover', async () => {
      const anOddRow = await canvas.findByText(rows[2].name)
      await userEvent.hover(anOddRow)
      await expect(anOddRow).toHaveStyle({
        backgroundColor: lightDark(
          hexToRgb('#e6e6e6'),
          hexToRgb('#333333'),
          scheme,
        ),
      })
    })
  },
}
