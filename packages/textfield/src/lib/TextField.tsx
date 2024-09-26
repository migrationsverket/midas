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
  InputProps,
  TextProps,
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

// export const TextFieldWrapper: React.FC<TextFieldProps> = ({
//   children,
//   label,
//   description,
//   errorMessage,
//   ...props
// }) => {
//   return (
//     <AriaTextField
//       {...props}
//       className={styles.textField}
//     >
//       <FieldError className={clsx(styles.fieldError)}>
//         <>
//           <TriangleAlert />
//           {errorMessage}
//         </>
//       </FieldError>
//       {children}
//       {description && (
//         <Text
//           slot="description"
//           className={clsx(styles.text)}
//         >
//           {description}
//         </Text>
//       )}
//       <Label className={styles.label}>{label}</Label>
//     </AriaTextField>
//   )
// }

export const TextField: React.FC = <T extends AriaTextFieldProps>({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps<T>) => {
  const [input, setInput] = React.useState<string>('')

  return (
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

export interface InputWrapperProps {
  label?: string
  description?: string
  errorMessage?: string
  children: React.ReactNode
}

export const InputWrapper = ({
  label,
  description,
  errorMessage,
  children,
}: InputWrapperProps) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.labelGroup}>
        {label && <Label className={styles.label}>{label}</Label>}
        {description && (
          <Text
            slot="description"
            className={styles.text}
          >
            {description}
          </Text>
        )}
      </div>
      {children}
      <FieldError className={styles.fieldError}>
        <>
          <TriangleAlert />
          {errorMessage}
        </>
      </FieldError>
    </div>
  )
}
