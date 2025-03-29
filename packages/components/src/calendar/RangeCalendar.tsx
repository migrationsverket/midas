import * as React from 'react'
import {
  CalendarCell,
  CalendarGridProps,
  RangeCalendarProps,
  DateValue,
} from 'react-aria-components'
import {
  RangeCalendar as AriaRangeCalendar,
  CalendarGrid,
  Button,
} from 'react-aria-components'
import styles from './Calendar.module.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { isToday, getLocalTimeZone } from '@internationalized/date'
import { clsx } from 'clsx'
import { Heading } from '../heading'
import { Text } from '../text'

interface MidasCalendarProps<T extends DateValue>
  extends RangeCalendarProps<T>,
    Pick<CalendarGridProps, 'weekdayStyle'> {
  errorMessage?: string
}

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  weekdayStyle = 'short',
  className,
  ...props
}: MidasCalendarProps<T>) {
  return (
    <AriaRangeCalendar
      {...props}
      className={clsx(styles.calendar, className)}
    >
      <header className={styles.header}>
        <Button slot='previous'>
          <ChevronLeft />
        </Button>
        <Heading />
        <Button slot='next'>
          <ChevronRight />
        </Button>
      </header>
      <CalendarGrid
        className={styles.calendar}
        weekdayStyle={weekdayStyle}
      >
        {date => (
          <CalendarCell
            date={date}
            className={clsx(
              styles.day,
              isToday(date, getLocalTimeZone()) && styles.today,
            )}
          />
        )}
      </CalendarGrid>
      {errorMessage && <Text slot='errorMessage'>{errorMessage}</Text>}
    </AriaRangeCalendar>
  )
}
