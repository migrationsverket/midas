import { useListBox, useListBoxSection, useOption } from '@react-aria/listbox'
import clsx from 'clsx'
import * as React from 'react'
import styles from './Select.module.css'
import type { MultiSelectState } from './useMultiSelectState'
import type { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import { SelectState } from 'react-stately'
import { SelectProps } from './types'
import { Check } from 'lucide-react'

interface ListBoxProps<T> extends AriaListBoxOptions<T> {
  listBoxRef?: React.RefObject<HTMLUListElement>
  state: SelectState<T> | MultiSelectState<T>
  selectionMode: SelectProps['selectionMode']
}

type SectionProps<T> = {
  section: Node<T>
  state: SelectState<T> | MultiSelectState<T>
  selectionMode: SelectProps['selectionMode']
}

type OptionProps<T> = {
  item: Node<T>
  state: SelectState<T> | MultiSelectState<T>
  selectionMode: SelectProps['selectionMode']
}

const Option = <T,>({ item, state, selectionMode }: OptionProps<T>) => {
  const ref = React.useRef<HTMLLIElement>(null)
  const { optionProps, isDisabled, isSelected, isFocused, isFocusVisible } =
    useOption(
      {
        key: item.key,
      },
      state,
      ref,
    )

  return (
    <li
      {...optionProps}
      ref={ref}
      className={clsx(styles.listBoxItem, {
        [styles.listBoxItemDisabled]: isDisabled,
        [styles.listBoxItemFocused]: isFocused,
        [styles.listBoxItemFocusVisible]: isFocusVisible,
        [styles.listBoxItemSelected]: isSelected,
      })}
    >
      {selectionMode === 'multiple' && (
        <div className={styles.checkboxContainer}>
          <input
            className={styles.checkbox}
            type='checkbox'
            disabled={isDisabled}
            checked={isSelected}
            readOnly
          />
        </div>
      )}
      {typeof item.rendered === 'string' ? (
        <span className='truncate block'>{item.rendered}</span>
      ) : (
        item.rendered
      )}
      {isSelected && selectionMode === 'single' ? (
        <Check
          size={20}
          className={styles.listBoxItemCheckmark}
        />
      ) : null}
    </li>
  )
}

const Section = <T,>({ section, state, selectionMode }: SectionProps<T>) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  })

  return (
    <li
      {...itemProps}
      className={''}
    >
      {section.rendered && (
        <span
          {...headingProps}
          className={styles.selectSectionHeading}
        >
          {section.rendered}
        </span>
      )}
      <ul {...groupProps}>
        {Array.from(section.childNodes).map(node => (
          <Option
            key={node.key}
            item={node}
            state={state}
            selectionMode={selectionMode}
          />
        ))}
      </ul>
    </li>
  )
}

export const SelectListBox = <T,>(props: ListBoxProps<T>) => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { listBoxRef = ref, state, selectionMode } = props

  const { listBoxProps } = useListBox(
    {
      ...props,
      // When Select is clearable, do not clear the selection once ESC key is pressed, see https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/selection/src/useSelectableCollection.ts#L226
      disallowEmptySelection: true,
    },
    state,
    listBoxRef,
  )

  return (
    <ul
      {...listBoxProps}
      className={styles.listBox}
      ref={listBoxRef}
    >
      {Array.from(state.collection).map(item =>
        item.type === 'section' ? (
          <Section
            key={item.key}
            section={item}
            state={state}
            selectionMode={selectionMode}
          />
        ) : (
          <Option
            key={item.key}
            item={item}
            state={state}
            selectionMode={selectionMode}
          />
        ),
      )}
    </ul>
  )
}
