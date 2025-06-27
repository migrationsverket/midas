'use client'

import * as React from 'react'

import styles from './Radio.module.css'
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps,
  RadioProps,
  Radio as AriaRadio,
  Group,
  ValidationResult,
} from 'react-aria-components'
import clsx from 'clsx'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { LabelWrapper } from '../label/LabelWrapper'

interface MVDSRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
  children?: React.ReactNode
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
 * RadioGroup is used to group several radio items together
 */
export const RadioGroup: React.FC<MVDSRadioGroupProps> = ({
  label,
  description,
  errorMessage,
  children,
  className,
  errorPosition = 'top',
  popover,
  ...props
}) => {
  return (
    <AriaRadioGroup
      {...props}
      className={clsx(styles.radioGroup, className)}
    >
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
      <Group className={styles.wrap}>{children}</Group>
      {errorPosition === 'bottom' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
    </AriaRadioGroup>
  )
}

export const Radio = ({ className, ...rest }: RadioProps) => (
  <AriaRadio
    className={clsx(styles.radio, className)}
    {...rest}
  />
)
