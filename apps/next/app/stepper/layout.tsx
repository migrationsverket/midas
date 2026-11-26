'use client'

import { useState, type ReactNode } from 'react'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import {
  Heading,
  RouterProvider,
  Step,
  Stepper,
  StepperStateContext,
  useStepper,
} from '@midas-ds/components'
import { AnswersContext, emptyAnswers, getSteps, type Answers } from './steps'

/**
 * The frame around every step. It owns the step list, the answers and the Stepper,
 * and it stays mounted while the user moves between the step pages.
 */
export default function ApplicationLayout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const segment = useSelectedLayoutSegment() ?? undefined
  const [answers, setAnswers] = useState<Answers>(emptyAnswers)

  const stepper = useStepper({
    steps: getSteps(answers),
    currentStep: segment,
    onCurrentStepChange: id => router.push(`/stepper/${id}`),
  })

  return (
    <RouterProvider navigate={router.push}>
      <AnswersContext.Provider
        value={{
          answers,
          setAnswers: next =>
            setAnswers(previous => ({ ...previous, ...next })),
        }}
      >
        <StepperStateContext.Provider value={stepper}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 40rem)',
              gap: 'var(--midas-space-large)',
            }}
          >
            <Heading level={1}>Ansök om uppehållstillstånd</Heading>
            <Stepper {...stepper.stepperProps}>
              {step => (
                <Step
                  id={step.id}
                  href={`/stepper/${step.id}`}
                >
                  {step.label}
                </Step>
              )}
            </Stepper>
            {children}
          </div>
        </StepperStateContext.Provider>
      </AnswersContext.Provider>
    </RouterProvider>
  )
}
