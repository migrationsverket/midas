import * as React from 'react'
import {
  CalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridProps as AriaCalendarGridProps,
  RangeCalendarContext,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Calendar.module.css'

export interface CalendarGridProps {
  weekdayStyle?: AriaCalendarGridProps['weekdayStyle']
  isReadOnly?: boolean
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  weekdayStyle = 'short',
  isReadOnly,
}) => {
  const isRange = !!React.useContext(RangeCalendarContext)

  return (
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
}
