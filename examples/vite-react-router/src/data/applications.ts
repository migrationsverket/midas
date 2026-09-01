export type ApplicationStatus = 'pending' | 'approved' | 'rejected'
export type ApplicationType = 'residence' | 'work' | 'study' | 'family'

export type Application = {
  id: string
  firstName: string
  lastName: string
  country: string
  type: ApplicationType
  submittedAt: string
  status: ApplicationStatus
}

export const typeLabels: Record<ApplicationType, string> = {
  residence: 'Residence permit',
  work: 'Work permit',
  study: 'Study permit',
  family: 'Family reunification',
}

export const statusColor: Record<ApplicationStatus, 'yellow' | 'green' | 'red'> = {
  pending: 'yellow',
  approved: 'green',
  rejected: 'red',
}

export const statusLabel: Record<ApplicationStatus, string> = {
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
}

export const applications: Application[] = [
  {
    id: 'app-1',
    firstName: 'Ahmed',
    lastName: 'Hassan',
    country: 'Somalia',
    type: 'residence',
    submittedAt: '2026-08-15',
    status: 'pending',
  },
  {
    id: 'app-2',
    firstName: 'Marija',
    lastName: 'Petrova',
    country: 'Ukraine',
    type: 'work',
    submittedAt: '2026-08-20',
    status: 'approved',
  },
  {
    id: 'app-3',
    firstName: 'Wei',
    lastName: 'Zhang',
    country: 'China',
    type: 'study',
    submittedAt: '2026-08-25',
    status: 'rejected',
  },
  {
    id: 'app-4',
    firstName: 'Fatima',
    lastName: 'Al-Sayed',
    country: 'Syria',
    type: 'family',
    submittedAt: '2026-08-28',
    status: 'pending',
  },
  {
    id: 'app-5',
    firstName: 'Camila',
    lastName: 'Oliveira',
    country: 'Brazil',
    type: 'work',
    submittedAt: '2026-08-30',
    status: 'approved',
  },
  {
    id: 'app-6',
    firstName: 'Amara',
    lastName: 'Diallo',
    country: 'Guinea',
    type: 'residence',
    submittedAt: '2026-09-01',
    status: 'pending',
  },
  {
    id: 'app-7',
    firstName: 'Priya',
    lastName: 'Nair',
    country: 'India',
    type: 'study',
    submittedAt: '2026-07-30',
    status: 'approved',
  },
  {
    id: 'app-8',
    firstName: 'Kenji',
    lastName: 'Tanaka',
    country: 'Japan',
    type: 'work',
    submittedAt: '2026-07-22',
    status: 'rejected',
  },
  {
    id: 'app-9',
    firstName: 'Layla',
    lastName: 'Haidari',
    country: 'Afghanistan',
    type: 'family',
    submittedAt: '2026-08-05',
    status: 'pending',
  },
  {
    id: 'app-10',
    firstName: 'Nneka',
    lastName: 'Okafor',
    country: 'Nigeria',
    type: 'residence',
    submittedAt: '2026-08-12',
    status: 'approved',
  },
  {
    id: 'app-11',
    firstName: 'Min-jun',
    lastName: 'Kim',
    country: 'South Korea',
    type: 'study',
    submittedAt: '2026-08-18',
    status: 'pending',
  },
  {
    id: 'app-12',
    firstName: 'Diego',
    lastName: 'Fernández',
    country: 'Colombia',
    type: 'work',
    submittedAt: '2026-07-10',
    status: 'approved',
  },
]
