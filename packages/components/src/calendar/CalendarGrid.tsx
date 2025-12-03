import * as React from 'react'
import {
  CalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridProps as AriaCalendarGridProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Calendar.module.css'

export interface CalendarGridProps {
  weekdayStyle?: AriaCalendarGridProps['weekdayStyle']
  isRange?: boolean
  isReadOnly?: boolean
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  weekdayStyle = 'short',
  isRange = false,
  isReadOnly,
}) => (
  <AriaCalendarGrid weekdayStyle={weekdayStyle}>
    {date => (
      <CalendarCell
        date={date}
        className={clsx(styles.day, isRange && styles.range)}
        data-readonly={isReadOnly || undefined}
      />
    )}
  </AriaCalendarGrid>
)
