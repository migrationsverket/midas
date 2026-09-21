import { CalendarMonthPicker as AriaCalendarMonthPicker } from 'react-aria-components'
import { CalendarPicker } from './CalendarPicker'

export interface CalendarMonthPickerProps {
  isDisabled?: boolean
  /**
   * A read-only calendar still allows browsing months/years — it only
   * blocks date *selection* — so this only applies a cosmetic treatment,
   * matching the existing prev/next nav buttons' behaviour.
   */
  isReadOnly?: boolean
}

export const CalendarMonthPicker = ({
  isDisabled,
  isReadOnly,
}: CalendarMonthPickerProps) => (
  <AriaCalendarMonthPicker>
    {props => (
      <CalendarPicker
        {...props}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        data-testid='calendar-month-picker'
      />
    )}
  </AriaCalendarMonthPicker>
)
