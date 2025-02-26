import { render, screen } from '@testing-library/react'
import { Cell, Column, Row, Table, TableBody, TableHeader } from './Table'

interface Row {
  id: number
  name: string
  date: string
  type: string
}

describe('given a striped Table', () => {
  const label = 'Files'
  const columns = [
    { name: 'Name', id: 'name', isRowHeader: true },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' },
  ]

  const rows: Row[] = [
    { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
    { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
    { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
    { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
  ]

  beforeEach(() => {
    render(
      <Table
        aria-label={label}
        selectionMode='multiple'
        striped
        className='derp'
      >
        <TableHeader columns={columns}>
          {column => (
            <Column isRowHeader={column.isRowHeader}>{column.name}</Column>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {item => (
            <Row columns={columns}>
              {column => <Cell>{item[column.id as keyof Row]}</Cell>}
            </Row>
          )}
        </TableBody>
      </Table>,
    )
  })

  it('should render successfully', () => {
    expect(screen.getByLabelText(label)).toBeTruthy()
  })

  it('should preserve its classNames when using the className prop', () => {
    expect(screen.getByLabelText(label)).toHaveClass('table')
    expect(screen.getByLabelText(label)).toHaveClass('derp')
  })
})
