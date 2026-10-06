import type { Key } from 'react-aria-components'
import { Tag, TagGroup, TagList } from '../../tag'
import type { CaseTypeNode, Leaf } from './data'
import { collapseSelection, groupSelection, type SummaryItem } from './summary'
import { CountPill } from './CountPill'
import styles from './spikes.module.css'

/**
 * - `leaves`: one tag per selected item
 * - `collapsed`: a fully selected branch is one tag, the rest one tag each
 * - `grouped`: one tag per parent at `groupLevel`, with a count
 */
export type SelectedDisplay = 'leaves' | 'collapsed' | 'grouped'

export interface SelectedListProps {
  selected: ReadonlySet<string>
  onSelectedChange: (selected: Set<string>) => void
  /** Every selectable item, to show names for the selected ids */
  leaves: Leaf[]
  label: string
  /** Show the count as a pill instead of "(n)" */
  showCount?: boolean
  /** @default 'leaves' */
  display?: SelectedDisplay
  /** The tree, needed for `collapsed` and `grouped` */
  nodes?: CaseTypeNode[]
  /** The level `grouped` summarises at, 1 = top. @default 1 */
  groupLevel?: number
}

const summaryText = (item: SummaryItem) => {
  if (item.kind === 'leaf') {
    return item.context ? `${item.name} · ${item.context}` : item.name
  }
  return item.count >= item.selectable
    ? `${item.name} · alla ${item.count}`
    : `${item.name} · ${item.count} av ${item.selectable}`
}

/** The running list of what's selected, as removable tags */
export const SelectedList = ({
  selected,
  onSelectedChange,
  leaves,
  label,
  showCount,
  display = 'leaves',
  nodes,
  groupLevel = 1,
}: SelectedListProps) => {
  const disabledIds = new Set(
    leaves.filter(leaf => leaf.isDisabled).map(leaf => leaf.id),
  )
  const selectedCount = leaves.filter(leaf => selected.has(leaf.id)).length

  const items: SummaryItem[] =
    display === 'leaves' || !nodes
      ? leaves
          .filter(leaf => selected.has(leaf.id))
          .map(leaf => ({
            id: leaf.id,
            kind: 'leaf',
            name: leaf.name,
            // Names can repeat (every enhet has a Juridik), so the nearest
            // parent goes with them
            context: leaf.path.split(' / ').slice(-1)[0],
            count: 1,
            selectable: 1,
            leafIds: [leaf.id],
          }))
      : display === 'collapsed'
        ? collapseSelection(nodes, selected)
        : groupSelection(nodes, selected, groupLevel)

  // Removing a summary tag clears everything it stands for, except disabled
  // items, which keep their state like everywhere else
  const handleRemove = (keys: Set<Key>) => {
    const next = new Set(selected)
    for (const key of keys) {
      const item = items.find(candidate => candidate.id === String(key))
      for (const id of item?.leafIds ?? []) {
        if (!disabledIds.has(id)) next.delete(id)
      }
    }
    onSelectedChange(next)
  }

  return (
    <div className={styles.selectedList}>
      <div className={styles.selectedHeading}>
        {label}
        {showCount ? (
          <CountPill
            count={selectedCount}
            hideWhenZero={false}
          />
        ) : (
          ` (${selectedCount})`
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
            {item => (
              <Tag
                id={item.id}
                isDismissable
                isDisabled={item.kind === 'leaf' && disabledIds.has(item.id)}
                textValue={summaryText(item)}
              >
                {summaryText(item)}
              </Tag>
            )}
          </TagList>
        </TagGroup>
      )}
    </div>
  )
}
