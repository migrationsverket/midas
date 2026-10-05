import { useMemo, useState } from 'react'
import type { Key } from 'react-aria-components'
import { Select } from '../../select'
import { ListBoxHeader, ListBoxItem, ListBoxSection } from '../../list-box'
import { caseTypes, type CaseTypeNode } from './data'
import {
  applyScope,
  emptyScope,
  getCategoryOptions,
  pruneCategories,
  type Scope,
} from './scope'
import styles from './spikes.module.css'

/** The pre-filter state and the tree it narrows down to */
export const useScope = (nodes: CaseTypeNode[] = caseTypes) => {
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

/**
 * Two cascading Midas Selects: verksamhetsområde (level 1) and ärendeområde
 * (level 2). The level 2 options follow the level 1 choice and are grouped by
 * it. Nothing chosen means everything. Only existing components, no new
 * keyboard or focus handling.
 */
export const ScopeFilter = ({
  scope: { scope, setAreas, setCategories, nodes },
  levels = 2,
}: {
  scope: ScopeState
  /** 1: only verksamhetsområde, 2: both levels */
  levels?: 1 | 2
}) => {
  const categoryGroups = getCategoryOptions(nodes, scope.areas)

  return (
    <div className={styles.scopeFilter}>
      <Select
        label='Verksamhetsområde'
        placeholder='Alla verksamhetsområden'
        selectionMode='multiple'
        size='medium'
        items={nodes}
        value={scope.areas}
        onChange={keys => setAreas(toStrings(keys))}
      >
        {area => <ListBoxItem id={area.id}>{area.name}</ListBoxItem>}
      </Select>
      {levels === 2 && (
        <Select
          label='Ärendeområde'
          placeholder='Alla ärendeområden'
          selectionMode='multiple'
          size='medium'
          value={scope.categories}
          onChange={keys => setCategories(toStrings(keys))}
          listBoxProps={{ virtualized: false }}
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
