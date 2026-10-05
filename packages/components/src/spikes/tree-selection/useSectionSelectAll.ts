import { useMemo, useState } from 'react'
import type { Key } from 'react-aria-components'
import type { CaseTypeNode } from './data'
import {
  getLeaves,
  getNodeState,
  toggleNode,
  type NodeState,
} from './selection'

const SECTION_ALL_PREFIX = 'section-all:'

export const sectionAllId = (sectionId: string) =>
  `${SECTION_ALL_PREFIX}${sectionId}`

const isSectionAllId = (key: string) => key.startsWith(SECTION_ALL_PREFIX)

/**
 * Select-all per section for a multi-select Select. Each section gets an
 * extra option row with a sentinel id. The sentinel is part of Select's value
 * only while its whole section is selected, so React Aria marks the row as
 * selected (aria-selected) without any custom state. Toggling the row selects
 * or clears the section, and `selected` never contains sentinels.
 */
export const useSectionSelectAll = (
  sections: CaseTypeNode[],
  defaultSelected: string[] = [],
) => {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(defaultSelected),
  )

  const value = useMemo(
    () => [
      ...selected,
      ...sections
        .filter(section => getNodeState(section, selected) === 'all')
        .map(section => sectionAllId(section.id)),
    ],
    [sections, selected],
  )

  const onChange = (keys: Key[]) => {
    const next = new Set(keys.map(String))
    const previous = new Set(value)
    const result = new Set([...next].filter(key => !isSectionAllId(key)))

    for (const section of sections) {
      const id = sectionAllId(section.id)
      const wasAdded = next.has(id) && !previous.has(id)
      const wasRemoved = !next.has(id) && previous.has(id)
      if (!wasAdded && !wasRemoved) continue

      for (const leaf of getLeaves(section)) {
        if (leaf.isDisabled) continue
        if (wasAdded) result.add(leaf.id)
        else result.delete(leaf.id)
      }
    }

    setSelected(result)
  }

  const getSectionState = (section: CaseTypeNode): NodeState =>
    getNodeState(section, selected)

  /** For the header checkbox variant, which toggles a section directly */
  const toggleSection = (section: CaseTypeNode) =>
    setSelected(toggleNode(section, selected))

  const getSelectedCount = (section: CaseTypeNode) =>
    getLeaves(section).filter(leaf => selected.has(leaf.id)).length

  return {
    selected,
    setSelected,
    value,
    onChange,
    getSectionState,
    toggleSection,
    getSelectedCount,
  }
}
