import { describe, expect, it } from 'vitest'
import { reportFixture } from './fixtures'
import {
  fetchReport,
  filterItems,
  groupItems,
  readableGroup,
  resolveReportSource,
  toItems,
} from './report'

const page = 'https://designsystem.migrationsverket.se/visual-report/'
const reportUrl = new URL(
  'https://designsystem.migrationsverket.se/pr-preview/visual/pr-12/report.json',
)

describe('resolveReportSource', () => {
  it('opens the report published for a PR', () => {
    expect(resolveReportSource(`${page}?pr=12`, false)).toEqual({
      url: reportUrl,
    })
  })

  it('rejects a PR that is not a number', () => {
    expect(resolveReportSource(`${page}?pr=../evil`, false)).toHaveProperty(
      'error',
    )
  })

  it('opens report.json from the same site', () => {
    expect(
      resolveReportSource(`${page}?data=/some/report.json`, false),
    ).toEqual({
      url: new URL('https://designsystem.migrationsverket.se/some/report.json'),
    })
  })

  it('rejects report.json from another site', () => {
    expect(
      resolveReportSource(
        `${page}?data=https://example.com/report.json`,
        false,
      ),
    ).toHaveProperty('error')
  })

  it('opens the local report in dev only', () => {
    expect(resolveReportSource(page, true)).toEqual({
      url: new URL(
        'https://designsystem.migrationsverket.se/local-report/report.json',
      ),
    })
    expect(resolveReportSource(page, false)).toHaveProperty('error')
  })
})

describe('fetchReport', () => {
  const respond =
    (body: unknown, status = 200) =>
    () =>
      Promise.resolve(new Response(JSON.stringify(body), { status }))

  it('returns a valid report', async () => {
    await expect(
      fetchReport(reportUrl, respond(reportFixture)),
    ).resolves.toEqual(reportFixture)
  })

  it('explains a missing report', async () => {
    await expect(fetchReport(reportUrl, respond({}, 404))).rejects.toThrow(
      'No report found',
    )
  })

  it('rejects an unknown format', async () => {
    await expect(
      fetchReport(reportUrl, respond({ version: 2 })),
    ).rejects.toThrow('unknown format')
  })
})

describe('toItems', () => {
  it('resolves images relative to report.json', () => {
    const [item] = toItems(reportFixture, reportUrl)
    expect(item).toMatchObject({
      key: 'components/1',
      project: 'components',
      group: 'button/Button',
    })
    expect(item.imageUrls.actual).toBe(
      'https://designsystem.migrationsverket.se/pr-preview/visual/pr-12/components/1/actual.png',
    )
  })

  it('drops images on another site', () => {
    const report = structuredClone(reportFixture)
    report.projects[0].failures[0].images.actual = {
      src: 'https://example.com/x.png',
      width: 1,
      height: 1,
    }
    const [item] = toItems(report, reportUrl)
    expect(item.imageUrls.actual).toBeUndefined()
    expect(item.imageUrls.reference).toBeDefined()
  })
})

describe('readableGroup', () => {
  it('shortens story files', () => {
    expect(readableGroup('./button/Button.stories.tsx', 'x')).toBe(
      'button/Button',
    )
  })

  it('falls back to the spec file', () => {
    expect(readableGroup('', 'src/visual.spec.tsx')).toBe('src/visual.spec.tsx')
  })
})

describe('filterItems and groupItems', () => {
  const items = toItems(reportFixture, reportUrl)

  it('filters by status', () => {
    expect(filterItems(items, { status: 'new', query: '' })).toHaveLength(1)
    expect(filterItems(items, { status: 'changed', query: '' })).toHaveLength(2)
    expect(filterItems(items, { status: 'all', query: '' })).toHaveLength(3)
  })

  it('searches the full name, ignoring case', () => {
    expect(
      filterItems(items, { status: 'all', query: 'BUTTON' }).map(i => i.key),
    ).toEqual(['components/1', 'components/2'])
  })

  it('groups by project and story file in order', () => {
    expect(
      groupItems(items).map(group => [group.key, group.items.length]),
    ).toEqual([
      ['components/button/Button', 2],
      ['datepicker-styles/Datepicker', 1],
    ])
  })
})
