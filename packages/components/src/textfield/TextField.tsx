'use client'

import * as React from 'react'
import {Input} from '../input'
import {
  TextField as AriaTextField,
  Label,
  FieldError,
  Text,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from 'react-aria-components'
import styles from './TextField.module.css'
import { Button } from '../button'
import clsx from 'clsx'

export interface TextFieldProps extends AriaTextFieldProps {
  children?: React.ReactNode
  /** Specify label displayed above the TextField*/
  label?: string
  /** Specify description displayed below the label */
  description?: string
  /** Custom error messages */
  errorMessage?: string | ((validation: ValidationResult) => string) | undefined
  /** Enable validations or add your own regex */
  validationType?: 'ssn' | 'dossnr' | RegExp
  /**
   * Whether to show the character counter or not
   * @default
   * false
   */
  showCounter?: boolean
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  description,
  errorMessage,
  validationType,
  validate,
  maxLength,
  showCounter,
  className,
  ...props
}) => {
  const [value, setValue] = React.useState<string>(
    props.defaultValue ?? props.value ?? '',
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
  }

  const validateInput = (
    value: string,
  ): string | string[] | true | null | undefined => {
    if (validationType === 'ssn')
      return ssnRegEx.test(value) ? null : 'Felaktigt personnummer'

    if (validationType === 'dossnr')
      return dossNrRegEx.test(value) ? null : 'Felaktigt dossiernummer'

    if (validationType instanceof RegExp)
      return new RegExp(validationType).test(value)
        ? null
        : errorMessage?.toString()

    if (maxLength)
      return maxLength && value.length > maxLength
        ? `Du har angett ${value.length - maxLength} tecken för mycket. Fältet är begränsat till ${maxLength} tecken.`
        : null

    if (validate) return validate(value)

    return true
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

  return (
    <AriaTextField
      className={clsx(styles.inputField, className)}
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
  input,
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
  children,
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
      <FieldError
        data-testid='fieldError'
        className={styles.fieldError}
      >
        {errorMessage}
      </FieldError>
      {children}
    </div>
  )
}

export const ssnRegEx = new RegExp(
  '^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$',
)

export const dossNrRegEx = new RegExp(
  '^(\\d{1,2}\\+\\d{6}-\\d{1,2}$|\\d{1,2}-\\d{6}(/\\d{1,2})?$|\\d{1,2}\\d{6}$|\\d{6,8}$)',
)
