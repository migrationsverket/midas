import React, {
  Children,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import styles from './Progress.module.css'
import clsx from 'clsx'
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabListStateContext
} from 'react-aria-components'
import { ChevronRight, Check } from 'lucide-react'
import { Button } from '@midas-ds/button'

export interface Steps {
  title: string
  hasProgressed?: boolean
  onValidation?: boolean
}

export interface ProgressProps {
  steps: Steps[]
  children: ReactNode
}

interface TabListState {
  collection: {
    getKeyBefore: (key: string) => string | null
    getKeyAfter: (key: string) => string | null
  }
  selectedKey: string
  setSelectedKey: (key: string) => void
}

function TabNavigation({
  steps,
  setSteps,
  setIsCompleted
}: {
  steps: Steps[]
  setSteps: React.Dispatch<React.SetStateAction<Steps[]>>
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const state = useContext(TabListStateContext) as TabListState

  if (!state) {
    return null
  }

  const currentStepIndex = steps.findIndex(
    step => step.title === state.selectedKey
  )

  const prevKey = state.collection.getKeyBefore(state.selectedKey)
  const nextKey = state.collection.getKeyAfter(state.selectedKey)

  const canMoveToPrev = currentStepIndex > 0
  const canMoveToNext =
    steps[currentStepIndex]?.onValidation &&
    (nextKey !== null || currentStepIndex === steps.length - 1)

  const onPrev =
    prevKey && canMoveToPrev ? () => state.setSelectedKey(prevKey) : undefined

  const onNext = canMoveToNext
    ? () => {
        setSteps(prevSteps =>
          prevSteps.map((step, index) =>
            index === currentStepIndex ? { ...step, hasProgressed: true } : step
          )
        )

        // If last step, complete process
        if (currentStepIndex === steps.length - 1) {
          setIsCompleted(true)
        } else if (nextKey) {
          state.setSelectedKey(nextKey)
        }
      }
    : undefined

  return (
    <div className={styles.buttonGroup}>
      <Button
        variant='secondary'
        onPress={onPrev}
        isDisabled={!canMoveToPrev}
        className={clsx(!canMoveToPrev && styles.disabled)}
      >
        ←
      </Button>
      <Button
        onPress={onNext}
        isDisabled={!canMoveToNext}
        className={clsx(!canMoveToNext && styles.disabled)}
      >
        {currentStepIndex === steps.length - 1 ? 'Avsluta' : '→'}
      </Button>
    </div>
  )
}

export const Progress: React.FC<ProgressProps> = ({
  steps: initialSteps,
  children
}) => {
  const [steps, setSteps] = useState<Steps[]>(initialSteps)
  const [selectedTab, setSelectedTab] = useState<string>(steps[0]?.title)
  const [isCompleted, setIsCompleted] = useState(false)

  const [formStates, setFormStates] = useState<
    Record<string, { isChecked: boolean; isInvalid: boolean }>
  >(
    steps.reduce(
      (acc, step) => ({
        ...acc,
        [step.title]: { isChecked: false, isInvalid: true }
      }),
      {}
    )
  )

  const handleValidationResult = (stepTitle: string, isValid: boolean) => {
    setSteps(prevSteps =>
      prevSteps.map(step =>
        step.title === stepTitle ? { ...step, onValidation: isValid } : step
      )
    )
    setFormStates(prev => ({
      ...prev,
      [stepTitle]: { ...prev[stepTitle], isInvalid: !isValid }
    }))
  }

  const updateFormState = (
    stepTitle: string,
    newState: Partial<{ isChecked: boolean; isInvalid: boolean }>
  ) => {
    setFormStates(prev => ({
      ...prev,
      [stepTitle]: { ...prev[stepTitle], ...newState }
    }))
  }

  const currentStep = steps.findIndex(step => step.title === selectedTab)

  // Early return if completed
  if (isCompleted) {
    return (
      <div>
        <p>Grattis! Du har slutfört stegen.</p>
        <div>
          <h3>Sammanfattning av steg:</h3>
          <ul>
            {steps.map((step, index) => (
              <li key={index}>
                <strong>Step {index + 1}:</strong> {step.title} <br />
                <span>Has Progressed: {step.hasProgressed ? 'Yes' : 'No'}</span>
                <br />
                <span>
                  Validation Passed: {step.onValidation ? 'Yes' : 'No'}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant='primary'
          onPress={() => {
            setIsCompleted(false) // Reset to start again if needed
            setSelectedTab(steps[0]?.title) // Reset to the first step
          }}
        >
          Börja om
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Tabs
        className={styles.progressContainer}
        selectedKey={selectedTab}
        onSelectionChange={key => setSelectedTab(key as string)}
      >
        <TabList
          aria-label='Tabs'
          className={styles.stepsContainer}
        >
          {steps.map((step, index) => {
            const isCompleted = index < currentStep
            return (
              <Tab
                key={step.title}
                id={step.title}
                isDisabled={!step.onValidation}
                className={clsx(
                  styles.step,
                  isCompleted && styles.completed,
                  index === currentStep && styles.current
                )}
              >
                <div
                  className={clsx(
                    styles.stepTitle,
                    isCompleted && styles.completed,
                    index === currentStep && styles.current
                  )}
                >
                  {index === currentStep && (
                    <ChevronRight className={styles.icon} />
                  )}
                  {isCompleted && index < currentStep && (
                    <Check className={styles.iconCheck} />
                  )}
                </div>
                {step.title}
                {index < steps.length - 1 && (
                  <div
                    className={clsx(
                      styles.progressBar,
                      isCompleted && styles.progressBarCompleted
                    )}
                  />
                )}
              </Tab>
            )
          })}
        </TabList>

        {Children.map(children, (child, index) => {
          const stepTitle = steps[index]?.title
          const formState = formStates[stepTitle || '']

          return (
            <TabPanel
              key={stepTitle || index}
              id={stepTitle}
              className={styles.panel}
            >
              {React.cloneElement(child as React.ReactElement<any>, {
                ...formState,
                onValidationChange: (isValid: boolean) =>
                  handleValidationResult(stepTitle || '', isValid),
                updateFormState: (
                  newState: Partial<{ isChecked: boolean; isInvalid: boolean }>
                ) => updateFormState(stepTitle || '', newState)
              })}
            </TabPanel>
          )
        })}

        <TabNavigation
          steps={steps}
          setSteps={setSteps}
          setIsCompleted={setIsCompleted} // Pass the setIsCompleted function
        />
      </Tabs>
    </div>
  )
}

type FormProps = {
  isChecked?: boolean
  isInvalid?: boolean
  onValidationChange: (isValid: boolean) => void
  updateFormState: (
    newState: Partial<{ isChecked: boolean; isInvalid: boolean }>
  ) => void
  children: ReactNode
}

type CheckboxChild = ReactElement<{
  isSelected?: boolean
  onChange?: (isSelected: boolean) => void
}>

export const Form: React.FC<FormProps> = ({
  isChecked = false,
  isInvalid = true,
  onValidationChange,
  updateFormState,
  children
}) => {
  const formInvalid = !isChecked || isInvalid

  useEffect(() => {
    onValidationChange(!formInvalid)
  }, [formInvalid, onValidationChange])

  const handleCheckboxChange = (isSelected: boolean) => {
    updateFormState({ isChecked: isSelected, isInvalid: !isSelected })
  }

  const renderChildren = () =>
    React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        const childWithProps = child as CheckboxChild
        return React.cloneElement(childWithProps, {
          isSelected: isChecked,
          onChange: handleCheckboxChange
        })
      }
      return child
    })

  return (
    <form
      style={{
        border: '2px solid',
        borderColor: isChecked ? 'green' : 'red',
        padding: 16
      }}
    >
      {renderChildren()}

      {!isChecked && <p style={{ color: 'red' }}>You must agree to proceed.</p>}
      <div>
        <p>
          <strong>isInvalid:</strong> {isInvalid ? 'true' : 'false'}
        </p>
        <p>
          <strong>formInvalid:</strong> {formInvalid ? 'true' : 'false'}
        </p>
        <strong>Validation Result Passed to Parent:</strong>{' '}
        {formInvalid ? 'false' : 'true'}
      </div>
    </form>
  )
}
