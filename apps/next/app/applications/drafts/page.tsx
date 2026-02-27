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

export default function Drafts() {
  const router = useRouter()
  const drafts = useAppStore(s => s.drafts)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Heading level={1}>Drafts</Heading>
        <Button variant='secondary' onPress={() => router.push('/applications/new')}>New application</Button>
      </div>
      {drafts.length === 0 ? (
        <p className={styles.empty}>No drafts saved yet.</p>
      ) : (
        <Table aria-label='Drafts' onRowAction={key => router.push(`/applications/drafts/${key}`)}>
          <TableHeader>
            <Column isRowHeader>Name</Column>
            <Column>Type</Column>
            <Column>Saved</Column>
          </TableHeader>
          <TableBody>
            {drafts.map(draft => (
              <Row key={draft.id} id={draft.id}>
                <Cell>{draft.firstName} {draft.lastName}</Cell>
                <Cell>{typeLabels[draft.type] ?? draft.type}</Cell>
                <Cell>{draft.savedAt}</Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
