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
  Virtualizer,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Item, Section } from './types'
import { Size } from '../common/types'
import { SectionedListLayout } from '../common/SectionedListLayout'

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  placeholder?: string
  errorPosition?: 'top' | 'bottom'
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  className,
  errorPosition = 'top',
  size = 'large',
  ...props
}: ComboBoxProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaComboBox
      className={clsx(styles.combobox, className)}
      ref={ref}
      {...props}
    >
      {label && <Label>{label}</Label>}
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
      <div className={styles.wrap}>
        <Input
          className={clsx(styles.inputField, {
            [styles.medium]: size === 'medium',
          })}
        />
        <Button
          className={clsx(styles.button, {
            [styles.medium]: size === 'medium',
          })}
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
        <Virtualizer
          layout={SectionedListLayout}
          layoutOptions={{
            headingHeight: 44,
          }}
        >
          <ListBox
            className={styles.listBox}
            items={items}
          >
            {children}
          </ListBox>
        </Virtualizer>
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
