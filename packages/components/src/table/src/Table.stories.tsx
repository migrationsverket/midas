import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, Column, TableBody, Row, Cell } from './Table'
import React from 'react'

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Components/Table',
  tags: ['autodocs']
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

export const Primary: Story = {
  args: {},
  render: ({ ...args }) => {
    const columns = [
      { name: 'Name', id: 'name', isRowHeader: true },
      { name: 'Type', id: 'type' },
      { name: 'Date Modified', id: 'date' }
    ] satisfies Column[]

    const rows = [
      { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
      { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
      { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
      { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' }
    ] satisfies Row[]

    return (
      <Table
        aria-label='Files'
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
  }
}
