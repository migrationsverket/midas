import React from 'react'
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  FieldError,
  Label,
  Text,
  ValidationResult,
} from 'react-aria-components'
import { TriangleAlert } from 'lucide-react'
import styles from './Checkbox.module.css'

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const CheckboxGroup = ({
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) => {
  return (
    <AriaCheckboxGroup
      {...props}
      className={styles.checkboxGroup}
    >
      {({ isInvalid }) => (
        <>
          <Label className={styles.checkboxGroupLabel}>{label}</Label>
          {description && <Text slot="description">{description}</Text>}
          {children}
          <span className={styles.fieldError}>
            {isInvalid && (
              <TriangleAlert
                width={16}
                height={16}
              />
            )}
            <FieldError>{errorMessage}</FieldError>
          </span>
        </>
      )}
    </AriaCheckboxGroup>
  )
}
