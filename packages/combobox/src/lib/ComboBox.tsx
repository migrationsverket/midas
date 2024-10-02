'use client'
import styles from './ComboBox.module.css'
import React from 'react'
import type {
  ComboBoxProps as AriaComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from 'react-aria-components'
import {
  FieldError,
  Text,
  Label,
  Button,
  Input,
  Popover,
  ComboBox as AriaComboBox,
  ListBox,
  ListBoxItem,
} from 'react-aria-components'
import { ChevronDown, TriangleAlert } from 'lucide-react'

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
      {...props}
      className={styles.combobox}
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
    </AriaComboBox>
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
