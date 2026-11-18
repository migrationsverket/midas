'use client'
import styles from './ComboBox.module.css'
import {
  type FocusEventHandler,
  type ReactNode,
  type PointerEventHandler,
  useRef,
  useState,
} from 'react'
import type {
  ComboBoxProps as AriaComboBoxProps,
  ValidationResult,
} from 'react-aria-components'
import { Button, Group, ComboBox as AriaComboBox } from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import clsx from '../utils/clsx'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Size } from '../common/types'
import { ListBox, ListBoxPopover, ListBoxProps } from '../list-box'
import { LabelWrapper } from '../label/LabelWrapper'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { ListBoxEmptyState } from '../list-box/list-box-empty-state/ListBoxEmptyState'
import { ComboBoxTags, type TagOverflow } from './ComboBoxTags'
import { ComboBoxInput } from './ComboBoxInput'
import type { SelectionMode } from '../common/types'

export interface ComboBoxProps<
  T extends object,
  M extends SelectionMode = 'single',
> extends Omit<AriaComboBoxProps<T, M>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: ReactNode | ((item: T) => ReactNode)
  placeholder?: string
  errorPosition?: 'top' | 'bottom'
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
  popover?: InfoPopoverProps
  listBoxProps?: ListBoxProps<T>
  /**
   * Spike: how the selected tags behave when they don't fit on one row in
   * multi-select mode. `wrap` stacks them on more rows, `scroll` keeps one
   * row that scrolls sideways, and `collapse` shows the tags that fit and
   * "+n" for the rest
   * @default 'wrap'
   */
  tagOverflow?: TagOverflow
}

export function ComboBox<T extends object, M extends SelectionMode = 'single'>({
  label,
  description,
  errorMessage,
  children,
  items,
  className,
  errorPosition = 'top',
  size = 'large',
  popover,
  listBoxProps,
  tagOverflow = 'wrap',
  ...props
}: ComboBoxProps<T, M>) {
  const inputRef = useRef<HTMLInputElement>(null)
  // State rather than a ref, so ComboBoxTags gets the element once it's
  // there: a child's effects run before the parent's ref is attached
  const [fieldContent, setFieldContent] = useState<HTMLDivElement | null>(null)
  const isMultiple = props.selectionMode === 'multiple'
  const strings = useLocalizedStringFormatter(messages)

  const handleFieldPointerUp: PointerEventHandler<HTMLDivElement> = event => {
    const target = event.target as HTMLElement

    if (target.closest('[role="grid"]') || target.closest('button')) {
      return
    }

    inputRef.current?.focus()
    inputRef.current?.select()
  }

  // In a row that scrolls sideways, show whatever gets focus: the input
  // sits at the end and a tag can be anywhere along the row
  const handleFieldFocus: FocusEventHandler<HTMLDivElement> = event => {
    if (tagOverflow !== 'scroll') return
    scrollIntoRow(event.target, event.currentTarget)
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
      <Group
        className={styles.wrap}
        isReadOnly={props.isReadOnly}
        onPointerUp={handleFieldPointerUp}
      >
        <div
          className={clsx(styles.fieldContent, {
            [styles.medium]: size === 'medium',
            [styles.disabled]: props.isDisabled,
            [styles.scroll]: isMultiple && tagOverflow === 'scroll',
            [styles.collapse]: isMultiple && tagOverflow === 'collapse',
          })}
          data-tag-overflow={isMultiple ? tagOverflow : undefined}
          onFocus={handleFieldFocus}
          ref={setFieldContent}
        >
          <ComboBoxTags
            selectionMode={props.selectionMode}
            isDisabled={props.isDisabled}
            isReadOnly={props.isReadOnly}
            inputRef={inputRef}
            tagOverflow={tagOverflow}
            container={fieldContent}
          />
          <ComboBoxInput
            className={clsx(styles.inputField, {
              [styles.medium]: size === 'medium',
              [styles.multi]: props.selectionMode !== 'single',
            })}
            data-readonly={props.isReadOnly || undefined}
            ref={inputRef}
          />
        </div>
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
      </Group>
      {errorPosition === 'bottom' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
      <ListBoxPopover offset={4}>
        <ListBox
          items={items}
          renderEmptyState={() => (
            <ListBoxEmptyState>
              {strings.format('noResultsFound')}
            </ListBoxEmptyState>
          )}
          {...listBoxProps}
        >
          {children}
        </ListBox>
      </ListBoxPopover>
    </AriaComboBox>
  )
}

/** Scrolls the row sideways, and nothing else, so that `element` is in view */
export const scrollIntoRow = (element: Element, row: HTMLElement) => {
  const elementRect = element.getBoundingClientRect()
  const rowRect = row.getBoundingClientRect()
  const { paddingLeft, paddingRight } = getComputedStyle(row)
  const left = rowRect.left + parseFloat(paddingLeft)
  const right = rowRect.right - parseFloat(paddingRight)

  if (elementRect.left < left) row.scrollLeft -= left - elementRect.left
  else if (elementRect.right > right)
    row.scrollLeft += elementRect.right - right
}
