import { SelectProps, ValidationResult } from 'react-aria-components'
import { Select, SelectValue, Button } from 'react-aria-components'
import { FocusScope } from '@react-aria/focus'
import {
  FieldError,
  Label,
  Text,
  Popover,
  InfoPopoverProps,
  type Size,
} from '../'
import { ChevronDown } from 'lucide-react'
import styles from './RacSelect.module.css'
import { useRef } from 'react'
import { SelectValueTag } from './SelectValueTag'
import { LabelWrapper } from '../label/LabelWrapper'
import { SelectTags } from './SelectTags'
import { SelectListBox } from './SelectListBox'
import clsx from '../utils/clsx'
import { SelectAll } from './SelectAll'

export interface RacSelectProps<
  T extends object,
  M extends 'single' | 'multiple',
> extends Omit<SelectProps<T, M>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  isClearable?: boolean
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
  /**
   * The position of the error message
   * @default "top"
   */
  errorPosition?: 'top' | 'bottom'
  /**
   * Show selected items as tags below select
   */
  showTags?: boolean
  /**
   * Whether to show a button to select all items.
   */
  isSelectableAll?: boolean
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   */
  size?: Size
}

export function RacSelect<
  T extends object,
  M extends 'single' | 'multiple' = 'single',
>({
  label,
  description,
  errorMessage,
  children,
  items,
  popover,
  ...props
}: RacSelectProps<T, M>) {
  const {
    selectionMode = 'single',
    errorPosition = 'top',
    size = 'large',
  } = props

  const triggerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <FocusScope>
      <Select
        {...props}
        className={styles.select}
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
            ref={triggerRef}
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
              renderProps.isPlaceholder || selectionMode === 'single' ? (
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
