import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchPanel } from './SearchPanel'
import { SelectedList } from './SelectedList'
import { TreeDialog } from './TreeDialog'
import { flattenLeaves } from './data'
import { ScopeFilter, useScope } from './ScopeFilter'
import styles from './spikes.module.css'

/**
 * The selection as chips, a flat search for quick picks (results only while
 * typing) and "Bläddra…" for deliberate work in B's dialog. All three share
 * one selection.
 */
const Hybrid = ({
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
      <SelectedList
        selected={selected}
        onSelectedChange={setSelected}
        showCount={showCounts}
      />
      {withScope && <ScopeFilter scope={scope} />}
      <SearchPanel
        label='Lägg till ärendetyp'
        leaves={flattenLeaves(nodes)}
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
        />
      </div>
    </div>
  )
}

export default {
  title: 'Spikes/Tree selection/C. Hybrid',
  component: Hybrid,
  tags: ['!snapshot', '!autodocs'],
  args: { showCounts: false, withScope: false },
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
