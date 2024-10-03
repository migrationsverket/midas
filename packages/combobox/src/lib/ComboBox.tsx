'use client'
import styles from './ComboBox.module.css'
import React from 'react'
import type {
  ComboBoxProps as AriaComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from 'react-aria-components'
import {
  Button,
  Input,
  Popover,
  ComboBox as AriaComboBox,
  ListBox,
  ListBoxItem,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import { InputWrapper } from '@midas-ds/textfield'

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
  return (
    <AriaComboBox
      className={styles.combobox}
      {...props}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <div className={styles.wrap}>
          <Input className={styles.input} />
          <Button className={styles.button}>
            <div
              className={styles.icon}
              aria-hidden="true"
            >
              <ChevronDown
                height={16}
                width={16}
              />
            </div>
          </Button>
        </div>
      </InputWrapper>

      <Popover
        className={styles.popover}
        offset={0}
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
