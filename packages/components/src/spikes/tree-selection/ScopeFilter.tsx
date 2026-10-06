import { useMemo, useState } from 'react'
import type { Key } from 'react-aria-components'
import { Select } from '../../select'
import { ListBoxHeader, ListBoxItem, ListBoxSection } from '../../list-box'
import type { CaseTypeNode } from './data'
import {
  applyScope,
  emptyScope,
  getCategoryOptions,
  pruneCategories,
  type Scope,
} from './scope'
import styles from './spikes.module.css'

/** The pre-filter state and the tree it narrows down to */
export const useScope = (nodes: CaseTypeNode[]) => {
  const [scope, setScope] = useState<Scope>(emptyScope)

  const scopedNodes = useMemo(() => applyScope(nodes, scope), [nodes, scope])

  const setAreas = (areas: string[]) =>
    setScope(current => pruneCategories(nodes, { ...current, areas }))

  const setCategories = (categories: string[]) =>
    setScope(current => ({ ...current, categories }))

  return { scope, scopedNodes, setAreas, setCategories, nodes }
}

export type ScopeState = ReturnType<typeof useScope>

const toStrings = (keys: Key[]) => keys.map(String)

export interface ScopeFilterLabels {
  level1: string
  level1All: string
  level2: string
  level2All: string
}

/**
 * Two cascading Midas Selects for the top two levels, e.g. verksamhetsområde
 * and ärendeområde, or region and enhet. The level 2 options follow the level
 * 1 choice and are grouped by it. Nothing chosen means everything. Only
 * existing components, no new keyboard or focus handling.
 */
export const ScopeFilter = ({
  scope: { scope, setAreas, setCategories, nodes },
  labels,
  levels = 2,
}: {
  scope: ScopeState
  labels: ScopeFilterLabels
  /** 1: only the top level, 2: both levels */
  levels?: 1 | 2
}) => {
  const categoryGroups = getCategoryOptions(nodes, scope.areas)
  const level2Count = categoryGroups.reduce(
    (sum, area) => sum + (area.children?.length ?? 0),
    0,
  )

  return (
    <div className={styles.scopeFilter}>
      <Select
        label={labels.level1}
        placeholder={labels.level1All}
        selectionMode='multiple'
        size='medium'
        items={nodes}
        value={scope.areas}
        onChange={keys => setAreas(toStrings(keys))}
        listBoxProps={{ virtualized: nodes.length > 100 }}
      >
        {area => <ListBoxItem id={area.id}>{area.name}</ListBoxItem>}
      </Select>
      {levels === 2 && (
        <Select
          label={labels.level2}
          placeholder={labels.level2All}
          selectionMode='multiple'
          size='medium'
          value={scope.categories}
          onChange={keys => setCategories(toStrings(keys))}
          listBoxProps={{ virtualized: level2Count > 100 }}
        >
          {categoryGroups.map(area => (
            <ListBoxSection
              key={area.id}
              id={`scope-${area.id}`}
            >
              <ListBoxHeader>{area.name}</ListBoxHeader>
              {(area.children ?? []).map(category => (
                <ListBoxItem
                  key={category.id}
                  id={category.id}
                >
                  {category.name}
                </ListBoxItem>
              ))}
            </ListBoxSection>
          ))}
        </Select>
      )}
    </div>
  )
}
