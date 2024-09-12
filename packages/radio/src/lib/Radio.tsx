'use client'

import React from 'react'
import * as Aria from 'react-aria-components'
import { TriangleAlert } from 'lucide-react'
import styles from './Radio.module.css'

interface MVDSRadioGroupProps extends Omit<Aria.RadioGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: Aria.ValidationResult) => string)
}

export const RadioGroup: React.FC<MVDSRadioGroupProps> = ({
  label,
  description,
  errorMessage,
  children,
  ...props
}) => {
  return (
    <Aria.RadioGroup
      {...props}
      className={styles.radioGroup}
    >
      {label && <Aria.Label className={styles.label}>{label}</Aria.Label>}
      {description && (
        <Aria.Text
          className={styles.text}
          slot="description"
        >
          {description}
        </Aria.Text>
      )}
      {children}
      {errorMessage && (
        <Aria.FieldError className={styles.fieldError}>
          <>
            <TriangleAlert
              height={16}
              width={16}
            />
            {errorMessage}
          </>
        </Aria.FieldError>
      )}
    </Aria.RadioGroup>
  )
}

/**
 * Radio item
 * */
export const Radio = (props: Aria.RadioProps) => (
  <Aria.Radio
    {...props}
    className={styles.radio}
  />
)
