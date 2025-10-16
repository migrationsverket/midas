import * as React from 'react'
import {
  SelectProps,
  ValidationResult,
  Select,
  SelectValue,
  Button,
} from 'react-aria-components'
import { FocusScope } from '@react-aria/focus'
import { ChevronDown } from 'lucide-react'
import { Label, type InfoPopoverProps } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import clsx from '../utils/clsx'
import { Size } from '../common/types'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Popover } from '../popover'
import { SelectAll } from './SelectAll'
import { SelectValueTag } from './SelectValueTag'
import { SelectListBox } from './SelectListBox'
import { SelectTags } from './SelectTags'
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
  isClearable?: boolean
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
          <Button
            className={clsx(
              {
                [styles.medium]: size === 'medium',
              },
              styles.trigger,
            )}
          >
            <span aria-hidden='true'>
              <ChevronDown size={16} />
            </span>
          </Button>
          <SelectValue
            className={`${styles.selectValue} ${styles.truncate}`}
            data-disabled={props.isDisabled || undefined}
          >
            {renderProps =>
              renderProps.isPlaceholder ||
              props.selectionMode !== 'multiple' ? (
                renderProps.defaultChildren
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
          <SelectListBox
            disallowEmptySelection={!props.isClearable}
            items={items}
          >
            {children}
          </SelectListBox>
        </Popover>
        <SelectTags {...props} />
      </Select>
    </FocusScope>
  )
}
