export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

export const mockPersonData: Person[] = [
  {
    id: '1',
    firstName: 'Anna',
    lastName: 'Andersson',
    email: 'anna.andersson@example.com',
    department: 'Engineering',
    status: 'Active',
  },
  {
    id: '2',
    firstName: 'Erik',
    lastName: 'Eriksson',
    email: 'erik.eriksson@example.com',
    department: 'Marketing',
    status: 'Active',
  },
  {
    id: '3',
    firstName: 'Maria',
    lastName: 'Svensson',
    email: 'maria.svensson@example.com',
    department: 'HR',
    status: 'Inactive',
  },
  {
    id: '4',
    firstName: 'Lars',
    lastName: 'Larsson',
    email: 'lars.larsson@example.com',
    department: 'Sales',
    status: 'Active',
  },
  {
    id: '5',
    firstName: 'Karin',
    lastName: 'Nilsson',
    email: 'karin.nilsson@example.com',
    department: 'Engineering',
    status: 'Pending',
  },
  {
    id: '6',
    firstName: 'Johan',
    lastName: 'Johansson',
    email: 'johan.johansson@example.com',
    department: 'Finance',
    status: 'Active',
  },
  {
    id: '7',
    firstName: 'Emma',
    lastName: 'Karlsson',
    email: 'emma.karlsson@example.com',
    department: 'Engineering',
    status: 'Active',
  },
  {
    id: '8',
    firstName: 'Oscar',
    lastName: 'Gustafsson',
    email: 'oscar.gustafsson@example.com',
    department: 'Marketing',
    status: 'Inactive',
  },
  {
    id: '9',
    firstName: 'Sofia',
    lastName: 'Pettersson',
    email: 'sofia.pettersson@example.com',
    department: 'HR',
    status: 'Active',
  },
  {
    id: '10',
    firstName: 'Karl',
    lastName: 'Jonsson',
    email: 'karl.jonsson@example.com',
    department: 'Sales',
    status: 'Active',
  },
  {
    id: '11',
    firstName: 'Linda',
    lastName: 'Hansson',
    email: 'linda.hansson@example.com',
    department: 'Engineering',
    status: 'Pending',
  },
  {
    id: '12',
    firstName: 'Gustav',
    lastName: 'Bengtsson',
    email: 'gustav.bengtsson@example.com',
    department: 'Finance',
    status: 'Active',
  },
  {
    id: '13',
    firstName: 'Lisa',
    lastName: 'Berg',
    email: 'lisa.berg@example.com',
    department: 'Marketing',
    status: 'Active',
  },
  {
    id: '14',
    firstName: 'Magnus',
    lastName: 'Lindberg',
    email: 'magnus.lindberg@example.com',
    department: 'Engineering',
    status: 'Active',
  },
  {
    id: '15',
    firstName: 'Eva',
    lastName: 'Lundgren',
    email: 'eva.lundgren@example.com',
    department: 'HR',
    status: 'Inactive',
  },
];
