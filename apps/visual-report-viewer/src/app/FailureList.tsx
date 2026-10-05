import {
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  type Selection,
} from 'react-aria-components'
import type { ReportGroup } from './report'
import styles from './FailureList.module.css'

interface FailureListProps {
  groups: ReportGroup[]
  selectedKey: string | undefined
  onSelect: (key: string) => void
}

export function FailureList({
  groups,
  selectedKey,
  onSelect,
}: FailureListProps) {
  const onSelectionChange = (selection: Selection) => {
    if (selection === 'all') return
    const [key] = selection
    if (key !== undefined) onSelect(String(key))
  }

  return (
    <ListBox
      aria-label='Failed screenshots'
      className={styles.list}
      selectionMode='single'
      disallowEmptySelection
      selectedKeys={selectedKey ? [selectedKey] : []}
      onSelectionChange={onSelectionChange}
      renderEmptyState={() => (
        <p className={styles.empty}>No screenshots match.</p>
      )}
    >
      {groups.map(group => (
        <ListBoxSection
          key={group.key}
          id={group.key}
          className={styles.section}
        >
          <Header className={styles.header}>
            {group.group}
            <span className={styles.project}>{group.project}</span>
          </Header>
          {group.items.map(item => (
            <ListBoxItem
              key={item.key}
              id={item.key}
              textValue={item.test}
              className={styles.item}
            >
              <span className={styles.name}>{item.test}</span>
              {item.isNew && <span className={styles.badge}>New</span>}
            </ListBoxItem>
          ))}
        </ListBoxSection>
      ))}
    </ListBox>
  )
}
