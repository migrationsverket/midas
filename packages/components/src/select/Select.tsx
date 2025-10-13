import * as React from 'react'
import clsx from '../utils/clsx'
import { useObjectRef } from '@react-aria/utils'
import { Item, Section } from '@react-stately/collections'
import { TagList } from 'react-aria-components'
import { SelectListBox } from './SelectListBox'
import { TagGroup, Tag } from '../tag'
import useObserveElement from '../utils/useObserveElement'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { Checkbox } from '../checkbox'
import { ListBoxOption, ListBoxPopover } from '../list-box'
import { MultiSelectValueTag } from './MultiSelectValueTag'
import { SelectTrigger } from './SelectTrigger'
import { SelectFieldError } from './SelectFieldError'
import styles from './Select.module.css'
import type { SelectContainerProps, SelectionMode, SelectProps } from './types'
import { LabelWrapper } from '../label/LabelWrapper'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { useSelectState } from 'react-stately'
import { HiddenSelect, useSelect } from 'react-aria'

interface MidasSelectProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> extends SelectProps<T, M> {
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
  selectRef: React.ForwardedRef<HTMLButtonElement | null>
}

const SelectComponent = <
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
>({
  isClearable = true,
  popover,
  selectRef,
  ...rest
}: MidasSelectProps<T, M>) => {
  const props: MidasSelectProps<T, M> = {
    errorPosition: 'top',
    isClearable,
    size: 'large',
    popover,
    selectRef,
    ...rest,
  }

  const triggerRef = useObjectRef(selectRef)

  const state = useSelectState(props)

  const strings = useLocalizedStringFormatter(messages)

  const { labelProps, triggerProps, valueProps, menuProps, hiddenSelectProps } =
    useSelect(props, state, triggerRef)

  const { width: triggerWidth } = useObserveElement(triggerRef.current, {
    includePadding: true,
  })

  const handleSelectAll = () => {
    if (state.selectionManager.isSelectAll) {
      return state.selectionManager.clearSelection()
    }

    return state.setValue(Array.from(state.collection.getKeys()))
  }

  return (
    <div className={clsx(styles.wrapper, props.className)}>
      <HiddenSelect
        {...hiddenSelectProps}
        label={`${props.label}-hidden`}
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
      {props.description && <Text slot='description'>{props.description}</Text>}
      {props.errorPosition === 'top' && (
        <SelectFieldError
          {...props}
          state={state}
        />
      )}
      <SelectTrigger
        {...props}
        {...triggerProps}
        value={triggerProps.value}
        isInvalid={state.displayValidation.isInvalid}
        triggerRef={triggerRef}
        state={state}
      >
        {props.selectionMode === 'multiple' &&
        typeof state.value !== 'number' &&
        state?.value?.length ? (
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
            onChange={handleSelectAll}
          >
            {strings.format('selectAll')}
          </Checkbox>
        )}
        <SelectListBox
          {...menuProps}
          disallowEmptySelection={!props.isClearable}
          state={state}
        />
      </ListBoxPopover>
      {props.showTags && !!state.selectedItems && (
        <TagGroup
          aria-label={strings.format('selectedItems')}
          selectionBehavior='toggle'
          onRemove={keys => {
            state.selectionManager.toggleSelection(Array.from(keys)[0])
          }}
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
    </div>
  )
}

export const SelectContainer = <
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
>(
  { options, ...props }: SelectContainerProps<T, M>,
  ref: React.ForwardedRef<HTMLButtonElement | null>,
) => (
  <SelectComponent
    {...props}
    items={options}
    selectRef={ref}
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

export const Select = React.forwardRef(SelectContainer) as <
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
>(
  props: SelectContainerProps<T, M> & {
    ref?: React.Ref<HTMLButtonElement>
  },
) => React.ReactElement
