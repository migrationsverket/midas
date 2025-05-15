import * as React from 'react'
import {
  LabelProps,
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps
} from 'react-aria-components'
import styles from './ProgressBar.module.css'
import { Label } from '../label'
import clsx from 'clsx'

interface ProgressBarProps extends AriaProgressBarProps {
  /**
   * A visual label
   * */
  label?: string
  /**
   * Props for the visual label and/or the value label
   * */
  labelProps?: LabelProps
  /**
   * Show the value label
   */
  showValueLabel?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  labelProps,
  showValueLabel = false,
  ...progressBarProps
}) => {
  return (
    <AriaProgressBar
      {...progressBarProps}
      className={clsx(styles.progressBar, progressBarProps.className)}
    >
      {({ percentage, valueText: valueLabel, isIndeterminate }) => (
        <>
          {label && (
            <Label
              elementType='span'
              {...labelProps}
              className={clsx(labelProps?.className, styles.label)}
            >
              {label}
            </Label>
          )}
          {showValueLabel && (
            <Label
              elementType='span'
              {...labelProps}
              // Override the label id to prevent duplicates
              id=''
              className={clsx(labelProps?.className, styles.value)}
            >
              {valueLabel}
            </Label>
          )}
          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: `${isIndeterminate ? 50 : percentage}%` }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  )
}
