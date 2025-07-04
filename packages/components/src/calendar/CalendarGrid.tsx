import * as React from 'react'
import {
  CalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridProps as AriaCalendarGridProps,
} from 'react-aria-components'
import clsx from 'clsx'
import { getLocalTimeZone, isToday } from '@internationalized/date'
import styles from './Calendar.module.css'

export interface CalendarGridProps {
  weekdayStyle?: AriaCalendarGridProps['weekdayStyle']
  isRange?: boolean
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  weekdayStyle = 'short',
  isRange = false,
}) => (
  <AriaCalendarGrid weekdayStyle={weekdayStyle}>
    {date => (
      <CalendarCell
        date={date}
        className={clsx(
          styles.day,
          isToday(date, getLocalTimeZone()) && styles.today,
          isRange && styles.range,
        )}
      />
    )}
  </AriaCalendarGrid>
)
