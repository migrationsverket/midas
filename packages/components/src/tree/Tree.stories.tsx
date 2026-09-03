// ⚠️ Read before judging the wiring in these stories: this is a deliberately
// low-level, unopinionated PRIMITIVE — Tree, TreeItem, and useTreeSelection
// are cascade-selection building blocks, not a finished checkbox-tree
// component. Every story here wires them together a different way on
// purpose (independent checkbox, badges, controlled state, disabled nodes,
// the onAction one-step interaction) specifically to prove the primitive
// stays generic. If this looks like a lot of setup for "just a checkbox
// tree," that's intentional for right now — a convenience layer (a
// ready-to-use cascade-checkbox component, encoding the onAction +
// disabledKeys recipe these stories arrive at) is the planned next step on
// top of this, the same relationship Select already has to ListBox in this
// codebase: ListBox stays generic and independently usable, Select is the
// batteries-included composite built from it. See the plan file for the
// Tree POC (ask Jakob/Claude if you can't find it) for the full writeup —
// this isn't the whole story on its own, just the foundation.

import { useState, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useTreeData, type Key } from 'react-aria-components'
import { optionsWithSections } from '@midas-ds/test-utils'
import { Checkbox } from '../checkbox'
import { Badge } from '../badge'
import { Button } from '../button'
import { Tree } from './Tree'
import { TreeItem } from './TreeItem'
import { collectDescendantLeaves, useTreeSelection } from './useTreeSelection'

interface DemoNode {
  id: Key
  name: string
  children?: DemoNode[]
}

const categories = optionsWithSections.slice(0, 4).map(category => ({
  id: category.id,
  name: String(category.name),
  children: category.children.map(fruit => ({ id: fruit.id, name: fruit.name })),
}))

const treeItems: DemoNode[] = [
  { id: 'umbrella-1', name: 'Grupp A', children: categories.slice(0, 2) },
  { id: 'umbrella-2', name: 'Grupp B', children: categories.slice(2, 4) },
]

// RAC's defaultExpandedKeys has no "all" shortcut — branches must be listed
// explicitly, or nested rows stay collapsed (and their checkboxes
// unreachable) until a user expands them via the chevron.
const allBranchKeys: Key[] = [
  ...treeItems.map(item => item.id),
  ...categories.map(category => category.id),
]

export default {
  component: Tree,
  subcomponents: { TreeItem },
  tags: ['autodocs'],
  title: 'Internal/Tree',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Deliberately low-level primitive, not a finished checkbox-tree component. `Tree`/`TreeItem`/`useTreeSelection` are cascade-selection building blocks — the stories below each wire them together differently on purpose, to prove the primitive stays generic. The visible setup (the `onAction` + `disabledKeys` recipe, `getCheckedState`-driven `Checkbox`) is what a planned convenience layer will encapsulate for the common "just give me a cascading checkbox tree" case — the same relationship `Select` already has to `ListBox` in this codebase. Not a sign this API is meant to be used this verbosely day to day.',
      },
    },
  },
} satisfies Meta<typeof Tree>

type Story = StoryObj<typeof Tree>

// All demos below compose Tree/TreeItem statically (looping over the plain
// DemoNode array directly, not RAC's `items` prop). RAC's dynamic `items` +
// render-function pattern caches the rendered row against item identity, so
// a Checkbox's onChange/isSelected closing over reactive state from
// useTreeSelection would go stale — static JSX composition re-evaluates
// fully on every render like normal React, which is what cascade selection
// needs. useTreeData is still used where a hook needs `getItem` traversal.

const renderPlainNode = (node: DemoNode): ReactNode => (
  <TreeItem
    key={node.id}
    id={node.id}
    textValue={node.name}
    content={node.name}
  >
    {node.children?.map(renderPlainNode)}
  </TreeItem>
)

export const Default: Story = {
  render: () => (
    <Tree
      aria-label='Plain tree'
      selectionMode='none'
    >
      {treeItems.map(renderPlainNode)}
    </Tree>
  ),
}

// Proves expandedKeys/onExpandedChange are genuine RAC passthrough, not
// something our wrapper reimplements — external controls drive the exact
// same state a chevron click would, including expanding just one branch
// ("Expand Grupp A only") since expandedKeys is a plain Set<Key>, not an
// all-or-nothing flag.
const ControlledExpandedKeysDemo = () => {
  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set())

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 'var(--midas-space-small)',
          marginBottom: 'var(--midas-space-medium)',
        }}
      >
        <Button
          variant='secondary'
          onPress={() => setExpandedKeys(new Set(allBranchKeys))}
        >
          Expand all
        </Button>
        <Button
          variant='secondary'
          onPress={() => setExpandedKeys(new Set())}
        >
          Collapse all
        </Button>
        <Button
          variant='secondary'
          onPress={() => setExpandedKeys(new Set(['umbrella-1']))}
        >
          Expand Grupp A only
        </Button>
        <Button
          variant='secondary'
          onPress={() =>
            setExpandedKeys(new Set(['umbrella-1', categories[0].id]))
          }
        >
          Expand Grupp A + Tropiska frukter
        </Button>
      </div>
      <p>Expanded: {expandedKeys.size}</p>
      <Tree
        aria-label='Controlled expanded keys tree'
        selectionMode='none'
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
      >
        {treeItems.map(renderPlainNode)}
      </Tree>
    </>
  )
}

export const ControlledExpandedKeys: Story = {
  render: () => <ControlledExpandedKeysDemo />,
}

const CascadeSelectionDemo = ({
  defaultCheckedKeys,
}: {
  defaultCheckedKeys?: Iterable<Key>
}) => {
  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { getCheckedState, toggleKey } = useTreeSelection({
    tree,
    defaultCheckedKeys,
  })

  const renderNode = (node: DemoNode): ReactNode => (
    <TreeItem
      key={node.id}
      id={node.id}
      textValue={node.name}
      content={
        <Checkbox
          isSelected={getCheckedState(node.id) === 'checked'}
          isIndeterminate={getCheckedState(node.id) === 'indeterminate'}
          onChange={() => toggleKey(node.id)}
        >
          {node.name}
        </Checkbox>
      }
    >
      {node.children?.map(renderNode)}
    </TreeItem>
  )

  return (
    <Tree
      aria-label='Cascade selection tree'
      selectionMode='none'
      defaultExpandedKeys={allBranchKeys}
      onAction={key => toggleKey(key)}
    >
      {treeItems.map(renderNode)}
    </Tree>
  )
}

export const CascadeSelection: Story = {
  render: () => <CascadeSelectionDemo />,
}

export const PartiallyCheckedInitialState: Story = {
  render: () => (
    <CascadeSelectionDemo
      defaultCheckedKeys={categories[0].children.slice(0, 1).map(f => f.id)}
    />
  ),
}

const ControlledCascadeSelectionDemo = () => {
  const [checkedKeys, setCheckedKeys] = useState<Set<Key>>(new Set())

  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { getCheckedState, toggleKey } = useTreeSelection({
    tree,
    checkedKeys,
    onCheckedChange: setCheckedKeys,
  })

  const renderNode = (node: DemoNode): ReactNode => (
    <TreeItem
      key={node.id}
      id={node.id}
      textValue={node.name}
      content={
        <Checkbox
          isSelected={getCheckedState(node.id) === 'checked'}
          isIndeterminate={getCheckedState(node.id) === 'indeterminate'}
          onChange={() => toggleKey(node.id)}
        >
          {node.name}
        </Checkbox>
      }
    >
      {node.children?.map(renderNode)}
    </TreeItem>
  )

  return (
    <>
      <p>Checked leaves: {checkedKeys.size}</p>
      <Tree
        aria-label='Controlled cascade selection tree'
        selectionMode='none'
        defaultExpandedKeys={allBranchKeys}
        onAction={key => toggleKey(key)}
      >
        {treeItems.map(renderNode)}
      </Tree>
    </>
  )
}

export const ControlledCheckedKeys: Story = {
  render: () => <ControlledCascadeSelectionDemo />,
}

const DisabledNodeDemo = () => {
  const disabledLeafId = categories[0].children[0]?.id
  const disabledCategoryId = categories[1]?.id

  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { getCheckedState, toggleKey } = useTreeSelection({
    tree,
    disabledKeys: disabledLeafId ? [disabledLeafId] : undefined,
  })

  const renderNode = (node: DemoNode): ReactNode => {
    const isDisabled = node.id === disabledLeafId || node.id === disabledCategoryId

    return (
      <TreeItem
        key={node.id}
        id={node.id}
        textValue={node.name}
        content={
          <Checkbox
            isSelected={getCheckedState(node.id) === 'checked'}
            isIndeterminate={getCheckedState(node.id) === 'indeterminate'}
            isDisabled={isDisabled}
            onChange={() => toggleKey(node.id)}
          >
            {node.name}
          </Checkbox>
        }
      >
        {node.children?.map(renderNode)}
      </TreeItem>
    )
  }

  return (
    <Tree
      aria-label='Tree with disabled nodes'
      selectionMode='none'
      defaultExpandedKeys={allBranchKeys}
      disabledKeys={disabledLeafId ? [disabledLeafId] : undefined}
      onAction={key => toggleKey(key)}
    >
      {treeItems.map(renderNode)}
    </Tree>
  )
}

export const DisabledNode: Story = {
  render: () => <DisabledNodeDemo />,
}

// POC for a real ask: show each branch's selected-leaf count as a Badge.
// Deliberately built entirely from what's already exported — collectDescendantLeaves
// (from useTreeSelection.ts) plus checkedKeys — no new API needed. This is
// exactly the "free composition" TreeItem's `content` prop is designed for.
const SelectionCountBadgeDemo = () => {
  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { checkedKeys, getCheckedState, toggleKey } = useTreeSelection({
    tree,
  })

  const renderNode = (node: DemoNode): ReactNode => {
    const leaves = node.children ? collectDescendantLeaves(tree, node.id) : []
    const checkedCount = leaves.filter(key => checkedKeys.has(key)).length

    return (
      <TreeItem
        key={node.id}
        id={node.id}
        textValue={
          node.children
            ? `${node.name}, ${checkedCount} av ${leaves.length} valda`
            : node.name
        }
        content={
          <>
            <Checkbox
              isSelected={getCheckedState(node.id) === 'checked'}
              isIndeterminate={getCheckedState(node.id) === 'indeterminate'}
              onChange={() => toggleKey(node.id)}
            >
              {node.name}
            </Checkbox>
            {node.children && checkedCount > 0 && (
              <Badge>
                {checkedCount}/{leaves.length}
              </Badge>
            )}
          </>
        }
      >
        {node.children?.map(renderNode)}
      </TreeItem>
    )
  }

  return (
    <Tree
      aria-label='Tree with a selected-count badge per branch'
      selectionMode='none'
      defaultExpandedKeys={allBranchKeys}
      onAction={key => toggleKey(key)}
    >
      {treeItems.map(renderNode)}
    </Tree>
  )
}

export const WithSelectionCountBadge: Story = {
  render: () => <SelectionCountBadgeDemo />,
}
