import React from 'react'
import styles from './Select.module.css'
import { FieldError } from 'react-aria-components'
import { MultiSelectState } from './useMultiSelectState'
import { SelectState } from 'react-stately'

interface SelectFieldErrorProps<T> {
  errorMessage?: string
  state: SelectState<T> | MultiSelectState<T>
}

export const SelectFieldError = <T,>({
  errorMessage,
  state,
}: SelectFieldErrorProps<T>) => {
  return (
    <>
      <FieldError className={styles.fieldError}>{errorMessage}</FieldError>
      {/*TODO: this solves the required error handling but could be worked into the aria validation*/}
      {state.displayValidation.validationErrors.length ? (
        <div className={styles.fieldError}>
          {errorMessage ||
            state.displayValidation.validationErrors.map(error => (
              <React.Fragment key={error}>{error}</React.Fragment>
            ))}
        </div>
      ) : null}
    </>
  )
}
