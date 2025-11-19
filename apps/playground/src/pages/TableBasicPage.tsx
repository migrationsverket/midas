import { useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import {
  Select,
  TextField,
  ListBoxItem,
  Heading,
  Button,
} from '@midas-ds/components';
import { BasicTable } from '../components/BasicTable';
import { Person, mockPersonData } from '../data/mockData';

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

const departments = [
  { id: 'all', name: 'All Departments' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'hr', name: 'HR' },
  { id: 'sales', name: 'Sales' },
  { id: 'finance', name: 'Finance' },
];

const statuses = [
  { id: 'all', name: 'All Statuses' },
  { id: 'active', name: 'Active' },
  { id: 'inactive', name: 'Inactive' },
  { id: 'pending', name: 'Pending' },
];

export function TableBasicPage() {
  const [nameFilter, setNameFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleClearFilters = () => {
    setNameFilter('');
    setDepartmentFilter('all');
    setStatusFilter('all');
  };

  const filteredData = useMemo(() => {
    return mockPersonData.filter((person) => {
      const nameMatch =
        nameFilter === '' ||
        person.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
        person.lastName.toLowerCase().includes(nameFilter.toLowerCase());

      const departmentMatch =
        departmentFilter === 'all' ||
        person.department.toLowerCase() === departmentFilter.toLowerCase();

      const statusMatch =
        statusFilter === 'all' ||
        person.status.toLowerCase() === statusFilter.toLowerCase();

      return nameMatch && departmentMatch && statusMatch;
    });
  }, [nameFilter, departmentFilter, statusFilter]);

  return (
    <div style={{ padding: '2rem' }}>
      <Heading level={1} enableMargins>
        Tanstack table with filters
      </Heading>

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
            label="Search by name"
            value={nameFilter}
            onChange={setNameFilter}
            placeholder="Enter first or last name"
          />
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '150px' }}>
          <Select
            label="Department"
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
            Clear Filters
          </Button>
        </div>
      </div>

      <BasicTable data={filteredData} columns={columns} />
    </div>
  );
}
