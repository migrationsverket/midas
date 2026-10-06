import { SubmenuTrigger, type Selection } from 'react-aria-components'
import { Button } from '../../button'
import { Menu, MenuItem, MenuPopover, MenuTrigger, Separator } from '../../menu'
import type { CaseTypeNode } from './data'
import { getLeaves, getNodeState } from './selection'
import { CountPill } from './CountPill'

const SECTION_ALL = 'section-all'

const isLeafGroup = (node: CaseTypeNode) =>
  (node.children ?? []).every(child => !child.children)

const countSelected = (node: CaseTypeNode, selected: ReadonlySet<string>) =>
  getLeaves(node).filter(leaf => selected.has(leaf.id)).length

export interface CascadingMenuProps {
  nodes: CaseTypeNode[]
  selected: ReadonlySet<string>
  onSelectedChange: (selected: Set<string>) => void
  triggerLabel: string
  /** Accessible name of the top menu, e.g. "Regioner" */
  menuLabel: string
  showCounts?: boolean
}

/**
 * The hierarchy as cascading menus: Midas MenuTrigger, Menu and MenuItem with
 * React Aria's SubmenuTrigger. Verksamhetsområde and ärendeområde open
 * submenus, the last level is a multi-select menu with "Välj alla i …" first.
 * No tree and no search, just React Aria's menu keyboard model.
 */
export const CascadingMenu = ({
  nodes,
  selected,
  onSelectedChange,
  triggerLabel,
  menuLabel,
  showCounts,
}: CascadingMenuProps) => {
  const leafMenu = (group: CaseTypeNode) => {
    const leaves = group.children ?? []
    const isAll = getNodeState(group, selected) === 'all'
    const selectedKeys = [
      ...leaves.filter(leaf => selected.has(leaf.id)).map(leaf => leaf.id),
      ...(isAll ? [SECTION_ALL] : []),
    ]

    // Same rule as the section rows in Select: toggling the "Välj alla" item
    // selects or clears the group, disabled ärendetyper keep their state
    const handleChange = (keys: Selection) => {
      const next = new Set(keys === 'all' ? [] : [...keys].map(String))
      const result = new Set(selected)
      const toggledAll = next.has(SECTION_ALL) !== isAll

      for (const leaf of leaves) {
        if (leaf.isDisabled) continue
        const shouldSelect = toggledAll ? !isAll : next.has(leaf.id)
        if (shouldSelect) result.add(leaf.id)
        else result.delete(leaf.id)
      }
      onSelectedChange(result)
    }

    return (
      <Menu
        aria-label={group.name}
        selectionMode='multiple'
        selectedKeys={selectedKeys}
        onSelectionChange={handleChange}
        disabledKeys={leaves.filter(l => l.isDisabled).map(l => l.id)}
      >
        <MenuItem
          id={SECTION_ALL}
          textValue={`Välj alla i ${group.name}`}
          aria-label={`Välj alla i ${group.name}, ${countSelected(group, selected)} av ${leaves.length} valda`}
        >
          Välj alla i {group.name}
        </MenuItem>
        <Separator />
        {leaves.map(leaf => (
          <MenuItem
            key={leaf.id}
            id={leaf.id}
          >
            {leaf.name}
          </MenuItem>
        ))}
      </Menu>
    )
  }

  const renderNode = (node: CaseTypeNode) => (
    <SubmenuTrigger key={node.id}>
      <MenuItem
        id={node.id}
        textValue={node.name}
      >
        {node.name}
        {showCounts && <CountPill count={countSelected(node, selected)} />}
      </MenuItem>
      <MenuPopover>
        {isLeafGroup(node) ? (
          leafMenu(node)
        ) : (
          <Menu aria-label={node.name}>
            {(node.children ?? []).map(renderNode)}
          </Menu>
        )}
      </MenuPopover>
    </SubmenuTrigger>
  )

  return (
    <MenuTrigger>
      <Button variant='secondary'>
        {triggerLabel}
        {showCounts && <CountPill count={selected.size} />}
      </Button>
      <MenuPopover>
        <Menu aria-label={menuLabel}>{nodes.map(renderNode)}</Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
