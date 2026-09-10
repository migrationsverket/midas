import { useRef } from 'react'
import { describe, expect, it } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { useTreeData, type Key } from 'react-aria-components'
import { render } from '../../test-utils'
import { computeFilteredTreeKeys, useFilteredTree } from './useFilteredTree'
import { Tree } from './Tree'
import { TreeItem } from './TreeItem'

interface FakeValue {
  name: string
}

interface FakeNode {
  key: Key
  value: FakeValue
  children: FakeNode[] | null
}

const leaf = (key: Key): FakeNode => ({
  key,
  value: { name: String(key) },
  children: null,
})
const branch = (key: Key, children: FakeNode[]): FakeNode => ({
  key,
  value: { name: String(key) },
  children,
})

const getTextValue = (value: FakeValue) => value.name
const contains = (text: string, substring: string) =>
  text.toLowerCase().includes(substring.toLowerCase())

// umbrella
//   tropical (no own-text match for "ananas")
//     ananas
//     banan
//   berries
//     jordgubbe
describe('computeFilteredTreeKeys', () => {
  const items = [
    branch('umbrella', [
      branch('tropical', [leaf('ananas'), leaf('banan')]),
      branch('berries', [leaf('jordgubbe')]),
    ]),
  ]

  it('returns a null visibleKeys and empty forcedExpandedKeys for an empty filter', () => {
    const result = computeFilteredTreeKeys(
      { items },
      '',
      getTextValue,
      contains,
    )
    expect(result.visibleKeys).toBeNull()
    expect(result.forcedExpandedKeys).toEqual(new Set())
  })

  it('keeps a matching leaf and its full ancestor chain visible', () => {
    const { visibleKeys } = computeFilteredTreeKeys(
      { items },
      'ananas',
      getTextValue,
      contains,
    )
    expect(visibleKeys).toEqual(new Set(['umbrella', 'tropical', 'ananas']))
  })

  it('force-expands only branches containing a match, not the whole tree', () => {
    const { forcedExpandedKeys } = computeFilteredTreeKeys(
      { items },
      'ananas',
      getTextValue,
      contains,
    )
    expect(forcedExpandedKeys).toEqual(new Set(['umbrella', 'tropical']))
    expect(forcedExpandedKeys.has('berries')).toBe(false)
  })

  it('omits a non-matching subtree entirely', () => {
    const { visibleKeys } = computeFilteredTreeKeys(
      { items },
      'jordgubbe',
      getTextValue,
      contains,
    )
    expect(visibleKeys?.has('tropical')).toBe(false)
    expect(visibleKeys?.has('ananas')).toBe(false)
  })

  it('matches a branch by its own text even with no matching descendant', () => {
    const { visibleKeys, forcedExpandedKeys } = computeFilteredTreeKeys(
      { items },
      'berries',
      getTextValue,
      contains,
    )
    expect(visibleKeys).toEqual(new Set(['umbrella', 'berries']))
    // The match is the branch's own label, not a descendant, so it isn't
    // force-expanded to "reveal" anything.
    expect(forcedExpandedKeys.has('berries')).toBe(false)
  })
})

interface DemoNode {
  id: Key
  name: string
  children?: DemoNode[]
}

const demoItems: DemoNode[] = [
  {
    id: 'grupp-a',
    name: 'Grupp A',
    children: [
      { id: 'ananas', name: 'Ananas' },
      { id: 'banan', name: 'Banan' },
    ],
  },
  {
    id: 'grupp-b',
    name: 'Grupp B',
    children: [{ id: 'jordgubbe', name: 'Jordgubbe' }],
  },
]

const FilteredTreeDemo = ({ filterText }: { filterText: string }) => {
  const treeRef = useRef<HTMLDivElement>(null)
  const tree = useTreeData<DemoNode>({
    initialItems: demoItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const { visibleKeys, expandedKeys, onExpandedChange } = useFilteredTree({
    tree,
    filterText,
    getTextValue: item => item.name,
  })

  const renderNode = (node: DemoNode) => {
    if (visibleKeys && !visibleKeys.has(node.id)) return null
    return (
      <TreeItem
        key={node.id}
        id={node.id}
        textValue={node.name}
        content={node.name}
      >
        {node.children?.map(renderNode)}
      </TreeItem>
    )
  }

  return (
    <Tree
      ref={treeRef}
      aria-label='Demo'
      selectionMode='none'
      expandedKeys={expandedKeys}
      onExpandedChange={onExpandedChange}
    >
      {demoItems.map(renderNode)}
    </Tree>
  )
}

describe('given useFilteredTree wired to a real Tree', async () => {
  it('force-expands a branch containing a match', async () => {
    await render(<FilteredTreeDemo filterText='ananas' />)

    await expect.element(page.getByRole('row', { name: 'Grupp A' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await expect.element(page.getByRole('row', { name: 'Ananas' })).toBeVisible()
    await expect
      .element(page.getByRole('row', { name: 'Jordgubbe' }))
      .not.toBeInTheDocument()
  })

  it('lets the user collapse a filter-force-expanded branch (regression: it used to snap back open)', async () => {
    await render(<FilteredTreeDemo filterText='ananas' />)

    const groupA = page.getByRole('row', { name: 'Grupp A' })
    await userEvent.click(groupA.getByRole('button'))

    await expect.element(groupA).toHaveAttribute('aria-expanded', 'false')
    await expect
      .element(page.getByRole('row', { name: 'Ananas' }))
      .not.toBeInTheDocument()
  })
})
