'use client'

import { useRouter } from 'next/navigation'
import { Heading, Text, toastQueue } from '@midas-ds/components'
import { StepButtons, useAnswers, useFlow } from '../steps'

export default function ReviewStep() {
  const router = useRouter()
  const stepper = useFlow()
  const { answers } = useAnswers()

  const rows = [
    ['Namn', `${answers.firstName} ${answers.lastName}`],
    ...(answers.hasChildren
      ? [['Barn', `${answers.childName}, född ${answers.childBirthDate}`]]
      : []),
    ['Adress', `${answers.street}, ${answers.postalCode} ${answers.city}`],
  ]

  return (
    <form
      style={{ display: 'grid', gap: 'var(--midas-space-medium)' }}
      onSubmit={event => {
        event.preventDefault()
        toastQueue.add(
          { type: 'success', message: 'Ansökan är skickad' },
          { timeout: 5000 },
        )
        router.push('/')
      }}
    >
      <Heading
        {...stepper.headingProps}
        level={2}
      >
        Granska och skicka
      </Heading>
      <Text>
        Kontrollera dina uppgifter. Du kan gå tillbaka till ett tidigare steg
        genom att välja det ovanför.
      </Text>
      <dl>
        {rows.map(([term, value]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <StepButtons submitLabel='Skicka ansökan' />
    </form>
  )
}
