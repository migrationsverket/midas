'use client'
import { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { useControlledState } from '@react-stately/utils'
import type { Key } from '../aria'

export interface UseStepperProps<T extends { id: Key }> {
  /** The steps that apply right now, in order. Recompute it when the answers change. */
  steps: readonly T[]
  /** The current step's id when the app is in charge, usually read from the route. */
  currentStep?: Key
  /** The step to start on when the hook keeps the state itself. Defaults to the first step. */
  defaultStep?: Key
  /** Called when the user moves to another step. With a router, navigate here. */
  onCurrentStepChange?: (id: Key) => void
}

export interface StepperState<T extends { id: Key }> {
  steps: readonly T[]
  /** The current step's id */
  currentStep: Key | undefined
  /** The current step, or undefined if there are no steps */
  current: T | undefined
  index: number
  isFirst: boolean
  isLast: boolean
  next: () => void
  back: () => void
  goTo: (id: Key) => void
  /** Spread on `Stepper` */
  stepperProps: { items: readonly T[]; currentStep: Key }
  /** Spread on the heading of each step, it receives focus when the user moves */
  headingProps: {
    ref: (element: HTMLElement | null) => void
    tabIndex: -1
  }
}

/**
 * Keeps track of the steps in a flow and moves focus to the new step's heading when the user moves.
 * It knows nothing about data or validation, the app validates before calling `next`.
 *
 * Spike: the API is not settled.
 */
export const useStepper = <T extends { id: Key }>({
  steps,
  currentStep,
  defaultStep,
  onCurrentStepChange,
}: UseStepperProps<T>): StepperState<T> => {
  const [stepId, setStepId] = useControlledState<Key | undefined, Key>(
    currentStep,
    defaultStep ?? steps[0]?.id,
    onCurrentStepChange,
  )

  const found = steps.findIndex(step => step.id === stepId)
  // Remember where the current step was, in case it disappears from the list
  const [lastIndex, setLastIndex] = useState(0)
  if (found !== -1 && found !== lastIndex) setLastIndex(found)

  // If the current step disappears from the list, stay at the same position:
  // that is the step which took its place, or the last step if it was at the end.
  const index =
    found === -1 && steps.length > 0
      ? Math.min(lastIndex, steps.length - 1)
      : found
  const current = steps[index]

  // Ask for the fallback once per missing step. With a router the change is async,
  // so the old id stays around for a few renders before the route catches up.
  const fallbackFor = useRef<Key | undefined>(undefined)
  const fallbackId = found === -1 ? current?.id : undefined

  useEffect(() => {
    if (fallbackId !== undefined && fallbackFor.current !== stepId) {
      fallbackFor.current = stepId
      setStepId(fallbackId)
    }
  }, [fallbackId, stepId, setStepId])

  // Focus moves to the heading whenever the step changes, whatever changed it:
  // Next and Back, a link in the Stepper, the browser's back button, or the current
  // step going away. Never on the first render. The heading may be the same element
  // (one view) or a new one that mounts later (one route per step), so the ref
  // callback focuses too.
  const pendingFocus = useRef(false)
  const heading = useRef<HTMLElement | null>(null)
  const previous = useRef(current?.id)

  const headingRef = useCallback((element: HTMLElement | null) => {
    // A page leaving with focus on its heading passes it on to the next page's heading
    if (!element && heading.current?.contains(document.activeElement))
      pendingFocus.current = true
    heading.current = element
    if (element && pendingFocus.current) {
      pendingFocus.current = false
      element.focus()
    }
  }, [])

  useEffect(() => {
    if (previous.current === current?.id) return
    previous.current = current?.id
    if (heading.current) heading.current.focus()
    else pendingFocus.current = true
  }, [current?.id])

  const goTo = (id: Key) => {
    if (id !== current?.id && steps.some(step => step.id === id)) setStepId(id)
  }

  return {
    steps,
    currentStep: current?.id,
    current,
    index,
    isFirst: index <= 0,
    isLast: index === steps.length - 1,
    next: () => {
      if (index < steps.length - 1) goTo(steps[index + 1].id)
    },
    back: () => {
      if (index > 0) goTo(steps[index - 1].id)
    },
    goTo,
    stepperProps: { items: steps, currentStep: current?.id ?? '' },
    headingProps: { ref: headingRef, tabIndex: -1 },
  }
}

/**
 * Passes the stepper state from a layout to the pages inside it,
 * for flows with one route per step where the heading lives in the page.
 *
 * Spike: this is the part we are least sure about.
 */
export const StepperStateContext = createContext<StepperState<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
> | null>(null)
