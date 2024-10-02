'use client'

import React from 'react'
import type {
  ListBoxItemProps,
  SelectProps as AriaSelectProps,
  ValidationResult,
} from 'react-aria-components'
import {
  FieldError,
  Text,
  Select as AriaSelect,
  Label,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
} from 'react-aria-components'
import { TriangleAlert } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import styles from './Select.module.css'

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
      <Label className={styles.label}>{label}</Label>
      {description && (
        <Text
          slot="description"
          className={styles.text}
        >
          {description}
        </Text>
      )}
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
      {errorMessage && (
        <FieldError className={styles.fieldError}>
          <>
            <TriangleAlert
              height={16}
              width={16}
            />
            {errorMessage}
          </>
        </FieldError>
      )}
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
      value={props.value}
      className={styles.listBoxItem}
      {...props}
    />
  )
}
