import { FieldErrorContext } from 'react-aria-components'
import { type SelectState } from 'react-stately'
import { FieldError } from '../field-error'
import { ListBoxOption } from '../list-box'
import type { SelectProps, SelectionMode } from './types'

interface SelectFieldErrorProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> extends SelectProps<T, M> {
  state: SelectState<T, M>
}

export const SelectFieldError = <
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
>({
  state,
  errorMessage,
}: SelectFieldErrorProps<T, M>) => (
  <FieldErrorContext.Provider value={{ ...state.displayValidation }}>
    <FieldError>{errorMessage}</FieldError>
  </FieldErrorContext.Provider>
)
