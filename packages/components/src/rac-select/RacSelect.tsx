import * as React from 'react'
import {
  SelectProps,
  ValidationResult,
  Select,
  SelectValue,
  Popover,
} from 'react-aria-components'
import { FocusScope } from '@react-aria/focus'
import { Label, type InfoPopoverProps } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import clsx from '../utils/clsx'
import { Size } from '../common/types'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { SelectAll } from './SelectAll'
import { SelectValueTag } from './SelectValueTag'
import { ListBox } from '../list-box'
import { SelectTags } from './SelectTags'
import { SelectTrigger } from './SelectTrigger'
import styles from './RacSelect.module.css'

export type SelectionMode = 'single' | 'multiple'

export interface RacSelectProps<
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
}

export function RacSelect<
  T extends object,
  M extends SelectionMode = 'single',
>({
  children,
  description,
  errorMessage,
  errorPosition = 'top',
  items,
  label,
  popover,
  size = 'large',
  ...props
}: RacSelectProps<T, M>) {
  return (
    <FocusScope>
      <Select
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
          <SelectTrigger size={size} />
          <SelectValue
            className={styles.selectValue}
            data-disabled={props.isDisabled || undefined}
          >
            {renderProps =>
              renderProps.isPlaceholder ||
              props.selectionMode !== 'multiple' ? (
                <div className={clsx(styles.placeholder)}>
                  <span className={clsx(styles.truncate)}>
                    {renderProps.defaultChildren}
                  </span>
                </div>
              ) : (
                <SelectValueTag
                  {...props}
                  {...renderProps}
                />
              )
            }
          </SelectValue>
        </div>
        {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
        <Popover
          className={styles.popover}
          offset={0}
        >
          {props.isSelectableAll && <SelectAll />}
          <ListBox
            escapeKeyBehavior='none'
            items={items}
          >
            {children}
          </ListBox>
        </Popover>
        <SelectTags {...props} />
      </Select>
    </FocusScope>
  )
}
