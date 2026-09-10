import { useEffect, useMemo, useState } from 'react'
import { useControlledState } from '@react-stately/utils'
import { useFilter } from 'react-aria-components'
import type { Key, TreeData } from 'react-aria-components'

type TreeNode<T extends object> = NonNullable<ReturnType<TreeData<T>['getItem']>>
type TreeLike<T extends object> = Pick<TreeData<T>, 'items'>

export interface FilteredTreeKeys {
  /** Keys visible under the current filter. `null` means no filter is active — render everything. */
  visibleKeys: Set<Key> | null
  /**
   * Branches force-expanded because a descendant matches the filter. Doesn't
   * account for a branch the user explicitly re-collapsed — see
   * `useFilteredTree`, which layers that reconciliation on top of this.
   */
  forcedExpandedKeys: Set<Key>
}

/**
 * Pure: walks `tree` once, marking a node visible if its own text matches
 * `filterText`, or any descendant's does — so a matching leaf's full
 * ancestor chain always stays reachable, and branches containing a match
 * are force-expanded to reveal it. Non-matching subtrees are omitted
 * entirely (not just hidden), so they don't clutter keyboard navigation.
 */
export const computeFilteredTreeKeys = <T extends object,>(
  tree: TreeLike<T>,
  filterText: string,
  getTextValue: (item: T) => string,
  contains: (text: string, substring: string) => boolean,
): FilteredTreeKeys => {
  if (!filterText) {
    return { visibleKeys: null, forcedExpandedKeys: new Set<Key>() }
  }

  const visibleKeys = new Set<Key>()
  const forcedExpandedKeys = new Set<Key>()

  const visit = (node: TreeNode<T>): boolean => {
    const ownMatch = contains(getTextValue(node.value), filterText)
    const childMatches = (node.children ?? []).map(visit)
    const anyDescendantMatch = childMatches.some(Boolean)

    if (ownMatch || anyDescendantMatch) {
      visibleKeys.add(node.key)
      if (anyDescendantMatch && node.children?.length) {
        forcedExpandedKeys.add(node.key)
      }
      return true
    }
    return false
  }

  tree.items.forEach(visit)
  return { visibleKeys, forcedExpandedKeys }
}

export interface UseFilteredTreeOptions<T extends object> {
  /** The hierarchical data, from `useTreeData` — the caller owns this instance. */
  tree: TreeData<T>
  /** Current filter text. Empty string means "no filter" — everything is visible. */
  filterText: string
  /** Searchable text for a node, matched against `filterText`. */
  getTextValue: (item: T) => string
  /** Uncontrolled initial expanded keys, for the *real* (non-filter-forced) expand state. */
  defaultExpandedKeys?: Iterable<Key>
  /** Controlled expanded keys, for the *real* (non-filter-forced) expand state. */
  expandedKeys?: Iterable<Key>
  /** Called with the real (non-filter-forced) expanded keys whenever they change. */
  onExpandedChange?: (keys: Set<Key>) => void
}

export interface UseFilteredTreeResult {
  /** Keys visible under the current filter. `null` means no filter is active — render everything. */
  visibleKeys: Set<Key> | null
  /** Pass directly as `<Tree expandedKeys>` — the real expand state, unioned with filter-forced reveals. */
  expandedKeys: Set<Key>
  /** Pass directly as `<Tree onExpandedChange>`. */
  onExpandedChange: (keys: Set<Key>) => void
}

/**
 * Layers text filtering on top of a `useTreeData` hierarchy, for a plain
 * `<Tree>` — no coupling to `useTreeSelection`'s cascade-checkbox concerns,
 * and no coupling to how filter text reaches the caller (this hook doesn't
 * render an input or touch focus; pair it with a focus-bridge hook for that).
 *
 * Handles one non-obvious correctness problem: naively unioning the real
 * expanded keys with the filter-forced ones every render makes a
 * filter-revealed branch impossible to collapse — the very next render
 * recomputes the union and immediately re-adds the key you just removed,
 * since the filter match hasn't changed. This tracks which filter-forced
 * branches the user explicitly collapsed and excludes those from the union
 * until the filter text changes.
 */
export const useFilteredTree = <T extends object,>({
  tree,
  filterText,
  getTextValue,
  expandedKeys: expandedKeysProp,
  defaultExpandedKeys,
  onExpandedChange,
}: UseFilteredTreeOptions<T>): UseFilteredTreeResult => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const [realExpandedKeys, setRealExpandedKeys] = useControlledState<Set<Key>>(
    expandedKeysProp ? new Set(expandedKeysProp) : undefined,
    new Set(defaultExpandedKeys ?? []),
    onExpandedChange,
  )

  const [collapsedWhileFiltering, setCollapsedWhileFiltering] = useState<
    Set<Key>
  >(new Set())

  // A fresh filter invalidates any previously-collapsed-while-filtering
  // bookkeeping — those branches may not even be filter-forced under the
  // new text, and if they still are, they should default to open again.
  useEffect(() => {
    if (!filterText) setCollapsedWhileFiltering(new Set())
  }, [filterText])

  const { visibleKeys, forcedExpandedKeys } = useMemo(
    () => computeFilteredTreeKeys(tree, filterText, getTextValue, contains),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tree.items, filterText, getTextValue, contains],
  )

  const expandedKeys = useMemo(() => {
    if (!visibleKeys) return realExpandedKeys
    const next = new Set(realExpandedKeys)
    for (const key of forcedExpandedKeys) {
      if (!collapsedWhileFiltering.has(key)) next.add(key)
    }
    return next
  }, [realExpandedKeys, forcedExpandedKeys, visibleKeys, collapsedWhileFiltering])

  const handleExpandedChange = (reported: Set<Key>) => {
    if (!visibleKeys) {
      setRealExpandedKeys(reported)
      return
    }

    const nextReal = new Set(realExpandedKeys)
    const nextCollapsed = new Set(collapsedWhileFiltering)

    for (const key of expandedKeys) {
      if (!reported.has(key)) {
        nextReal.delete(key)
        if (forcedExpandedKeys.has(key)) nextCollapsed.add(key)
      }
    }
    for (const key of reported) {
      if (!expandedKeys.has(key)) {
        nextReal.add(key)
        nextCollapsed.delete(key)
      }
    }

    setRealExpandedKeys(nextReal)
    setCollapsedWhileFiltering(nextCollapsed)
  }

  return { visibleKeys, expandedKeys, onExpandedChange: handleExpandedChange }
}
