import * as React from 'react'
import {
  CalendarProps,
  DateValue,
  Calendar as AriaCalendar,
} from 'react-aria-components'
import styles from './Calendar.module.css'
import { clsx } from 'clsx'
import { CalendarContent, CalendarContentProps } from './CalendarContent'

export const Calendar: React.FC<
  CalendarProps<DateValue> & CalendarContentProps
> = ({ className, ...rest }) => (
  <AriaCalendar
    className={clsx(styles.calendar, className)}
    {...rest}
  >
    <CalendarContent {...rest} />
  </AriaCalendar>
)
