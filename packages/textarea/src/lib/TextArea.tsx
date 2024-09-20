'use client'

import styles from './TextArea.module.css'
import {
  TextArea as AriaTextArea,
  ValidationResult,
  TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import { TextFieldWrapper } from '@midas-ds/textfield'
import React from 'react'

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string
  description?: string
  rows?: number
  maxCharacters?: number
  showCounter?: boolean
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const TextArea: React.FC<TextFieldProps> = ({
  label,
  description,
  rows,
  maxCharacters,
  errorMessage,
  showCounter,
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
    if (showCounter){
       return (
      <span className={styles.styledCounting}>
      {value.length} 
    </span>
    )
    }
   return null
  }

  const getErrorMessage = (maxCharacters: number) => {
    if (hasExceededMaxCharacters) {
      return `${value.length - maxCharacters} tecken för mycket`
    }
    return errorMessage
  }

  return (
    <TextFieldWrapper
      label={label}
      description={description}
      errorMessage={getErrorMessage(maxCharacters || 0)}
      isInvalid={hasExceededMaxCharacters || props.isInvalid}
     
      {...props}
    >
      <Count />
      <AriaTextArea
        className={styles.textArea}
        rows={rows}
        onChange={handleChange}
      />
    </TextFieldWrapper>
  )
}
