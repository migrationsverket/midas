import {
  type RadioGroupProps as AriaRadioGroupProps,
  type ValidationResult,
  RadioGroup as AriaRadioGroup,
  composeRenderProps,
  Group,
} from 'react-aria-components'
import { Label, type InfoPopoverProps } from '../label'
import clsx from '../utils/clsx'
import { LabelWrapper } from '../label/LabelWrapper'
import { Text } from '../text'
import { FieldError } from '../field-error'
import styles from './Radio.module.css'
import { ClearContexts } from '../utils/ClearContexts'
import { useContextPropsWithoutRef } from '../utils/useContextPropsWithoutRef'
import { RadioGroupContext } from './RadioGroupContext'

export interface RadioGroupProps extends AriaRadioGroupProps {
  /** Label for the RadioGroup */
  label?: string
  /** Additional description rendered below the label */
  description?: string
  /** String to display as error message or function to handle the result and produce the error message */
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
}

/**
 * @deprecated since v17.0.0 please use `RadioGroupProps` instead
 */
export type MVDSRadioGroupProps = RadioGroupProps

/**
 * RadioGroup is used to group several radio items together
 */
export const RadioGroup = (localProps: RadioGroupProps) => {
  const {
    label,
    description,
    errorMessage,
    children,
    className,
    errorPosition = 'top',
    popover,
    ...props
  } = useContextPropsWithoutRef(localProps, RadioGroupContext)
  return (
    <AriaRadioGroup
      {...props}
      className={clsx(styles.radioGroup, className)}
    >
      {composeRenderProps(children, children => (
        <>
          <ClearContexts>
            <LabelWrapper popover={popover}>
              {label && <Label>{label}</Label>}
            </LabelWrapper>
            {description && <Text slot='description'>{description}</Text>}
            {errorPosition === 'top' && (
              <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
            )}
          </ClearContexts>
          {/* The consumer's radios, so they get the consumer's contexts */}
          <Group className={styles.wrap}>{children}</Group>
          {errorPosition === 'bottom' && (
            <ClearContexts>
              <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
            </ClearContexts>
          )}
        </>
      ))}
    </AriaRadioGroup>
  )
}
