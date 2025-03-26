'use client'

import * as React from 'react'

import styles from './Radio.module.css'
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps,
  ValidationResult,
  RadioProps,
  Radio as AriaRadio,
  Group,
} from 'react-aria-components'
import clsx from 'clsx'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'

interface MVDSRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
  children?: React.ReactNode
  /** Label for the RadioGroup */
  label?: string
  /** Additional description rendered below the label */
  description?: string
  /** String to display as error message or function to handle the result and produce the error message */
  errorMessage?: string | ((validation: ValidationResult) => string)
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
  ...props
}) => {
  // TODO: Should we refactor this aswell?
  return (
    <AriaRadioGroup
      {...props}
      className={clsx(styles.radioGroup, className)}
    >
      {label && <Label variant='label-02'>{label}</Label>}
      {description && <Text slot='description'>{description}</Text>}
      <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      <Group className={styles.wrap}>{children}</Group>
    </AriaRadioGroup>
  )
}

/**
 * Radio item
 * */
export const Radio = (props: RadioProps) => (
  <AriaRadio
    className={styles.radio}
    {...props}
  />
)
