import type { CaseTypeNode } from './data'

/**
 * Cascade selection without React. The selection is a set of leaf ids only,
 * and a branch's state is always derived from its leaves. Disabled leaves keep
 * whatever state they're in, the same rule as Select's SelectAll.
 */

export type NodeState = 'all' | 'some' | 'none'

export const getLeaves = (node: CaseTypeNode): CaseTypeNode[] =>
  node.children ? node.children.flatMap(getLeaves) : [node]

const getSelectableLeafIds = (node: CaseTypeNode) =>
  getLeaves(node)
    .filter(leaf => !leaf.isDisabled)
    .map(leaf => leaf.id)

export const getNodeState = (
  node: CaseTypeNode,
  selected: ReadonlySet<string>,
): NodeState => {
  const leaves = getLeaves(node)
  const selectable = leaves.filter(leaf => !leaf.isDisabled)
  const selectedCount = leaves.filter(leaf => selected.has(leaf.id)).length

  if (
    selectable.length > 0 &&
    selectable.every(leaf => selected.has(leaf.id))
  ) {
    return 'all'
  }
  return selectedCount > 0 ? 'some' : 'none'
}

/** Selects every selectable leaf under the node, or clears them if all were selected */
export const toggleNode = (
  node: CaseTypeNode,
  selected: ReadonlySet<string>,
): Set<string> => {
  const next = new Set(selected)
  const ids = getSelectableLeafIds(node)
  const shouldSelect = getNodeState(node, selected) !== 'all'

  for (const id of ids) {
    if (shouldSelect) next.add(id)
    else next.delete(id)
  }
  return next
}

export const findNode = (
  id: string,
  nodes: CaseTypeNode[],
): CaseTypeNode | undefined => {
  for (const node of nodes) {
    if (node.id === id) return node
    const found = node.children && findNode(id, node.children)
    if (found) return found
  }
  return undefined
}

/** Leaf ids plus every branch whose selectable leaves are all selected */
export const getSelectedNodeIds = (
  nodes: CaseTypeNode[],
  selected: ReadonlySet<string>,
): Set<string> => {
  const ids = new Set<string>()
  const visit = (node: CaseTypeNode) => {
    if (node.children) {
      if (getNodeState(node, selected) === 'all') ids.add(node.id)
      node.children.forEach(visit)
    } else if (selected.has(node.id)) {
      ids.add(node.id)
    }
  }
  nodes.forEach(visit)
  return ids
}
