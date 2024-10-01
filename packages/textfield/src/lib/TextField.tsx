'use client'

import React, { ReactNode } from 'react'
import {
  TextField as AriaTextField,
  Label,
  Input,
  FieldError,
  Text,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from 'react-aria-components'
import styles from './TextField.module.css'
import { TriangleAlert } from 'lucide-react'
import { Button } from '@midas-ds/button'

export interface TextFieldProps extends AriaTextFieldProps {
  children?: ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string) | undefined
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  description,
  errorMessage,
  ...props
}) => {
  const [input, setInput] = React.useState<string>('')

  return (
    <AriaTextField
      className={styles.inputField}
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
            onChange={(e) => setInput(e.target.value)}
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
            slot="description"
            className={styles.passwordText}
          >
            {input}
          </Text>
        )}
        <Button
          variant="tertiary"
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
          slot="description"
          className={styles.text}
        >
          {description}
        </Text>
      )}
      <FieldError className={styles.fieldError}>
        <>
          <TriangleAlert
            width={16}
            height={16}
          />
          {errorMessage}
        </>
      </FieldError>
      {children}
    </div>
  )
}
