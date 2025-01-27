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
import { InputWrapper } from '../textfield'

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
  ...props
}) => {
  return (
    <AriaRadioGroup
      {...props}
      className={styles.radioGroup}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <Group className={styles.wrap}>{children}</Group>
      </InputWrapper>
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
