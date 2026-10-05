import type React from 'react'
import {
  Button as AriaButton,
  Collection,
  Tree,
  TreeItem,
  TreeItemContent,
  type Key,
  type Selection,
} from 'react-aria-components'
import { ChevronRight } from 'lucide-react'
import { Checkbox } from '../../checkbox'
import type { CaseTypeNode } from './data'
import {
  findNode,
  getLeaves,
  getNodeState,
  getSelectedNodeIds,
} from './selection'
import { CountPill } from './CountPill'
import styles from './SpikeTree.module.css'

export interface SpikeTreeProps {
  nodes: CaseTypeNode[]
  selected: ReadonlySet<string>
  onSelectedChange: (selected: Set<string>) => void
  expandedKeys: Iterable<Key>
  onExpandedChange: (keys: Set<Key>) => void
  'aria-label': string
  /** A pill with the number of selected ärendetyper on each branch */
  showCounts?: boolean
}

const getDisabledLeafIds = (nodes: CaseTypeNode[]) =>
  nodes
    .flatMap(getLeaves)
    .filter(leaf => leaf.isDisabled)
    .map(leaf => leaf.id)

/**
 * A minimal Midas-styled React Aria Tree with cascade selection. The selection
 * is kept as leaf ids. React Aria gets every leaf plus every fully selected
 * branch as its selectedKeys, and whatever it toggles is translated back into
 * leaf ids. Partial branches get the indeterminate checkbox.
 */
export const SpikeTree = ({
  nodes,
  selected,
  onSelectedChange,
  expandedKeys,
  onExpandedChange,
  'aria-label': ariaLabel,
  showCounts,
}: SpikeTreeProps) => {
  const selectedNodeIds = getSelectedNodeIds(nodes, selected)

  const handleSelectionChange = (keys: Selection) => {
    // Selected ärendetyper outside `nodes` (e.g. outside a pre-filter) are
    // always kept
    if (keys === 'all') {
      onSelectedChange(
        new Set([
          ...selected,
          ...nodes
            .flatMap(getLeaves)
            .filter(leaf => !leaf.isDisabled)
            .map(leaf => leaf.id),
        ]),
      )
      return
    }

    const next = new Set([...keys].map(String))
    const result = new Set(selected)

    const apply = (id: string, select: boolean) => {
      const node = findNode(id, nodes)
      if (!node) return
      for (const leaf of getLeaves(node)) {
        if (leaf.isDisabled) continue
        if (select) result.add(leaf.id)
        else result.delete(leaf.id)
      }
    }

    for (const id of next) if (!selectedNodeIds.has(id)) apply(id, true)
    for (const id of selectedNodeIds) if (!next.has(id)) apply(id, false)

    onSelectedChange(result)
  }

  const renderNode = (node: CaseTypeNode) => {
    const state = getNodeState(node, selected)

    return (
      <TreeItem
        id={node.id}
        textValue={node.name}
        className={styles.item}
      >
        <TreeItemContent>
          {({ hasChildItems, level }) => (
            <div
              className={styles.row}
              style={{ '--level': level - 1 } as React.CSSProperties}
            >
              {hasChildItems ? (
                <AriaButton
                  slot='chevron'
                  className={styles.chevron}
                >
                  <ChevronRight
                    size={16}
                    aria-hidden
                  />
                </AriaButton>
              ) : (
                <span className={styles.chevronSpacer} />
              )}
              <span className={styles.checkbox}>
                <Checkbox
                  slot='selection'
                  isIndeterminate={node.children ? state === 'some' : undefined}
                />
              </span>
              <span
                className={
                  hasChildItems
                    ? `${styles.label} ${styles.branch}`
                    : styles.label
                }
              >
                {node.name}
                {showCounts && node.children && (
                  <CountPill
                    count={
                      getLeaves(node).filter(leaf => selected.has(leaf.id))
                        .length
                    }
                  />
                )}
              </span>
            </div>
          )}
        </TreeItemContent>
        {node.children && (
          <Collection
            items={node.children}
            dependencies={[selected]}
          >
            {renderNode}
          </Collection>
        )}
      </TreeItem>
    )
  }

  return (
    <Tree
      aria-label={ariaLabel}
      className={styles.tree}
      items={nodes}
      selectionMode='multiple'
      selectedKeys={selectedNodeIds}
      onSelectionChange={handleSelectionChange}
      disabledKeys={getDisabledLeafIds(nodes)}
      expandedKeys={expandedKeys}
      onExpandedChange={onExpandedChange}
      // React Aria caches rendered items, so without this the partial
      // (indeterminate) state of a branch never updates
      dependencies={[selected]}
      renderEmptyState={() => (
        <div className={styles.empty}>Inga ärendetyper matchar</div>
      )}
    >
      {renderNode}
    </Tree>
  )
}
