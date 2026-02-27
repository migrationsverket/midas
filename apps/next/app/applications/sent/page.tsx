'use client'

import { useRouter } from 'next/navigation'
import {
  Heading,
  Table,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
  Button,
} from '@midas-ds/components'
import { useAppStore } from '../../../components/AppProvider/AppContext'
import styles from './page.module.css'

const typeLabels: Record<string, string> = {
  residence: 'Residence permit',
  work: 'Work permit',
  study: 'Study permit',
  family: 'Family reunification',
}

const durationLabels: Record<string, string> = {
  temporary: 'Temporary',
  permanent: 'Permanent',
}

export default function Sent() {
  const router = useRouter()
  const sentApplications = useAppStore(s => s.sentApplications)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Heading level={1}>Sent applications</Heading>
        <Button variant='secondary' onPress={() => router.push('/applications/new')}>New application</Button>
      </div>
      {sentApplications.length === 0 ? (
        <p className={styles.empty}>
          No applications submitted yet.
        </p>
      ) : (
        <Table aria-label='Sent applications'>
          <TableHeader>
            <Column isRowHeader>Name</Column>
            <Column>Type</Column>
            <Column>Duration</Column>
            <Column>Submitted</Column>
          </TableHeader>
          <TableBody>
            {sentApplications.map(app => (
              <Row key={app.id} id={app.id}>
                <Cell>{app.firstName} {app.lastName}</Cell>
                <Cell>{typeLabels[app.type] ?? app.type}</Cell>
                <Cell>{durationLabels[app.duration] ?? app.duration}</Cell>
                <Cell>{app.submittedAt}</Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
