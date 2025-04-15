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
  ListBoxSection,
  Header,
  Collection,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Item, Section } from './types'

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  placeholder?: string
  errorPosition?: 'top' | 'bottom'
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  className,
  errorPosition = 'top',
  ...props
}: ComboBoxProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaComboBox
      className={clsx(styles.combobox, className)}
      ref={ref}
      {...props}
    >
      {label && <Label variant='label-02'>{label}</Label>}
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
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
      {errorPosition === 'bottom' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
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

export function ComboBoxSelection(props: Section<Item>) {
  return (
    <ListBoxSection id={props.name}>
      <Header>
        <Label
          variant='label-02'
          elementType='span'
          className={styles.sectionHeading}
        >
          {props.name}
        </Label>
      </Header>
      <Collection items={props.children}>
        {item => <ComboBoxItem key={item.id}>{item.name}</ComboBoxItem>}
      </Collection>
    </ListBoxSection>
  )
}
