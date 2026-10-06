import type { CaseTypeNode } from './data'
import { getLeaves, getNodeState } from './selection'

/**
 * Ways to show a large selection without one tag per leaf. Pure functions
 * over the tree and the selected leaf ids, so any list or tag component can
 * render the result.
 */
export interface SummaryItem {
  id: string
  /** `branch`: stands for every selected leaf under it. `leaf`: one item */
  kind: 'branch' | 'leaf'
  name: string
  /** For a leaf, its parent's name, since leaf names can repeat */
  context?: string
  /** Selected leaves this item stands for */
  count: number
  /**
   * Leaves under it that can be selected (disabled ones excluded), so a
   * branch with everything selectable chosen reads as complete
   */
  selectable: number
  /** The leaf ids to clear when the item is removed */
  leafIds: string[]
}

const countSelectable = (node: CaseTypeNode) =>
  getLeaves(node).filter(leaf => !leaf.isDisabled).length

const selectedLeafIds = (node: CaseTypeNode, selected: ReadonlySet<string>) =>
  getLeaves(node)
    .map(leaf => leaf.id)
    .filter(id => selected.has(id))

/**
 * Fully selected branches become one item, at the highest level where that's
 * true. Everything else is shown as single leaves.
 */
export const collapseSelection = (
  nodes: CaseTypeNode[],
  selected: ReadonlySet<string>,
  parent?: CaseTypeNode,
): SummaryItem[] =>
  nodes.flatMap(node => {
    if (node.children) {
      if (getNodeState(node, selected) === 'all') {
        const leafIds = selectedLeafIds(node, selected)
        return [
          {
            id: node.id,
            kind: 'branch' as const,
            name: node.name,
            count: leafIds.length,
            selectable: countSelectable(node),
            leafIds,
          },
        ]
      }
      return collapseSelection(node.children, selected, node)
    }
    return selected.has(node.id)
      ? [
          {
            id: node.id,
            kind: 'leaf' as const,
            name: node.name,
            context: parent?.name,
            count: 1,
            selectable: 1,
            leafIds: [node.id],
          },
        ]
      : []
  })

/** One item per node at `level` (1 = top) that has anything selected */
export const groupSelection = (
  nodes: CaseTypeNode[],
  selected: ReadonlySet<string>,
  level: number,
): SummaryItem[] => {
  const atLevel = (list: CaseTypeNode[], depth: number): CaseTypeNode[] =>
    depth === level
      ? list
      : list.flatMap(node => atLevel(node.children ?? [], depth + 1))

  return atLevel(nodes, 1).flatMap(node => {
    const leafIds = selectedLeafIds(node, selected)
    return leafIds.length === 0
      ? []
      : [
          {
            id: node.id,
            kind: 'branch' as const,
            name: node.name,
            count: leafIds.length,
            selectable: countSelectable(node),
            leafIds,
          },
        ]
  })
}
