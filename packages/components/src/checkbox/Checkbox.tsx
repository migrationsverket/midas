'use client'

import { forwardRef } from 'react'
import {
  CheckboxField as AriaCheckboxField,
  CheckboxButton as AriaCheckboxButton,
  type CheckboxFieldProps as AriaCheckboxFieldProps,
  type ValidationResult,
} from 'react-aria-components'
import { Minus, Check } from 'lucide-react'
import { variables } from '@midas-ds/theme'
import clsx from '../utils/clsx'
import { FieldError } from '../field-error'
import { Text } from '../text'
import styles from './Checkbox.module.css'

export interface CheckboxProps extends AriaCheckboxFieldProps {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      className,
      description,
      errorMessage,
      errorPosition = 'top',
      children,
      ...props
    },
    ref,
  ) => {
    const hasFieldContent = Boolean(description || errorMessage)

    return (
      <AriaCheckboxField
        {...props}
        className={
          hasFieldContent ? styles.checkboxWrapper : styles.checkboxField
        }
      >
        {description && <Text slot='description'>{description}</Text>}
        {errorPosition === 'top' && errorMessage && (
          <FieldError>{errorMessage}</FieldError>
        )}
        <AriaCheckboxButton
          ref={ref}
          className={clsx(styles.checkbox, className)}
        >
          {({ isIndeterminate }) => (
            <>
              <div className={styles.checkboxInner}>
                {isIndeterminate ? (
                  <Minus
                    size={14}
                    color={variables.iconOnColor}
                  />
                ) : (
                  <Check
                    size={14}
                    color={variables.iconOnColor}
                  />
                )}
              </div>
              {children}
            </>
          )}
        </AriaCheckboxButton>
        {errorPosition === 'bottom' && errorMessage && (
          <FieldError>{errorMessage}</FieldError>
        )}
      </AriaCheckboxField>
    )
  },
)

Checkbox.displayName = 'Checkbox'
