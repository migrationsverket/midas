import type { Meta, StoryObj } from '@storybook/react-vite'
import { useContext, useEffect, useRef, useState } from 'react'
import { Button, ButtonGroup } from '../button'
import { Checkbox } from '../checkbox'
import { Heading } from '../heading'
import { Step, Stepper } from './Stepper'
import {
  StepperStateContext,
  useStepper,
  type StepperState,
} from './useStepper'

type Story = StoryObj<typeof Stepper>

export default {
  component: Stepper,
  subcomponents: { Step },
  title: 'Components/Stepper',
  tags: ['autodocs'],
  args: {
    currentStep: 'adress',
    children: [
      <Step
        key='person'
        id='person'
        href='#person'
      >
        Personuppgifter
      </Step>,
      <Step
        key='adress'
        id='adress'
        href='#adress'
      >
        Adress
      </Step>,
      <Step
        key='arbete'
        id='arbete'
        href='#arbete'
      >
        Arbete
      </Step>,
      <Step
        key='granska'
        id='granska'
        href='#granska'
      >
        Granska och skicka
      </Step>,
    ],
  },
} satisfies Meta<typeof Stepper>

export const Primary: Story = {}

export const FirstStep: Story = {
  args: { currentStep: 'person' },
}

export const LastStep: Story = {
  args: { currentStep: 'granska' },
}

export const Narrow: Story = {
  decorators: Story => (
    <div style={{ width: 320 }}>
      <Story />
    </div>
  ),
}

type StepItem = { id: string; label: string }

/** The steps that apply, worked out from the answers. In a real app this list also drives the routes and Next/Back. */
const getSteps = (answers: { hasChildren: boolean }): StepItem[] => [
  { id: 'person', label: 'Personuppgifter' },
  ...(answers.hasChildren ? [{ id: 'barn', label: 'Barn' }] : []),
  { id: 'adress', label: 'Adress' },
  { id: 'granska', label: 'Granska och skicka' },
]

/** Steps from a list, with `items` and a render function */
export const Items: Story = {
  args: { currentStep: 'barn' },
  render: args => (
    <Stepper
      {...args}
      items={getSteps({ hasChildren: true })}
    >
      {step => (
        <Step
          id={step.id}
          href={`#${step.id}`}
        >
          {step.label}
        </Step>
      )}
    </Stepper>
  ),
}

/** The flow with `useStepper`, which keeps track of the current step and moves focus to the heading. The app still decides which steps apply. */
export const Flow: Story = {
  render: () => {
    const [hasChildren, setHasChildren] = useState(false)
    const stepper = useStepper({ steps: getSteps({ hasChildren }) })

    return (
      <div style={{ display: 'grid', gap: 'var(--midas-space-large)' }}>
        <Stepper {...stepper.stepperProps}>
          {step => <Step id={step.id}>{step.label}</Step>}
        </Stepper>
        <Heading
          {...stepper.headingProps}
          level={2}
        >
          {stepper.current?.label}
        </Heading>
        {(stepper.currentStep === 'person' ||
          stepper.currentStep === 'barn') && (
          <Checkbox
            isSelected={hasChildren}
            onChange={setHasChildren}
          >
            Jag har barn som ska ingå i ansökan
          </Checkbox>
        )}
        <ButtonGroup>
          <Button
            variant='secondary'
            isDisabled={stepper.isFirst}
            onPress={stepper.back}
          >
            Tillbaka
          </Button>
          <Button
            isDisabled={stepper.isLast}
            onPress={stepper.next}
          >
            Nästa
          </Button>
        </ButtonGroup>
      </div>
    )
  },
}

/** A page in a flow with one route per step. It mounts fresh on every step, like a page under a router, and gets the stepper from the layout through context. */
const StepPage = () => {
  const stepper = useContext(StepperStateContext) as StepperState<StepItem>

  return (
    <>
      <Heading
        {...stepper.headingProps}
        level={2}
      >
        {stepper.current?.label}
      </Heading>
      <ButtonGroup>
        <Button
          variant='secondary'
          isDisabled={stepper.isFirst}
          onPress={stepper.back}
        >
          Tillbaka
        </Button>
        <Button
          isDisabled={stepper.isLast}
          onPress={stepper.next}
        >
          Nästa
        </Button>
      </ButtonGroup>
    </>
  )
}

/** One route per step: the hook lives in the layout and the heading in the page, which remounts on every step. The `key` stands in for the router. */
export const RoutePerStep: Story = {
  render: () => {
    const [route, setRoute] = useState('person')
    const stepper = useStepper({
      steps: getSteps({ hasChildren: true }),
      currentStep: route,
      onCurrentStepChange: id => setRoute(String(id)),
    })

    return (
      <StepperStateContext.Provider value={stepper}>
        <div style={{ display: 'grid', gap: 'var(--midas-space-large)' }}>
          <Stepper {...stepper.stepperProps}>
            {step => <Step id={step.id}>{step.label}</Step>}
          </Stepper>
          <StepPage key={route} />
        </div>
      </StepperStateContext.Provider>
    )
  },
}

/** The same flow written by hand, without the hook. Everything the hook does can be done this way. */
export const FlowWithoutHook: Story = {
  render: () => {
    const [hasChildren, setHasChildren] = useState(false)
    const steps = getSteps({ hasChildren })
    const [current, setCurrent] = useState(steps[0].id)
    const index = steps.findIndex(step => step.id === current)
    const heading = useRef<HTMLHeadingElement>(null)
    const moved = useRef(false)

    useEffect(() => {
      if (moved.current) heading.current?.focus()
    }, [current])

    const goTo = (offset: number) => {
      moved.current = true
      setCurrent(steps[index + offset].id)
    }

    return (
      <div style={{ display: 'grid', gap: 'var(--midas-space-large)' }}>
        <Stepper
          items={steps}
          currentStep={current}
        >
          {step => <Step id={step.id}>{step.label}</Step>}
        </Stepper>
        <Heading
          ref={heading}
          tabIndex={-1}
          level={2}
        >
          {steps[index].label}
        </Heading>
        {current === 'person' && (
          <Checkbox
            isSelected={hasChildren}
            onChange={setHasChildren}
          >
            Jag har barn som ska ingå i ansökan
          </Checkbox>
        )}
        <ButtonGroup>
          <Button
            variant='secondary'
            isDisabled={index === 0}
            onPress={() => goTo(-1)}
          >
            Tillbaka
          </Button>
          <Button
            isDisabled={index === steps.length - 1}
            onPress={() => goTo(1)}
          >
            Nästa
          </Button>
        </ButtonGroup>
      </div>
    )
  },
}
