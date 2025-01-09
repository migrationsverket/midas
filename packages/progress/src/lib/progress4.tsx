import React, { useContext, useEffect, useState } from 'react'
import styles from './progress.module.css'
import clsx from 'clsx'
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabListStateContext
} from 'react-aria-components'
import { ChevronRight, Check } from 'lucide-react'
import TextField from './textField'

export interface Steps {
  title: string
  hasProgressed?: boolean // vi styr
  canProgress?: boolean // de styr
}

export interface ProgressProps {
  steps: Steps[]
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
  setSteps
}: {
  steps: Steps[]
  setSteps: React.Dispatch<React.SetStateAction<Steps[]>>
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
    currentStepIndex < steps.length - 1 && steps[currentStepIndex]?.canProgress

  const onPrev =
    prevKey && canMoveToPrev ? () => state.setSelectedKey(prevKey) : undefined

  const onNext =
    nextKey && canMoveToNext
      ? () => {
          setSteps(prevSteps =>
            prevSteps.map((step, index) =>
              index === currentStepIndex
                ? { ...step, hasProgressed: true }
                : step
            )
          )

          state.setSelectedKey(nextKey)
        }
      : undefined

  return (
    <div className={styles.buttonGroup}>
      <button
        aria-label='Previous tab'
        onClick={onPrev}
        disabled={!canMoveToPrev}
        className={clsx(!canMoveToPrev && styles.disabled)}
      >
        ←
      </button>
      <button
        aria-label='Next tab'
        onClick={onNext}
        disabled={!canMoveToNext}
        className={clsx(!canMoveToNext && styles.disabled)}
      >
        →
      </button>
    </div>
  )
}

export const Progress: React.FC<ProgressProps> = ({ steps: initialSteps }) => {
  const [steps, setSteps] = useState<Steps[]>(initialSteps)
  const [selectedTab, setSelectedTab] = useState<string>(steps[0]?.title)
  const currentStep = steps.findIndex(step => step.title === selectedTab)

  // TextField state
  const [textValue, setTextValue] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleValueChange = (value: string, valid: boolean) => {
    setTextValue(value)
    setIsValid(valid)

    setSteps(prevSteps =>
      prevSteps.map((step, index) =>
        index === currentStep ? { ...step, canProgress: valid } : step
      )
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
                isDisabled={!step.canProgress}
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
                  {index === currentStep && <ChevronRight />}
                  {isCompleted && index < currentStep && <Check />}
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

        {steps.map(step => (
          <TabPanel
            key={step.title}
            id={step.title}
            className={styles.panel}
          >
            {step.title}
            <div>
              <h1>Current Step: {step.title}</h1>
              <TextField
                label='Enter your name:'
                onValueChange={handleValueChange}
              />
            </div>
          </TabPanel>
        ))}

        <TabNavigation
          steps={steps}
          setSteps={setSteps}
        />
      </Tabs>

      <AnotherComponent
        steps={steps}
        currentStepIndex={currentStep}
        textValue={textValue}
        isValid={isValid}
      />
    </div>
  )
}

const AnotherComponent: React.FC<{
  steps: Steps[]
  currentStepIndex: number
  textValue: string
  isValid: boolean
}> = ({ steps, currentStepIndex, textValue, isValid }) => {
  useEffect(() => {
    console.log(steps); 
  }, [steps]);

  return (
    <div>
      <h2>Another Component</h2>
      <p>Current Step: {steps[currentStepIndex]?.title}</p>
      <p>
        Has Progressed: {steps[currentStepIndex]?.hasProgressed ? 'Yes' : 'No'}
      </p>
      <p>Can Progress: {steps[currentStepIndex]?.canProgress ? 'Yes' : 'No'}</p>
      <p>Text Value: {textValue}</p>
      <p>Is Valid: {isValid ? 'Yes' : 'No'}</p>
    </div>
  )
}
