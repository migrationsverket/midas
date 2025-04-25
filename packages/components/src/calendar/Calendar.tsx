import * as React from 'react'
import {
  CalendarProps as AriaCalendarProps,
  DateValue,
  Calendar as AriaCalendar,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarGrid } from './components/CalendarGrid'
import { Text } from '../text'
import styles from './Calendar.module.css'

export interface CalendarProps extends AriaCalendarProps<DateValue> {
  errorMessage?: string
}

export const Calendar: React.FC<CalendarProps> = ({
  className,
  errorMessage,
  ...rest
}) => (
  <AriaCalendar
    className={clsx(styles.calendar, className)}
    {...rest}
  >
    <CalendarHeader />
    <CalendarGrid {...rest} />
    {errorMessage && <Text slot='errorMessage'>{errorMessage}</Text>}
  </AriaCalendar>
)
