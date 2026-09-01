import { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  Button,
  Cell,
  Column,
  Heading,
  Row,
  SearchField,
  Table,
  TableBody,
  TableHeader,
  Tag,
  TagGroup,
  TagList,
} from '@midas-ds/components'

import {
  applications,
  statusColor,
  statusLabel,
  typeLabels,
} from '../../data/applications'

function Applications() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const matches = applications.filter(({ firstName, lastName, type }) =>
    `${firstName} ${lastName} ${typeLabels[type]}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--midas-space-medium)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--midas-space-small)',
        }}
      >
        <Heading level={1}>Applications</Heading>
        <Button
          variant='secondary'
          onPress={() => navigate('/applications/new')}
        >
          New application
        </Button>
      </div>

      <SearchField
        placeholder='Search by name or type…'
        value={search}
        onChange={setSearch}
        aria-label='Search applications'
      />

      {matches.length === 0 ? (
        <p style={{ color: 'var(--midas-text-secondary)' }}>
          {search
            ? 'No applications match your search.'
            : 'No applications submitted yet.'}
        </p>
      ) : (
        <Table aria-label='Applications'>
          <TableHeader>
            <Column isRowHeader>Name</Column>
            <Column>Type</Column>
            <Column>Country</Column>
            <Column>Submitted</Column>
            <Column>Status</Column>
          </TableHeader>
          <TableBody>
            {matches.map(app => (
              <Row
                key={app.id}
                id={app.id}
              >
                <Cell>
                  {app.firstName} {app.lastName}
                </Cell>
                <Cell>{typeLabels[app.type]}</Cell>
                <Cell>{app.country}</Cell>
                <Cell>{app.submittedAt}</Cell>
                <Cell>
                  <TagGroup aria-label={`Status: ${statusLabel[app.status]}`}>
                    <TagList>
                      <Tag color={statusColor[app.status]}>
                        {statusLabel[app.status]}
                      </Tag>
                    </TagList>
                  </TagGroup>
                </Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

export default Applications
