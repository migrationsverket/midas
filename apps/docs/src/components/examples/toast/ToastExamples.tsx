import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import {
  Button,
  GlobalToastRegion,
  Stack,
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
      <Stack
        spacing='medium'
        className='card'
      >
        <Stack
          direction='row'
          spacing='medium'
        >
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
        </Stack>
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
      </Stack>
      <CodeBlock language='tsx'>{code}</CodeBlock>
    </>
  )
}
