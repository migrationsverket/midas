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
  /**
   * Show month/year picker dropdowns in the header instead of the static
   * heading, letting users jump directly to a month/year instead of
   * paging one month at a time.
   * @default false
   */
  showMonthYearPicker?: boolean
}

export const RangeCalendar: React.FC<RangeCalendarProps> = ({
  className,
  errorMessage,
  showMonthYearPicker,
  ...rest
}) => (
  <div className={styles.container}>
    <AriaRangeCalendar
      className={clsx(styles.calendar, className)}
      data-readonly={rest.isReadOnly || undefined}
      {...rest}
    >
      <CalendarHeader
        {...rest}
        showMonthYearPicker={showMonthYearPicker}
      />
      <CalendarGrid {...rest} />
    </AriaRangeCalendar>
    <FieldError isInvalid={rest.isInvalid}>{errorMessage}</FieldError>
  </div>
)
