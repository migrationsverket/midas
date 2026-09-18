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
  // React Aria's default ('select') commits an in-progress range using
  // whatever date currently has focus whenever focus/a pointer leaves the
  // calendar body — which the month/year picker's listbox options (not
  // `<button>`s, so they don't get RAC's own prev/next-button exception)
  // unintentionally trigger, silently turning "browse to another month to
  // pick an end date" into a bogus committed range. 'reset' fails safer:
  // it drops the in-progress selection instead of committing a wrong one.
  // Properly preserving the in-progress selection across navigation is a
  // separate, bigger fix — tracked as follow-up, not done here.
  commitBehavior = 'reset',
  ...rest
}) => (
  <div className={styles.container}>
    <AriaRangeCalendar
      className={clsx(styles.calendar, className)}
      data-readonly={rest.isReadOnly || undefined}
      commitBehavior={commitBehavior}
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
