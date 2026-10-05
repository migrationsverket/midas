export type VisualReportImageName = 'reference' | 'actual' | 'diff'

export interface VisualReportImage {
  /** Path relative to the project's output folder */
  src: string
  width: number
  height: number
}

export interface VisualReportEntry {
  id: string
  /** Spec file, relative to the project root */
  file: string
  /** Full test name (describe blocks + test name) */
  name: string
  /** Surrounding describe blocks, e.g. the story file */
  suite: string
  /** The test's own name, e.g. the story */
  test: string
  message: string
  /** No baseline exists yet, `actual` is the new screenshot */
  isNew: boolean
  images: Partial<Record<VisualReportImageName, VisualReportImage>>
}

export interface VisualReportManifest {
  project: string
  /** Screenshot tests that ran */
  total: number
  failures: VisualReportEntry[]
}

/** report.json, read by apps/visual-report-viewer */
export interface VisualReport {
  version: 1
  runUrl?: string
  summary: VisualReportSummary
  /** Image paths are relative to report.json */
  projects: VisualReportManifest[]
}

export interface VisualReportSummary {
  projects: number
  total: number
  changed: number
  new: number
}

export interface VisualReportReporterOptions {
  project: string
  /** Resolved against the Vitest root (the package folder) */
  outputDir: string
}
