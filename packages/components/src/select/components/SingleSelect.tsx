import { useObjectRef } from '@react-aria/utils'
import * as React from 'react'
import { SelectListBox } from './SelectListBox'
import { SelectPopover } from './SelectPopover'
import styles from '../Select.module.css'
import { SelectProps } from '../types'
import { useSelectState } from 'react-stately'
import { HiddenSelect, useSelect } from 'react-aria'
import { SelectLabel } from './SelectLabel'
import { SelectDescription } from './SelectDescription'
import { SelectFieldError } from './SelectFieldError'
import { SelectTextField } from './SelectTextField'
import { SelectButton } from './SelectButton'

export const SingleSelect = React.forwardRef<HTMLButtonElement, SelectProps>(
  (props, forwardedRef) => {
    const {
      className,
      isDisabled,
      label,
      description,
      placeholder,
      errorMessage,
    } = props

    const ref = useObjectRef(forwardedRef)
    const state = useSelectState({
      ...props,
      selectedKey: props.selectedKeys?.toString(),
      defaultSelectedKey: props.defaultSelectedKeys?.toString(),
    })

    const { labelProps, triggerProps, menuProps, valueProps } = useSelect(
      props,
      state,
      ref,
    )
    const isActive = state.isOpen || !!state.selectedItem

    return (
      <>
        <HiddenSelect
          {...props}
          state={state}
          triggerRef={ref}
          label={props.label + '-hidden'}
        />
        <SelectTextField
          className={className}
          state={state}
          {...props}
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
            excludeFromTabOrder={props.excludeFromTabOrder}
            isActive={!!state.selectedItem}
            isDisabled={props.isDisabled}
            isOpen={state.isOpen}
            placeholder={
              state.selectedItem ? state.selectedItem.textValue : placeholder
            }
            ref={ref}
            triggerProps={triggerProps}
            valueProps={valueProps}
          />
          {state.isOpen && (
            <SelectPopover
              className={styles.popover}
              isOpen={state.isOpen}
              onClose={state.close}
              triggerRef={ref}
            >
              <SelectListBox
                {...menuProps}
                selectionMode='single'
                state={state}
              />
            </SelectPopover>
          )}
        </SelectTextField>
      </>
    )
  },
)
