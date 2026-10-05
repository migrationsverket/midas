import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectedList } from './SelectedList'
import { TreeDialog, type TreeDialogVariant } from './TreeDialog'
import styles from './spikes.module.css'

const TreeDialogDemo = ({
  variant,
  showCounts,
  withScope,
}: {
  variant: TreeDialogVariant
  showCounts?: boolean
  withScope?: boolean
}) => {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  return (
    <div className={styles.stack}>
      <div>
        <TreeDialog
          variant={variant}
          triggerLabel='Välj ärendetyper'
          triggerVariant='primary'
          selected={selected}
          onSelectedChange={setSelected}
          showCounts={showCounts}
          withScope={withScope}
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

export default {
  title: 'Spikes/Tree selection/B. Tree in a dialog',
  component: TreeDialogDemo,
  tags: ['!snapshot', '!autodocs'],
  args: { showCounts: false, withScope: false },
  argTypes: {
    variant: { table: { disable: true } },
  },
} satisfies Meta<typeof TreeDialogDemo>

type Story = StoryObj<typeof TreeDialogDemo>

/** B1: an empty query shows the tree, typing switches to flat results with paths */
export const AutocompleteSearch: Story = {
  args: { variant: 'autocomplete' },
}

/** B2: the search field filters the tree, matches stay in their place */
export const FilteredTree: Story = {
  args: { variant: 'filtered' },
}

export const AutocompleteSearchWithCounts: Story = {
  args: { variant: 'autocomplete', showCounts: true },
}

export const FilteredTreeWithCounts: Story = {
  args: { variant: 'filtered', showCounts: true },
}

/** B1 with a pre-filter on top inside the dialog */
export const AutocompleteSearchWithScope: Story = {
  args: { variant: 'autocomplete', withScope: true, showCounts: true },
}

/** B2 with a pre-filter on top inside the dialog */
export const FilteredTreeWithScope: Story = {
  args: { variant: 'filtered', withScope: true, showCounts: true },
}
