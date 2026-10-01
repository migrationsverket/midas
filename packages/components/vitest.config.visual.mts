import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mts'
import { playwright } from '@vitest/browser-playwright'
import { VisualReportReporter } from '@midas-ds/visual-report'

// Split from vitest.config.ts so visual regression can run as its own nx
// target (`visual`) — separately cacheable, separately reportable, and not
// part of the required `test` target, so a screenshot diff never blocks a
// PR the way a real unit test failure does.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 2500,
      reporters: [
        'default',
        // Collects failed screenshots for the CI diff report, see
        // tools/visual-report/README.md
        new VisualReportReporter({
          project: 'components',
          outputDir: '../../dist/visual-report/components',
        }),
      ],
      include: ['src/visual.spec.tsx'],
      projects: [
        {
          extends: true,
          test: {
            name: 'visual',
            browser: {
              enabled: true,
              headless: true,
              provider: playwright(),
              instances: [{ browser: 'chromium' }],
              screenshotFailures: false,
            },
            setupFiles: ['vitest.setup.visual.mts'],
          },
        },
      ],
    },
  }),
)
