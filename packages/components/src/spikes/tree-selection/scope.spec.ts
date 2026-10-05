import { describe, expect, it } from 'vitest'
import { caseTypes, flattenLeaves } from './data'
import { applyScope, getCategoryOptions } from './scope'

const ids = (nodes: ReturnType<typeof applyScope>) =>
  flattenLeaves(nodes).map(leaf => leaf.id)

describe('applyScope', () => {
  it('keeps everything when nothing is chosen', () => {
    expect(applyScope(caseTypes, { areas: [], categories: [] })).toBe(caseTypes)
  })

  it('narrows to a verksamhetsområde (level 1)', () => {
    const scoped = applyScope(caseTypes, {
      areas: ['medborgarskap'],
      categories: [],
    })

    expect(scoped.map(node => node.id)).toEqual(['medborgarskap'])
    expect(ids(scoped)).toContain('medborgarskap-vuxen')
    expect(ids(scoped)).not.toContain('asylansokan')
  })

  it('narrows to ärendeområden (level 2) across verksamhetsområden', () => {
    const scoped = applyScope(caseTypes, {
      areas: [],
      categories: ['arbete', 'asyl'],
    })

    expect(scoped.map(node => node.id)).toEqual(['tillstand', 'skydd'])
    expect(ids(scoped)).toContain('eu-blakort')
    expect(ids(scoped)).toContain('asylansokan')
    expect(ids(scoped)).not.toContain('visum')
  })

  it('ignores ärendeområden outside the chosen verksamhetsområden', () => {
    const scoped = applyScope(caseTypes, {
      areas: ['skydd'],
      categories: ['arbete', 'asyl'],
    })

    expect(ids(scoped)).toContain('asylansokan')
    expect(ids(scoped)).not.toContain('eu-blakort')
  })

  it('keeps the original paths in the scoped leaves', () => {
    const scoped = applyScope(caseTypes, { areas: [], categories: ['asyl'] })

    expect(flattenLeaves(scoped)[0].path).toBe('Skydd / Asyl')
  })
})

describe('getCategoryOptions', () => {
  it('offers every ärendeområde, grouped by verksamhetsområde, when no area is chosen', () => {
    const options = getCategoryOptions(caseTypes, [])

    expect(options.map(group => group.id)).toEqual([
      'tillstand',
      'skydd',
      'medborgarskap',
    ])
  })

  it('only offers ärendeområden in the chosen verksamhetsområden', () => {
    const options = getCategoryOptions(caseTypes, ['skydd'])

    expect(options.map(group => group.id)).toEqual(['skydd'])
    expect(options[0].children?.map(child => child.id)).toContain('asyl')
  })
})
