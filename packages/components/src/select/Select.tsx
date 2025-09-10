import * as React from 'react'
import clsx from 'clsx'
import { useObjectRef } from '@react-aria/utils'
import { Item, Section } from '@react-stately/collections'
import { TagList, TextField } from 'react-aria-components'
import { SelectListBox } from './SelectListBox'
import { useMultiSelect } from './useMultiSelect'
import { useMultiSelectState } from './useMultiSelectState'
import { TagGroup, Tag } from '../tag'
import useObserveElement from '../utils/useObserveElement'
import { HiddenMultiSelect } from './HiddenMultiSelect'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { Checkbox } from '../checkbox'
import { ListBoxPopover } from '../list-box'
import { MultiSelectValueTag } from './MultiSelectValueTag'
import { SelectTrigger } from './SelectTrigger'
import { SelectFieldError } from './SelectFieldError'
import styles from './Select.module.css'
import type { SelectContainerProps, SelectProps } from './types'
import { LabelWrapper } from '../label/LabelWrapper'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

interface MidasSelectProps extends SelectProps {
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
}

const SelectComponent = React.forwardRef<HTMLButtonElement, MidasSelectProps>(
  ({ isClearable = true, popover, ...rest }, ref) => {
    const props: MidasSelectProps = {
      selectionMode: 'single',
      errorPosition: 'top',
      disallowEmptySelection: !isClearable,
      isClearable,
      size: 'large',
      popover,
      ...rest,
    }

    const triggerRef = useObjectRef(ref)

    const state = useMultiSelectState(props)

    const strings = useLocalizedStringFormatter(messages)

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
        className={clsx(styles.wrapper, props.className)}
      >
        <HiddenMultiSelect
          {...props}
          state={state}
          triggerRef={triggerRef}
        />
        <LabelWrapper popover={popover}>
          {props.label && (
            <Label
              {...labelProps}
              data-disabled={props.isDisabled || undefined}
            >
              {props.label}
            </Label>
          )}
        </LabelWrapper>
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
            <Checkbox
              isSelected={state.selectionManager.isSelectAll}
              isIndeterminate={
                !state.selectionManager.isSelectAll &&
                !state.selectionManager.isEmpty
              }
              className={styles.selectAll}
              onChange={() => state.selectionManager.toggleSelectAll()}
            >
              {strings.format('selectAll')}
            </Checkbox>
          )}
          <SelectListBox
            {...menuProps}
            state={state}
          />
        </ListBoxPopover>
        {props.showTags && !!state.selectedItems && (
          <TagGroup
            aria-label={strings.format('selectedItems')}
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
