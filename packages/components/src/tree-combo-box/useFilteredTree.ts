import { useMemo } from 'react'
import { useFilter } from 'react-aria'
import type { Key, TreeData } from 'react-aria-components'

type TreeNode<T extends object> = NonNullable<
  ReturnType<TreeData<T>['getItem']>
>

export interface FilteredTree {
  /** Keys visible under the current filter. `null` means no filter is active — render everything. */
  visibleKeys: Set<Key> | null
  /** Branches forced open to reveal a match. Empty when `visibleKeys` is `null`. */
  forcedExpandedKeys: Set<Key>
}

/**
 * Derives which nodes should be visible for a given filter text, without
 * touching `tree` or any selection state. A node is visible if its own text
 * matches, or any descendant's does — so a matching leaf's full ancestor
 * chain always stays reachable, and branches containing a match are
 * force-expanded to reveal it. Non-matching subtrees are omitted entirely
 * (not just hidden), so they don't clutter treegrid keyboard navigation.
 */
export const useFilteredTree = <T extends object>(
  tree: TreeData<T>,
  filterText: string,
  getTextValue: (item: T) => string,
): FilteredTree => {
  const { contains } = useFilter({ sensitivity: 'base' })

  return useMemo(() => {
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
  }, [tree.items, filterText, contains, getTextValue])
}
