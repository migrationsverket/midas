import { describe, expect, it } from 'vitest'
import type { Key } from 'react-aria-components'
import {
  collectDescendantLeaves,
  computeCheckedState,
  computeNextCheckedKeys,
} from './useTreeSelection'

interface FakeNode {
  key: Key
  value: Key
  children: FakeNode[] | null
}

const leaf = (key: Key): FakeNode => ({ key, value: key, children: null })
const branch = (key: Key, children: FakeNode[]): FakeNode => ({
  key,
  value: key,
  children,
})

// umbrella
//   category-1
//     leaf-1
//     leaf-2
//   category-2
//     leaf-3
const fixture = branch('umbrella', [
  branch('category-1', [leaf('leaf-1'), leaf('leaf-2')]),
  branch('category-2', [leaf('leaf-3')]),
])

const index = new Map<Key, FakeNode>()
const indexNode = (node: FakeNode) => {
  index.set(node.key, node)
  node.children?.forEach(indexNode)
}
indexNode(fixture)

const tree = { getItem: (key: Key) => index.get(key) }

describe('collectDescendantLeaves', () => {
  it('collects every leaf under a mid-level parent (2 levels down)', () => {
    expect(collectDescendantLeaves(tree, 'umbrella')).toEqual([
      'leaf-1',
      'leaf-2',
      'leaf-3',
    ])
  })

  it('collects leaves under a one-level-deep parent', () => {
    expect(collectDescendantLeaves(tree, 'category-1')).toEqual([
      'leaf-1',
      'leaf-2',
    ])
  })

  it('returns itself for an already-leaf key', () => {
    expect(collectDescendantLeaves(tree, 'leaf-1')).toEqual(['leaf-1'])
  })

  it('returns an empty array for an unknown key', () => {
    expect(collectDescendantLeaves(tree, 'nonexistent')).toEqual([])
  })

  it('respects a custom isLeaf predicate, e.g. for a not-yet-populated lazy branch', () => {
    const lazyBranch = branch('lazy', [])
    const lazyIndex = new Map<Key, FakeNode>([['lazy', lazyBranch]])
    const lazyTree = { getItem: (key: Key) => lazyIndex.get(key) }

    expect(
      collectDescendantLeaves(lazyTree, 'lazy', node => node.children === null),
    ).toEqual([])
  })
})

describe('computeCheckedState', () => {
  it('is unchecked when nothing is checked', () => {
    expect(computeCheckedState(tree, 'umbrella', new Set())).toBe('unchecked')
    expect(computeCheckedState(tree, 'category-1', new Set())).toBe(
      'unchecked',
    )
  })

  it('is indeterminate for an ancestor when only some descendant leaves are checked', () => {
    const checked = new Set<Key>(['leaf-1'])
    expect(computeCheckedState(tree, 'category-1', checked)).toBe(
      'indeterminate',
    )
    expect(computeCheckedState(tree, 'umbrella', checked)).toBe(
      'indeterminate',
    )
    expect(computeCheckedState(tree, 'category-2', checked)).toBe('unchecked')
  })

  it('is checked for an ancestor once every descendant leaf is checked', () => {
    const checked = new Set<Key>(['leaf-1', 'leaf-2', 'leaf-3'])
    expect(computeCheckedState(tree, 'category-1', checked)).toBe('checked')
    expect(computeCheckedState(tree, 'category-2', checked)).toBe('checked')
    expect(computeCheckedState(tree, 'umbrella', checked)).toBe('checked')
  })

  it('reflects a leaf key directly', () => {
    expect(computeCheckedState(tree, 'leaf-1', new Set(['leaf-1']))).toBe(
      'checked',
    )
    expect(computeCheckedState(tree, 'leaf-1', new Set())).toBe('unchecked')
  })

  it('is checked once every TOGGLABLE leaf is checked, even with a disabled unchecked leaf present', () => {
    // leaf-1 is permanently unchecked (disabled) — without excluding it,
    // 'checked' would be unreachable and a parent checkbox could never
    // round-trip back to unchecked once toggled on.
    const checked = new Set<Key>(['leaf-2'])
    const disabledKeys = new Set<Key>(['leaf-1'])
    expect(
      computeCheckedState(tree, 'category-1', checked, undefined, disabledKeys),
    ).toBe('checked')
  })

  it('is unchecked, not checked, when the only checked leaf is disabled', () => {
    const checked = new Set<Key>(['leaf-1'])
    const disabledKeys = new Set<Key>(['leaf-1'])
    expect(
      computeCheckedState(tree, 'category-1', checked, undefined, disabledKeys),
    ).toBe('unchecked')
  })
})

describe('computeNextCheckedKeys', () => {
  it('checking a parent adds all its descendant leaves', () => {
    const next = computeNextCheckedKeys(tree, 'category-1', true, new Set())
    expect(next).toEqual(new Set(['leaf-1', 'leaf-2']))
  })

  it('unchecking a fully-checked parent removes all its descendant leaves', () => {
    const start = new Set<Key>(['leaf-1', 'leaf-2', 'leaf-3'])
    const next = computeNextCheckedKeys(tree, 'category-1', false, start)
    expect(next).toEqual(new Set(['leaf-3']))
  })

  it('toggling the same key on then off is idempotent', () => {
    const checkedOn = computeNextCheckedKeys(
      tree,
      'category-1',
      true,
      new Set(),
    )
    const checkedOff = computeNextCheckedKeys(
      tree,
      'category-1',
      false,
      checkedOn,
    )
    expect(checkedOff).toEqual(new Set())
  })

  it('does not flip a disabled leaf even when its parent is cascaded', () => {
    const next = computeNextCheckedKeys(tree, 'category-1', true, new Set(), {
      disabledKeys: new Set(['leaf-1']),
    })
    expect(next).toEqual(new Set(['leaf-2']))
  })

  it('does not toggle a disabled leaf directly', () => {
    const next = computeNextCheckedKeys(tree, 'leaf-1', true, new Set(), {
      disabledKeys: new Set(['leaf-1']),
    })
    expect(next).toEqual(new Set())
  })

  it('returns the input set unchanged for an unknown key', () => {
    const start = new Set<Key>(['leaf-1'])
    expect(computeNextCheckedKeys(tree, 'nonexistent', true, start)).toBe(
      start,
    )
  })
})
