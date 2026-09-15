import { Heading, Text } from '@midas-ds/components'

function ApplicationsDrafts() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--midas-space-medium)' }}>
      <Heading level={1}>Drafts</Heading>
      <Text>No drafts saved yet.</Text>
    </div>
  )
}

export default ApplicationsDrafts
