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
  ComboBox as AriaComboBox,
  Collection,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import { InfoPopoverProps, Label, LabelWrapper } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Size } from '../common/types'
import {
  ListBox,
  ListBoxItem,
  ListBoxSection,
  ListBoxPopover,
  type ListBoxOption,
  type ListBoxItemElement,
  type ListBoxSectionElement,
} from '../list-box'

export interface ComboBoxProps<T extends ListBoxOption>
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
  popover: InfoPopoverProps
}

export function ComboBox<T extends ListBoxOption>({
  label,
  description,
  errorMessage,
  children,
  items,
  className,
  errorPosition = 'top',
  size = 'large',
  popover,
  ...props
}: ComboBoxProps<T>) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleMouseUp: React.MouseEventHandler<HTMLInputElement> = event => {
    if (event.currentTarget.value) {
      inputRef.current?.select()
    }
  }

  return (
    <AriaComboBox
      className={clsx(styles.combobox, className)}
      {...props}
    >
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
      <div className={styles.wrap}>
        <Input
          className={clsx(styles.inputField, {
            [styles.medium]: size === 'medium',
          })}
          onMouseUp={handleMouseUp}
          ref={inputRef}
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
      <ListBoxPopover>
        <ListBox items={items}>{children}</ListBox>
      </ListBoxPopover>
    </AriaComboBox>
  )
}

export function ComboBoxItem<T extends ListBoxItemElement>(
  props: ListBoxItemProps<T>,
) {
  return <ListBoxItem {...props} />
}

/**
 * @deprecated since v.10.1.0 please use `ComboBoxSection` instead
 */
export function ComboBoxSelection<T extends ListBoxSectionElement>(props: T) {
  return (
    <ListBoxSection {...props}>
      <Collection items={props.children}>
        {item => <ComboBoxItem key={item.id}>{item.name}</ComboBoxItem>}
      </Collection>
    </ListBoxSection>
  )
}

export function ComboBoxSection<T extends ListBoxSectionElement>(props: T) {
  return <ComboBoxSelection {...props} />
}
