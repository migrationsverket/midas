import React, { useContext, useState } from 'react'
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

function TabNavigation({ steps }: { steps: Steps[] }) {
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
    currentStepIndex < steps.length - 1 &&
    steps[currentStepIndex]?.canProgress &&
    steps[currentStepIndex]?.hasProgressed

  const onPrev =
    prevKey && canMoveToPrev ? () => state.setSelectedKey(prevKey) : undefined
  const onNext =
    nextKey && canMoveToNext ? () => state.setSelectedKey(nextKey) : undefined

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
export const Progress: React.FC<ProgressProps> = ({ steps }) => {
  const [selectedTab, setSelectedTab] = useState<string>(steps[0]?.title)

  const currentStep = steps.findIndex(step => step.title === selectedTab)

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
          {steps.map((step, index) => (
            <Tab
              key={step.title}
              id={step.title}
              isDisabled={!step.hasProgressed || !step.canProgress}
              className={clsx(
                styles.step,
                index < currentStep && styles.completed,
                index === currentStep && styles.current
              )}
            >
              <div
                className={clsx(
                  styles.stepTitle,
                  index < currentStep && styles.completed,
                  index === currentStep && styles.current
                )}
              >
                {step.title}
                {index === currentStep && <ChevronRight />}
                {index < currentStep && <Check />}
              </div>

              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    styles.progressBar,
                    index < currentStep && styles.progressBarCompleted
                  )}
                />
              )}
            </Tab>
          ))}
        </TabList>

        {steps.map(step => (
          <TabPanel
            key={step.title}
            id={step.title}
            className={styles.panel}
          >
            {step.title}
          </TabPanel>
        ))}

        <TabNavigation steps={steps} />
      </Tabs>
    </div>
  )
}
