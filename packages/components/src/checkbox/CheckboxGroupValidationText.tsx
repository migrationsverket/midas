import * as React from 'react'
import { FieldErrorContext } from 'react-aria-components'
import type { CheckboxGroupState } from 'react-stately'
import type { CheckboxGroupProps } from './CheckboxGroup'
import { ValidationText } from '../validation-text'

interface CheckboxGroupValidationTextProps extends CheckboxGroupProps {
  state: CheckboxGroupState
}

export const CheckboxGroupValidationText: React.FC<
  CheckboxGroupValidationTextProps
> = ({ state, errorMessage }) => (
  <FieldErrorContext.Provider value={state.displayValidation}>
    <ValidationText>{errorMessage}</ValidationText>
  </FieldErrorContext.Provider>
)
