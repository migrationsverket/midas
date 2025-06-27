import * as React from 'react'
import {
  RangeCalendar as AriaRangeCalendar,
  type DateValue,
  type RangeCalendarProps as AriaRangeCalendarProps,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarGrid } from './CalendarGrid'
import { CalendarHeader } from './CalendarHeader'
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
    <CalendarHeader isDisabled={rest.isDisabled} />
    <CalendarGrid
      {...rest}
      isRange
    />
    {errorMessage && <Text slot='errorMessage'>{errorMessage}</Text>}
  </AriaRangeCalendar>
)
