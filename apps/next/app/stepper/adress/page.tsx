'use client'

import { Heading, Text, TextField } from '@midas-ds/components'
import { readForm, StepButtons, useAnswers, useFlow } from '../steps'

export default function AddressStep() {
  const stepper = useFlow()
  const { answers, setAnswers } = useAnswers()

  return (
    <form
      style={{ display: 'grid', gap: 'var(--midas-space-medium)' }}
      onSubmit={event => {
        event.preventDefault()
        setAnswers(readForm(event))
        stepper.next()
      }}
    >
      <Heading
        {...stepper.headingProps}
        level={2}
      >
        Adress
      </Heading>
      <Text>Ange adressen där du bor i Sverige.</Text>
      <TextField
        label='Gatuadress'
        name='street'
        defaultValue={answers.street}
        isRequired
      />
      <TextField
        label='Postnummer'
        name='postalCode'
        defaultValue={answers.postalCode}
        isRequired
      />
      <TextField
        label='Ort'
        name='city'
        defaultValue={answers.city}
        isRequired
      />
      <StepButtons />
    </form>
  )
}
