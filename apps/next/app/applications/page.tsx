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
  ProgressBar,
  Row,
  SearchField,
  Tab,
  TabList,
  TabPanel,
  Table,
  TableBody,
  TableHeader,
  Tabs,
  Tag,
  TagGroup,
  TagList,
} from '@midas-ds/components'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useAppStore, type ApplicationStatus } from '../../components/AppProvider/AppContext'

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

export default function Applications() {
  const router = useRouter()
  const sentApplications = useAppStore(s => s.sentApplications)
  const drafts = useAppStore(s => s.drafts)
  const removeDraft = useAppStore(s => s.removeDraft)

  const [sentSearch, setSentSearch] = useState('')
  const [draftsSearch, setDraftsSearch] = useState('')
  const [draftToDelete, setDraftToDelete] = useState<string | null>(null)

  const filteredSent = sentApplications.filter(app =>
    `${app.firstName} ${app.lastName} ${typeLabels[app.type] ?? app.type}`
      .toLowerCase()
      .includes(sentSearch.toLowerCase()),
  )

  const filteredDrafts = drafts.filter(draft =>
    `${draft.firstName} ${draft.lastName} ${typeLabels[draft.type] ?? draft.type}`
      .toLowerCase()
      .includes(draftsSearch.toLowerCase()),
  )

  const draftName = drafts.find(d => d.id === draftToDelete)
  const draftLabel = draftName
    ? `${draftName.firstName} ${draftName.lastName}`.trim() || 'this draft'
    : 'this draft'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--midas-space-medium)' }}>
      <Breadcrumbs>
        <Breadcrumb><Link href='/'>Home</Link></Breadcrumb>
        <Breadcrumb>Applications</Breadcrumb>
      </Breadcrumbs>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--midas-space-small)' }}>
        <Heading level={1}>Applications</Heading>
        <Button variant='secondary' onPress={() => router.push('/applications/new')}>New application</Button>
      </div>

      <Tabs>
        <TabList aria-label='Applications'>
          <Tab id='sent'>Sent ({sentApplications.length})</Tab>
          <Tab id='drafts'>Drafts ({drafts.length})</Tab>
        </TabList>

        <TabPanel id='sent'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--midas-space-medium)', paddingTop: 'var(--midas-space-medium)' }}>
            <SearchField
              placeholder='Search by name or type…'
              value={sentSearch}
              onChange={setSentSearch}
              aria-label='Search sent applications'
            />
            {filteredSent.length === 0 ? (
              <p style={{ color: 'var(--midas-text-secondary)' }}>
                {sentSearch ? 'No applications match your search.' : 'No applications submitted yet.'}
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
                  {filteredSent.map(app => (
                    <Row key={app.id} id={app.id}>
                      <Cell>{app.firstName} {app.lastName}</Cell>
                      <Cell>{typeLabels[app.type] ?? app.type}</Cell>
                      <Cell>{app.submittedAt}</Cell>
                      <Cell>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--midas-space-xsmall)' }}>
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
        </TabPanel>

        <TabPanel id='drafts'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--midas-space-medium)', paddingTop: 'var(--midas-space-medium)' }}>
            <SearchField
              placeholder='Search drafts…'
              value={draftsSearch}
              onChange={setDraftsSearch}
              aria-label='Search drafts'
            />
            {filteredDrafts.length === 0 ? (
              <p style={{ color: 'var(--midas-text-secondary)' }}>
                {draftsSearch ? 'No drafts match your search.' : 'No drafts saved yet.'}
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
                  {filteredDrafts.map(draft => (
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
          </div>
        </TabPanel>
      </Tabs>

      <Modal
        isOpen={!!draftToDelete}
        onOpenChange={open => { if (!open) setDraftToDelete(null) }}
        title='Delete draft'
      >
        <p>Are you sure you want to delete the draft for <strong>{draftLabel}</strong>? This cannot be undone.</p>
        <div style={{ display: 'flex', gap: 'var(--midas-space-small)', justifyContent: 'flex-end', marginTop: 'var(--midas-space-medium)' }}>
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
