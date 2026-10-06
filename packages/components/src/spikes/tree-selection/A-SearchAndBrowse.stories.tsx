import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { Key } from 'react-aria-components'
import { ComboBox } from '../../combobox'
import { ListBoxItem } from '../../list-box'
import { Text } from '../../text'
import { flattenLeaves } from './data'
import { ScopeFilter, useScope } from './ScopeFilter'
import { SearchPanel } from './SearchPanel'
import { SelectedList, type SelectedDisplay } from './SelectedList'
import { TreeDialog } from './TreeDialog'
import { SearchPopover } from './SearchPopover'
import { type Cost } from './CostNote'
import {
  datasetArg,
  selectedDisplayArg,
  useDataset,
  withSpike,
  type DatasetId,
} from './DatasetContext'
import styles from './spikes.module.css'

const searchCost: Cost = {
  verdict:
    'Fits the architecture: everything is React Aria standard (Autocomplete, SearchField, ListBox, and Tree for the browse button). Nothing hand-rolled.',
  midas: [
    {
      kind: 'standard',
      text: 'Search list: a Midas component wrapping React Aria Autocomplete with SearchField and a multi-select ListBox. The React Aria parts stay internal, like in Select and ComboBox',
    },
    {
      kind: 'standard',
      text: 'ListBoxItem: a layout for a description, so the name and the path can stack',
    },
    {
      kind: 'standard',
      text: 'Selected list: the removable tags of what is selected, wrapping TagGroup, TagList and Tag',
    },
    {
      kind: 'standard',
      text: 'Tree, only for the browse button. A plain React Aria wrapper, see B',
    },
  ],
  consumer: [
    'Search and selected list: about 5 to 10 lines (items with a path, value and onChange)',
    'Browse dialog: about 40 to 60 lines (Modal, Tree, Klar and Avbryt), unless Midas also ships the dialog',
  ],
  reuses: [
    'React Aria Autocomplete and useFilter',
    'SearchField, ListBox, ListBoxItem, Text',
    'TagGroup, TagList, Tag, Modal, DialogTrigger, Button',
  ],
  caveats: [
    "Autocomplete can't drive a Tree, so search is always flat, with the path as context",
  ],
}

const comboBoxCost: Cost = {
  verdict:
    'Fits the architecture: React Aria standard that already works at runtime. Only the types are missing.',
  midas: [
    {
      kind: 'standard',
      text: "ComboBox: expose React Aria's selection mode generic so selectionMode='multiple' type-checks",
    },
    { kind: 'standard', text: 'ListBoxItem: a layout for a description' },
  ],
  consumer: [
    'One ComboBox, plus a list of what is selected (about 30 lines), since the field itself does not show it',
  ],
  reuses: ['ComboBox, ListBoxItem, Text, TagGroup, TagList, Tag'],
  caveats: ['The field does not show the selection'],
}

/** Search flat with the Autocomplete feel, browse the full tree separately */
const SearchAndBrowse = ({
  showCounts,
  selectedDisplay,
  groupLevel,
  withScope,
}: {
  dataset?: DatasetId
  showCounts?: boolean
  selectedDisplay?: SelectedDisplay
  groupLevel?: number
  withScope?: boolean
}) => {
  const dataset = useDataset()
  const { labels } = dataset
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [query, setQuery] = useState('')
  const scope = useScope(dataset.nodes)
  const nodes = withScope ? scope.scopedNodes : scope.nodes
  const leaves = useMemo(() => flattenLeaves(nodes), [nodes])

  return (
    <div className={styles.stack}>
      {withScope && (
        <ScopeFilter
          scope={scope}
          labels={labels}
        />
      )}
      <SearchPanel
        label={labels.field}
        leaves={leaves}
        placeholder={labels.searchPlaceholder}
        emptyText={labels.empty}
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
          selectedDisplay={selectedDisplay}
          groupLevel={groupLevel}
        />
      </div>
      <SelectedList
        leaves={dataset.leaves}
        label={labels.selected}
        selected={selected}
        onSelectedChange={setSelected}
        showCount={showCounts}
        display={selectedDisplay}
        groupLevel={groupLevel}
        nodes={dataset.nodes}
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
  const { leaves, labels } = useDataset()
  const [value, setValue] = useState<Key[]>([])
  const multipleProps = {
    selectionMode: 'multiple',
    value,
    onChange: (keys: Key[]) => setValue(keys),
  } as object

  return (
    <div className={styles.stack}>
      <ComboBox
        label={labels.field}
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
        leaves={leaves}
        label={labels.selected}
        selected={new Set(value.map(String))}
        onSelectedChange={next => setValue([...next])}
      />
    </div>
  )
}

const compactCost: Cost = {
  verdict:
    "Fits the architecture: the same search list as above, in Midas Popover with a React Aria Dialog. That's the searchable menu pattern from React Aria's Autocomplete docs.",
  midas: [
    {
      kind: 'standard',
      text: 'Nothing beyond the search list: this is the same building block in another container',
    },
    {
      kind: 'standard',
      text: 'Popover: a wider size variant. Today it is capped at 320px',
    },
  ],
  consumer: ['About 10 lines: a button, a Popover and the search list'],
  reuses: [
    'The search list from the story above, unchanged',
    'DialogTrigger, Popover, Button, React Aria Dialog',
  ],
  caveats: [
    'Only a button is visible, so what is selected has to be shown somewhere else, here as a count or the list below',
    'The search field gets focus when the popover opens (focusOnMount), which is the point of opening it',
  ],
}

/** Saves room: only a button until the user wants to search */
const CompactSearch = ({
  showCounts,
  selectedDisplay,
  groupLevel,
}: {
  dataset?: DatasetId
  showCounts?: boolean
  selectedDisplay?: SelectedDisplay
  groupLevel?: number
}) => {
  const dataset = useDataset()
  const { labels } = dataset
  const [selected, setSelected] = useState<Set<string>>(new Set())

  return (
    <div className={styles.stack}>
      <div>
        <SearchPopover
          leaves={dataset.leaves}
          selected={selected}
          onSelectedChange={setSelected}
          triggerLabel={labels.choose}
          searchLabel={labels.field}
          placeholder={labels.searchPlaceholder}
          emptyText={labels.empty}
          showCounts={showCounts}
        />
      </div>
      <SelectedList
        leaves={dataset.leaves}
        label={labels.selected}
        selected={selected}
        onSelectedChange={setSelected}
        showCount={showCounts}
        display={selectedDisplay}
        groupLevel={groupLevel}
        nodes={dataset.nodes}
      />
    </div>
  )
}

export default {
  title: 'Spikes/Tree selection/A. Search and browse',
  component: SearchAndBrowse,
  tags: ['!snapshot', '!autodocs'],
  decorators: [withSpike],
  parameters: { cost: searchCost },
  args: {
    ...datasetArg.args,
    ...selectedDisplayArg.args,
    showCounts: false,
    withScope: false,
  },
  argTypes: {
    ...datasetArg.argTypes,
    ...selectedDisplayArg.argTypes,
  },
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
  parameters: { cost: comboBoxCost },
}

/** Saves room: a button opens the same search list in a popover */
export const CompactSearchPopover: Story = {
  render: args => <CompactSearch {...args} />,
  args: { showCounts: true },
  parameters: { cost: compactCost },
}
