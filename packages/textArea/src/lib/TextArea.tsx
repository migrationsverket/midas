import styles from './TextArea.module.css'
import {
  TextArea as AriaTextArea,
  ValidationResult,
  TextAreaProps as AriaTextAreaProps,
  TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import { TextFieldWrapper } from '@migrationsverket/textfield'
import clsx from 'clsx'
import React, { useState } from 'react'

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string
  description?: string
  rows?: number
  maxCharacters?: number
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const TextArea: React.FC<TextFieldProps> = ({
  label,
  description,
  rows,
  maxCharacters,
  errorMessage,
  ...props
}) => {
  const [count, setCount] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentText = e.target.value
    const currentLength = currentText.length

    if (maxCharacters != null && currentLength > maxCharacters) {
      setError(
        `${errorMessage || 'skriv här ett fel meddelande'} ${currentLength - maxCharacters}.`
      )
    } else {
      setError(null)
    }

    if (maxCharacters == null || currentLength <= maxCharacters) {
      setCount(currentText)
    } else {
      setCount(currentText.substring(0, currentLength))
    }
  }
  const currentLength = count.length

  return (
    <TextFieldWrapper
      label={label}
      description={description}
      errorMessage={error || errorMessage}
      isInvalid={maxCharacters != null && currentLength > maxCharacters}
      {...props}
    >
      <div>
        {maxCharacters == undefined ? (
          <span className={styles.styledCounting}>{count.length}</span>
        ) : (
          <span className={styles.styledCounting}>
            {count.length}/{maxCharacters}
          </span>
        )}
      </div>

      <AriaTextArea
        className={clsx(styles.textArea)}
        rows={rows}
        onChange={handleChange}
      />
    </TextFieldWrapper>
  )
}
