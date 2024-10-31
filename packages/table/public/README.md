# table

```bash
npm i @midas-ds/table
```

```tsx
import { Table, TableHeader, Column, TableBody, Row, Cell } from '@midas-ds/table';

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

<Table
    aria-label="Files"
    selectionMode="multiple"
>
    <TableHeader columns={columns}>
        {(column) => (
        <Column isRowHeader={column.isRowHeader}>{column.name}</Column>
        )}
    </TableHeader>
    <TableBody items={rows}>
        {(item) => (
        <Row columns={columns}>
            {(column) => <Cell>{item[column.id]}</Cell>}
        </Row>
        )}
    </TableBody>
</Table>
```
