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
} from '../../src/index'

const meta: Meta<typeof SearchField> = {
  title: 'Examples/Search',
  tags: ['autodocs'],
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
      { name: 'Frukt', id: 'fruit', isRowHeader: true },
      { name: 'Beskrivning', id: 'description' },
    ]

    const [searchTerm, setSearchTerm] = useState('')
    const [mockData] = useState<DataRow[]>(() =>
      Array.from(generateMockOptions(10)).map((item, index) => ({
        id: index + 1,
        fruit: item.name,
        description: `En frukt.`,
      })),
    )

    const filteredData = mockData.filter(item =>
      item.fruit.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <SearchField
          placeholder='Sök efter en frukt...'
          buttonText='Sök'
          onSubmit={setSearchTerm}
          style={{ width: '100%' }}
        />

        {searchTerm.length > 0 &&
          (filteredData.length === 0 ? (
            <p style={{ marginTop: '10px' }}>Inga träffar</p>
          ) : (
            <div style={{ marginTop: '20px' }}>
              <Table
                aria-label='Fruit Table'
                style={{ width: '100%' }}
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
            </div>
          ))}
      </div>
    )
  },
}
