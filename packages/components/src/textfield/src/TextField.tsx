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
import styles from 'packages/components/src/textfield/src/TextField.module.css'
import { Button } from '@midas-ds/button'
import clsx from 'clsx'

export interface TextFieldProps extends AriaTextFieldProps {
  children?: ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string) | undefined
  validationType?: 'ssn' | RegExp
  maxCharacters?: number
  showCounter?: boolean
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  description,
  errorMessage,
  validationType,
  validate,
  maxCharacters,
  showCounter,
  ...props
}) => {
  const [value, setValue] = React.useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
  }

  const validateInput = (
    value: string
  ): string | string[] | true | null | undefined => {
    if (validationType === 'ssn')
      return ssnRegEx.test(value) ? null : 'Felaktigt personnummer'

    if (validationType instanceof RegExp)
      return new RegExp(validationType).test(value)
        ? null
        : errorMessage?.toString()

    if (maxCharacters)
      return maxCharacters && value.length > maxCharacters
        ? `Du har angett ${value.length - maxCharacters} tecken för mycket. Fältet är begränsat till ${maxCharacters} tecken.`
        : null

    if (validate) return validate(value)

    return true
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

  return (
    <AriaTextField
      className={styles.inputField}
      validate={validateInput}
      {...props}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <Count />
        <div className={styles.wrap}>
          <Input
            type={props.type}
            className={styles.input}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <PasswordField
            type={props.type}
            input={value}
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
      <FieldError className={styles.fieldError}>{errorMessage}</FieldError>
      {children}
    </div>
  )
}

export const ssnRegEx = new RegExp(
  '^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$'
)
