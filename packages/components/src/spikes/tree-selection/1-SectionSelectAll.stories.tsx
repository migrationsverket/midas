import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '../../select'
import { Checkbox } from '../../checkbox'
import { ListBoxHeader, ListBoxItem, ListBoxSection } from '../../list-box'
import { ScopeFilter, useScope } from './ScopeFilter'
import { getLeaves } from './selection'
import { sectionAllId, useSectionSelectAll } from './useSectionSelectAll'
import { CountPill } from './CountPill'
import { SelectedList, type SelectedDisplay } from './SelectedList'
import { type Cost } from './CostNote'
import {
  datasetArg,
  selectedDisplayArg,
  useDataset,
  withSpike,
  type DatasetId,
} from './DatasetContext'
import styles from './spikes.module.css'

const rowCost: Cost = {
  verdict:
    'Fits the architecture: React Aria Select plus some selection logic. The cheapest option if the data is two levels deep.',
  midas: [
    {
      kind: 'logic',
      text: 'Select: a prop such as isSectionSelectableAll that renders a "Välj alla i …" row first in each ListBoxSection',
    },
    {
      kind: 'logic',
      text: 'MultiSelectValue and SelectTags: skip those rows in the count and the tags',
    },
    {
      kind: 'standard',
      text: 'Translations: the row text and its "x of y" accessible name in sv and en',
    },
  ],
  consumer: [
    'One prop, plus the ListBoxSection grouping they would write anyway',
  ],
  reuses: [
    'Select, ListBoxSection, ListBoxHeader, ListBoxItem',
    'The disabled-item rule from the existing SelectAll',
  ],
  caveats: [
    "The spike keeps the row in Select's value, so today's Select counts it and shows it as a tag",
    'With a pre-filter, Select hides selected items that are outside the list',
  ],
}

const threeLevelCost: Cost = {
  verdict:
    'Fits the architecture: three levels with the Select from step 1 and the pre-filter in front. No tree needed.',
  midas: [
    {
      kind: 'logic',
      text: 'The same Select feature as step 1 (a "Välj alla i …" row per section). Nothing new for the third level',
    },
  ],
  consumer: [
    'The pre-filter (two lines with ScopeFilter, or their own filter) plus one Select with sections',
  ],
  reuses: [
    'Select and its global "Välj alla", which with a pre-filter selects everything in the chosen top level',
    'The selected list from A to C, summarised',
  ],
  caveats: [
    'Level 1 is chosen in a separate field, so picking across several regions means switching the filter',
    "The Select's own tags would hide what's outside the pre-filter, which is why this story uses the selected list instead",
  ],
}

const headerCost: Cost = {
  verdict:
    'Breaks the architecture: keyboard support would need hand-rolled focus handling inside the Select popover. Not recommended.',
  midas: [
    {
      kind: 'handrolled',
      text: 'Select: checkboxes in section headers plus custom focus management, against the Midas rule of never hand-rolling focus',
    },
  ],
  consumer: ['One prop, plus the ListBoxSection grouping'],
  reuses: ['Select, ListBoxSection, ListBoxHeader, Checkbox'],
  caveats: [
    "The arrow keys never reach the header, and Tab only reaches the first section's checkbox",
    'A checkbox inside a listbox is outside the listbox ARIA pattern',
  ],
}

interface SectionSelectProps {
  dataset?: DatasetId
  /**
   * `row`: a "Välj alla i …" option first in each section.
   * `header`: a checkbox in the section header instead.
   */
  sectionAll?: 'row' | 'header'
  /** A pill with the number of selected ärendetyper in each section header */
  showCounts?: boolean
  isSelectableAll?: boolean
  showTags?: boolean
  /** A pre-filter on the top level that narrows which sections are shown */
  withScope?: boolean
  /**
   * A list of what's selected below the Select, instead of its own tags.
   * Unlike Select's tags it also shows what's outside the pre-filter
   */
  showSelectedList?: boolean
  selectedDisplay?: SelectedDisplay
  groupLevel?: number
}

const SectionSelect = ({
  sectionAll = 'row',
  showCounts,
  isSelectableAll,
  showTags,
  withScope,
  showSelectedList,
  selectedDisplay,
  groupLevel,
}: SectionSelectProps) => {
  const dataset = useDataset()
  const { labels } = dataset
  const scope = useScope(dataset.nodes)
  const sections = withScope
    ? scope.scopedNodes.flatMap(area => area.children ?? [])
    : dataset.sections
  const disabledKeys = dataset.leaves
    .filter(leaf => leaf.isDisabled)
    .map(leaf => leaf.id)

  const {
    selected,
    setSelected,
    value,
    onChange,
    getSectionState,
    toggleSection,
    getSelectedCount,
  } = useSectionSelectAll(
    sections,
    // Visum is preselected in the small dataset, which the tests rely on
    dataset.id === 'arendetyper' ? ['visum'] : [],
  )

  const isHeader = sectionAll === 'header'

  return (
    <div className={styles.stack}>
      {withScope && (
        <ScopeFilter
          scope={scope}
          labels={labels}
          levels={1}
        />
      )}
      <Select
        label={labels.field}
        description={
          isHeader
            ? 'Kryssa i en rubrik för att välja hela gruppen'
            : 'Välj en hel grupp med "Välj alla i …" eller enstaka val'
        }
        placeholder={labels.choose}
        selectionMode='multiple'
        // The header variant has no sentinel rows, so it uses the selection
        // as-is
        value={isHeader ? [...selected] : value}
        onChange={
          isHeader ? keys => setSelected(new Set(keys.map(String))) : onChange
        }
        disabledKeys={disabledKeys}
        isSelectableAll={isSelectableAll}
        showTags={showTags}
        // Midas' default for large lists. The small dataset skips it, so
        // every row exists in the DOM for the tests
        listBoxProps={{ virtualized: dataset.isLarge }}
      >
        {sections.map(section => {
          const leaves = getLeaves(section)
          const selectedCount = getSelectedCount(section)
          const state = getSectionState(section)

          return (
            <ListBoxSection
              key={section.id}
              id={section.id}
            >
              <ListBoxHeader>
                {isHeader ? (
                  <span className={styles.headerRow}>
                    <span className={styles.headerCheckboxWrap}>
                      <Checkbox
                        className={styles.headerCheckbox}
                        isSelected={state === 'all'}
                        isIndeterminate={state === 'some'}
                        onChange={() => toggleSection(section)}
                      >
                        {section.name}
                      </Checkbox>
                    </span>
                    {showCounts && <CountPill count={selectedCount} />}
                  </span>
                ) : (
                  <span className={styles.headerRow}>
                    {section.name}
                    {showCounts && <CountPill count={selectedCount} />}
                  </span>
                )}
              </ListBoxHeader>
              {!isHeader && (
                <ListBoxItem
                  id={sectionAllId(section.id)}
                  textValue={`Välj alla i ${section.name}`}
                  // The partial state can't be expressed with aria-selected
                  // on an option, so it's spelled out in the accessible name
                  aria-label={`Välj alla i ${section.name}, ${selectedCount} av ${leaves.length} valda`}
                  className={
                    state === 'some'
                      ? `${styles.sectionAll} ${styles.sectionAllPartial}`
                      : styles.sectionAll
                  }
                >
                  Välj alla i {section.name}
                </ListBoxItem>
              )}
              {leaves.map(leaf => (
                <ListBoxItem
                  key={leaf.id}
                  id={leaf.id}
                >
                  {leaf.name}
                </ListBoxItem>
              ))}
            </ListBoxSection>
          )
        })}
      </Select>
      {showSelectedList && (
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
      )}
      <div className={styles.debug}>
        Valt ({selected.size}):{' '}
        {[...selected].slice(0, dataset.isLarge ? 12 : undefined).join(', ') ||
          'inget'}
        {dataset.isLarge && selected.size > 12 && ' …'}
      </div>
    </div>
  )
}

export default {
  title: 'Spikes/Tree selection/1. Select all per section',
  component: SectionSelect,
  tags: ['!snapshot', '!autodocs'],
  decorators: [withSpike],
  args: {
    ...datasetArg.args,
    ...selectedDisplayArg.args,
    showSelectedList: false,
    sectionAll: 'row',
    showCounts: false,
    isSelectableAll: false,
    showTags: false,
    withScope: false,
  },
  argTypes: {
    ...datasetArg.argTypes,
    ...selectedDisplayArg.argTypes,
    sectionAll: { control: 'inline-radio', options: ['row', 'header'] },
  },
  parameters: {
    cost: rowCost,
    docs: {
      description: {
        component:
          'Two-level case (ärendeområde → ärendetyp, or enhet → avdelning). Select or clear a whole section, either with an option row or a checkbox in the section header.',
      },
    },
  },
} satisfies Meta<typeof SectionSelect>

type Story = StoryObj<typeof SectionSelect>

export const SectionSelectAll: Story = {}

export const WithGlobalSelectAll: Story = {
  args: { isSelectableAll: true },
}

export const WithTags: Story = {
  args: { showTags: true },
}

/** A checkbox in the section header instead of an option row */
export const HeaderCheckbox: Story = {
  args: { sectionAll: 'header' },
  parameters: { cost: headerCost },
}

export const HeaderCheckboxWithCounts: Story = {
  args: { sectionAll: 'header', showCounts: true },
  parameters: { cost: headerCost },
}

export const WithCounts: Story = {
  args: { showCounts: true },
}

/** A verksamhetsområde pre-filter narrows which ärendeområden are shown */
export const WithScopeFilter: Story = {
  args: { withScope: true, showCounts: true, showTags: true },
}

/**
 * Three levels without a tree: the pre-filter picks level 1, the Select's
 * sections are level 2 with "Välj alla i …", and the options are level 3. The
 * global "Välj alla" then selects everything in the chosen level 1
 */
export const ThreeLevelsWithPreFilter: Story = {
  args: {
    dataset: 'organisation',
    withScope: true,
    isSelectableAll: true,
    showCounts: true,
    showSelectedList: true,
    selectedDisplay: 'collapsed',
  },
  parameters: { cost: threeLevelCost },
}
