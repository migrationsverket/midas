import { useButton } from '@react-aria/button'
import { FocusRing } from '@react-aria/focus'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import { Item, Section } from '@react-stately/collections'
import { CollectionChildren, Key } from '@react-types/shared'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import * as React from 'react'
import { TagList, TextField } from 'react-aria-components'
import { SelectListBox } from './SelectListBox'
import { SelectPopover } from './SelectPopover'
import { useMultiSelect } from './useMultiSelect'
import { useMultiSelectState, MultiSelectState } from './useMultiSelectState'
import styles from './Select.module.css'
import { ChevronDown, X } from 'lucide-react'
import { TagGroup, Tag } from '../tag'
import { type ErrorPosition, FieldError } from '../field-error'
import useObserveElement from '../utils/useObserveElement'
import { HiddenMultiSelect } from './HiddenMultiSelect'
import { Label } from '../label'

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
export type SelectionMode = 'single' | 'multiple'

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

  /**
   * The type of selection that is allowed in the collection.
   * @default 'single'
   */
  selectionMode: SelectionMode
  /** The selection is valid or not  */
  isInvalid?: boolean
  /** Error message to be displayed in case of invalid state*/
  errorMessage?: string
  /** Whether the field is required. */
  isRequired?: boolean
  /** Name of the field, for uncontrolled use */
  name?: string
  errorPosition?: ErrorPosition
}

export const SelectComponent = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    { selectionMode = 'single', errorPosition = 'top', ...rest },
    forwardedRef,
  ) => {
    const props = {
      selectionMode,
      ...rest,
    }

    const {
      autoFocus,
      className,
      excludeFromTabOrder,
      isClearable = true,
      isDisabled,
      isSelectableAll,
      label,
      description,
      placeholder,
      showTags,
      errorMessage,
    } = props

    const refAllButton = useRef<HTMLInputElement>(null)
    const ref = useObjectRef(forwardedRef)
    const disallowEmptySelection = !isClearable

    const state = useMultiSelectState({
      ...props,
      disallowEmptySelection,
    })
    const { labelProps, triggerProps, valueProps, menuProps } = useMultiSelect(
      {
        ...props,
        disallowEmptySelection,
      },
      state,
      ref,
    )
    const { buttonProps } = useButton(
      { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
      ref,
    )

    const isActive = state.isOpen || state.selectedItems || state.selectedItem
    const isAllSelection = state.selectionManager.isSelectAll
    const isIndeterminateSelection =
      !isAllSelection && !state.selectionManager.isEmpty
    const hasClearButton =
      isClearable && (state.selectedItems || state.selectedItem)
    const hasHeader = isSelectableAll

    const handleClear = () => state.selectionManager.clearSelection()
    const handleSelectAll = () => state.selectionManager.toggleSelectAll()
    const handleRemove = (key: Key) =>
      state.selectionManager.toggleSelection(key)

    const { width: buttonWidth } = useObserveElement(ref.current)

    const formatItems = (
      items: NonNullable<MultiSelectState<Option>['selectedItems']>,
    ) => (
      <div
        className={clsx(styles.selectValueTag, {
          [styles.selectValueTagDisabled]: isDisabled,
        })}
      >
        <span
          className={styles.truncate}
          style={{ maxWidth: buttonWidth - 64 }}
        >
          {items.length > 1 ? `${items.length} valda` : items[0].textValue}
        </span>
        <button
          disabled={isDisabled}
          aria-label='Rensa alla'
          className={styles.clearButton}
          onClick={() => {
            handleClear()
            ref?.current?.focus()
          }}
        >
          <X
            width={20}
            height={20}
          />
        </button>
      </div>
    )

    useEffect(() => {
      if (refAllButton.current) {
        refAllButton.current.indeterminate = isIndeterminateSelection
      }
    }, [isIndeterminateSelection])

    return (
      <>
        <HiddenMultiSelect
          isDisabled={props.isDisabled}
          isRequired={props.isRequired}
          name={props.name}
          state={state}
          triggerRef={ref}
          label={props.label + '-hidden'}
        />
        <TextField
          {...props}
          className={clsx(
            [styles.multiSelect],
            {
              [styles.multiSelectOpen]: state.isOpen,
            },
            className,
          )}
        >
          <div className={styles.multiSelect}>
            {label && (
              <Label
                variant='label-02'
                {...labelProps}
                slot={'label'}
                className={clsx(styles.selectLabel, {
                  [styles.selectLabelActive]: isActive,
                  [styles.selectLabelDisabled]: isDisabled,
                })}
              >
                {label}
              </Label>
            )}
            {description && (
              <span
                className={clsx(styles.description, {
                  [styles.descriptionDisabled]: isDisabled,
                })}
                slot={'description'}
              >
                {description}
              </span>
            )}
            {errorPosition === 'top' && (
              <>
                <FieldError>{errorMessage}</FieldError>
                {/*TODO: this solves the required error handling but could be worked into the aria validation*/}
                {state.displayValidation.validationErrors.length ? (
                  <div className={styles.fieldError}>
                    {errorMessage ||
                      state.displayValidation.validationErrors.map(error => (
                        <React.Fragment key={error}>{error}</React.Fragment>
                      ))}
                  </div>
                ) : null}
              </>
            )}
            <FocusRing
              focusRingClass={styles.buttonFocused}
              autoFocus={autoFocus}
            >
              <div className={styles.selectContainer}>
                {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
                <button
                  {...buttonProps}
                  {...mergeProps}
                  className={clsx(styles.button, {
                    [styles.buttonOpen]: state.isOpen,
                    [styles.buttonActive]:
                      state.selectedItems || state.selectedItem,
                    [styles.buttonDisabled]: isDisabled,
                  })}
                  data-invalid={
                    state.displayValidation.validationErrors.length > 0 ||
                    state.displayValidation.isInvalid
                  }
                  type='button'
                  ref={ref}
                >
                  {state.selectionMode === 'multiple' &&
                  !state.selectedItems ? (
                    <span>{placeholder}</span>
                  ) : null}
                  {state.selectionMode === 'single' ? (
                    <span>
                      {state.selectedItem
                        ? state.selectedItem.textValue
                        : placeholder}
                    </span>
                  ) : null}
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
            {errorPosition === 'bottom' && (
              <>
                <FieldError>{errorMessage}</FieldError>
                {/*TODO: this solves the required error handling but could be worked into the aria validation*/}
                {state.displayValidation.validationErrors.length ? (
                  <div className={styles.fieldError}>
                    {errorMessage ||
                      state.displayValidation.validationErrors.map(error => (
                        <React.Fragment key={error}>{error}</React.Fragment>
                      ))}
                  </div>
                ) : null}
              </>
            )}
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
                            <div className={styles.checkboxContainer}>
                              <input
                                className={styles.checkbox}
                                type='checkbox'
                                checked={isAllSelection}
                                ref={refAllButton}
                                readOnly
                                tabIndex={-1}
                              />
                            </div>
                            <span>{'Select All'}</span>
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
          {showTags && state.selectedItems !== null && (
            <TagGroup
              aria-label={'Selected Items'}
              selectionBehavior={'toggle'}
              onRemove={keys => handleRemove([...keys][0])}
              className={styles.tagGroup}
              {...mergeProps}
            >
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
        </TextField>
      </>
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
