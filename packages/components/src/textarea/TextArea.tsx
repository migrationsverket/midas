'use client'

import styles from './TextArea.module.css'
import {
  TextField as AriaTextField,
  TextArea as AriaTextArea,
  ValidationResult,
  TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import { InputWrapper } from '../textfield'
import TextFieldStyles from '../textfield/TextField.module.css'
import * as React from 'react'
import clsx from 'clsx'

export interface TextAreaProps extends AriaTextFieldProps {
  /** Specify label displayed above the TextArea*/
  label?: string
  /** Specify description displayed below the label */
  description?: string
  /** Set number of rows for the TextArea */
  rows?: number
  /** Set minimum number of characters that are allowed before the TextArea is put in an invalid state */
  minLength?: number
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
  maxLength,
  minLength,
  errorMessage,
  showCounter,
  validate,
  ...props
}) => {
  const [value, setValue] = React.useState(
    props.defaultValue ?? props.value ?? '',
  )
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    setValue(newValue)
  }

  const Count = () => {
    if (maxLength) {
      return (
        <span
          className={clsx(
            styles.count,
            value.length > maxLength && styles.countExceeded,
          )}
        >
          {value.length} / {maxLength}
        </span>
      )
    }

    if (showCounter) {
      return <span className={styles.count}>{value.length}</span>
    }

    return null
  }

  const validateInput = (value: string) => {
    const maxLengthError =
      maxLength && value.length > maxLength
        ? `Du har angett ${value.length - maxLength} tecken för mycket. Fältet är begränsat till ${maxLength} tecken.`
        : null

    const minLengthError =
      minLength && value.length < minLength
        ? `Du har angett ${Math.abs(value.length - minLength)} tecken för lite. Fältet kräver åtminstone ${minLength} tecken.`
        : null

    const otherValidationError = validate ? validate(value) : null

    return maxLengthError || minLengthError || otherValidationError || true
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
