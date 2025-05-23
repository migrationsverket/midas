import * as React from 'react'
import {
  Calendar as AriaCalendar,
  type CalendarProps as AriaCalendarProps,
  type DateValue,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { CalendarGrid } from './CalendarGrid'
import { CalendarHeader, CalendarHeader2 } from './CalendarHeader'
import { Text } from '../text'
import styles from './Calendar.module.css'
import { CalendarDate } from '@internationalized/date'

export interface CalendarProps extends AriaCalendarProps<DateValue> {
  errorMessage?: string
  focusedValue?: CalendarDate | undefined
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

export function Calendar1({
  className,
  errorMessage,
  onFocusChange,
  focusedValue,
  value,
  onChange,
  ...rest
}: CalendarProps): JSX.Element {
  return (
    <div>
      <AriaCalendar
        className={clsx(styles.calendar, className)}
        focusedValue={focusedValue}
        value={value}
        onChange={onChange}
        {...rest}
      >
        <CalendarHeader2 setFocusedDate={onFocusChange} />
        <CalendarGrid {...rest} />
        {errorMessage && <Text slot='errorMessage'>{errorMessage}</Text>}
      </AriaCalendar>
    </div>
  )
}
