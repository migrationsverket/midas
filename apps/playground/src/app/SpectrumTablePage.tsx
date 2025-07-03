import React, { useState, useMemo } from 'react';
import { TableView, TableHeader, TableBody, Column, Row, Cell } from '@adobe/react-spectrum';
import { useAsyncList, AsyncListLoadOptions, SortDescriptor } from '@react-stately/data';
import allTableData from '../data/tableData.json';

interface TableDataItem {
  id: number;
  name: string;
  age: number;
  track: string;
}

function SpectrumTablePage() {
  const initialColumns = [
    { key: 'id', name: 'ID', isRowHeader: true, allowsSorting: true },
    { key: 'name', name: 'UCI Downhill World Cup Riders', allowsSorting: true },
    { key: 'age', name: 'Age', allowsSorting: true },
    { key: 'track', name: 'Favorite UCI Downhill Track', allowsSorting: true },
  ];

  const [totalApiRowCount, setTotalApiRowCount] = useState(5000); // Controls total items available from simulated API
  const [isSelectable, setIsSelectable] = useState(false);
  const [isSortable, setIsSortable] = useState(false);

  const allData = useMemo(() => allTableData as TableDataItem[], []); // Ensure allTableData is typed

  const asyncListConfig = useMemo(() => ({
    async load({ signal, cursor, sortDescriptor }: AsyncListLoadOptions<TableDataItem, string>) {
      console.log("Loading data... cursor:", cursor);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      let items = allData.slice(0, totalApiRowCount); // Simulate API returning a subset of total data

      if (sortDescriptor) {
        items = items.sort((a: TableDataItem, b: TableDataItem) => {
          let cmp = a[sortDescriptor.column as keyof TableDataItem] < b[sortDescriptor.column as keyof TableDataItem] ? -1 : 1;
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        });
      }

      // Simulate pagination for current request
      const limit = 50; // Number of items per page
      const startIndex = cursor ? parseInt(cursor, 10) : 0;
      const endIndex = Math.min(startIndex + limit, items.length);
      const slicedItems = items.slice(startIndex, endIndex);

      const nextCursor = endIndex < items.length ? String(endIndex) : undefined;

      console.log("Loaded items:", slicedItems.length, "Next cursor:", nextCursor, "Total count:", items.length);

      return {
        items: slicedItems,
        cursor: nextCursor,
        totalCount: items.length,
      };
    },
    async sort({ items, sortDescriptor }: { items: TableDataItem[], sortDescriptor: SortDescriptor }) {
      await new Promise(resolve => setTimeout(resolve, 0)); // Yield to main thread
      return {
        items: items.sort((a: TableDataItem, b: TableDataItem) => {
          let cmp = a[sortDescriptor.column as keyof TableDataItem] < b[sortDescriptor.column as keyof TableDataItem] ? -1 : 1;
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        }),
      };
    },
  }), [totalApiRowCount, allData]);

  let list = useAsyncList<TableDataItem>(asyncListConfig);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Spectrum Table Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="totalApiRowCount">Total API Rows: </label>
        <select
          id="totalApiRowCount"
          value={totalApiRowCount}
          onChange={(e) => setTotalApiRowCount(Number(e.target.value))}
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
      <div style={{ margin: '0 auto', width: '100%', height: '500px', overflowY: 'auto' }}>
        <TableView
          aria-label="Example Table"
          selectionMode={isSelectable ? "multiple" : "none"}
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
          width="100%"
          height="100%"
        >
          <TableHeader columns={initialColumns}>
            {(column) => <Column key={column.key} allowsSorting={isSortable && column.allowsSorting}>{column.name}</Column>}
          </TableHeader>
          <TableBody items={list.items} loadingState={list.loadingState} onLoadMore={list.loadMore}>
            {(item: TableDataItem) => (
              <Row key={item.id}>
                <Cell>{item.id}</Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.age}</Cell>
                <Cell>{item.track}</Cell>
              </Row>
            )}
          </TableBody>
        </TableView>
      </div>
    </div>
  );
}

export default SpectrumTablePage;
