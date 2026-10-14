import * as React from 'react'
import {
  LabelProps,
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components'
import styles from './ProgressBar.module.css'
import { Label } from '../label'
import clsx from '../utils/clsx'

const CIRCLE_RADIUS = 8
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS
const INDETERMINATE_ARC = CIRCUMFERENCE * 0.25

export interface ProgressBarProps extends AriaProgressBarProps {
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
  /**
   * Renders a linear bar or a small circular ring.
   * @default 'linear'
   */
  shape?: 'linear' | 'circular'
  /**
   * Renders a smaller (20px) circular indicator, matching Spinner's `small` size.
   * Only meaningful when `shape='circular'`.
   * @default false
   */
  small?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  labelProps,
  showValueLabel = false,
  shape = 'linear',
  small = false,
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
              id={label ? '' : labelProps?.id}
              className={clsx(labelProps?.className, styles.value)}
            >
              {valueLabel}
            </Label>
          )}
          {shape === 'circular' ? (
            <svg
              className={clsx(styles.circular, small && styles.circularSmall)}
              viewBox='0 0 20 20'
              aria-hidden
            >
              <circle
                className={styles.circularTrack}
                cx={10}
                cy={10}
                r={CIRCLE_RADIUS}
              />
              <circle
                className={clsx(
                  styles.circularIndicator,
                  isIndeterminate && styles.circularIndeterminate,
                )}
                cx={10}
                cy={10}
                r={CIRCLE_RADIUS}
                style={
                  isIndeterminate
                    ? {
                        strokeDasharray: `${INDETERMINATE_ARC} ${CIRCUMFERENCE}`,
                      }
                    : {
                        strokeDasharray: CIRCUMFERENCE,
                        strokeDashoffset:
                          CIRCUMFERENCE * (1 - (percentage ?? 0) / 100),
                      }
                }
              />
            </svg>
          ) : (
            <div className={styles.track}>
              <div
                className={styles.indicator}
                style={{ width: `${isIndeterminate ? 50 : percentage}%` }}
              />
            </div>
          )}
        </>
      )}
    </AriaProgressBar>
  )
}
