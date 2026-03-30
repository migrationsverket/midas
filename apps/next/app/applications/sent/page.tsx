'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Cell,
  Column,
  Heading,
  ProgressBar,
  Row,
  SearchField,
  Skeleton,
  Table,
  TableBody,
  TableHeader,
  Tag,
  TagGroup,
  TagList,
} from '@midas-ds/components'
import Link from 'next/link'
import { useAppStore, type ApplicationStatus } from '../../../components/AppProvider/AppContext'
import styles from './page.module.css'

const typeLabels: Record<string, string> = {
  residence: 'Residence permit',
  work: 'Work permit',
  study: 'Study permit',
  family: 'Family reunification',
}

const statusColor: Record<ApplicationStatus, 'yellow' | 'green' | 'red'> = {
  pending: 'yellow',
  approved: 'green',
  rejected: 'red',
}

const statusLabel: Record<ApplicationStatus, string> = {
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
}

const statusProgress: Record<ApplicationStatus, number> = {
  pending: 33,
  approved: 100,
  rejected: 100,
}

export default function Sent() {
  const router = useRouter()
  const sentApplications = useAppStore(s => s.sentApplications)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const filtered = sentApplications.filter(app =>
    `${app.firstName} ${app.lastName} ${typeLabels[app.type] ?? app.type}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  )

  return (
    <div className={styles.page}>
      <Breadcrumbs>
        <Breadcrumb><Link href='/'>Home</Link></Breadcrumb>
        <Breadcrumb><Link href='/applications'>Applications</Link></Breadcrumb>
        <Breadcrumb>Sent</Breadcrumb>
      </Breadcrumbs>

      <div className={styles.header}>
        <Heading level={1}>Sent applications</Heading>
        <Button variant='secondary' onPress={() => router.push('/applications/new')}>New application</Button>
      </div>

      <SearchField
        placeholder='Search by name or type…'
        value={search}
        onChange={setSearch}
        aria-label='Search sent applications'
      />

      {isLoading ? (
        <div className={styles.skeletons}>
          <Skeleton height='3rem' width='100%' />
          <Skeleton height='3rem' width='100%' />
          <Skeleton height='3rem' width='100%' />
          <Skeleton height='3rem' width='100%' />
        </div>
      ) : filtered.length === 0 ? (
        <p className={styles.empty}>
          {search ? 'No applications match your search.' : 'No applications submitted yet.'}
        </p>
      ) : (
        <Table aria-label='Sent applications'>
          <TableHeader>
            <Column isRowHeader>Name</Column>
            <Column>Type</Column>
            <Column>Submitted</Column>
            <Column>Status</Column>
          </TableHeader>
          <TableBody>
            {filtered.map(app => (
              <Row key={app.id} id={app.id}>
                <Cell>{app.firstName} {app.lastName}</Cell>
                <Cell>{typeLabels[app.type] ?? app.type}</Cell>
                <Cell>{app.submittedAt}</Cell>
                <Cell>
                  <div className={styles.statusCell}>
                    <TagGroup aria-label={`Status: ${statusLabel[app.status]}`}>
                      <TagList>
                        <Tag color={statusColor[app.status]}>{statusLabel[app.status]}</Tag>
                      </TagList>
                    </TagGroup>
                    <ProgressBar
                      aria-label='Application progress'
                      value={statusProgress[app.status]}
                      showValueLabel
                    />
                  </div>
                </Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
