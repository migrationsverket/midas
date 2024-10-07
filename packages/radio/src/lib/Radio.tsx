'use client'

import React from 'react'

import styles from './Radio.module.css'
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps,
  ValidationResult,
  RadioProps,
  Radio as AriaRadio,
  Group,
} from 'react-aria-components'
import { InputWrapper } from '@midas-ds/textfield'

interface MVDSRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

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
