import * as React from 'react'
import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components'
import styles from './ProgressBar.module.css'

interface Step {
  id: number
  title: string
}

interface ProgressBarProps extends AriaProgressBarProps {
  steps: Step[]
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  minValue = 0,
  ...props
}) => {
  return (
    <div>
      <div className={styles.heading}>
        {steps.map(({ title }, i) => (
          <div key={title + i}>
            {props.value !== undefined &&
              props.value < i &&
              'uncompleted task: '}
            {i === props.value && 'current task: '}
            {!!props.value && i < props.value && 'completed task: '}
            {title}
          </div>
        ))}
      </div>
      {props.value !== undefined && (
        <div className={styles.mobileHeading}>
          Steg {props.value === steps.length ? props.value : props.value + 1} av{' '}
          {steps.length}
        </div>
      )}
      <AriaProgressBar
        minValue={minValue}
        maxValue={props.maxValue || steps.length}
        {...props}
      >
        {({ percentage }) => (
          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: `${percentage}%` }}
            />
          </div>
        )}
      </AriaProgressBar>
    </div>
  )
}
