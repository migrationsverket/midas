import { useState } from 'react'
import { useFilter } from 'react-aria'
import type { Key } from 'react-aria-components'
import type { CaseTypeNode } from './data'

/**
 * Filters the tree on a query. A node stays if its name matches or if
 * something below it matches, and a matching branch keeps all its children.
 * When the query changes, every branch on the way to a match is expanded so a
 * match is never hidden behind a collapsed parent. After that the user owns
 * the expanded state again, so collapsing a branch doesn't snap back open.
 */
export const useFilteredTree = (nodes: CaseTypeNode[], query: string) => {
  const { contains } = useFilter({ sensitivity: 'base' })
  const trimmed = query.trim()

  const filter = (
    list: CaseTypeNode[],
  ): { nodes: CaseTypeNode[]; expand: string[] } => {
    const kept: CaseTypeNode[] = []
    const expand: string[] = []

    for (const node of list) {
      if (contains(node.name, trimmed)) {
        kept.push(node)
        continue
      }
      if (!node.children) continue

      const child = filter(node.children)
      if (child.nodes.length > 0) {
        kept.push({ ...node, children: child.nodes })
        expand.push(node.id, ...child.expand)
      }
    }
    return { nodes: kept, expand }
  }

  const result = trimmed ? filter(nodes) : { nodes, expand: [] as string[] }

  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set())
  const [expandedBeforeSearch, setExpandedBeforeSearch] = useState<Set<Key>>(
    new Set(),
  )
  const [previousQuery, setPreviousQuery] = useState(trimmed)

  // Adjust the expanded state while rendering when the query changes, instead
  // of in an effect, so the filtered tree never renders with stale expansion
  if (previousQuery !== trimmed) {
    setPreviousQuery(trimmed)
    if (!previousQuery) setExpandedBeforeSearch(expandedKeys)
    setExpandedKeys(
      trimmed ? new Set(result.expand) : new Set(expandedBeforeSearch),
    )
  }

  return {
    nodes: result.nodes,
    expandedKeys,
    onExpandedChange: setExpandedKeys,
  }
}
