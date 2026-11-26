'use client'

import {
  createContext,
  useContext,
  type FormEvent,
  type ReactNode,
} from 'react'
import {
  Button,
  ButtonGroup,
  StepperStateContext,
  type StepperState,
} from '@midas-ds/components'

export type Answers = {
  firstName: string
  lastName: string
  hasChildren: boolean
  childName: string
  childBirthDate: string
  street: string
  postalCode: string
  city: string
}

export const emptyAnswers: Answers = {
  firstName: '',
  lastName: '',
  hasChildren: false,
  childName: '',
  childBirthDate: '',
  street: '',
  postalCode: '',
  city: '',
}

export type StepItem = { id: string; label: string }

/** The steps that apply, worked out from the answers. Each id is also a route folder. */
export const getSteps = (answers: Answers): StepItem[] => [
  { id: 'person', label: 'Personuppgifter' },
  ...(answers.hasChildren ? [{ id: 'barn', label: 'Barn' }] : []),
  { id: 'adress', label: 'Adress' },
  { id: 'granska', label: 'Granska och skicka' },
]

export const AnswersContext = createContext<{
  answers: Answers
  setAnswers: (answers: Partial<Answers>) => void
}>({ answers: emptyAnswers, setAnswers: () => undefined })

export const useAnswers = () => useContext(AnswersContext)

/** The stepper state the layout created */
export const useFlow = () =>
  useContext(StepperStateContext) as StepperState<StepItem>

/** Reads the fields of a step's form, by their `name` */
export const readForm = (event: FormEvent<HTMLFormElement>) =>
  Object.fromEntries(new FormData(event.currentTarget)) as Partial<Answers>

/** Back and a submit button. Submitting runs the browser's validation first. */
export const StepButtons = ({
  submitLabel = 'Nästa',
}: {
  submitLabel?: ReactNode
}) => {
  const stepper = useFlow()

  return (
    <ButtonGroup>
      {!stepper.isFirst && (
        <Button
          variant='secondary'
          onPress={stepper.back}
        >
          Tillbaka
        </Button>
      )}
      <Button type='submit'>{submitLabel}</Button>
    </ButtonGroup>
  )
}
