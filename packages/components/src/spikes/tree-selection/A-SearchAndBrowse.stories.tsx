import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { Key } from 'react-aria-components'
import { ComboBox } from '../../combobox'
import { ListBoxItem } from '../../list-box'
import { Text } from '../../text'
import { flattenLeaves, leaves } from './data'
import { ScopeFilter, useScope } from './ScopeFilter'
import { SearchPanel } from './SearchPanel'
import { SelectedList } from './SelectedList'
import { TreeDialog } from './TreeDialog'
import styles from './spikes.module.css'

/** Search flat with the Autocomplete feel, browse the full tree separately */
const SearchAndBrowse = ({
  showCounts,
  withScope,
}: {
  showCounts?: boolean
  withScope?: boolean
}) => {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [query, setQuery] = useState('')
  const scope = useScope()
  const nodes = withScope ? scope.scopedNodes : scope.nodes

  return (
    <div className={styles.stack}>
      {withScope && <ScopeFilter scope={scope} />}
      <SearchPanel
        label='Ärendetyper'
        leaves={flattenLeaves(nodes)}
        selected={selected}
        onSelectedChange={setSelected}
        inputValue={query}
        onInputChange={setQuery}
      />
      <div>
        <TreeDialog
          variant='tree'
          triggerLabel='Bläddra i hela strukturen'
          nodes={nodes}
          selected={selected}
          onSelectedChange={setSelected}
          showCounts={showCounts}
        />
      </div>
      <SelectedList
        selected={selected}
        onSelectedChange={setSelected}
        showCount={showCounts}
      />
    </div>
  )
}

/**
 * For comparison: the existing Midas ComboBox in multi-select mode. React
 * Aria 1.21's ComboBox supports selectionMode='multiple', but Midas'
 * ComboBoxProps doesn't expose it, so the props have to be passed untyped.
 */
const MidasComboBoxMultiple = () => {
  const [value, setValue] = useState<Key[]>([])
  const multipleProps = {
    selectionMode: 'multiple',
    value,
    onChange: (keys: Key[]) => setValue(keys),
  } as object

  return (
    <div className={styles.stack}>
      <ComboBox
        label='Ärendetyper'
        description='Midas ComboBox med selectionMode="multiple" (otypat)'
        items={leaves}
        disabledKeys={leaves.filter(l => l.isDisabled).map(l => l.id)}
        {...multipleProps}
      >
        {leaf => (
          <ListBoxItem
            id={leaf.id}
            textValue={leaf.name}
          >
            <span className={styles.option}>
              <Text slot='label'>{leaf.name}</Text>
              <Text slot='description'>{leaf.path}</Text>
            </span>
          </ListBoxItem>
        )}
      </ComboBox>
      <SelectedList
        selected={new Set(value.map(String))}
        onSelectedChange={next => setValue([...next])}
      />
    </div>
  )
}

export default {
  title: 'Spikes/Tree selection/A. Search and browse',
  component: SearchAndBrowse,
  tags: ['!snapshot', '!autodocs'],
  args: { showCounts: false, withScope: false },
} satisfies Meta<typeof SearchAndBrowse>

type Story = StoryObj<typeof SearchAndBrowse>

export const AutocompleteSearchAndBrowse: Story = {}

export const WithCounts: Story = {
  args: { showCounts: true },
}

/** The pre-filter narrows both the search and the tree behind "Bläddra" */
export const WithScopeFilter: Story = {
  args: { withScope: true, showCounts: true },
}

export const ComboBoxMultipleComparison: Story = {
  render: () => <MidasComboBoxMultiple />,
}
