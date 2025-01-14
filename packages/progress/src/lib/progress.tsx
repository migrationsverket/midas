import React, {
  Children,
  useState,
  useEffect,
  useContext,
  ReactElement
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

export interface Steps {
  title: string
  hasProgressed?: boolean
  canProgress?: boolean
}
interface ChildProps {
  onValueChange: (value: boolean) => void
}

export interface ProgressProps {
  steps: Steps[]
  children: ReactElement<ChildProps>[]
}

function TabNavigation({
  steps,
  setSteps,
  setSelectedTab
}: {
  steps: Steps[]
  setSteps: React.Dispatch<React.SetStateAction<Steps[]>>
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>
}) {
  const state = useContext(TabListStateContext)

  if (!state || !state.selectedKey) {
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
    prevKey && canMoveToPrev
      ? () => {
          // Update the steps to mark the current step as not progressed and cannot progress
          setSteps(prevSteps =>
            prevSteps.map((step, index) =>
              index === currentStepIndex
                ? { ...step, hasProgressed: false, canProgress: false } // Set both hasProgressed and canProgress to false
                : step
            )
          )
          if (prevKey) {
            setSelectedTab(prevKey as string) // Ensure prevKey is a string before passing
          }
        }
      : undefined

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
          if (nextKey) {
            setSelectedTab(nextKey as string) // Ensure nextKey is a string before passing
          }
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
        onClick={onNext} // Here we are correctly calling `onNext`, which executes the logic
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
  const [selectedTab, setSelectedTab] = useState<string>(initialSteps[0]?.title)
  const [valueFromChild, setValueFromChild] = useState<boolean | null>(null)
  useEffect(() => {
    console.log('Steps state has changed:', steps)
  }, [steps])

  const handleChildValueChange = (value: boolean) => {
    console.log('Steps state has changed:', value)
    setValueFromChild(value) // Update the value based on child validation
    if (value !== null) {
      setSteps(prevSteps =>
        prevSteps.map((step, index) =>
          index === steps.findIndex(step => step.title === selectedTab)
            ? { ...step, canProgress: value } // Only update the current step's canProgress state
            : step
        )
      )
    }
  }

  return (
    <div>
      <Tabs
        className={styles.progressContainer}
        selectedKey={selectedTab}
        onSelectionChange={key => setSelectedTab(key as string)}
      >
        <TabList
          aria-label='Steps'
          className={styles.stepsContainer}
        >
          {steps.map((step, index) => (
            <Tab
              key={step.title}
              id={step.title}
              isDisabled={index > 0 && !steps[index - 1]?.hasProgressed}
              className={clsx(
                styles.step,
                step.hasProgressed && styles.completed, // Apply completed style if `hasProgressed` is true
                index === steps.findIndex(step => step.title === selectedTab) &&
                  styles.current
              )}
            >
              <div className={clsx(styles.stepTitle)}>
                {step.hasProgressed &&
                  index !==
                    steps.findIndex(step => step.title === selectedTab) && (
                    <Check />
                  )}{' '}
                {/* Render Check if the step is completed */}
                {index ===
                  steps.findIndex(step => step.title === selectedTab) && (
                  <ChevronRight />
                )}
              </div>
              {step.title}
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    styles.progressBar,
                    step.hasProgressed && styles.progressBarCompleted
                  )}
                />
              )}
            </Tab>
          ))}
        </TabList>

        {Children.map(children, (child, index) => (
          <TabPanel
            key={steps[index]?.title || index}
            id={steps[index]?.title}
            className={styles.panel}
          >
            {steps[index]?.title}
            {React.cloneElement(child as React.ReactElement<any>, {
              onValueChange: handleChildValueChange // Pass the handler for validation to the child
            })}
          </TabPanel>
        ))}

        <TabNavigation
          steps={steps}
          setSteps={setSteps}
          setSelectedTab={setSelectedTab}
        />
      </Tabs>
    </div>
  )
}
//####   TESTING COMPONENTS  ##########

// Define types for form fields
interface FormField {
  name: string
  type: 'text' | 'email' | 'checkbox'
  label: string
  required?: boolean
  validation?: (value: string | boolean) => boolean
}

// Define the configuration of the form
const formConfig: FormField[] = [
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    required: true,
    validation: value => typeof value === 'string' && value.trim().length > 0
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    validation: value =>
      typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  },
  {
    name: 'agreeToTerms',
    type: 'checkbox',
    label: 'Agree to terms and conditions',
    required: true,
    validation: value => value === true
  }
]
interface ChildProps {
  onValueChange: (value: boolean) => void // Optional to handle any child
}

export const DynamicForm: React.FC<ChildProps> = ({ onValueChange }) => {
  // State to hold form values dynamically
  const [formData, setFormData] = useState<{ [key: string]: string | boolean }>(
    {}
  )
  const [isValid, setIsValid] = useState(false)

  // Function to validate the form dynamically
  const validateForm = (data: { [key: string]: string | boolean }) => {
    return formConfig.every(field => {
      if (!field.required) return true
      const value = data[field.name]
      return field.validation ? field.validation(value) : true
    })
  }
  // Handle input change dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value

    const updatedFormData = {
      ...formData,
      [name]: newValue
    }

    setFormData(updatedFormData)
    setIsValid(validateForm(updatedFormData))
  }

  // Handle form submission

  useEffect(() => {
    if (onValueChange) {
      onValueChange(isValid) // Pass the current value of `isActive` directly
    }
  }, [isValid, onValueChange])

  return (
    <form>
      {formConfig.map(field => (
        <div key={field.name}>
          <label htmlFor={field.name}>
            {field.label}
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              onChange={handleChange}
              value={
                field.type !== 'checkbox'
                  ? (formData[field.name] as string) || ''
                  : undefined
              }
              checked={
                field.type === 'checkbox'
                  ? (formData[field.name] as boolean) || false
                  : undefined
              }
            />
          </label>
        </div>
      ))}
    </form>
  )
}

interface CheckboxProps {
  onValueChange: (value: boolean) => void // Callback to notify parent of checkbox value
  label: string // Optional label for the checkbox
  defaultChecked?: boolean // Default state of the checkbox
}

export const Checkboxes: React.FC<CheckboxProps> = ({
  onValueChange,
  label,
  defaultChecked = false
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked
    setIsChecked(newValue) // Update internal state
    onValueChange(newValue) // Notify parent component with the new value
  }

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  )
}
