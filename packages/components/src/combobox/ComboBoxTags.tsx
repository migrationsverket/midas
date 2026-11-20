import { type RefObject, useContext } from 'react'
import { type Key, ComboBoxStateContext } from 'react-aria-components'
import { Tag, TagGroup, TagList } from '../tag'
import { useLocalizedStringFormatter } from '../utils/intl'
import type { SelectionMode } from '../common/types'
import messages from './intl/translations.json'
import styles from './ComboBox.module.css'

interface ComboBoxTagsProps {
  selectionMode?: SelectionMode
  isDisabled?: boolean
  isReadOnly?: boolean
  /** Gets focus when the last tag is removed */
  inputRef: RefObject<HTMLInputElement | null>
}

export const ComboBoxTags = ({
  selectionMode,
  isDisabled,
  isReadOnly,
  inputRef,
}: ComboBoxTagsProps) => {
  const strings = useLocalizedStringFormatter(messages)

  const state = useContext(ComboBoxStateContext)

  const handleRemove = (keys: Set<Key>) => {
    const isLastTag = state?.selectedItems.length === 1

    state?.selectionManager.toggleSelection(Array.from(keys)[0])

    // React Aria moves focus to the next tag, but the tag list goes away with
    // the last one, and focus would be left on the page. The input is where
    // the user carries on
    if (isLastTag) inputRef.current?.focus()
  }

  if (selectionMode !== 'multiple' || !state?.selectedItems.length) {
    return null
  }

  return (
    <TagGroup
      aria-label={strings.format('selectedItems')}
      onRemove={handleRemove}
      selectionBehavior='toggle'
      className={styles.tags}
    >
      <TagList
        items={state.selectedItems}
        className={styles.tags}
      >
        {item => (
          <Tag
            isDismissable={!isDisabled && !isReadOnly}
            id={item.key}
            isDisabled={isDisabled}
            key={item.key}
            textValue={item.textValue}
          >
            {item.textValue}
          </Tag>
        )}
      </TagList>
    </TagGroup>
  )
}
