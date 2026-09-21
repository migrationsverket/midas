import { CalendarYearPicker as AriaCalendarYearPicker } from 'react-aria-components'
import { CalendarPicker } from './CalendarPicker'

export interface CalendarYearPickerProps {
  isDisabled?: boolean
  /**
   * A read-only calendar still allows browsing months/years — it only
   * blocks date *selection* — so this only applies a cosmetic treatment,
   * matching the existing prev/next nav buttons' behaviour.
   */
  isReadOnly?: boolean
}

export const CalendarYearPicker = ({
  isDisabled,
  isReadOnly,
}: CalendarYearPickerProps) => (
  <AriaCalendarYearPicker>
    {props => (
      <CalendarPicker
        {...props}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        data-testid='calendar-year-picker'
      />
    )}
  </AriaCalendarYearPicker>
)
