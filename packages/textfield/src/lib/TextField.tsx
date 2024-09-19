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
import clsx from 'clsx'
import { Button } from '@midas-ds/button'

export interface TextFieldProps extends AriaTextFieldProps {
  children?: ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const TextFieldWrapper: React.FC<TextFieldProps> = ({
  children,
  label,
  description,
  errorMessage,
  ...props
}) => {
  return (
    <AriaTextField
      {...props}
      className={styles.textField}
    >
      <FieldError className={clsx(styles.fieldError)}>
        <>
          <TriangleAlert />
          {errorMessage}
        </>
      </FieldError>
      {children}
      {description && (
        <Text
          slot="description"
          className={clsx(styles.text)}
        >
          {description}
        </Text>
      )}
      <Label className={styles.label}>{label}</Label>
    </AriaTextField>
  )
}

export const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  const [input, setInput] = React.useState<string>('')

  return (
    <TextFieldWrapper {...props}>
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
    </TextFieldWrapper>
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
