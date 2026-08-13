import { TextField, Text } from '@midas-ds/components'
import * as React from 'react'

export function ErrorMessageExample() {
  return (
    <div className='card'>
      <TextField
        label='Användarnamn'
        minLength={3}
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.tooShort) return 'Minst 3 tecken krävs'
          if (validationDetails.valueMissing) return 'Fältet är obligatoriskt'
          return 'Ogiltigt värde'
        }}
      />
    </div>
  )
}

export function ControlledValue() {
  const [text, setText] = React.useState('')

  return (
    <div className='card'>
      <TextField
        value={text}
        onChange={setText}
        label='Controlled value'
      />
      <Text>Text value: {text}</Text>
    </div>
  )
}
