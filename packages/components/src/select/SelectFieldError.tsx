import * as React from 'react'
import { FieldErrorContext } from 'react-aria-components'
import { FieldError } from '../field-error'
import { Option, SelectProps } from './Select'
import { MultiSelectState } from './useMultiSelectState'

interface SelectFieldErrorProps extends SelectProps {
  state: MultiSelectState<Option>
}

export const SelectFieldError: React.FC<SelectFieldErrorProps> = ({
  state,
  errorMessage,
}) => (
  <FieldErrorContext.Provider value={{ ...state.displayValidation }}>
    <FieldError>{errorMessage}</FieldError>
  </FieldErrorContext.Provider>
)
