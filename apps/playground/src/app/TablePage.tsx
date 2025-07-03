import { Table, TableHeader, TableBody, Column, Row, Cell, InfoBanner } from '@midas-ds/components';
import { useState, useMemo } from 'react';
import { Virtualizer, TableLayout } from 'react-aria-components';

interface TableDataItem {
  id: number;
  name: string;
  age: number;
  track: string;
}

interface SortDescriptor {
  column: string;
  direction: 'ascending' | 'descending';
}

function TablePage() {
  const initialColumns = [
    { key: 'id', label: 'ID', isRowHeader: true, allowsSorting: true },
    { key: 'name', label: 'UCI Downhill World Cup Riders', allowsSorting: true },
    { key: 'age', label: 'Age', allowsSorting: true },
    { key: 'track', label: 'Favorite UCI Downhill Track', allowsSorting: true },
  ];

  const [rowCount, setRowCount] = useState(25); // Default to 25 rows
  const [isSelectable, setIsSelectable] = useState(false);
  const [isSortable, setIsSortable] = useState(false);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor | undefined>(undefined);

  const allData = useMemo(() => {
    const data: TableDataItem[] = [];
    const riderNames = ["Loïc Bruni", "Amaury Pierron", "Loris Vergier", "Finn Iles", "Jackson Goldstone", "Thibaut Dapréla", "Dakotah Norton", "Aaron Gwin", "Greg Minnaar", "Myriam Nicole", "Vali Höll", "Camille Balanche", "Marine Cabirou", "Jess Blewitt"];
    const tracks = ["Fort William", "Leogang", "Val di Sole", "Les Gets", "Snowshoe", "Mont-Sainte-Anne"];
    for (let i = 1; i <= 5000; i++) { // Generate 5000 items for sorting
      const name = riderNames[Math.floor(Math.random() * riderNames.length)];
      const age = Math.floor(Math.random() * 18) + 18; // Age between 18 and 35
      const track = tracks[Math.floor(Math.random() * tracks.length)];
      data.push({ id: i, name, age, track });
    }
    return data;
  }, []);

  const sortedItems = useMemo(() => {
    let items = allData.slice(0, rowCount);
    if (sortDescriptor) {
      items = items.sort((a: TableDataItem, b: TableDataItem) => {
        let cmp = a[sortDescriptor.column as keyof TableDataItem] < b[sortDescriptor.column as keyof TableDataItem] ? -1 : 1;
        if (sortDescriptor.direction === 'descending') {
          cmp *= -1;
        }
        return cmp;
      });
    }
    return items;
  }, [allData, rowCount, sortDescriptor]);

  const tableStyle = useMemo(() => ({ width: '100%' }), []);

  return (
    <div style={{ padding: '20px' }}>
      <InfoBanner type="info">Midas virtualized table</InfoBanner>
      <h1>Table Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="rowCount">Rows to display: </label>
        <select
          id="rowCount"
          value={rowCount}
          onChange={(e) => setRowCount(Number(e.target.value))}
          style={{ marginLeft: '10px', padding: '5px' }}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={250}>250</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={5000}>5000</option>
        </select>

        <label htmlFor="selectable" style={{ marginLeft: '20px' }}>Selectable Rows: </label>
        <input
          type="checkbox"
          id="selectable"
          checked={isSelectable}
          onChange={(e) => setIsSelectable(e.target.checked)}
          style={{ marginLeft: '10px' }}
        />

        <label htmlFor="sortable" style={{ marginLeft: '20px' }}>Sortable Rows: </label>
        <input
          type="checkbox"
          id="sortable"
          checked={isSortable}
          onChange={(e) => setIsSortable(e.target.checked)}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ margin: '0 auto', width: '100%', maxHeight: '500px', overflowY: 'auto' }}>
        <Virtualizer layout={TableLayout}>
          <Table
            aria-label="Example Table"
            style={{ ...tableStyle, height: '100%', width: '100%' }} // Apply height and width here
            selectionMode={isSelectable ? "multiple" : undefined}
            sortDescriptor={sortDescriptor}
            onSortChange={isSortable ? setSortDescriptor : undefined}
          >
            <TableHeader columns={initialColumns}>
              {(column) => <Column key={column.key} isRowHeader={column.isRowHeader} allowsSorting={isSortable && column.allowsSorting}>{column.label}</Column>}
            </TableHeader>
            <TableBody items={sortedItems}>
              {(item: TableDataItem) => (
                <Row key={item.id} columns={initialColumns}>
                  {(column) => <Cell>{item[column.key as keyof TableDataItem]}</Cell>}
                </Row>
              )}
            </TableBody>
          </Table>
        </Virtualizer>
      </div>
    </div>
  );
}

export default TablePage;
