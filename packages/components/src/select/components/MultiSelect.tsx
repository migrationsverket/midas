import { FocusRing } from '@react-aria/focus'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import { Key } from '@react-types/shared'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import * as React from 'react'
import { TagList } from 'react-aria-components'
import { SelectListBox } from './SelectListBox'
import { SelectPopover } from './SelectPopover'
import { useMultiSelect } from '../hooks/useMultiSelect'
import {
  useMultiSelectState,
  MultiSelectState,
} from '../hooks/useMultiSelectState'
import styles from '../Select.module.css'
import { X } from 'lucide-react'
import { TagGroup, Tag } from '../../tag'
import useObserveElement from '../../utils/useObserveElement'
import { HiddenMultiSelect } from './HiddenMultiSelect'
import { Option, SelectProps } from '../types'
import { SelectTextField } from './SelectTextField'
import { SelectLabel } from './SelectLabel'
import { SelectDescription } from './SelectDescription'
import { SelectFieldError } from './SelectFieldError'
import { SelectButton } from './SelectButton'

export const MultiSelect = React.forwardRef<HTMLButtonElement, SelectProps>(
  (props, forwardedRef) => {
    const {
      className,
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

    const isActive = state.isOpen || !!state.selectedItems
    const isAllSelection = state.selectionManager.isSelectAll
    const isIndeterminateSelection =
      !isAllSelection && !state.selectionManager.isEmpty
    const hasClearButton = isClearable && state.selectedItems
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
          {...props}
          state={state}
          triggerRef={ref}
          label={props.label + '-hidden'}
        />
        <SelectTextField
          className={className}
          state={state}
          {...props}
          tags={
            showTags &&
            state.selectedItems !== null && (
              <TagGroup
                aria-label={'Selected Items'}
                selectionBehavior={'toggle'}
                onRemove={keys => handleRemove([...keys][0])}
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
            )
          }
        >
          <SelectLabel
            isActive={isActive}
            isDisabled={isDisabled}
            label={label}
            {...labelProps}
          />
          <SelectDescription
            description={description}
            errorMessage={errorMessage}
            isDisabled={isDisabled}
          />
          <SelectFieldError
            errorMessage={errorMessage}
            state={state}
          />
          <SelectButton
            autoFocus={props.autoFocus}
            placeholder={state.selectedItems ? '' : placeholder}
            excludeFromTabOrder={props.excludeFromTabOrder}
            isActive={!!state.selectedItems}
            isDisabled={props.isDisabled}
            isOpen={state.isOpen}
            ref={ref}
            triggerProps={triggerProps}
          >
            {state.selectedItems ? (
              <span {...valueProps}>{formatItems(state.selectedItems)}</span>
            ) : null}
          </SelectButton>

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
                selectionMode='multiple'
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
        </SelectTextField>
      </>
    )
  },
)
