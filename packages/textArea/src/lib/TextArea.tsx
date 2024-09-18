import styles from './TextArea.module.css'
import {
  TextArea as AriaTextArea,
  ValidationResult,
  TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import { TextFieldWrapper } from '@migrationsverket/textfield'
import clsx from 'clsx'
import React from 'react'

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
  const [value, setValue] = React.useState('')
  const [hasExceededMaxCharacters, setHasExceededMaxCharacters] =
    React.useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    if (maxCharacters) {
      setHasExceededMaxCharacters(newValue.length > maxCharacters)
    }
  }

  const Count = () => {
    if (maxCharacters) {
      return (
        <span className={styles.styledCounting}>
          {value.length} / {maxCharacters}
        </span>
      )
    }
    return null
  }

  const getErrorMessage = () => {
    if (hasExceededMaxCharacters && maxCharacters!= null) {
      return `'För många tecken, ${value.length - maxCharacters} tecken för mycket'.`
    }
    return errorMessage
  }

  return (
    <TextFieldWrapper
      label={label}
      description={description}
      errorMessage={getErrorMessage()}
      isInvalid={hasExceededMaxCharacters || props.isInvalid} 
      {...props}
    >
      <Count/>
      <AriaTextArea
        className={clsx(styles.textArea)}
        rows={rows}
        onChange={handleChange}
      />
    </TextFieldWrapper>
  )
}