'use client'
import styles from './ComboBox.module.css'
import React from 'react'
import type {
  ComboBoxProps as AriaComboBoxProps,
  ValidationResult,
} from 'react-aria-components'
import {
  Button,
  Input,
  ComboBox as AriaComboBox,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import clsx from '../utils/clsx'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Size } from '../common/types'
import {
  ListBox,
  ListBoxPopover,
} from '../list-box'
import { LabelWrapper } from '../label/LabelWrapper'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

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
  popover?: InfoPopoverProps
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
  popover,
  ...props
}: ComboBoxProps<T>) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const strings = useLocalizedStringFormatter(messages)

  const handleMouseUp: React.MouseEventHandler<HTMLInputElement> = event => {
    if (event.currentTarget.value) {
      inputRef.current?.select()
    }
  }

  return (
    <AriaComboBox
      className={clsx(styles.combobox, className)}
      {...props}
      data-readonly={props.isReadOnly || undefined}
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
          data-readonly={props.isReadOnly || undefined}
          onMouseUp={handleMouseUp}
          ref={inputRef}
        />
        <Button
          className={clsx(styles.button, {
            [styles.medium]: size === 'medium',
          })}
          aria-label={strings.format('showList')}
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
      <ListBoxPopover offset={4}>
        <ListBox
          items={items}
          renderEmptyState={() => (
            <Text className={styles.emptyState}>
              {strings.format('noResultsFound')}
            </Text>
          )}
        >
          {children}
        </ListBox>
      </ListBoxPopover>
    </AriaComboBox>
  )
}
