# visual-testing

Everything for the visual regression tests: the shared Vitest config, setup and story snapshots, an Nx plugin that adds the `visual` target, and the reporter and report builder for the CI diff report and sticky PR comment.

## Adding visual tests to a package

Two small files, nothing else:

```ts
// vitest.config.visual.mts
import { defineVisualConfig } from '@midas-ds/visual-testing'
import viteConfig from './vite.config.mts'

export default defineVisualConfig(viteConfig)
```

```tsx
// src/visual.spec.tsx
import { snapshotStories } from '@midas-ds/visual-testing/stories'

snapshotStories(import.meta.glob('./**/*.stories.tsx', { eager: true }))
```

The Nx plugin sees `src/visual.spec.tsx` and gives the project a `visual` target, so there's nothing to add to `project.json` or `nx.json`. Check with `npx nx show project <name>`.

Every story is screenshotted unless it opts out with the `!snapshot` tag. The first run of a new story has no baseline and fails; add the `visual:update` label to the PR to create it (see below).

## What's shared

- **`defineVisualConfig(viteConfig, options?)`** (`src/config.ts`): merges the package's Vite config with browser mode in Chromium, `src/visual.spec.tsx` as the only test file, the default reporter plus the report reporter, the package's own `vitest.setup.mts` if it has one, and the shared setup. It also pre-bundles dependencies that stories import (so a cold Vite cache doesn't reload the page mid-run) and lets Vite serve the helpers from `tools/`. Options:
  - `optimizeDeps`: more dependencies to pre-bundle
  - `setupFiles`: more setup files, relative to the package
- **The shared setup** (`src/setup.ts`): clears hover states before each screenshot and mocks the date, so calendars always show the same month.
- **`snapshotStories(storyModules)`** (`src/stories.ts`): one `toMatchScreenshot()` test per story tagged `snapshot`, after fonts have loaded, with a timeout that fits screenshots. The glob has to be written in the package's spec, because Vite resolves it relative to that file.
- **The Nx plugin** (`src/plugin.ts`, registered in `nx.json`): the `visual` target runs `vitest run --config vitest.config.visual.mts` in the package, after `^build`, cached, with this tool's source as an input so changing the helpers re-runs the tests.

## Entry points

The Vitest config runs in Node and the helpers run in the browser, so they're separate:

| Import                                 | Runs in | For                                    |
| -------------------------------------- | ------- | -------------------------------------- |
| `@midas-ds/visual-testing`             | Node    | `defineVisualConfig`, the reporter     |
| `@midas-ds/visual-testing/stories`     | Browser | `snapshotStories`                      |
| `@midas-ds/visual-testing/setup`       | Browser | The shared setup (added automatically) |
| `./tools/visual-testing/src/plugin.ts` | Nx      | The plugin, referenced from `nx.json`  |

The package is written in TypeScript and never compiled: Vitest loads it from source, Nx loads the plugin from source, and `build-report.ts` runs with Node's type stripping. Vitest config files are loaded by Node, which doesn't know the tsconfig path alias, so the package is also linked into `node_modules` as a `file:` dev dependency (like `eslint-plugin-midas`).

| Target                            | What it does                                                      |
| --------------------------------- | ----------------------------------------------------------------- |
| `nx run visual-testing:typecheck` | `tsc --noEmit` in strict mode, for the Node and the browser files |
| `nx run visual-testing:lint`      | ESLint                                                            |
| `nx run visual-testing:report`    | Builds `dist/visual-report-site/` from the last visual run        |

## The CI diff report

1. **`src/reporter.ts`** is a Vitest reporter, added by `defineVisualConfig`. After a run it writes `dist/visual-report/<project>/manifest.json` plus the reference, actual and diff PNG for every failed screenshot. It uses the `visual-regression` artifacts Vitest records, so nothing is guessed from file names. A test without a baseline is marked `isNew`, with the captured screenshot as `actual`.
2. **The `visual` job in `pr-checks.yml`** runs `nx affected -t visual` in the Playwright Docker image matching the installed version, and uploads `dist/visual-report/` with the PR number as the `visual-report` artifact.
3. **`visual-report.yml`** runs on `workflow_run` from the default branch, with write access, so it works for fork PRs too. It never runs PR code: it reads the artifact as data, runs **`src/build-report.ts`**, publishes the report to `pr-preview/visual/pr-<n>/` on `gh-pages` (only when something failed), and updates the sticky comment.
4. **`cleanup-pr-preview.yml`** removes the report when the PR closes.

## Accepting changes

Add the `visual:update` label to the PR (or run _Update Visual Regression Screenshots_ from the Actions tab). The baselines are regenerated in the same Docker image and committed to the branch, and the label is removed again. Review the new screenshots under **Files changed**.

A push with the default `GITHUB_TOKEN` doesn't trigger PR Checks again. To get that, create a GitHub App with `contents: write`, and set the `VISUAL_BASELINE_APP_ID` variable and `VISUAL_BASELINE_APP_PRIVATE_KEY` secret.

## Trying it locally

```bash
npx nx run components:visual
npx nx run visual-testing:report
open dist/visual-report-site/index.html
```

Screenshots taken outside the Playwright image won't match the CI baselines, so expect failures when you run this on your own machine.
