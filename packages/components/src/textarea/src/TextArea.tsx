'use client'

import styles from 'packages/components/src/textarea/src/TextArea.module.css'
import {
  TextField as AriaTextField,
  TextArea as AriaTextArea,
  ValidationResult,
  TextFieldProps as AriaTextFieldProps
} from 'react-aria-components'
import { InputWrapper, TextFieldStyles } from '@midas-ds/textfield'
import * as React from 'react'
import clsx from 'clsx'

export interface TextAreaProps extends AriaTextFieldProps {
  /** Specify label displayed above the TextArea*/
  label?: string
  /** Specify description displayed below the label */
  description?: string
  /** Set number of rows for the TextArea */
  rows?: number
  /** Set number of characters that are allowed before the TextArea is put in an invalid state */
  maxCharacters?: number
  /**
   * Whether to show the character counter or not
   * @default
   * false
   */
  showCounter?: boolean
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  description,
  rows,
  maxCharacters,
  errorMessage,
  showCounter,
  validate,
  ...props
}) => {
  const [value, setValue] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    setValue(newValue)
  }

  const Count = () => {
    if (maxCharacters) {
      return (
        <span
          className={clsx(
            styles.count,
            value.length > maxCharacters && styles.countExceeded
          )}
        >
          {value.length} / {maxCharacters}
        </span>
      )
    }

    if (showCounter) {
      return <span className={styles.count}>{value.length}</span>
    }

    return null
  }

  const validateInput = (value: string) => {
    const maxCharactersError =
      maxCharacters && value.length > maxCharacters
        ? `Du har angett ${value.length - maxCharacters} tecken för mycket. Fältet är begränsat till ${maxCharacters} tecken.`
        : null

    const otherValidationError = validate ? validate(value) : null

    return maxCharactersError || otherValidationError || true
  }

  return (
    <AriaTextField
      className={TextFieldStyles.inputField}
      validate={validateInput}
      {...props}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <Count />
        <AriaTextArea
          className={styles.textArea}
          rows={rows}
          onFocus={handleChange}
          onChange={handleChange}
        />
      </InputWrapper>
    </AriaTextField>
  )
}
