'use client'

import styles from './TextArea.module.css'
import {
  TextField as AriaTextField,
  TextArea as AriaTextArea,
  ValidationResult,
  TextFieldProps as AriaTextFieldProps
} from 'react-aria-components'
import { InputWrapper, TextFieldStyles } from '@midas-ds/textfield'
import React from 'react'
import clsx from 'clsx'

export interface TextAreaProps extends AriaTextFieldProps {
  label?: string
  description?: string
  rows?: number
  maxCharacters?: number
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
        ? `${value.length - maxCharacters} tecken för mycket`
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
