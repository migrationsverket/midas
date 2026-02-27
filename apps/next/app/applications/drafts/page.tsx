'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Cell,
  Column,
  Heading,
  Modal,
  Row,
  SearchField,
  Table,
  TableBody,
  TableHeader,
} from '@midas-ds/components'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
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
  const removeDraft = useAppStore(s => s.removeDraft)
  const [search, setSearch] = useState('')
  const [draftToDelete, setDraftToDelete] = useState<string | null>(null)

  const filtered = drafts.filter(draft =>
    `${draft.firstName} ${draft.lastName} ${typeLabels[draft.type] ?? draft.type}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  )

  const draftName = drafts.find(d => d.id === draftToDelete)
  const draftLabel = draftName
    ? `${draftName.firstName} ${draftName.lastName}`.trim() || 'this draft'
    : 'this draft'

  return (
    <div className={styles.page}>
      <Breadcrumbs>
        <Breadcrumb><Link href='/'>Home</Link></Breadcrumb>
        <Breadcrumb><Link href='/applications'>Applications</Link></Breadcrumb>
        <Breadcrumb>Drafts</Breadcrumb>
      </Breadcrumbs>

      <div className={styles.header}>
        <Heading level={1}>Drafts</Heading>
        <Button variant='secondary' onPress={() => router.push('/applications/new')}>New application</Button>
      </div>

      <SearchField
        placeholder='Search drafts…'
        value={search}
        onChange={setSearch}
        aria-label='Search drafts'
      />

      {filtered.length === 0 ? (
        <p className={styles.empty}>
          {search ? 'No drafts match your search.' : 'No drafts saved yet.'}
        </p>
      ) : (
        <Table
          aria-label='Drafts'
          onRowAction={key => router.push(`/applications/drafts/${key}`)}
        >
          <TableHeader>
            <Column isRowHeader>Name</Column>
            <Column>Type</Column>
            <Column>Saved</Column>
            <Column>Actions</Column>
          </TableHeader>
          <TableBody>
            {filtered.map(draft => (
              <Row key={draft.id} id={draft.id}>
                <Cell>{draft.firstName} {draft.lastName}</Cell>
                <Cell>{typeLabels[draft.type] ?? draft.type}</Cell>
                <Cell>{draft.savedAt}</Cell>
                <Cell>
                  <Button
                    variant='tertiary'
                    icon={Trash2}
                    aria-label={`Delete draft for ${draft.firstName} ${draft.lastName}`}
                    onPress={e => {
                      e.continuePropagation()
                      setDraftToDelete(draft.id)
                    }}
                  />
                </Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
      )}

      <Modal
        isOpen={!!draftToDelete}
        onOpenChange={open => { if (!open) setDraftToDelete(null) }}
        title='Delete draft'
      >
        <p>Are you sure you want to delete the draft for <strong>{draftLabel}</strong>? This cannot be undone.</p>
        <div className={styles.modalActions}>
          <Button slot='close' variant='secondary'>Cancel</Button>
          <Button
            onPress={() => {
              if (draftToDelete) removeDraft(draftToDelete)
              setDraftToDelete(null)
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  )
}
