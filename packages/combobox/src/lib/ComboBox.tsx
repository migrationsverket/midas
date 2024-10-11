'use client'
import styles from './ComboBox.module.css'
import React, { useState } from 'react'
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
import { ChevronDown as Chevron } from 'lucide-react'
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
  const [isOpen, setIsOpen] = useState(false);
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
          <Button className={styles.button} onPress={() => setIsOpen((prev) => !prev)}>
            <div
              className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
              aria-hidden="true"
            >
              <Chevron
                height={16}
                width={16}
              />
            </div>
          </Button>
        </div>
      </InputWrapper>

      <Popover
        className={`${styles.popover} ${isOpen ? styles.popoverOpen : ''}`}
        offset={0}
        onOpenChange={setIsOpen}
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
