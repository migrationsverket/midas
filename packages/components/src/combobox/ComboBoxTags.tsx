import { useContext } from 'react'
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
}

export const ComboBoxTags = ({
  selectionMode,
  isDisabled,
  isReadOnly,
}: ComboBoxTagsProps) => {
  const strings = useLocalizedStringFormatter(messages)

  const state = useContext(ComboBoxStateContext)

  const handleRemove = (keys: Set<Key>) => {
    state?.selectionManager.toggleSelection(Array.from(keys)[0])
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
