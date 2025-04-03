import { TextField, Text } from '@midas-ds/components'
import * as React from 'react'

export function ControlledValue() {
  const [text, setText] = React.useState('')
  return (
    <>
      <TextField
        value={text}
        onChange={setText}
        label={'Controlled value'}
      />
      <Text>Text value: {text}</Text>
    </>
  )
}
