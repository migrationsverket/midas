import * as React from 'react'
import {
  RangeCalendarProps,
  DateValue,
  RangeCalendar as AriaRangeCalendar,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarContent, CalendarContentProps } from './CalendarContent'
import styles from './Calendar.module.css'

export const RangeCalendar: React.FC<
  RangeCalendarProps<DateValue> & CalendarContentProps
> = ({ className, ...rest }) => (
  <AriaRangeCalendar
    className={clsx(styles.calendar, className)}
    {...rest}
  >
    <CalendarContent {...rest} />
  </AriaRangeCalendar>
)
