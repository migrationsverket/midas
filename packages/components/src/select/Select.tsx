import * as React from 'react'
import {
  SelectProps,
  ValidationResult,
  Select as AriaSelect,
} from 'react-aria-components'
import { FocusScope } from 'react-aria'
import { Label, type InfoPopoverProps } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import clsx from '../utils/clsx'
import { Size } from '../common/types'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { SelectAll } from './SelectAll'
import { MultiSelectValue } from './MultiSelectValue'
import { ListBox, type ListBoxProps } from '../list-box'
import { Popover } from '../popover'
import { SelectTags } from './SelectTags'
import { SelectTrigger } from './SelectTrigger'
import styles from './Select.module.css'

export type SelectionMode = 'single' | 'multiple'

export interface MidasSelectProps<
  T extends object,
  M extends SelectionMode = 'single',
> extends Omit<SelectProps<T, M>, 'children'> {
  children: React.ReactNode | ((item: T) => React.ReactNode)
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  /**
   * The position of the error message
   * @default "top"
   */
  errorPosition?: 'top' | 'bottom'
  /**
   * Whether to show a button to select all items.
   */
  isSelectableAll?: boolean
  items?: Iterable<T>
  label?: string
  /**
   * An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.
   */
  popover?: InfoPopoverProps
  /**
   * Show selected items as tags below select
   */
  showTags?: boolean
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   */
  size?: Size
  /**
   * Props passed to the internal Popover element.
   */
  popoverProps?: Omit<React.ComponentProps<typeof Popover>, 'children'>
  /**
   * Props passed to the internal ListBox element.
   */
  listBoxProps?: Omit<ListBoxProps<T>, 'items' | 'children'>
}

export function Select<T extends object, M extends SelectionMode = 'single'>({
  children,
  description,
  errorMessage,
  errorPosition = 'top',
  items,
  label,
  popover,
  popoverProps,
  listBoxProps,
  size = 'large',
  ...props
}: MidasSelectProps<T, M>) {
  return (
    <FocusScope>
      <AriaSelect
        {...props}
        className={clsx(props.className, styles.select)}
      >
        <LabelWrapper popover={popover}>
          {label && (
            <Label data-disabled={props.isDisabled || undefined}>{label}</Label>
          )}
        </LabelWrapper>
        {description && <Text slot='description'>{description}</Text>}
        {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
        <div
          className={styles.triggerContainer}
          data-disabled={props.isDisabled || undefined}
        >
          <SelectTrigger
            size={size}
            {...props}
          />
          {props.selectionMode === 'multiple' ? (
            <MultiSelectValue {...props} />
          ) : null}
        </div>
        {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
        <Popover
          // offset={0} looks flush, but React Aria floors the popover's
          // computed `top` to a whole pixel while leaving the trigger's own
          // (often fractional) width/position unrounded. When the trigger's
          // true bottom edge lands on a fractional pixel — common with
          // flex/grid-distributed widths — the popover can end up rendered
          // ~1px too high, covering the trigger's bottom border. offset={1}
          // adds enough buffer to absorb that rounding error.
          // See https://github.com/adobe/react-spectrum/issues/8857
          offset={1}
          hideArrow
          {...popoverProps}
          className={clsx(popoverProps?.className, styles.popover)}
        >
          {props.isSelectableAll && <SelectAll />}
          <ListBox
            escapeKeyBehavior='none'
            items={items}
            {...listBoxProps}
          >
            {children}
          </ListBox>
        </Popover>
        <SelectTags {...props} />
      </AriaSelect>
    </FocusScope>
  )
}
