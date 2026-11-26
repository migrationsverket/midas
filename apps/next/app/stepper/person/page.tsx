'use client'

import { Checkbox, Heading, Text, TextField } from '@midas-ds/components'
import { readForm, StepButtons, useAnswers, useFlow } from '../steps'

export default function PersonStep() {
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
        Personuppgifter
      </Heading>
      <Text>Fyll i dina uppgifter som de står i ditt pass.</Text>
      <TextField
        label='Förnamn'
        name='firstName'
        defaultValue={answers.firstName}
        isRequired
      />
      <TextField
        label='Efternamn'
        name='lastName'
        defaultValue={answers.lastName}
        isRequired
      />
      <Checkbox
        isSelected={answers.hasChildren}
        onChange={hasChildren => setAnswers({ hasChildren })}
      >
        Jag har barn som ska ingå i ansökan
      </Checkbox>
      <StepButtons />
    </form>
  )
}
