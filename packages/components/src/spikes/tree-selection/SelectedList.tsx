import type { Key } from 'react-aria-components'
import { Tag, TagGroup, TagList } from '../../tag'
import { leaves } from './data'
import { CountPill } from './CountPill'
import styles from './spikes.module.css'

export interface SelectedListProps {
  selected: ReadonlySet<string>
  onSelectedChange: (selected: Set<string>) => void
  label?: string
  /** Show the count as a pill instead of "(n)" */
  showCount?: boolean
}

/** The running list of selected ärendetyper as removable tags */
export const SelectedList = ({
  selected,
  onSelectedChange,
  label = 'Valda ärendetyper',
  showCount,
}: SelectedListProps) => {
  const items = leaves.filter(leaf => selected.has(leaf.id))

  const handleRemove = (keys: Set<Key>) => {
    const next = new Set(selected)
    for (const key of keys) next.delete(String(key))
    onSelectedChange(next)
  }

  return (
    <div className={styles.selectedList}>
      <div className={styles.selectedHeading}>
        {label}
        {showCount ? (
          <CountPill
            count={items.length}
            hideWhenZero={false}
          />
        ) : (
          ` (${items.length})`
        )}
      </div>
      {items.length === 0 ? (
        <div className={styles.empty}>Inget valt än</div>
      ) : (
        <TagGroup
          aria-label={label}
          onRemove={handleRemove}
        >
          <TagList items={items}>
            {leaf => (
              <Tag
                id={leaf.id}
                isDismissable
                isDisabled={leaf.isDisabled}
                textValue={leaf.name}
              >
                {leaf.name}
              </Tag>
            )}
          </TagList>
        </TagGroup>
      )}
    </div>
  )
}
