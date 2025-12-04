import * as React from 'react'
import {
  RangeCalendar as AriaRangeCalendar,
  type DateValue,
  type RangeCalendarProps as AriaRangeCalendarProps,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarGrid } from './CalendarGrid'
import { CalendarHeader } from './CalendarHeader'
import { FieldError } from '../field-error'
import styles from './Calendar.module.css'

export interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
  errorMessage?: string
}

export const RangeCalendar: React.FC<RangeCalendarProps> = ({
  className,
  errorMessage,
  ...rest
}) => (
  <div className={styles.container}>
    <AriaRangeCalendar
      className={clsx(styles.calendar, className)}
      data-readonly={rest.isReadOnly || undefined}
      {...rest}
    >
      <CalendarHeader {...rest} />
      <CalendarGrid {...rest} />
    </AriaRangeCalendar>
    <FieldError isInvalid={rest.isInvalid}>{errorMessage}</FieldError>
  </div>
)
