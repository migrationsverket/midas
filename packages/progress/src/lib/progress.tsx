import React, {
  Children,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
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
import { Checkbox } from '@midas-ds/checkbox'
export interface Steps {
  title: string
  hasProgressed?: boolean // vi styr
  onValidation?: boolean // de styr
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
    currentStepIndex < steps.length - 1 && steps[currentStepIndex]?.onValidation

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

export const Progress: React.FC<ProgressProps> = ({
  steps: initialSteps,
  children
}) => {
  const [steps, setSteps] = useState<Steps[]>(initialSteps)
  const [selectedTab, setSelectedTab] = useState<string>(steps[0]?.title)
  const [isFormValid, setIsFormValid] = useState(false) // This state will hold the `isInvalid` value

  const handleValidationResult = (isValid: boolean) => {
    setIsFormValid(isValid)
    setSteps(prevSteps =>
      prevSteps.map((step, index) =>
        index === currentStep ? { ...step, onValidation: isValid } : step
      )
    )
  }

  const currentStep = steps.findIndex(step => step.title === selectedTab)
  /*
useEffect(() => {
    console.table(steps)
  }, [steps])
  */
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

        {Children.map(children, (child, index) => (
          <TabPanel
            key={steps[index]?.title || index}
            id={steps[index]?.title}
            className={styles.panel}
          >
            {React.cloneElement(child as React.ReactElement<any>, {
              isInvalid: !isFormValid, // Pass the validation result to the child component
              onValidationChange: handleValidationResult // Pass the validation change handler to the child
            })}
          </TabPanel>
        ))}

        <TabNavigation
          steps={steps}
          setSteps={setSteps}

        />
      </Tabs>
    </div>
  )
}
type FormProps = {
  isInvalid?: boolean
  onValidationChange: (isValid: boolean) => void
}

export function Form({ onValidationChange }: FormProps) {
  const [isChecked, setIsChecked] = useState(false)
  const [isInvalid, setIsInvalid] = useState(true)

  // Calculate form validity based on checkbox state and isInvalid prop
  const formInvalid = !isChecked || isInvalid // The form is invalid if the checkbox is not checked or isInvalid is true.
  // This effect will run when formInvalid or isInvalid changes
  useEffect(() => {
    // Log the updated state value for isChecked
    console.log('Updated checkbox value (isInvalid):', formInvalid)
  }, [formInvalid])

  useEffect(() => {
    // Call the parent function when validation changes
    onValidationChange(!formInvalid) // Pass true if valid, false if invalid
  }, [formInvalid, isInvalid, onValidationChange]) // Only run this effect when formInvalid or isInvalid changes

  const handleCheckboxChange = (isSelected: boolean) => {
    setIsChecked(isSelected) // Update the state with the checkbox selection status
    console.log('Checkbox value is:', isSelected) // Log the new checkbox value
    setIsInvalid(!isSelected)
  }

  return (
    <form
      style={{
        border: '2px solid',
        borderColor: isChecked ? 'green' : 'red', // Dynamic border color based on isChecked
        padding: 16
      }}
    >
      <Checkbox
        isSelected={isChecked}
        onChange={handleCheckboxChange}
      >
        Agree to terms
      </Checkbox>
      {!isChecked && <p style={{ color: 'red' }}>You must agree to proceed.</p>}

      {/* Display the values in the UI */}
      <div>
        <p>
          <strong>isInvalid:</strong> {isInvalid ? 'true' : 'false'}
        </p>
        <p>
          <strong>formInvalid:</strong> {formInvalid ? 'true' : 'false'}
        </p>
        <p>
          <strong>Validation Result Passed to Parent:</strong>{' '}
          {formInvalid ? 'false' : 'true'}
        </p>
      </div>
    </form>
  )
}
/*
const AnotherComponent: React.FC<{
  steps: Steps[]
  currentStepIndex: number
  textValue: string
  isValid: boolean
}> = ({ steps, currentStepIndex, textValue, isValid }) => {
  useEffect(() => {
    console.table(steps)
  }, [steps])

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


      <AnotherComponent
        steps={steps}
        currentStepIndex={currentStep}
        textValue={textValue}
        isValid={isValid}
      />
*/
