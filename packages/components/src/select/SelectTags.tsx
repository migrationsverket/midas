import { useContext } from 'react'
import { type Key, SelectStateContext, TagList } from 'react-aria-components'
import { Tag, TagGroup } from '../tag'
import { useLocalizedStringFormatter } from '../utils/intl'
import { MidasSelectProps } from './'
import messages from './intl/translations.json'
import { SelectionMode } from './'
import styles from './Select.module.css'

type SelectTagsProps<
  T extends object,
  M extends SelectionMode = 'single',
> = Pick<MidasSelectProps<T, M>, 'showTags' | 'isDisabled'>

export const SelectTags = <
  T extends object,
  M extends SelectionMode = 'single',
>({
  showTags,
  isDisabled,
}: SelectTagsProps<T, M>) => {
  const strings = useLocalizedStringFormatter(messages)

  const state = useContext(SelectStateContext)

  const handleRemove = (keys: Set<Key>) => {
    state?.selectionManager.toggleSelection(Array.from(keys)[0])
  }

  if (!state?.selectedItems.length || !showTags) {
    return null
  }

  return (
    <TagGroup
      aria-label={strings.format('selectedItems')}
      className={styles.tagGroup}
      onRemove={handleRemove}
      selectionBehavior='toggle'
    >
      <TagList items={state.selectedItems}>
        {item => (
          <Tag
            dismissable
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
