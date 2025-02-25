import type { Meta, StoryObj } from '@storybook/react'
import { generateMockOptions } from '../../src/combobox/utils'
import React, { useState } from 'react'
import {
  SearchField,
  Table,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
} from '@midas-ds/components'

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: 'Examples/Search',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}
export default meta
type Story = StoryObj<typeof SearchField>

type DataRow = { id: number; fruit: string; description: string }
type ColumnType = {
  name: string
  id: string
  isRowHeader?: boolean
}

export const SimpleSearch: Story = {
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [
      { name: 'Fruit', id: 'fruit', isRowHeader: true },
      { name: 'Description', id: 'description' },
    ]

    const [searchTerm, setSearchTerm] = useState('')
    const [mockData] = useState<DataRow[]>(() =>
      Array.from(generateMockOptions(10)).map((item, index) => ({
        id: index + 1,
        fruit: item.name,
        description: `A delicious ${item.name.toLowerCase()}.`,
      })),
    )

    const filteredData = mockData.filter(item =>
      item.fruit.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <SearchField
          placeholder='Search for a fruit...'
          buttonText='Search'
          onInput={e => setSearchTerm((e.target as HTMLInputElement).value)}
        />

        {filteredData.length === 0 && (
          <p style={{ marginTop: '20px' }}>No results found</p>
        )}

        {filteredData.length > 0 && (
          <Table
            aria-label='Fruit Table'
            style={{ width: '100%', marginTop: '20px' }}
          >
            <TableHeader>
              {columns.map(column => (
                <Column
                  key={column.id}
                  isRowHeader={column.isRowHeader ?? false}
                >
                  {column.name}
                </Column>
              ))}
            </TableHeader>
            <TableBody>
              {filteredData.map(item => (
                <Row key={item.id}>
                  {columns.map(column => (
                    <Cell key={column.id}>{item[column.id]}</Cell>
                  ))}
                </Row>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    )
  },
}
