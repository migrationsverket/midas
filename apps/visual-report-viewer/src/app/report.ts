import type {
  VisualReport,
  VisualReportEntry,
  VisualReportImageName,
} from '@midas-ds/visual-report'

/** Where `nx serve visual-report-viewer` serves the last local report */
export const LOCAL_REPORT_PATH = '/local-report/report.json'

export type StatusFilter = 'all' | 'changed' | 'new'

export interface ReportItem extends VisualReportEntry {
  /** `<project>/<id>`, also used in the URL hash */
  key: string
  project: string
  /** Readable story file, e.g. `button/Button` */
  group: string
  imageUrls: Partial<Record<VisualReportImageName, string>>
}

export interface ReportGroup {
  key: string
  project: string
  group: string
  items: ReportItem[]
}

export type ReportSource = { url: URL } | { error: string }

/**
 * Picks the report to show from the page URL:
 * - `?pr=123` opens the report published for that PR
 * - `?data=<url>` opens any report.json on this site
 * - in dev, the last local run
 */
export function resolveReportSource(
  href: string,
  isDev: boolean,
): ReportSource {
  const page = new URL(href)

  const data = page.searchParams.get('data')
  if (data) {
    const url = new URL(data, page)
    // Only same-origin data, so a crafted link can't point the viewer at
    // someone else's report
    if (url.origin !== page.origin) {
      return { error: 'Reports can only be loaded from this site.' }
    }
    return { url }
  }

  const pr = page.searchParams.get('pr')
  if (pr) {
    if (!/^\d+$/.test(pr)) return { error: `"${pr}" isn't a PR number.` }
    return { url: new URL(`/pr-preview/visual/pr-${pr}/report.json`, page) }
  }

  if (isDev) return { url: new URL(LOCAL_REPORT_PATH, page) }

  return { error: 'No report selected. Open this page from a PR comment.' }
}

export async function fetchReport(
  url: URL,
  fetchFn: typeof fetch = fetch,
): Promise<VisualReport> {
  const response = await fetchFn(url)
  if (response.status === 404) {
    throw new Error(
      'No report found. Either nothing failed, or it was removed when the PR closed.',
    )
  }
  if (!response.ok) {
    throw new Error(`Couldn't load the report (HTTP ${response.status}).`)
  }
  const report: unknown = await response.json()
  if (!isVisualReport(report)) {
    throw new Error('The report has an unknown format.')
  }
  return report
}

function isVisualReport(value: unknown): value is VisualReport {
  if (typeof value !== 'object' || value === null) return false
  const report = value as Partial<VisualReport>
  return (
    report.version === 1 &&
    typeof report.summary === 'object' &&
    Array.isArray(report.projects)
  )
}

/** `./button/Button.stories.tsx` -> `button/Button` */
export function readableGroup(suite: string, file: string) {
  return (suite || file).replace(/^\.\//, '').replace(/\.stories\.\w+$/, '')
}

export function toItems(report: VisualReport, reportUrl: URL): ReportItem[] {
  return report.projects.flatMap(({ project, failures }) =>
    failures.map(failure => {
      const imageUrls: ReportItem['imageUrls'] = {}
      for (const [name, image] of Object.entries(failure.images)) {
        const url = new URL(image.src, reportUrl)
        // Images live next to report.json, never anywhere else
        if (url.origin === reportUrl.origin) {
          imageUrls[name as VisualReportImageName] = url.href
        }
      }
      return {
        ...failure,
        key: `${project}/${failure.id}`,
        project,
        group: readableGroup(failure.suite, failure.file),
        imageUrls,
      }
    }),
  )
}

export function filterItems(
  items: ReportItem[],
  { status, query }: { status: StatusFilter; query: string },
) {
  const needle = query.trim().toLowerCase()
  return items.filter(item => {
    if (status === 'new' && !item.isNew) return false
    if (status === 'changed' && item.isNew) return false
    return !needle || item.name.toLowerCase().includes(needle)
  })
}

/** Groups items by project and story file, keeping their order */
export function groupItems(items: ReportItem[]): ReportGroup[] {
  const groups = new Map<string, ReportGroup>()
  for (const item of items) {
    const key = `${item.project}/${item.group}`
    const group = groups.get(key) ?? {
      key,
      project: item.project,
      group: item.group,
      items: [],
    }
    group.items.push(item)
    groups.set(key, group)
  }
  return [...groups.values()]
}
