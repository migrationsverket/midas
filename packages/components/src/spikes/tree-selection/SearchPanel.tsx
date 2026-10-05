import { Autocomplete, type Selection } from 'react-aria-components'
import { useFilter } from 'react-aria'
import { SearchField } from '../../search-field'
import { ListBox, ListBoxItem } from '../../list-box'
import { Text } from '../../text'
import { leaves as allLeaves, type Leaf } from './data'
import styles from './spikes.module.css'

export interface SearchPanelProps {
  label: string
  /** The ärendetyper to search, e.g. narrowed by a pre-filter */
  leaves?: Leaf[]
  selected: ReadonlySet<string>
  onSelectedChange: (selected: Set<string>) => void
  inputValue: string
  onInputChange: (value: string) => void
  /** Hide the result list until there's a query, for compact layouts */
  hideResultsWhenEmpty?: boolean
}

/**
 * The React Aria Autocomplete feel built from Midas parts: focus stays in the
 * SearchField while the arrow keys move a virtual highlight through a flat,
 * filtered, multi-select list of every leaf with its path.
 */
export const SearchPanel = ({
  label,
  leaves = allLeaves,
  selected,
  onSelectedChange,
  inputValue,
  onInputChange,
  hideResultsWhenEmpty,
}: SearchPanelProps) => {
  const { contains } = useFilter({ sensitivity: 'base' })
  const showResults = !hideResultsWhenEmpty || inputValue.trim() !== ''
  const disabledLeafIds = leaves
    .filter(leaf => leaf.isDisabled)
    .map(leaf => leaf.id)

  // Ärendetyper outside `leaves` (e.g. outside the pre-filter) can't be
  // toggled here, so they're always kept as they were
  const handleSelectionChange = (keys: Selection) => {
    const inList = new Set(leaves.map(leaf => leaf.id))
    const kept = [...selected].filter(id => !inList.has(id))
    const chosen =
      keys === 'all'
        ? leaves.filter(leaf => !leaf.isDisabled).map(leaf => leaf.id)
        : [...keys].map(String).filter(id => inList.has(id))

    onSelectedChange(new Set([...kept, ...chosen]))
  }

  return (
    <Autocomplete
      inputValue={inputValue}
      onInputChange={onInputChange}
      // Match on the name and the path, so "arbete" also finds every
      // ärendetyp under Tillstånd / Arbete
      filter={(textValue, input) => contains(textValue, input)}
    >
      <div className={styles.searchPanel}>
        <SearchField
          label={label}
          placeholder='Sök ärendetyp'
          showButton={false}
        />
        {showResults && (
          <div className={styles.results}>
            <ListBox<Leaf>
              aria-label='Sökresultat'
              items={leaves}
              selectionMode='multiple'
              selectedKeys={selected}
              onSelectionChange={handleSelectionChange}
              disabledKeys={disabledLeafIds}
              virtualized={false}
              renderEmptyState={() => (
                <div className={styles.empty}>Inga ärendetyper matchar</div>
              )}
            >
              {leaf => (
                <ListBoxItem
                  id={leaf.id}
                  textValue={`${leaf.name} ${leaf.path}`}
                >
                  <span className={styles.option}>
                    <Text slot='label'>{leaf.name}</Text>
                    <Text slot='description'>{leaf.path}</Text>
                  </span>
                </ListBoxItem>
              )}
            </ListBox>
          </div>
        )}
      </div>
    </Autocomplete>
  )
}
