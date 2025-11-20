import { useState, useMemo } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import {
  Select,
  TextField,
  ListBoxItem,
  Button,
} from '@midas-ds/components';
import { Person, mockPersonData } from './mockData';
import '@midas-ds/table-styles/lib/tanstack-table.css';

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'firstName',
    header: 'Förnamn',
  },
  {
    accessorKey: 'lastName',
    header: 'Efternamn',
  },
  {
    accessorKey: 'email',
    header: 'E-post',
  },
  {
    accessorKey: 'department',
    header: 'Avdelning',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

const departments = [
  { id: 'all', name: 'Alla avdelningar' },
  { id: 'engineering', name: 'Teknik' },
  { id: 'marketing', name: 'Marknadsföring' },
  { id: 'hr', name: 'HR' },
  { id: 'sales', name: 'Försäljning' },
  { id: 'finance', name: 'Ekonomi' },
];

const statuses = [
  { id: 'all', name: 'Alla statusar' },
  { id: 'active', name: 'Aktiv' },
  { id: 'inactive', name: 'Inaktiv' },
  { id: 'pending', name: 'Väntande' },
];

export function FilteringExample() {
  const [nameFilter, setNameFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const columnFilters = useMemo(() => {
    const filters = [];
    if (departmentFilter !== 'all') {
      filters.push({ id: 'department', value: departmentFilter });
    }
    if (statusFilter !== 'all') {
      filters.push({ id: 'status', value: statusFilter });
    }
    return filters;
  }, [departmentFilter, statusFilter]);

  const table = useReactTable({
    data: mockPersonData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: nameFilter,
      columnFilters,
    },
    onGlobalFilterChange: setNameFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const firstName = String(row.getValue('firstName')).toLowerCase();
      const lastName = String(row.getValue('lastName')).toLowerCase();
      const search = String(filterValue).toLowerCase();
      return firstName.includes(search) || lastName.includes(search);
    },
  });

  const handleClearFilters = () => {
    setNameFilter('');
    setDepartmentFilter('all');
    setStatusFilter('all');
  };

  return (
    <div style={{width:'100%'}}>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 300px', minWidth: '200px' }}>
          <TextField
            label="Sök på namn"
            value={nameFilter}
            onChange={setNameFilter}
            placeholder="Ange för- eller efternamn"
          />
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '150px' }}>
          <Select
            label="Avdelning"
            value={departmentFilter}
            onChange={(key) => setDepartmentFilter(key as string)}
            items={departments}
          >
            {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Select>
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '150px' }}>
          <Select
            label="Status"
            value={statusFilter}
            onChange={(key) => setStatusFilter(key as string)}
            items={statuses}
          >
            {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Select>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <Button variant="secondary" onPress={handleClearFilters}>
            Rensa filter
          </Button>
        </div>
      </div>

      <table className="midas-tanstack-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
