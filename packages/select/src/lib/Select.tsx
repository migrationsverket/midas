'use client'

import React from 'react'
import type {
  ListBoxItemProps,
  SelectProps as AriaSelectProps,
  ValidationResult,
} from 'react-aria-components'
import {
  Select as AriaSelect,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import styles from './Select.module.css'
import { InputWrapper } from '@midas-ds/textfield'

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      className={styles.select}
      {...props}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <Button className={styles.button}>
          <SelectValue />
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
      </InputWrapper>
      <Popover
        className={styles.popover}
        offset={0}
      >
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  )
}

export function Item(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      className={styles.listBoxItem}
      {...props}
    />
  )
}
