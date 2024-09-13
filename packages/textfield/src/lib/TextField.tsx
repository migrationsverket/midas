import React, { ReactNode, useState } from 'react'
import {
  TextField as AriaTextField,
  Label,
  Input,
  FieldError,
  Text,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
  TextArea,
} from 'react-aria-components'
import styles from './TextField.module.css'
import { TriangleAlert } from 'lucide-react'
import clsx from 'clsx'

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
      className={clsx(styles.textField)}
      
    >
      <FieldError className={clsx(styles.fieldError)}>
        <>
          <TriangleAlert/>
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
  return (
    <TextFieldWrapper {...props}>
      <Input
        type={props.type}
        className={styles.input}
      />
    </TextFieldWrapper>
  )
}
