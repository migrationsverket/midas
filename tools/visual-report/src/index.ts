import { VisualReportReporter } from './reporter.ts'

export { VisualReportReporter }
export type * from './types.ts'

// Vitest loads reporters given by name (`reporters: [['@midas-ds/visual-report',
// options]]`) from the default export
export default VisualReportReporter
