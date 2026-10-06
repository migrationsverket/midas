import { describe, expect, it } from 'vitest'
import { caseTypes } from './data'
import { organisation } from './organisation'
import { collapseSelection, groupSelection } from './summary'
import { findNode, getLeaves, toggleNode } from './selection'

const node = (id: string, nodes = caseTypes) => {
  const found = findNode(id, nodes)
  if (!found) throw new Error(`No node with id ${id}`)
  return found
}

describe('collapseSelection', () => {
  it('shows a fully selected branch as one item instead of its leaves', () => {
    const selected = toggleNode(node('arbete'), new Set(['visum']))
    const items = collapseSelection(caseTypes, selected)

    expect(items.map(item => item.id)).toEqual(['arbete', 'visum'])
    expect(items[0]).toMatchObject({ kind: 'branch', count: 7, selectable: 7 })
    expect(items[1]).toMatchObject({ kind: 'leaf', context: 'Besök' })
  })

  it('uses the highest fully selected level', () => {
    const selected = toggleNode(node('medborgarskap'), new Set())
    const items = collapseSelection(caseTypes, selected)

    expect(items.map(item => item.id)).toEqual(['medborgarskap'])
  })

  it('counts a branch as complete even when a disabled leaf is not selected', () => {
    // Studier has one disabled leaf, which toggleNode leaves alone
    const selected = toggleNode(node('studier'), new Set())
    const items = collapseSelection(caseTypes, selected)

    // Counted against what can be selected, so it reads as complete
    expect(items).toEqual([
      expect.objectContaining({ id: 'studier', count: 4, selectable: 4 }),
    ])
  })

  it('turns a whole region of the large dataset into one item', () => {
    const skane = node('region-skane', organisation)
    const items = collapseSelection(organisation, toggleNode(skane, new Set()))

    expect(items).toHaveLength(1)
    expect(items[0].count).toBeGreaterThan(80)
  })
})

describe('groupSelection', () => {
  it('gives one item per parent at the chosen level, with counts', () => {
    const selected = new Set(['visum', 'eu-blakort', 'asylansokan'])

    const level1 = groupSelection(caseTypes, selected, 1)
    expect(level1.map(item => [item.id, item.count])).toEqual([
      ['tillstand', 2],
      ['skydd', 1],
    ])

    const level2 = groupSelection(caseTypes, selected, 2)
    expect(level2.map(item => item.id)).toEqual(['arbete', 'besok', 'asyl'])
    expect(level2[0]).toMatchObject({ count: 1, selectable: 7 })
  })

  it('stays bounded by the number of parents, however much is selected', () => {
    const all = new Set(organisation.flatMap(getLeaves).map(leaf => leaf.id))

    expect(groupSelection(organisation, all, 1)).toHaveLength(15)
  })
})
