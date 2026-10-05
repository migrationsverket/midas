# visual-report

Turns failed visual regression tests (`toMatchScreenshot()` in `packages/*/src/visual.spec.tsx`) into report data for the viewer in [`apps/visual-report-viewer`](../../apps/visual-report-viewer) and a sticky PR comment.

## Usage

```ts
// vitest.config.visual.mts
import { VisualReportReporter } from '@midas-ds/visual-report'

export default defineConfig({
  test: {
    reporters: [
      'default',
      new VisualReportReporter({
        project: 'components',
        outputDir: '../../dist/visual-report/components',
      }),
    ],
  },
})
```

The package is written in TypeScript and never compiled: Vitest loads it from source, and `build-report.ts` runs with Node's type stripping. Vitest config files are loaded by Node, which doesn't know the tsconfig path alias, so the package is also linked into `node_modules` as a `file:` dev dependency (like `eslint-plugin-midas`).

| Target                           | What it does                                                                              |
| -------------------------------- | ----------------------------------------------------------------------------------------- |
| `nx run visual-report:typecheck` | `tsc --noEmit` in strict mode                                                             |
| `nx run visual-report:lint`      | ESLint                                                                                    |
| `nx run visual-report:report`    | Builds `dist/visual-report-site/` (report.json, images, comment) from the last visual run |

## How it fits together

1. **`src/reporter.ts`** is a Vitest reporter. After a run it writes `dist/visual-report/<project>/manifest.json` plus the reference, actual and diff PNG for every failed screenshot. It uses the `visual-regression` artifacts Vitest records, so nothing is guessed from file names. A test without a baseline is marked `isNew`, with the captured screenshot as `actual`.
2. **The `visual` job in `pr-checks.yml`** runs `nx affected -t visual` in the Playwright Docker image matching the installed version, and uploads `dist/visual-report/` with the PR number as the `visual-report` artifact.
3. **`visual-report.yml`** runs on `workflow_run` from the default branch, with write access, so it works for fork PRs too. It never runs PR code: it reads the artifact as data, runs **`src/build-report.ts`**, publishes `report.json` and the images to `pr-preview/visual/pr-<n>/` on `gh-pages` (only when something failed), and updates the sticky comment, which links to the viewer at `/visual-report/?pr=<n>`.
4. **The viewer** is deployed once with the docs (`publish-docs.yml`, and in docs PR previews), not per report.
5. **`cleanup-pr-preview.yml`** removes the report when the PR closes.

## Accepting changes

Add the `visual:update` label to the PR (or run _Update Visual Regression Screenshots_ from the Actions tab). The baselines are regenerated in the same Docker image and committed to the branch, and the label is removed again. Review the new screenshots under **Files changed**.

A push with the default `GITHUB_TOKEN` doesn't trigger PR Checks again. To get that, create a GitHub App with `contents: write`, and set the `VISUAL_BASELINE_APP_ID` variable and `VISUAL_BASELINE_APP_PRIVATE_KEY` secret.

## Trying it locally

```bash
npx nx run components:visual
npx nx run visual-report:report
npx nx run visual-report-viewer:serve   # opens the local report at http://localhost:4400
```

Screenshots taken outside the Playwright image won't match the CI baselines, so expect failures when you run this on your own machine.
