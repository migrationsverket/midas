import { useControlledState } from '@react-stately/utils'
import type { Key, TreeData } from 'react-aria-components'
import type { CheckedState } from './types'

type TreeNode<T extends object> = NonNullable<ReturnType<TreeData<T>['getItem']>>
type TreeLike<T extends object> = Pick<TreeData<T>, 'getItem'>

const defaultIsLeaf = <T extends object,>(node: TreeNode<T>) =>
  !node.children || node.children.length === 0

/** DFS down from `key`, collecting every descendant leaf key (or `[key]` itself if it's already a leaf). */
export const collectDescendantLeaves = <T extends object,>(
  tree: TreeLike<T>,
  key: Key,
  isLeaf: (node: TreeNode<T>) => boolean = defaultIsLeaf,
): Key[] => {
  const node = tree.getItem(key)
  if (!node) return []
  if (isLeaf(node)) return [key]
  return (node.children ?? []).flatMap(child =>
    collectDescendantLeaves(tree, child.key, isLeaf),
  )
}

/**
 * Derives a node's tri-state from its own (if a leaf) or its descendant
 * leaves' (if a branch) membership in `checkedKeys`.
 *
 * A branch's "checked" tri-state is computed over its *togglable* (non-
 * disabled) descendant leaves only — mirroring `checkbox/useSelectAll.ts`'s
 * `allSelected` math, which excludes disabled items from the denominator
 * for the same reason: a permanently-unchecked disabled leaf must not make
 * "fully checked" unreachable for everything the user actually controls.
 * `computeNextCheckedKeys` already excludes disabled leaves from mutation;
 * this keeps the *displayed* state consistent with what a toggle can
 * actually achieve, so the parent checkbox can round-trip check ↔ uncheck
 * instead of getting stuck at 'indeterminate' forever.
 */
export const computeCheckedState = <T extends object,>(
  tree: TreeLike<T>,
  key: Key,
  checkedKeys: Set<Key>,
  isLeaf: (node: TreeNode<T>) => boolean = defaultIsLeaf,
  disabledKeys: Set<Key> = new Set<Key>(),
): CheckedState => {
  const node = tree.getItem(key)
  if (!node) return 'unchecked'

  if (isLeaf(node)) {
    return checkedKeys.has(key) ? 'checked' : 'unchecked'
  }

  const togglableLeaves = collectDescendantLeaves(tree, key, isLeaf).filter(
    leafKey => !disabledKeys.has(leafKey),
  )

  const checkedCount = togglableLeaves.filter(leafKey =>
    checkedKeys.has(leafKey),
  ).length

  if (checkedCount === 0) return 'unchecked'
  if (checkedCount === togglableLeaves.length) return 'checked'
  return 'indeterminate'
}

/**
 * Returns the `checkedKeys` set that results from setting `key` to
 * `isChecked` — cascading to descendant leaves if `key` is a branch, minus
 * any leaf in `disabledKeys` (preserved regardless of the cascade). Returns
 * `checkedKeys` unchanged (same reference) for an unknown key, or for a
 * disabled leaf toggled directly.
 */
export const computeNextCheckedKeys = <T extends object,>(
  tree: TreeLike<T>,
  key: Key,
  isChecked: boolean,
  checkedKeys: Set<Key>,
  options: {
    disabledKeys?: Set<Key>
    isLeaf?: (node: TreeNode<T>) => boolean
  } = {},
): Set<Key> => {
  const { disabledKeys = new Set<Key>(), isLeaf = defaultIsLeaf } = options
  const node = tree.getItem(key)
  if (!node) return checkedKeys
  if (isLeaf(node) && disabledKeys.has(key)) return checkedKeys

  const leaves = (
    isLeaf(node) ? [key] : collectDescendantLeaves(tree, key, isLeaf)
  ).filter(leafKey => !disabledKeys.has(leafKey))

  const next = new Set(checkedKeys)
  for (const leafKey of leaves) {
    if (isChecked) {
      next.add(leafKey)
    } else {
      next.delete(leafKey)
    }
  }
  return next
}

export interface UseTreeSelectionOptions<T extends object> {
  /** The hierarchical data, from `useTreeData` (or anything exposing the same `getItem` shape). */
  tree: TreeData<T>
  /** Uncontrolled initial checked leaf keys. */
  defaultCheckedKeys?: Iterable<Key>
  /** Controlled checked leaf keys. */
  checkedKeys?: Iterable<Key>
  /** Called with the full resulting set whenever a toggle changes it. */
  onCheckedChange?: (keys: Set<Key>) => void
  /**
   * Leaf keys that must not be flipped by a cascading parent toggle — their
   * own checked state is preserved regardless of which way an ancestor is
   * toggled (mirrors `checkbox/useSelectAll.ts`'s preserved-disabled-values
   * behavior). They're also excluded from an ancestor's checked/indeterminate
   * computation, so a permanently-unchecked disabled leaf can't prevent its
   * parent from ever reporting 'checked' for everything that IS togglable.
   */
  disabledKeys?: Iterable<Key>
  /**
   * Identifies leaf nodes, for cases where `children` isn't a reliable
   * enough signal (e.g. a lazy-loaded branch with no children fetched yet).
   * @default (node) => !node.children || node.children.length === 0
   */
  isLeaf?: (node: TreeNode<T>) => boolean
}

export interface UseTreeSelectionResult {
  /** Explicitly + cascade-implied checked leaves. Source of truth is explicit leaves only. */
  checkedKeys: Set<Key>
  /** Per-node tri-state, derived on demand for any node in the tree. */
  getCheckedState: (key: Key) => CheckedState
  /** Toggles a node: cascades to descendant leaves if it's a parent, recomputes ancestors implicitly (derived, not stored). */
  toggleKey: (key: Key) => void
  /** Explicit set (not toggle) — for programmatic use, e.g. a "select all" control. */
  setChecked: (key: Key, isChecked: boolean) => void
}

/**
 * Layers cascade ("check a parent, check all its leaves") selection on top
 * of a `useTreeData` hierarchy. Deliberately standalone — never reaches into
 * RAC's TreeStateContext/TreeContext, and is independent of RAC's own
 * `selectedKeys` (focus/highlight). Compose its return value into whatever
 * markup you render inside a `TreeItem`'s children.
 */
export const useTreeSelection = <T extends object,>({
  tree,
  defaultCheckedKeys,
  checkedKeys: checkedKeysProp,
  onCheckedChange,
  disabledKeys,
  isLeaf = defaultIsLeaf,
}: UseTreeSelectionOptions<T>): UseTreeSelectionResult => {
  const [checkedKeys, setCheckedKeys] = useControlledState<Set<Key>>(
    checkedKeysProp ? new Set(checkedKeysProp) : undefined,
    new Set(defaultCheckedKeys ?? []),
    onCheckedChange,
  )

  const disabledKeySet = new Set(disabledKeys ?? [])

  const getCheckedState = (key: Key): CheckedState =>
    computeCheckedState(tree, key, checkedKeys, isLeaf, disabledKeySet)

  const setChecked = (key: Key, isChecked: boolean) => {
    setCheckedKeys(
      computeNextCheckedKeys(tree, key, isChecked, checkedKeys, {
        disabledKeys: disabledKeySet,
        isLeaf,
      }),
    )
  }

  const toggleKey = (key: Key) => {
    setChecked(key, getCheckedState(key) !== 'checked')
  }

  return {
    checkedKeys,
    getCheckedState,
    toggleKey,
    setChecked,
  }
}
