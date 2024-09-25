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
  isDisabled,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      className={styles.select}
      isDisabled={isDisabled}
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
        <span aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={'12'}
            fill={isDisabled ? '#BFBFBF' : '#000000'}
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
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
      {...props}
      className={styles.listBoxItem}
    />
  )
}
