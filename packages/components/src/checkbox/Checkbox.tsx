import { forwardRef } from 'react'
import {
  type CheckboxFieldProps as AriaCheckboxFieldProps,
  type ValidationResult,
} from 'react-aria-components'
import { Minus, Check } from 'lucide-react'
import { variables } from '@midas-ds/theme'
import { FieldError } from '../field-error'
import { Text } from '../text'
import styles from './Checkbox.module.css'
import { CheckboxField } from './CheckboxField'
import { CheckboxButton } from './CheckboxButton'

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
    return (
      <CheckboxField {...props}>
        {description && <Text slot='description'>{description}</Text>}
        {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
        <CheckboxButton
          ref={ref}
          className={className}
        >
          {({ isIndeterminate }) => (
            <>
              <div className={styles.indicator}>
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
        </CheckboxButton>
        {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      </CheckboxField>
    )
  },
)

Checkbox.displayName = 'Checkbox'
