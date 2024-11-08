'use client'

import React, { ReactNode } from 'react'
import {
  TextField as AriaTextField,
  Label,
  Input,
  FieldError,
  Text,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult
} from 'react-aria-components'
import styles from './TextField.module.css'
import { TriangleAlert } from 'lucide-react'
import { Button } from '@midas-ds/button'

export interface TextFieldProps extends AriaTextFieldProps {
  children?: ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string) | undefined
  validationType?: 'ssn' | RegExp
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  description,
  errorMessage,
  validationType,
  ...props
}) => {
  const [input, setInput] = React.useState<string>('')
  const [isValid, setIsValid] = React.useState<boolean>(true)

  const validateInput = (value: string) => {
    if (validationType === undefined) return true
    if (validationType === 'ssn') setIsValid(ssnRegEx.test(value))

    if (validationType instanceof RegExp)
      setIsValid(new RegExp(validationType).test(value))
  }

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    validateInput(value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <AriaTextField
      className={styles.inputField}
      isInvalid={validationType !== undefined ? !isValid : props.isInvalid}
      {...props}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <div className={styles.wrap}>
          <Input
            type={props.type}
            className={styles.input}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <PasswordField
            type={props.type}
            input={input}
          />
        </div>
      </InputWrapper>
    </AriaTextField>
  )
}

const PasswordField = ({
  type,
  input
}: {
  type: TextFieldProps['type']
  input: string
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  if (type === 'password')
    return (
      <>
        {showPassword && (
          <Text
            slot='description'
            className={styles.passwordText}
          >
            {input}
          </Text>
        )}
        <Button
          variant='tertiary'
          onPress={() => setShowPassword(!showPassword)}
          className={styles.passwordButton}
        >
          {showPassword ? 'Dölj' : 'Visa'}
        </Button>
      </>
    )

  return null
}

type InputWrapperProps = Pick<
  TextFieldProps,
  'label' | 'description' | 'errorMessage' | 'children'
>

export const InputWrapper = ({
  label,
  description,
  errorMessage,
  children
}: InputWrapperProps) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <Label className={styles.label}>{label}</Label>}
      {description && (
        <Text
          slot='description'
          className={styles.text}
        >
          {description}
        </Text>
      )}
      <FieldError className={styles.fieldError}>
        <>
          <TriangleAlert
            size={20}
            aria-hidden
          />
          {errorMessage}
        </>
      </FieldError>
      {children}
    </div>
  )
}

export const ssnRegEx = new RegExp(
  '^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$'
)
