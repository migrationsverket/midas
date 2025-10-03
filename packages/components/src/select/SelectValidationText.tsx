import * as React from 'react'
import { FieldErrorContext } from 'react-aria-components'
import { ValidationText } from '../validation-text'
import { ListBoxOption } from '../list-box'
import type { MultiSelectState, SelectProps } from './types'

interface SelectValidationTextProps extends SelectProps {
  state: MultiSelectState<ListBoxOption>
}

export const SelectValidationText: React.FC<SelectValidationTextProps> = ({
  state,
  errorMessage,
}) => (
  <FieldErrorContext.Provider value={{ ...state.displayValidation }}>
    <ValidationText>{errorMessage}</ValidationText>
  </FieldErrorContext.Provider>
)
