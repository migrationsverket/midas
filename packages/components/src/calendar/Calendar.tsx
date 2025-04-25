import * as React from 'react'
import {
  Calendar as AriaCalendar,
  type CalendarProps as AriaCalendarProps,
  type DateValue,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarGrid } from './components/CalendarGrid'
import { CalendarHeader } from './components/CalendarHeader'
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
