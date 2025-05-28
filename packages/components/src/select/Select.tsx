import * as React from 'react'
import clsx from 'clsx'
import { useObjectRef } from '@react-aria/utils'
import { Item, Section } from '@react-stately/collections'
import { CollectionChildren, Key } from '@react-types/shared'
import { TagList, TextField } from 'react-aria-components'
import { SelectListBox } from './SelectListBox'
import { useMultiSelect } from './useMultiSelect'
import { useMultiSelectState, MultiSelectProps } from './useMultiSelectState'
import { TagGroup, Tag } from '../tag'
import useObserveElement from '../utils/useObserveElement'
import { HiddenMultiSelect } from './HiddenMultiSelect'
import { Label } from '../label'
import { Text } from '../text'
import { Size } from '../common/types'
import { Checkbox } from '../checkbox'
import { ListBoxButton, ListBoxPopover } from '../list-box'
import { MultiSelectValueTag } from './MultiSelectValueTag'
import { SelectTrigger } from './SelectTrigger'
import { SelectFieldError } from './SelectFieldError'
import styles from './Select.module.css'

export type OptionItem = {
  children?: never
  id: Key
  name: string | React.ReactNode
  /**
   * Textual representation of `name` in case it is not a string. Used for searching.
   */
  textValue?: string
  /**
   * Allow additional properties for an option.
   */
  [prop: string]: unknown
}

type OptionSection = {
  children: OptionItem[]
  name: string
}

export type Option = OptionItem | OptionSection

export type SelectionMode = 'single' | 'multiple'

export interface SelectProps extends MultiSelectProps<Option> {
  /**
   * Whether the element should receive focus on render.
   */
  autoFocus?: boolean
  children: CollectionChildren<Option>
  /**
   * Sets the CSS [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.
   */
  className?: string
  /**
   * Sets the default open state of the field (uncontrolled).
   */
  defaultOpen?: boolean
  excludeFromTabOrder?: boolean
  items: Option[]
  /**
   * Whether the field can be emptied.
   *  @default true
   */
  isClearable?: boolean
  /**
   * Whether the field is disabled.
   */
  isDisabled?: boolean
  /**
   * Whether to show a button to select all items.
   */
  isSelectableAll?: boolean
  /**
   * Sets the open state of the field (controlled).
   */
  isOpen?: boolean
  /**
   * The content to display as the label.
   */
  label: string
  /**
   * Optional description
   */
  description?: string
  /**
   * Placeholder value
   */
  placeholder?: string
  /**
   * Show selected items as tags below select
   */
  showTags?: boolean
  /**
   * The type of selection that is allowed in the collection.
   * @default 'single'
   */
  selectionMode?: SelectionMode
  /**
   * The selection is valid or not
   */
  isInvalid?: boolean
  /**
   * Error message to be displayed in case of invalid state
   */
  errorMessage?: string
  /**
   * Whether the field is required.
   */
  isRequired?: boolean
  /**
   * Name of the field, for uncontrolled use
   */
  name?: string
  /**
   * The position of the error message
   * @default "top"
   */
  errorPosition?: 'top' | 'bottom'
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   */
  size?: Size
}

export const SelectComponent = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ isClearable = true, ...rest }, ref) => {
    const props: SelectProps = {
      selectionMode: 'single',
      errorPosition: 'top',
      disallowEmptySelection: !isClearable,
      isClearable,
      ...rest,
    }

    const triggerRef = useObjectRef(ref)

    const state = useMultiSelectState(props)

    const { labelProps, triggerProps, valueProps, menuProps } = useMultiSelect(
      props,
      state,
      triggerRef,
    )

    const { width: triggerWidth } = useObserveElement(triggerRef.current, {
      includePadding: true,
    })

    return (
      <TextField
        {...props}
        aria-label={props.label || 'placeholder'}
        className={clsx(styles.wrapper, props.className)}
      >
        <HiddenMultiSelect
          {...props}
          state={state}
          triggerRef={triggerRef}
        />
        {props.label && (
          <Label
            {...labelProps}
            data-disabled={props.isDisabled || undefined}
          >
            {props.label}
          </Label>
        )}
        {props.description && (
          <Text slot='description'>{props.description}</Text>
        )}
        {props.errorPosition === 'top' && (
          <SelectFieldError
            {...props}
            state={state}
          />
        )}
        <SelectTrigger
          {...props}
          {...triggerProps}
          isInvalid={state.displayValidation.isInvalid}
          triggerRef={triggerRef}
          state={state}
        >
          {props.selectionMode === 'multiple' && state.selectedItems ? (
            <span {...valueProps}>
              <MultiSelectValueTag
                {...props}
                state={state}
                parentWidth={triggerWidth}
                onClear={() => state.selectionManager.clearSelection()}
                triggerRef={triggerRef}
              />
            </span>
          ) : null}
        </SelectTrigger>
        {props.errorPosition === 'bottom' && (
          <SelectFieldError
            {...props}
            state={state}
          />
        )}
        <ListBoxPopover
          isOpen={state.isOpen}
          onOpenChange={(isOpen: boolean) => {
            if (!isOpen) {
              state.close()
            }
          }}
          triggerRef={triggerRef}
          style={{ width: triggerWidth }}
        >
          {props.isSelectableAll && (
            <ListBoxButton
              onClick={() => state.selectionManager.toggleSelectAll()}
            >
              <div className={styles.checkboxContainer}>
                <Checkbox
                  isSelected={state.selectionManager.isSelectAll}
                  isIndeterminate={
                    !state.selectionManager.isSelectAll &&
                    !state.selectionManager.isEmpty
                  }
                  isReadOnly
                  excludeFromTabOrder
                />
              </div>
              <span>Select All</span>
            </ListBoxButton>
          )}
          <SelectListBox
            {...menuProps}
            state={state}
          />
        </ListBoxPopover>
        {props.showTags && !!state.selectedItems && (
          <TagGroup
            aria-label='Selected Items'
            selectionBehavior='toggle'
            onRemove={keys =>
              state.selectionManager.toggleSelection(Array.from(keys)[0])
            }
            className={styles.tagGroup}
          >
            <TagList items={state.selectedItems}>
              {item => (
                <Tag
                  key={item.key}
                  textValue={item.textValue}
                  id={item.key}
                  dismissable
                  isDisabled={props.isDisabled}
                >
                  {item.textValue}
                </Tag>
              )}
            </TagList>
          </TagGroup>
        )}
      </TextField>
    )
  },
)

type SelectContainerProps = Omit<SelectProps, 'children' | 'items'> & {
  /** Item objects in the collection. */
  options: Option[]
}

export const Select = React.forwardRef<HTMLButtonElement, SelectContainerProps>(
  ({ options, ...props }, ref) => (
    <SelectComponent
      {...props}
      items={options}
      ref={ref}
    >
      {section =>
        section.children ? (
          <Section
            key={section.name}
            items={section.children}
            title={section.name}
          >
            {item => <Item textValue={item.textValue}>{item.name}</Item>}
          </Section>
        ) : (
          <Item textValue={section.textValue}>{section.name}</Item>
        )
      }
    </SelectComponent>
  ),
)

Select.displayName = 'Select'
