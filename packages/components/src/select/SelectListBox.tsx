import clsx from 'clsx'
import * as React from 'react'
import styles from './Select.module.css'
import type { MultiSelectState } from './useMultiSelectState'
import { type AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import { Check } from 'lucide-react'
import { Label } from '../label'
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Virtualizer,
} from 'react-aria-components'
import { Checkbox } from '../checkbox'
import { SectionedListLayout } from '../common/SectionedListLayout'

interface ListBoxProps<T> extends AriaListBoxOptions<T> {
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

const Option = <T,>({ item, state }: OptionProps<T>) => (
  <ListBoxItem
    id={item.key}
    className={({ isDisabled, isFocused, isFocusVisible, isSelected }) =>
      clsx(styles.listBoxItem, {
        [styles.listBoxItemDisabled]: isDisabled,
        [styles.listBoxItemFocused]: isFocused,
        [styles.listBoxItemFocusVisible]: isFocusVisible,
        [styles.listBoxItemSelected]: isSelected,
      })
    }
    textValue={item.textValue}
  >
    {({ isDisabled, isSelected }) => (
      <>
        {state.selectionMode === 'multiple' && (
          <div className={styles.checkboxContainer}>
            <Checkbox
              isDisabled={isDisabled}
              isSelected={isSelected}
              isReadOnly
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
      </>
    )}
  </ListBoxItem>
)

const Section = <T,>({ section, state }: SectionProps<T>) => (
  <ListBoxSection id={section.key}>
    {section.rendered ? (
      <Header>
        <Label
          elementType='span'
          className={styles.selectSectionHeading}
        >
          {section.rendered}
        </Label>
      </Header>
    ) : null}
    {state.collection.getChildren ? (
      <Collection items={state.collection?.getChildren(section.key)}>
        {item => (
          <Option
            key={item.key}
            item={item}
            state={state}
          />
        )}
      </Collection>
    ) : null}
  </ListBoxSection>
)

export const SelectListBox = <T,>({ state, ...rest }: ListBoxProps<T>) => {
  return (
    <Virtualizer
      layout={SectionedListLayout}
      layoutOptions={{
        headingHeight: 44,
      }}
    >
      <ListBox
        {...rest}
        {...state}
        escapeKeyBehavior='none'
        onSelectionChange={state.setSelectedKeys}
        className={styles.listBox}
        items={state.collection}
      >
        {item =>
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
          )
        }
      </ListBox>
    </Virtualizer>
  )
}
