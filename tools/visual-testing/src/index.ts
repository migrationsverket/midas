import { VisualReportReporter } from './reporter.ts'

// Node side: Vitest config files and reporters. The browser-side helpers have
// their own entry points, `@midas-ds/visual-testing/stories` and `/setup`
export { defineVisualConfig, type VisualConfigOptions } from './config.ts'
export { VisualReportReporter }
export type * from './types.ts'

// Vitest loads reporters given by name (`reporters: [['@midas-ds/visual-testing',
// options]]`) from the default export
export default VisualReportReporter
