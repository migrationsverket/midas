'use client'

import { Heading, Text, TextField } from '@midas-ds/components'
import { readForm, StepButtons, useAnswers, useFlow } from '../steps'

export default function ChildStep() {
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
        Barn
      </Heading>
      <Text>
        Det här steget visas bara om du har barn som ska ingå i ansökan.
      </Text>
      <TextField
        label='Barnets namn'
        name='childName'
        defaultValue={answers.childName}
        isRequired
      />
      <TextField
        label='Födelsedatum'
        description='ÅÅÅÅ-MM-DD'
        name='childBirthDate'
        defaultValue={answers.childBirthDate}
        isRequired
      />
      <StepButtons />
    </form>
  )
}
