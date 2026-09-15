import { useNavigate } from 'react-router'
import {
  Button,
  Card,
  CardHeader,
  Cell,
  Column,
  Grid,
  GridItem,
  Heading,
  InfoBanner,
  Row,
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
} from '../data/applications'

const pendingCount = applications.filter(a => a.status === 'pending').length
const approvedCount = applications.filter(a => a.status === 'approved').length
const rejectedCount = applications.filter(a => a.status === 'rejected').length

const recentApplications = [...applications]
  .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))
  .slice(0, 4)

function Home() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--midas-space-medium)',
      }}
    >
      <InfoBanner
        type='info'
        title='Scheduled maintenance'
        message='The portal will be unavailable on Sunday between 02:00–06:00 CET due to scheduled system maintenance.'
      />

      <Heading level={1}>Overview</Heading>

      <Grid removeMargins>
        <GridItem size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader
              heading={String(pendingCount)}
              subHeading='Pending applications'
            />
          </Card>
        </GridItem>
        <GridItem size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader
              heading={String(approvedCount)}
              subHeading='Approved applications'
            />
          </Card>
        </GridItem>
        <GridItem size={{ xs: 12, md: 4 }}>
          <Card>
            <CardHeader
              heading={String(rejectedCount)}
              subHeading='Rejected applications'
            />
          </Card>
        </GridItem>
      </Grid>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--midas-space-small)',
        }}
      >
        <Heading level={2}>Recent applications</Heading>
        <Button
          variant='secondary'
          onPress={() => navigate('/applications')}
        >
          View all applications
        </Button>
      </div>

      <Table aria-label='Recent applications'>
        <TableHeader>
          <Column isRowHeader>Name</Column>
          <Column>Type</Column>
          <Column>Submitted</Column>
          <Column>Status</Column>
        </TableHeader>
        <TableBody>
          {recentApplications.map(app => (
            <Row
              key={app.id}
              id={app.id}
            >
              <Cell>
                {app.firstName} {app.lastName}
              </Cell>
              <Cell>{typeLabels[app.type]}</Cell>
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
    </div>
  )
}

export default Home
