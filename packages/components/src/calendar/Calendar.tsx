import * as React from 'react'
import {
  Calendar as AriaCalendar,
  type CalendarProps as AriaCalendarProps,
  type DateValue,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarGrid } from './CalendarGrid'
import { CalendarHeader } from './CalendarHeader'
import { FieldError } from '../field-error'
import styles from './Calendar.module.css'

export interface CalendarProps extends AriaCalendarProps<DateValue> {
  errorMessage?: string
}

export const Calendar: React.FC<CalendarProps> = ({
  className,
  errorMessage,
  ...rest
}) => (
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
