import { forwardRef } from 'react'
import {
  type CheckboxFieldProps as AriaCheckboxFieldProps,
  type ValidationResult,
  useContextProps,
} from 'react-aria-components'
import { Minus, Check } from 'lucide-react'
import { variables } from '@midas-ds/theme'
import { FieldError } from '../field-error'
import { Text } from '../text'
import styles from './Checkbox.module.css'
import { CheckboxField } from './CheckboxField'
import { CheckboxButton } from './CheckboxButton'
import { splitDataAttributes } from '../utils/splitDataAttributes'
import { ClearContexts } from '../utils/ClearContexts'
import { CheckboxContext } from './CheckboxContext'

export interface CheckboxProps extends AriaCheckboxFieldProps {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (localProps, localRef) => {
    const [
      {
        className,
        description,
        errorMessage,
        errorPosition = 'top',
        children,
        ...fieldProps
      },
      ref,
    ] = useContextProps(localProps, localRef, CheckboxContext)
    // On the label, not the field wrapper, so clicking the test id checks it
    const [dataAttributes, props] = splitDataAttributes(fieldProps)
    return (
      <CheckboxField {...props}>
        <ClearContexts>
          {description && <Text slot='description'>{description}</Text>}
          {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
          <CheckboxButton
            {...dataAttributes}
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
          {errorPosition === 'bottom' && (
            <FieldError>{errorMessage}</FieldError>
          )}
        </ClearContexts>
      </CheckboxField>
    )
  },
)

Checkbox.displayName = 'Checkbox'
