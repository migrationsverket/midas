import { useListBox, useListBoxSection, useOption } from '@react-aria/listbox'
import clsx from 'clsx'
import * as React from 'react'
import styles from './Select.module.css'
import type { MultiSelectState } from './useMultiSelectState'
import type { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import { Check } from 'lucide-react'
import { Label } from '../label'

interface ListBoxProps<T> extends AriaListBoxOptions<T> {
  listBoxRef?: React.RefObject<HTMLUListElement>
  state: MultiSelectState<T>
}

type SectionProps<T> = {
  section: Node<T>
  state: MultiSelectState<T>
}

type OptionProps<T> = {
  item: Node<T>
  state: MultiSelectState<T>
}

const Option = <T,>({ item, state }: OptionProps<T>) => {
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
      {state.selectionMode === 'multiple' && (
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
      {isSelected && state.selectionMode === 'single' ? (
        <Check
          size={20}
          className={styles.listBoxItemCheckmark}
        />
      ) : null}
    </li>
  )
}

const Section = <T,>({ section, state }: SectionProps<T>) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  })

  return (
    <li
      {...itemProps}
      className=''
    >
      {section.rendered && (
        <Label
          {...headingProps}
          elementType='span'
          className={styles.selectSectionHeading}
        >
          {section.rendered}
        </Label>
      )}
      <ul {...groupProps}>
        {Array.from(section.childNodes).map(node => (
          <Option
            key={node.key}
            item={node}
            state={state}
          />
        ))}
      </ul>
    </li>
  )
}

export const SelectListBox = <T,>(props: ListBoxProps<T>) => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { listBoxRef = ref, state } = props

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
          />
        ) : (
          <Option
            key={item.key}
            item={item}
            state={state}
          />
        ),
      )}
    </ul>
  )
}
