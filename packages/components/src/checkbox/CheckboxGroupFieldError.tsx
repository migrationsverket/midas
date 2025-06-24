import * as React from 'react'
import { FieldErrorContext } from 'react-aria-components'
import type { CheckboxGroupState } from 'react-stately'
import type { CheckboxGroupProps } from './CheckboxGroup'
import { FieldError } from '../field-error'

interface CheckboxGroupFieldErrorProps extends CheckboxGroupProps {
  state: CheckboxGroupState
}

export const CheckboxGroupFieldError: React.FC<
  CheckboxGroupFieldErrorProps
> = ({ state, errorMessage }) => (
  <FieldErrorContext.Provider value={state.displayValidation}>
    <FieldError>{errorMessage}</FieldError>
  </FieldErrorContext.Provider>
)
