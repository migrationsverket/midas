import { describe, expect, it } from 'vitest'
import { caseTypes, leaves } from './data'
import {
  findNode,
  getNodeState,
  getSelectedNodeIds,
  toggleNode,
} from './selection'

const node = (id: string) => {
  const found = findNode(id, caseTypes)
  if (!found) throw new Error(`No node with id ${id}`)
  return found
}

const studier = node('studier')
const tillstand = node('tillstand')

describe('given a branch with a disabled leaf', () => {
  it('selects every selectable leaf and leaves the disabled one alone', () => {
    const selected = toggleNode(studier, new Set())

    expect(selected.has('hogskolestudier')).toBe(true)
    expect(selected.has('utbytesstudier-gymnasium')).toBe(false)
    expect(getNodeState(studier, selected)).toBe('all')
  })

  it('clears the branch on a second toggle but keeps a selected disabled leaf', () => {
    const preselected = new Set(['utbytesstudier-gymnasium'])
    const selected = toggleNode(studier, toggleNode(studier, preselected))

    expect([...selected]).toEqual(['utbytesstudier-gymnasium'])
  })
})

describe('given a partially selected branch', () => {
  it('reports some, and toggling selects the rest', () => {
    const selected = new Set(['visum'])
    const besok = node('besok')

    expect(getNodeState(besok, selected)).toBe('some')
    expect(getNodeState(besok, toggleNode(besok, selected))).toBe('all')
  })

  it('cascades to the top level', () => {
    const selected = toggleNode(node('arbete'), new Set())

    expect(getNodeState(tillstand, selected)).toBe('some')
  })
})

describe('getSelectedNodeIds', () => {
  it('includes fully selected branches but not partial ones', () => {
    const selected = toggleNode(studier, new Set(['visum']))
    const ids = getSelectedNodeIds(caseTypes, selected)

    expect(ids.has('studier')).toBe(true)
    expect(ids.has('besok')).toBe(false)
    expect(ids.has('tillstand')).toBe(false)
    expect(ids.has('visum')).toBe(true)
  })
})

describe('the dummy data', () => {
  it('has unique ids and a path for every leaf', () => {
    const ids = leaves.map(leaf => leaf.id)

    expect(new Set(ids).size).toBe(ids.length)
    expect(leaves.every(leaf => leaf.path.includes(' / '))).toBe(true)
  })
})
