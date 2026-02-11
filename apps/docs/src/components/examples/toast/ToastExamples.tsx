import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import {
  Button,
  GlobalToastRegion,
  toastQueue,
  Select,
  ListBoxItem,
  TextField,
  type FeedbackStatus,
} from '@midas-ds/components'

export const DynamicToastExample = () => {
  const [type, setType] = React.useState<FeedbackStatus>('success')
  const [message, setMessage] = React.useState('Allt funkar som det ska!')
  const [timeout, setTimeout] = React.useState('5000')

  const hasTimeout = timeout !== 'none'
  const addArgs = hasTimeout
    ? `{ type: '${type}', message: '${message}' },\n    { timeout: ${timeout} }`
    : `{ type: '${type}', message: '${message}' }`

  const code = `import { GlobalToastRegion, toastQueue, Button } from '@midas-ds/components'

<GlobalToastRegion />

<Button
  onPress={() =>
    toastQueue.add(
    ${addArgs}
  )}
>
  Visa toast
</Button>`

  return (
    <>
      <GlobalToastRegion />
      <div
        className='card'
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <Select
              label='Typ'
              value={type}
              onChange={key => setType(key as FeedbackStatus)}
            >
              <ListBoxItem id='success'>Success</ListBoxItem>
              <ListBoxItem id='info'>Info</ListBoxItem>
              <ListBoxItem id='important'>Important</ListBoxItem>
              <ListBoxItem id='warning'>Warning</ListBoxItem>
            </Select>
          </div>
          <div style={{ flex: 1 }}>
            <Select
              label='Timeout (ms)'
              value={timeout}
              onChange={key => setTimeout(key as string)}
            >
              <ListBoxItem id='none'>Ingen</ListBoxItem>
              <ListBoxItem id='5000'>5000</ListBoxItem>
              <ListBoxItem id='7000'>7000</ListBoxItem>
              <ListBoxItem id='10000'>10000</ListBoxItem>
            </Select>
          </div>
        </div>
        <TextField
          label='Meddelande'
          value={message}
          onChange={setMessage}
        />
        <Button
          onPress={() =>
            toastQueue.add(
              { type, message },
              hasTimeout ? { timeout: Number(timeout) } : {},
            )
          }
        >
          Visa toast
        </Button>
      </div>
      <CodeBlock language='tsx'>{code}</CodeBlock>
    </>
  )
}
