'use client'
import styles from 'packages/components/src/combobox/src/ComboBox.module.css'
import React from 'react'
import type {
  ComboBoxProps as AriaComboBoxProps,
  ListBoxItemProps,
  ValidationResult
} from 'react-aria-components'
import {
  Button,
  Input,
  Popover,
  ComboBox as AriaComboBox,
  ListBox,
  ListBoxItem
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import { InputWrapper } from '../../textfield'

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  placeholder?: string
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaComboBox
      className={styles.combobox}
      ref={ref}
      {...props}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <div className={styles.wrap}>
          <Input className={styles.input} />
          <Button
            className={styles.button}
            aria-label='Visa lista'
          >
            <div
              className={styles.icon}
              aria-hidden='true'
            >
              <ChevronDown
                size={20}
                aria-hidden
              />
            </div>
          </Button>
        </div>
      </InputWrapper>

      <Popover
        className={styles.popover}
        offset={0}
        UNSTABLE_portalContainer={ref.current || undefined}
      >
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaComboBox>
  )
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      className={styles.listBoxItem}
      {...props}
    />
  )
}
