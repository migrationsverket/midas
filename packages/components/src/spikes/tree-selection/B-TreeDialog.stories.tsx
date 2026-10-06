import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectedList, type SelectedDisplay } from './SelectedList'
import { TreeDialog, type TreeDialogVariant } from './TreeDialog'
import { type Cost } from './CostNote'
import {
  datasetArg,
  selectedDisplayArg,
  useDataset,
  withSpike,
  type DatasetId,
} from './DatasetContext'
import styles from './spikes.module.css'

const dialogCost: Cost = {
  verdict:
    'Fits the architecture: React Aria standard (Tree, Autocomplete, Modal) plus two pieces of selection and filter logic. Nothing hand-rolled.',
  midas: [
    {
      kind: 'standard',
      text: 'Tree: a new component, but a plain wrapper around React Aria Tree, TreeItem and TreeItemContent with chevron, Checkbox and styles, like the other Midas components',
    },
    {
      kind: 'logic',
      text: 'Cascade selection: the select checkboxes and partial states, already proven in this spike (selection.ts and its tests). Shipped as an opt-in helper such as useCascadeSelection, so the Tree itself stays stateless',
    },
    {
      kind: 'logic',
      text: 'Tree filter helper: keeps matches and their ancestors, and expands the way to them',
    },
    {
      kind: 'standard',
      text: 'Modal footer (#1377): keeps Klar and Avbryt visible next to a long tree',
    },
    {
      kind: 'standard',
      text: 'Search list and selected list: shared with A, B1 uses the search list for its flat results',
    },
  ],
  consumer: [
    'The dialog: about 40 to 60 lines (Modal, the search and tree switch, Klar and Avbryt, a draft of the selection)',
    'Or about 10 lines if Midas also ships the dialog. It can stay controlled from the outside (value and onChange), with the draft only living while it is open',
  ],
  reuses: [
    'Modal, DialogTrigger, Button, SearchField, Checkbox, TagGroup',
    'React Aria Tree, Autocomplete (B1) and useFilter',
  ],
  caveats: [
    'React Aria caches tree items, so the Tree must pass its selection as dependencies or partial states go stale',
    'Deep trees in a narrow modal get cramped',
  ],
}

const popoverCost: Cost = {
  ...dialogCost,
  verdict:
    "Fits the architecture: the same content in Midas Popover with a React Aria Dialog inside, the pattern from React Aria's docs. Popover needs a wider size.",
  midas: [
    ...dialogCost.midas,
    {
      kind: 'standard',
      text: 'Popover: a wider size variant. Today it is capped at 320px',
    },
  ],
  caveats: [
    ...(dialogCost.caveats ?? []),
    'Less room than the Modal: on narrow screens the tree and the selected list stack',
    'Clicking outside or Esc closes it and throws away the draft, like Avbryt',
  ],
}

const TreeDialogDemo = ({
  variant,
  showCounts,
  selectedDisplay,
  groupLevel,
  withScope,
  container,
}: {
  variant: TreeDialogVariant
  dataset?: DatasetId
  showCounts?: boolean
  selectedDisplay?: SelectedDisplay
  groupLevel?: number
  withScope?: boolean
  container?: 'modal' | 'popover'
}) => {
  const dataset = useDataset()
  const [selected, setSelected] = useState<Set<string>>(new Set())

  return (
    <div className={styles.stack}>
      <div>
        <TreeDialog
          variant={variant}
          triggerLabel={dataset.labels.choose}
          triggerVariant='primary'
          selected={selected}
          onSelectedChange={setSelected}
          showCounts={showCounts}
          selectedDisplay={selectedDisplay}
          groupLevel={groupLevel}
          withScope={withScope}
          container={container}
        />
      </div>
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
    </div>
  )
}

export default {
  title: 'Spikes/Tree selection/B. Tree in a dialog',
  component: TreeDialogDemo,
  tags: ['!snapshot', '!autodocs'],
  decorators: [withSpike],
  parameters: { cost: dialogCost },
  args: {
    ...datasetArg.args,
    ...selectedDisplayArg.args,
    showCounts: false,
    withScope: false,
    container: 'modal',
  },
  argTypes: {
    ...datasetArg.argTypes,
    ...selectedDisplayArg.argTypes,
    variant: { table: { disable: true } },
    container: { control: 'inline-radio', options: ['modal', 'popover'] },
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

/** B3: the same content in a Popover anchored to the button instead of a Modal */
export const PopoverAutocompleteSearch: Story = {
  args: { variant: 'autocomplete', container: 'popover', showCounts: true },
  parameters: { cost: popoverCost },
}

export const PopoverFilteredTree: Story = {
  args: { variant: 'filtered', container: 'popover', showCounts: true },
  parameters: { cost: popoverCost },
}

/** B1 where the list of what's selected collapses whole branches into one tag */
export const AutocompleteSearchCollapsed: Story = {
  args: {
    variant: 'autocomplete',
    showCounts: true,
    selectedDisplay: 'collapsed',
  },
}
