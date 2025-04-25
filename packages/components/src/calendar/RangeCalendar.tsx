import * as React from 'react'
import {
  RangeCalendarProps as AriaRangeCalendarProps,
  DateValue,
  RangeCalendar as AriaRangeCalendar,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarHeader } from './components/CalendarHeader'
import { CalendarGrid } from './components/CalendarGrid'
import { Text } from '../text'
import styles from './Calendar.module.css'

export interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
  errorMessage?: string
}

export const RangeCalendar: React.FC<RangeCalendarProps> = ({
  className,
  errorMessage,
  ...rest
}) => (
  <AriaRangeCalendar
    className={clsx(styles.calendar, className)}
    {...rest}
  >
    <CalendarHeader />
    <CalendarGrid {...rest} />
    {errorMessage && <Text slot='errorMessage'>{errorMessage}</Text>}
  </AriaRangeCalendar>
)
