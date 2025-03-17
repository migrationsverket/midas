import { useRef } from 'react'
import { AriaCalendarCellProps, useCalendarCell } from '@react-aria/calendar'
import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'
import styles from './Kalender.module.css'
import clsx from 'clsx'

import { CalendarDate } from '@internationalized/date' // Import CalendarDate from @internationalized/date
import { CalendarState } from 'react-stately'

// Define the interface for the props, now using CalendarDate for the `date` property
interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState // The state of the calendar
  date: CalendarDate // The date is now of type CalendarDate from @internationalized/date
}

export const KalenderCell: React.FC<CalendarCellProps> = ({
  date,
  state,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null) // Ref for the calendar cell

  // Use the useCalendarCell hook, passing the correct props including `date` (as CalendarDate) and `state`
  const {
    cellProps,
    buttonProps,
    formattedDate,
    isSelected,
    isDisabled,
    isOutsideVisibleRange,
  } = useCalendarCell({ ...props, date }, state, ref)

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <td {...cellProps}>
      <div
        ref={ref}
        hidden={isOutsideVisibleRange}
        {...mergeProps(buttonProps, focusProps)}
        className={clsx(styles.cell, {
          [styles.selected]: isSelected,
          [styles.focusRing]: isFocusVisible,
          [styles.disabled]: isDisabled,
        })}
      >
        {formattedDate}
      </div>
    </td>
  )
}
