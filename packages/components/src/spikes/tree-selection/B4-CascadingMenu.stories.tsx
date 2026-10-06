import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { CascadingMenu } from './CascadingMenu'
import { SelectedList, type SelectedDisplay } from './SelectedList'
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

const menuCost: Cost = {
  verdict:
    "Fits the architecture: only Midas Menu and React Aria's SubmenuTrigger, the same as Midas' own SubMenus story. No tree and no search.",
  midas: [
    {
      kind: 'standard',
      text: 'Nothing new to see the idea. A real version would add the count or a partial mark on the submenu items',
    },
    {
      kind: 'logic',
      text: 'The "Välj alla i …" item per group: the same selection rule as the section rows in Select',
    },
  ],
  consumer: [
    'About 60 to 80 lines with the menus composed by hand, or a few lines if Midas ships it as a component',
  ],
  reuses: [
    'MenuTrigger, Menu, MenuItem, MenuPopover, Separator, Button',
    "React Aria's SubmenuTrigger",
  ],
  caveats: [
    'Only one branch is visible at a time, so the overview of what is selected lives outside the menu',
    'No free-text search: finding a known ärendetyp means knowing where it is',
    'A menu item can only show selected or not, so partly selected groups need a count or text',
    'Keyboard: Space toggles and keeps the menu open, Enter selects and closes it (React Aria menu behaviour). Users who press Enter have to reopen for every pick',
  ],
}

const CascadingMenuDemo = ({
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
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const dataset = useDataset()
  const scope = useScope(dataset.nodes)

  return (
    <div className={styles.stack}>
      {withScope && (
        <ScopeFilter
          scope={scope}
          labels={dataset.labels}
        />
      )}
      <div>
        <CascadingMenu
          nodes={withScope ? scope.scopedNodes : scope.nodes}
          selected={selected}
          onSelectedChange={setSelected}
          triggerLabel={dataset.labels.choose}
          menuLabel={dataset.labels.level1Plural}
          showCounts={showCounts}
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
  title: 'Spikes/Tree selection/B4. Cascading menu',
  component: CascadingMenuDemo,
  tags: ['!snapshot', '!autodocs'],
  decorators: [withSpike],
  parameters: { cost: menuCost },
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
} satisfies Meta<typeof CascadingMenuDemo>

type Story = StoryObj<typeof CascadingMenuDemo>

export const CascadingMenus: Story = {}

export const WithCounts: Story = {
  args: { showCounts: true },
}

export const WithScopeFilter: Story = {
  args: { withScope: true, showCounts: true },
}
