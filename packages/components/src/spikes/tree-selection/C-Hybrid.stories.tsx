import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchPanel } from './SearchPanel'
import { SelectedList, type SelectedDisplay } from './SelectedList'
import { TreeDialog } from './TreeDialog'
import { flattenLeaves } from './data'
import { ScopeFilter, useScope } from './ScopeFilter'
import { type Cost } from './CostNote'
import {
  datasetArg,
  selectedDisplayArg,
  useDataset,
  withSpike,
  type DatasetId,
} from './DatasetContext'
import styles from './spikes.module.css'

const hybridCost: Cost = {
  verdict:
    'Fits the architecture: the same parts as A and B, nothing new. The cost is explaining three ways into one selection.',
  midas: [
    {
      kind: 'standard',
      text: 'Everything from A and B: the search list, the selected list, the ListBoxItem description and the Tree',
    },
    {
      kind: 'logic',
      text: "From B: the Tree's cascade selection and filter helpers",
    },
  ],
  consumer: [
    'About 20 to 30 lines: the selected list, the search list and the browse dialog sharing one value',
  ],
  reuses: [
    'React Aria Autocomplete and Tree',
    'SearchField, ListBox, Modal, Button, Checkbox, TagGroup, TagList, Tag',
  ],
  caveats: [
    'Three ways into one selection: more to explain in the docs and to test',
  ],
}

/**
 * The selection as chips, a flat search for quick picks (results only while
 * typing) and "Bläddra…" for deliberate work in B's dialog. All three share
 * one selection.
 */
const Hybrid = ({
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
      <SelectedList
        leaves={dataset.leaves}
        label={dataset.labels.selected}
        selected={selected}
        onSelectedChange={setSelected}
        showCount={showCounts}
        display={selectedDisplay}
        groupLevel={groupLevel}
        nodes={dataset.nodes}
      />
      {withScope && (
        <ScopeFilter
          scope={scope}
          labels={labels}
        />
      )}
      <SearchPanel
        label={labels.add}
        leaves={leaves}
        placeholder={labels.searchPlaceholder}
        emptyText={labels.empty}
        selected={selected}
        onSelectedChange={setSelected}
        inputValue={query}
        onInputChange={setQuery}
        hideResultsWhenEmpty
      />
      <div>
        <TreeDialog
          variant='autocomplete'
          triggerLabel='Bläddra…'
          nodes={nodes}
          triggerVariant='tertiary'
          selected={selected}
          onSelectedChange={setSelected}
          showCounts={showCounts}
          selectedDisplay={selectedDisplay}
          groupLevel={groupLevel}
        />
      </div>
    </div>
  )
}

export default {
  title: 'Spikes/Tree selection/C. Hybrid',
  component: Hybrid,
  tags: ['!snapshot', '!autodocs'],
  decorators: [withSpike],
  parameters: { cost: hybridCost },
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
} satisfies Meta<typeof Hybrid>

type Story = StoryObj<typeof Hybrid>

export const ChipsSearchAndBrowse: Story = {}

export const WithCounts: Story = {
  args: { showCounts: true },
}

/** The pre-filter narrows the quick search and the tree behind "Bläddra…" */
export const WithScopeFilter: Story = {
  args: { withScope: true, showCounts: true },
}

/**
 * A whole region selected is one tag instead of 80+. Pick a region in
 * "Bläddra…" to see it
 */
export const CollapsedSelection: Story = {
  args: { selectedDisplay: 'collapsed', showCounts: true },
}

/** One tag per region with a count, however much is selected */
export const GroupedSelection: Story = {
  args: { selectedDisplay: 'grouped', groupLevel: 1, showCounts: true },
}
