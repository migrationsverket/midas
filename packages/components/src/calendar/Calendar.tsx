import * as React from 'react'
import {
  Calendar as AriaCalendar,
  type CalendarProps as AriaCalendarProps,
  type DateValue,
} from 'react-aria-components'
import { type CalendarSelectionMode } from 'react-stately/useCalendarState'
import { clsx } from 'clsx'
import { CalendarGrid } from './CalendarGrid'
import { CalendarHeader } from './CalendarHeader'
import { FieldError } from '../field-error'
import styles from './Calendar.module.css'

export interface CalendarProps<M extends CalendarSelectionMode = 'single'>
  extends AriaCalendarProps<DateValue, M> {
  errorMessage?: string
}

export const Calendar = <M extends CalendarSelectionMode = 'single'>({
  className,
  errorMessage,
  ...rest
}: CalendarProps<M>) => (
  <div className={styles.container}>
    <AriaCalendar
      className={clsx(styles.calendar, className)}
      data-readonly={rest.isReadOnly || undefined}
      {...rest}
    >
      <CalendarHeader {...rest} />
      <CalendarGrid {...rest} />
    </AriaCalendar>
    <FieldError isInvalid={rest.isInvalid}>{errorMessage}</FieldError>
  </div>
)
