import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '../../select'
import { Checkbox } from '../../checkbox'
import { ListBoxHeader, ListBoxItem, ListBoxSection } from '../../list-box'
import { caseTypes, caseTypeSections } from './data'
import { ScopeFilter, useScope } from './ScopeFilter'
import { getLeaves } from './selection'
import { sectionAllId, useSectionSelectAll } from './useSectionSelectAll'
import { CountPill } from './CountPill'
import styles from './spikes.module.css'

const disabledKeys = caseTypeSections
  .flatMap(getLeaves)
  .filter(leaf => leaf.isDisabled)
  .map(leaf => leaf.id)

interface SectionSelectProps {
  /**
   * `row`: a "Välj alla i …" option first in each section.
   * `header`: a checkbox in the section header instead.
   */
  sectionAll?: 'row' | 'header'
  /** A pill with the number of selected ärendetyper in each section header */
  showCounts?: boolean
  isSelectableAll?: boolean
  showTags?: boolean
  /** A verksamhetsområde pre-filter that narrows which sections are shown */
  withScope?: boolean
}

const SectionSelect = ({
  sectionAll = 'row',
  showCounts,
  isSelectableAll,
  showTags,
  withScope,
}: SectionSelectProps) => {
  const scope = useScope(caseTypes)
  const sections = withScope
    ? scope.scopedNodes.flatMap(area => area.children ?? [])
    : caseTypeSections

  const {
    selected,
    setSelected,
    value,
    onChange,
    getSectionState,
    toggleSection,
    getSelectedCount,
  } = useSectionSelectAll(sections, ['visum'])

  const isHeader = sectionAll === 'header'

  return (
    <div className={styles.stack}>
      {withScope && (
        <ScopeFilter
          scope={scope}
          levels={1}
        />
      )}
      <Select
        label='Ärendetyper'
        description={
          isHeader
            ? 'Kryssa i en rubrik för att välja hela gruppen'
            : 'Välj en hel grupp med "Välj alla i …" eller enskilda ärendetyper'
        }
        placeholder='Välj ärendetyper'
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
        // Only ~35 options, and every row has to exist in the DOM for the
        // section rows to be reachable in tests
        listBoxProps={{ virtualized: false }}
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
      <div className={styles.debug}>
        Valt ({selected.size}): {[...selected].join(', ') || 'inget'}
      </div>
    </div>
  )
}

export default {
  title: 'Spikes/Tree selection/1. Select all per section',
  component: SectionSelect,
  tags: ['!snapshot', '!autodocs'],
  args: {
    sectionAll: 'row',
    showCounts: false,
    isSelectableAll: false,
    showTags: false,
    withScope: false,
  },
  argTypes: {
    sectionAll: { control: 'inline-radio', options: ['row', 'header'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Two-level case (ärendeområde → ärendetyp). Select or clear a whole section, either with an option row or a checkbox in the section header.',
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
}

export const HeaderCheckboxWithCounts: Story = {
  args: { sectionAll: 'header', showCounts: true },
}

export const WithCounts: Story = {
  args: { showCounts: true },
}

/** A verksamhetsområde pre-filter narrows which ärendeområden are shown */
export const WithScopeFilter: Story = {
  args: { withScope: true, showCounts: true, showTags: true },
}
