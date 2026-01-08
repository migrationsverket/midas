import { DatePickerState, DateRangePickerState } from 'react-aria-components'

export const isRangePickerState = (
  state: DateRangePickerState | DatePickerState | null,
): state is DateRangePickerState =>
  !!state &&
  !!state.value &&
  Object.prototype.hasOwnProperty.call(state.value, 'start')
