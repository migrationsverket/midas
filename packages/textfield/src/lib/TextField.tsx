import React, { useState } from 'react'
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

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  description,
  errorMessage,
  ...props
}) => {
  const [type, setType] = useState(props.type)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(props.type !== 'password')

  return (
    <AriaTextField
      {...props}
      className={styles.textField}
      style={{ color: 'red' }}
    >
      <FieldError className={styles.fieldError}>
        <>
          <TriangleAlert />
          {errorMessage}
        </>
      </FieldError>
      {props.type === 'password' && (
        <label className={styles.passwordLabel}>
          {password !== '' ? (showPassword ? 'Dölj' : 'Visa') : ' '}
          <input
            type="checkbox"
            checked={showPassword}
            value={password}
            onChange={() => {
              setShowPassword((prev) => !prev)
              setType('text')
            }}
          />
        </label>
      )}
      <Input
        type={showPassword ? type : 'password'}
        className={styles.input}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      {description && (
        <Text
          slot="description"
          className={styles.text}
        >
          {description}
        </Text>
      )}
      <Label className={styles.label}>{label}</Label>
    </AriaTextField>
  )
}
