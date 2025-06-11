import * as React from 'react'
import { FieldErrorContext } from 'react-aria-components'
import { FieldError } from '../field-error'
import { ListBoxOption } from '../list-box'
import type { MultiSelectState, SelectProps } from './types'

interface SelectFieldErrorProps extends SelectProps {
  state: MultiSelectState<ListBoxOption>
}

export const SelectFieldError: React.FC<SelectFieldErrorProps> = ({
  state,
  errorMessage,
}) => (
  <FieldErrorContext.Provider value={{ ...state.displayValidation }}>
    <FieldError>{errorMessage}</FieldError>
  </FieldErrorContext.Provider>
)
