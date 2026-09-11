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
// batteries-included composite built from it. Ask Jakob for the full writeup
// on the searchable/filterable-tree next step — this isn't the whole story
// on its own, just the foundation.

import { useRef, useState, type FocusEventHandler, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Autocomplete,
  Dialog,
  DialogTrigger,
  Input,
  Modal,
  SearchField,
  useFilter,
  useTreeData,
  type Key,
} from 'react-aria-components'
import { mergeProps, useInteractOutside, useKeyboard } from 'react-aria'
import { ChevronDown } from 'lucide-react'
import { optionsWithSections } from '@midas-ds/test-utils'
import { Checkbox } from '../checkbox'
import { Badge } from '../badge'
import { Button } from '../button'
import { Popover } from '../popover'
import { Label } from '../label'
import { Text } from '../text'
import { Tag, TagGroup, TagList } from '../tag'
import { Tree } from './Tree'
import { TreeItem } from './TreeItem'
import { collectDescendantLeaves, useTreeSelection } from './useTreeSelection'
import popoverFieldStyles from './PopoverFilterableTree.stories.module.css'
import { useFilteredTree } from './useFilteredTree'
import { useTreeFocusBridge } from './useTreeFocusBridge'

interface DemoNode {
  id: Key
  name: string
  children?: DemoNode[]
}

const categories = optionsWithSections.slice(0, 4).map(category => ({
  id: category.id,
  name: String(category.name),
  children: category.children.map(fruit => ({
    id: fruit.id,
    name: fruit.name,
  })),
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
    const isDisabled =
      node.id === disabledLeafId || node.id === disabledCategoryId

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

// ---------------------------------------------------------------------------
// Reference example for useFilteredTree + useTreeFocusBridge — see the plan
// linked at the top of this file for the full writeup of why this shape
// (real focus movement, not RAC's <Autocomplete>) is necessary for Tree.
// ---------------------------------------------------------------------------

const FilterableTreeDemo = () => {
  const [query, setQuery] = useState('')
  const treeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { getCheckedState, toggleKey } = useTreeSelection({
    tree,
  })

  const { visibleKeys, expandedKeys, onExpandedChange } = useFilteredTree({
    tree,
    filterText: query,
    getTextValue: item => item.name,
    defaultExpandedKeys: allBranchKeys,
  })

  const { inputKeyboardProps, treeKeyboardProps } = useTreeFocusBridge({
    treeRef,
    inputRef,
  })

  const renderNode = (node: DemoNode): ReactNode => {
    if (visibleKeys && !visibleKeys.has(node.id)) return null
    return (
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
  }

  return (
    <>
      <SearchField
        aria-label='Filter tree'
        value={query}
        onChange={setQuery}
      >
        <Input
          {...inputKeyboardProps}
          ref={inputRef}
          placeholder='Filter…'
          style={{ display: 'block', marginBottom: 8, padding: 8 }}
        />
      </SearchField>
      <div {...treeKeyboardProps}>
        <Tree
          ref={treeRef}
          aria-label='Filterable tree'
          selectionMode='none'
          expandedKeys={expandedKeys}
          onExpandedChange={onExpandedChange}
          onAction={key => toggleKey(key)}
        >
          {treeItems.map(renderNode)}
        </Tree>
      </div>
    </>
  )
}

export const FilterableTree: Story = {
  tags: ['!autodocs', '!snapshot'],
  render: () => <FilterableTreeDemo />,
}

// ---------------------------------------------------------------------------
// Same building blocks (useFilteredTree + useTreeFocusBridge), now composed
// behind a real popover instead of inline — the piece the plan gist left
// open. Two things only show up once the tree is *actually* portalled out of
// the input's own DOM subtree, which is what a non-modal Popover does:
//
// 1. `useTreeFocusBridge` still works unmodified. It moves focus with a
//    plain `treeRef.current?.focus()` (Tree's root carries `tabindex="0"`
//    until a row is focused, and handing it real DOM focus natively lands on
//    the first *focusable* row — RAC's own roving-tabindex bookkeeping,
//    confirmed to correctly skip a disabled first row). That's a plain DOM
//    ref, not scoped to a `FocusScope`, so it doesn't care that the tree
//    lives in a portal the input isn't inside.
// 2. Popover's `isNonModal` (required here — a modal popover steals focus on
//    open, which would cut off typing after the first keystroke) also turns
//    off RAC's built-in outside-click dismissal as a side effect
//    (`usePopover` wires `isDismissable: !isNonModal` into `useOverlay`).
//    Restored with `useInteractOutside` — the same hook `useOverlay` itself
//    uses internally for this, so it's still genuinely RAC-native, just
//    called directly instead of picked up for free.
// ---------------------------------------------------------------------------

const PopoverFilterableTreeDemo = () => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const treeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLElement>(null)
  // Popover positions/sizes itself relative to whatever `triggerRef` points
  // at. The chevron button alone is narrow and sits at the field's right
  // edge, so anchoring to it directly put the popover off to the right
  // instead of under the whole field — this ref (the field's full-width
  // wrap) is for *positioning* only; `triggerRef` (the button) still owns
  // focus-restoration on Tab.
  const fieldWrapRef = useRef<HTMLDivElement>(null)

  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { checkedKeys, getCheckedState, toggleKey } = useTreeSelection({
    tree,
  })

  const { visibleKeys, expandedKeys, onExpandedChange } = useFilteredTree({
    tree,
    filterText: query,
    getTextValue: item => item.name,
    defaultExpandedKeys: allBranchKeys,
  })

  // Closed-field summary — mirrors SelectTags.tsx's "selected items as
  // dismissable tags" recipe, driven by our own checkedKeys instead of
  // SelectStateContext. Leaves only (not branches): a branch's badge already
  // shows its own aggregate, a tag per branch would double up on it.
  const checkedLeafItems = Array.from(checkedKeys)
    .map(key => ({ key, node: tree.getItem(key)?.value }))
    .filter(
      (item): item is { key: Key; node: DemoNode } =>
        item.node != null && !item.node.children,
    )

  const { inputKeyboardProps, treeKeyboardProps } = useTreeFocusBridge({
    treeRef,
    inputRef,
  })

  // useTreeFocusBridge's ArrowDown always calls treeRef.current?.focus() —
  // fine once the popover is open, a no-op (nothing to focus) while it's
  // closed. So opening on ArrowDown/ArrowUp when closed is this demo's own
  // concern, composed alongside the bridge's props rather than inside it.
  const { keyboardProps: openOnArrowKeyboardProps } = useKeyboard({
    shortcuts: {
      ArrowDown: () => {
        if (!isOpen) setIsOpen(true)
      },
      ArrowUp: () => {
        if (!isOpen) setIsOpen(true)
      },
    },
  })

  // The bridge's own Escape only refocuses the input (its job stops at
  // focus, not open state) — closing the popover is composed in here.
  const { keyboardProps: closeOnEscapeKeyboardProps } = useKeyboard({
    shortcuts: {
      Escape: () => setIsOpen(false),
    },
  })

  useInteractOutside({
    ref: popoverRef,
    isDisabled: !isOpen,
    onInteractOutside: () => setIsOpen(false),
  })

  // Tab while focus is inside the (portalled) tree: without this, Tab falls
  // through to the *portal's* raw DOM position, not the field's logical
  // position on the page — real focus, not virtual focus, is what's inside
  // Tree (the reason this whole bridge exists). `usePopover` does close the
  // popover for free on any outside blur (`shouldCloseOnBlur: true`, even
  // when `isNonModal`), but that alone doesn't relocate focus anywhere
  // useful — confirmed empirically: removing this and relying solely on
  // react-aria's own Tab handling regressed the "lands on the next real
  // element" behavior below.
  const { keyboardProps: tabToExitKeyboardProps } = useKeyboard({
    shortcuts: {
      Tab: () => {
        setIsOpen(false)
        triggerRef.current?.focus()
        return false
      },
    },
  })

  // Shift+Tab specifically can't be handled the same way: react-aria's own
  // FocusScope installs a *document-level, capture-phase* native listener
  // for Tab (`useRestoreFocus`, for its own "restore focus on tab-out of a
  // portalled overlay" feature) — confirmed via instrumentation that for
  // Shift+Tab specifically it calls stopPropagation before the keydown ever
  // reaches any handler of ours (React or native), on this exact focused
  // row, landing focus on document.body instead of anywhere useful. Rather
  // than fight a document-level listener from inside a child component,
  // this reacts to the *result* instead: if focus ends up lost (no
  // relatedTarget, or the popover's own onBlurWithin already decided to
  // close and focus fell to body), recover by returning it to the input.
  const handleTreeBlur: FocusEventHandler<HTMLDivElement> = e => {
    const next = e.relatedTarget
    if (!next || next === document.body) {
      setIsOpen(false)
      inputRef.current?.focus()
    }
  }

  const renderNode = (node: DemoNode): ReactNode => {
    if (visibleKeys && !visibleKeys.has(node.id)) return null
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
    <div className={popoverFieldStyles.field}>
      <Label>Enheter, ort, byggnader eller sektion</Label>
      <Text slot='description'>Sök eller bläddra i trädet</Text>
      <SearchField
        aria-label='Filter tree'
        value={query}
        onChange={value => {
          setQuery(value)
          if (value) setIsOpen(true)
        }}
      >
        <div
          ref={fieldWrapRef}
          className={popoverFieldStyles.wrap}
        >
          <Input
            {...mergeProps(
              inputKeyboardProps,
              openOnArrowKeyboardProps,
              closeOnEscapeKeyboardProps,
            )}
            ref={inputRef}
            placeholder='Lägg till enheter'
            className={popoverFieldStyles.inputField}
          />
          <button
            ref={triggerRef}
            type='button'
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Dölj träd' : 'Visa träd'}
            className={popoverFieldStyles.button}
            onClick={() => setIsOpen(open => !open)}
          >
            <ChevronDown
              size={20}
              aria-hidden
            />
          </button>
        </div>
      </SearchField>
      <Popover
        isNonModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        triggerRef={fieldWrapRef}
        ref={popoverRef}
        hideArrow
        className={popoverFieldStyles.popoverContent}
      >
        <div
          {...mergeProps(treeKeyboardProps, tabToExitKeyboardProps)}
          onBlur={handleTreeBlur}
        >
          <Tree
            ref={treeRef}
            aria-label='Filterable tree'
            selectionMode='none'
            expandedKeys={expandedKeys}
            onExpandedChange={onExpandedChange}
            onAction={key => toggleKey(key)}
          >
            {treeItems.map(renderNode)}
          </Tree>
        </div>
      </Popover>
      {/* Always rendered, matching SelectTags.tsx's own convention (tags
          reflect selection regardless of open state) — while open, the
          floating popover naturally covers this same area anyway, the same
          way any dropdown covers what's beneath it. Gating on `isOpen`
          instead would mount/unmount tags on every toggle: a visible flicker,
          and content appearing/disappearing isn't clean for screen readers
          either. */}
      {checkedLeafItems.length > 0 && (
        <TagGroup
          aria-label='Valda enheter'
          className={popoverFieldStyles.tagGroup}
          onRemove={keys => toggleKey(Array.from(keys)[0])}
          selectionBehavior='toggle'
        >
          <TagList items={checkedLeafItems}>
            {item => (
              <Tag
                isDismissable
                id={item.key}
                textValue={item.node.name}
              >
                {item.node.name}
              </Tag>
            )}
          </TagList>
        </TagGroup>
      )}
    </div>
  )
}

export const PopoverFilterableTree: Story = {
  tags: ['!autodocs', '!snapshot'],
  render: () => (
    <>
      <PopoverFilterableTreeDemo />
      {/* Sentinel to prove Tab exits to the field's real page position, not
          the portal's raw DOM position — see the Tab/Shift+Tab handling in
          PopoverFilterableTreeDemo. */}
      <button type='button'>Next field</button>
    </>
  ),
}

// ---------------------------------------------------------------------------
// Same building blocks yet again, this time folded into a plain CSS-
// positioned panel instead of a Popover — no portal. Short version:
// `position: absolute` on the panel + `position: relative` on its wrap gets
// the same "floats over the page" look as PopoverFilterableTree, but Tab
// order, focus order, and the accessibility tree all follow *DOM* position,
// which this never changes — only visual position moves. That's why none of
// PopoverFilterableTreeDemo's Tab/Shift+Tab handling, blur-recovery, or
// useCloseOnScroll workaround show up below: there's no portal boundary for
// any of that machinery to react to in the first place. Ask Jakob for the
// full comparison writeup.
// ---------------------------------------------------------------------------

const DropdownFilterableTreeDemo = () => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const treeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const controlRef = useRef<HTMLDivElement>(null)

  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { checkedKeys, getCheckedState, toggleKey } = useTreeSelection({
    tree,
  })

  const { visibleKeys, expandedKeys, onExpandedChange } = useFilteredTree({
    tree,
    filterText: query,
    getTextValue: item => item.name,
    defaultExpandedKeys: allBranchKeys,
  })

  const checkedLeafItems = Array.from(checkedKeys)
    .map(key => ({ key, node: tree.getItem(key)?.value }))
    .filter(
      (item): item is { key: Key; node: DemoNode } =>
        item.node != null && !item.node.children,
    )

  const { inputKeyboardProps, treeKeyboardProps } = useTreeFocusBridge({
    treeRef,
    inputRef,
  })

  const { keyboardProps: openOnArrowKeyboardProps } = useKeyboard({
    shortcuts: {
      ArrowDown: () => {
        if (!isOpen) setIsOpen(true)
      },
      ArrowUp: () => {
        if (!isOpen) setIsOpen(true)
      },
    },
  })

  const { keyboardProps: closeOnEscapeKeyboardProps } = useKeyboard({
    shortcuts: {
      Escape: () => setIsOpen(false),
    },
  })

  useInteractOutside({
    ref: controlRef,
    isDisabled: !isOpen,
    onInteractOutside: () => setIsOpen(false),
  })

  // No portal means Tab/Shift+Tab need none of PopoverFilterableTreeDemo's
  // handling — real DOM order already carries focus out to whatever's next
  // on the page. This just closes the panel once focus actually leaves the
  // whole control, so it doesn't sit visually open with focus elsewhere.
  const handleControlBlur: FocusEventHandler<HTMLDivElement> = e => {
    if (!controlRef.current?.contains(e.relatedTarget)) {
      setIsOpen(false)
    }
  }

  const renderNode = (node: DemoNode): ReactNode => {
    if (visibleKeys && !visibleKeys.has(node.id)) return null
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
    <div className={popoverFieldStyles.field}>
      <Label>Enheter, ort, byggnader eller sektion</Label>
      <Text slot='description'>Sök eller bläddra i trädet</Text>
      <SearchField
        aria-label='Filter tree'
        value={query}
        onChange={value => {
          setQuery(value)
          if (value) setIsOpen(true)
        }}
      >
        <div
          ref={controlRef}
          className={popoverFieldStyles.wrap}
          onBlur={handleControlBlur}
        >
          <Input
            {...mergeProps(
              inputKeyboardProps,
              openOnArrowKeyboardProps,
              closeOnEscapeKeyboardProps,
            )}
            ref={inputRef}
            placeholder='Lägg till enheter'
            className={popoverFieldStyles.inputField}
          />
          <button
            ref={triggerRef}
            type='button'
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Dölj träd' : 'Visa träd'}
            className={popoverFieldStyles.button}
            onClick={() => setIsOpen(open => !open)}
          >
            <ChevronDown
              size={20}
              aria-hidden
            />
          </button>
          {isOpen && (
            <div className={popoverFieldStyles.panel}>
              <div
                {...mergeProps(treeKeyboardProps, closeOnEscapeKeyboardProps)}
              >
                <Tree
                  ref={treeRef}
                  aria-label='Filterable tree'
                  selectionMode='none'
                  expandedKeys={expandedKeys}
                  onExpandedChange={onExpandedChange}
                  onAction={key => toggleKey(key)}
                >
                  {treeItems.map(renderNode)}
                </Tree>
              </div>
            </div>
          )}
        </div>
      </SearchField>
      {/* Always rendered — see the matching comment in
          PopoverFilterableTreeDemo. The floating panel covers this same area
          while open anyway, same as any dropdown covers what's beneath it. */}
      {checkedLeafItems.length > 0 && (
        <TagGroup
          aria-label='Valda enheter'
          className={popoverFieldStyles.tagGroup}
          onRemove={keys => toggleKey(Array.from(keys)[0])}
          selectionBehavior='toggle'
        >
          <TagList items={checkedLeafItems}>
            {item => (
              <Tag
                isDismissable
                id={item.key}
                textValue={item.node.name}
              >
                {item.node.name}
              </Tag>
            )}
          </TagList>
        </TagGroup>
      )}
    </div>
  )
}

export const DropdownFilterableTree: Story = {
  tags: ['!autodocs', '!snapshot'],
  render: () => (
    <>
      <DropdownFilterableTreeDemo />
      {/* Same sentinel as PopoverFilterableTree, to prove Tab lands here
          natively — no custom Tab handling needed without a portal. */}
      <button type='button'>Next field</button>
    </>
  ),
}

/**
 * Ett exempel med med Modal och Autocomplete
 * Lite förvirrande att filtret rensar vissa lövnoder men de är fortfarande tillgängliga för val via sin förälder
 */
export const AutocompleteModal: Story = {
  render: () => {
    const tree = useTreeData<DemoNode>({
      initialItems: treeItems,
      getKey: item => item.id,
      getChildren: item => item.children ?? [],
    })

    const { getCheckedState, toggleKey, checkedKeys } = useTreeSelection({
      tree,
    })

    const { contains } = useFilter({ sensitivity: 'base' })

    const [search, setSearch] = useState('')

    const filterTree = (nodes: DemoNode[], searchText: string) => {
      if (!searchText) return nodes

      return nodes
        .map<DemoNode>(node => {
          const filteredChildren = node.children
            ? filterTree(node.children, searchText)
            : []

          const nodeMatches = node.name
            .toLowerCase()
            .includes(searchText.toLowerCase())

          // Keep node if it matches OR has matching children
          if (nodeMatches || filteredChildren.length > 0) {
            return { ...node, children: filteredChildren }
          }
          return null
        })
        .filter(Boolean)
    }

    const filteredNodes = filterTree(treeItems, search)

    const checkedLeafItems = Array.from(checkedKeys)
      .map(key => ({ key, node: tree.getItem(key)?.value }))
      .filter(
        (item): item is { key: Key; node: DemoNode } =>
          item.node != null && !item.node.children,
      )

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
      <DialogTrigger>
        <Button>
          {checkedLeafItems.length
            ? checkedLeafItems.map(item => item.node.name).join(', ')
            : 'Inga valda'}
        </Button>
        <Modal isDismissable>
          <Dialog>
            <Autocomplete
              filter={contains}
              inputValue={search}
              onInputChange={setSearch}
            >
              <SearchField
                aria-label='Search'
                autoFocus
              >
                <Input />
              </SearchField>
              <Tree
                aria-label='Cascade selection tree'
                selectionMode='none'
                onAction={toggleKey}
              >
                {filteredNodes.map(renderNode)}
              </Tree>
            </Autocomplete>
          </Dialog>
        </Modal>
      </DialogTrigger>
    )
  },
}
