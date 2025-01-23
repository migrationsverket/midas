'use client'

import React from 'react'
import type {
  ListBoxItemProps,
  SelectProps as AriaSelectProps,
  ValidationResult
} from 'react-aria-components'
import {
  Select as AriaSelect,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import styles from 'packages/components/src/select/src/Select.module.css'
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
  const selectRef = React.useRef<HTMLDivElement>(null)

  return (
    <AriaSelect
      className={styles.select}
      ref={selectRef}
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
            aria-hidden='true'
          >
            <ChevronDown
              size={20}
              aria-hidden
            />
          </div>
        </Button>
      </InputWrapper>
      <Popover
        className={styles.popover}
        offset={0}
        UNSTABLE_portalContainer={selectRef.current || undefined}
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
