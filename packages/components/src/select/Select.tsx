import { useButton } from '@react-aria/button'
import { FocusRing } from '@react-aria/focus'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import { Item, Section } from '@react-stately/collections'
import { CollectionChildren, Key } from '@react-types/shared'
import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'
import { TagList } from 'react-aria-components'
import { SelectListBox } from './SelectListBox'
import { SelectPopover } from './SelectPopover'
import { useMultiSelect } from './useMultiSelect'
import { useMultiSelectState, MultiSelectState } from './useMultiSelectState'
import styles from './Select.module.css'
import { ChevronDown, X } from 'lucide-react'
import { TagGroup, Tag } from '../tag'
import { Checkbox } from '../checkbox'

export type OptionItem = {
  children?: never

  id: string

  name: string | React.ReactNode

  /** Textual representation of `name` in case it is not a string. Used for searching. */
  textValue?: string

  /** Allow additional properties for an option. */
  [prop: string]: unknown
}

type OptionSection = {
  children: OptionItem[]
  name: string
}

export type Option = OptionItem | OptionSection

type SelectProps = {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean

  children: CollectionChildren<Option>

  /** Sets the CSS [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
  className?: string

  /** Sets the default open state of the field (uncontrolled). */
  defaultOpen?: boolean

  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKeys?: Parameters<
    typeof useMultiSelectState
  >['0']['defaultSelectedKeys']

  /** The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with. */
  disabledKeys?: Parameters<typeof useMultiSelectState>['0']['disabledKeys']

  excludeFromTabOrder?: boolean

  items: Option[]

  /** Whether the field can be emptied. */
  isClearable?: boolean

  /** Whether the field is disabled. */
  isDisabled?: boolean

  /** Whether to show a button to select all items. */
  isSelectableAll?: boolean

  /** Sets the open state of the field (controlled). */
  isOpen?: boolean

  /** The content to display as the label. */
  label: string

  /** Optional description */
  description?: string
  /** Placeholder value */
  placeholder?: string
  /** Show selected items as tags below select */
  showTags?: boolean
  /** Handler that is called when the select's open state changes. */
  onOpenChange?: Parameters<typeof useMultiSelectState>['0']['onOpenChange']

  /** Handler that is called when the selection changes. */
  onSelectionChange?: Parameters<
    typeof useMultiSelectState
  >['0']['onSelectionChange']

  /** The currently selected keys in the collection (controlled). */
  selectedKeys?: Parameters<typeof useMultiSelectState>['0']['selectedKeys']

  /** The type of selection that is allowed in the collection. */
  selectionMode: 'single' | 'multiple'
}

export const SelectComponent = React.forwardRef<HTMLButtonElement, SelectProps>(
  (props, forwardedRef) => {
    const {
      autoFocus,
      className,
      excludeFromTabOrder,
      isClearable,
      isDisabled,
      isSelectableAll,
      label,
      description,
      placeholder,
      showTags
    } = props

    const refAllButton = useRef<HTMLInputElement>(null)
    const ref = useObjectRef(forwardedRef)
    const disallowEmptySelection = !isClearable

    const state = useMultiSelectState({ ...props, disallowEmptySelection })
    const { labelProps, triggerProps, valueProps, menuProps } = useMultiSelect(
      {
        ...props,
        disallowEmptySelection
      },
      state,
      ref
    )
    const { buttonProps } = useButton(
      { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
      ref
    )

    const isActive = state.isOpen || state.selectedItems
    const isAllSelection = state.selectionManager.isSelectAll
    const isIndeterminateSelection =
      !isAllSelection && !state.selectionManager.isEmpty
    const hasClearButton = isClearable && state.selectedItems
    const hasHeader = isSelectableAll

    const handleClear = () => state.selectionManager.clearSelection()
    const handleSelectAll = () => state.selectionManager.toggleSelectAll()
    const handleRemove = (key: Key) =>
      state.selectionManager.toggleSelection(key)

    const formatItems = (
      items: NonNullable<MultiSelectState<Option>['selectedItems']>
    ) => {
      const firstItem = items[0].textValue.length > 20 ? `${items[0].textValue.slice(0, 20)}...` : items[0].textValue
      
      return (
      <span className={styles.selectValueTag}>
        {items.length > 1 ? `${items.length} valda` : firstItem}
        <button
          aria-label='Rensa alla'
          className={styles.clearButton}
          onClick={() => {
            handleClear()
            ref?.current?.focus()
          }}
        >
          <X
            width={16}
            height={16}
          />
        </button>
      </span>
    )}

    useEffect(() => {
      if (refAllButton.current) {
        refAllButton.current.indeterminate = isIndeterminateSelection
      }
    }, [isIndeterminateSelection])

    return (
      <div
        className={clsx(
          [styles.multiSelect],
          {
            [styles.multiSelectOpen]: state.isOpen
          },
          className
        )}
      >
        <div className={styles.multiSelect}>
          {label && (
            <label
              {...labelProps}
              slot={'label'}
              className={clsx(styles.selectLabel, {
                [styles.selectLabelActive]: isActive,
                [styles.selectLabelDisabled]: isDisabled
              })}
            >
              {label}
            </label>
          )}
          {description && (
            <span
              className={clsx(styles.description, {
                [styles.descriptionDisabled]: isDisabled
              })}
              slot={'description'}
            >
              {description}
            </span>
          )}
          <FocusRing
            focusRingClass={styles.buttonFocused}
            autoFocus={autoFocus}
          >
            <div className={styles.selectContainer}>
              <button
                {...buttonProps}
                className={clsx(styles.button, {
                  [styles.buttonOpen]: state.isOpen,
                  [styles.buttonActive]: state.selectedItems,
                  [styles.buttonDisabled]: isDisabled
                })}
                type='button'
                ref={ref}
              >
                {state.selectionMode === 'multiple' ? (
                  <span>{placeholder}</span>
                ) : (
                  <span>
                    {state.selectedItems?.length === 1
                      ? state.selectedItems[0].textValue
                      : placeholder}
                  </span>
                )}
                <div
                  className={styles.icon}
                  aria-hidden='true'
                >
                  <ChevronDown size={20} />
                </div>
              </button>
              {state.selectionMode === 'multiple' && state.selectedItems ? (
                <span {...valueProps}>
                  {formatItems(state.selectedItems)}
                </span>
              ) : null}
            </div>
          </FocusRing>
          {state.isOpen && (
            <SelectPopover
              isOpen={state.isOpen}
              onClose={state.close}
              className={styles.popover}
              triggerRef={ref}
            >
              {hasHeader && (
                <>
                  {isSelectableAll && (
                    <FocusRing focusRingClass={styles.listItemfocusRing}>
                      <button
                        type='button'
                        onClick={handleSelectAll}
                        className={styles.selectAllButton}
                      >
                        <div
                          className={styles.listBoxItem}
                          tabIndex={-1}
                        >
                          <Checkbox
                            isDisabled={isDisabled}
                            isSelected={isAllSelection}
                            isReadOnly
                            isIndeterminate={isIndeterminateSelection}
                            excludeFromTabOrder={true}
                          />
                          {/*                      <input
                        type='checkbox'
                        checked={isAllSelection}
                        ref={refAllButton}
                        readOnly
                        tabIndex={-1}
                      />*/}
                          {'Select All'}
                        </div>
                      </button>
                    </FocusRing>
                  )}
                  <div className='selectDivider' />
                </>
              )}
              <SelectListBox
                {...menuProps}
                state={state}
              />
              {/** Bottom clear button disabled for now, work in progress */}
              {hasClearButton && false && (
                <>
                  <div className='selectDivider' />
                  {/* TODO: Focus is not restored back to the list once button unmounts, see https://github.com/adobe/react-spectrum/issues/2415 */}
                  <button
                    type='button'
                    className={''}
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </>
              )}
            </SelectPopover>
          )}
        </div>
        {/*TODO FIX AND REFACTOR*/}
        {showTags && (
          <TagGroup
            aria-label={'Selected Items'}
            selectionBehavior={'toggle'}
            onRemove={keys => handleRemove([...keys][0])}
            {...mergeProps}
          >
            {/*@ts-ignore*/}
            <TagList items={state.selectedItems}>
              {item => (
                <Tag
                  key={item.key}
                  textValue={item.textValue}
                  id={item.key}
                  dismissable
                  isDisabled={isDisabled}
                >
                  {item.textValue}
                </Tag>
              )}
            </TagList>
          </TagGroup>
        )}
      </div>
    )
  }
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
  )
)

Select.displayName = 'Select'
