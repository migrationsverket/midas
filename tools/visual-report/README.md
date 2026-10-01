# visual-report

Turns failed visual regression tests (`toMatchScreenshot()` in `packages/*/src/visual.spec.tsx`) into a static diff report and a sticky PR comment.

## How it fits together

1. **`reporter.mjs`** is a Vitest reporter, added in each package's `vitest.config.visual.mts`. After a run it writes `dist/visual-report/<project>/manifest.json` plus the reference, actual and diff PNG for every failed screenshot. It uses the `visual-regression` artifacts Vitest records, so nothing is guessed from file names. A test without a baseline is marked `isNew`, with the captured screenshot as `actual`.
2. **The `visual` job in `pr-checks.yml`** runs `nx affected -t visual` in the Playwright Docker image matching the installed version, and uploads `dist/visual-report/` with the PR number as the `visual-report` artifact.
3. **`visual-report.yml`** runs on `workflow_run` from the default branch, with write access, so it works for fork PRs too. It never runs PR code: it reads the artifact as data, runs **`build-report.mjs`**, publishes the report to `pr-preview/visual/pr-<n>/` on `gh-pages` (only when something failed), and updates the sticky comment.
4. **`cleanup-pr-preview.yml`** removes the report when the PR closes.

## Accepting changes

Add the `visual:update` label to the PR (or run _Update Visual Regression Screenshots_ from the Actions tab). The baselines are regenerated in the same Docker image and committed to the branch, and the label is removed again. Review the new screenshots under **Files changed**.

A push with the default `GITHUB_TOKEN` doesn't trigger PR Checks again. To get that, create a GitHub App with `contents: write`, and set the `VISUAL_BASELINE_APP_ID` variable and `VISUAL_BASELINE_APP_PRIVATE_KEY` secret.

## Trying it locally

```bash
npx nx run components:visual
node tools/visual-report/build-report.mjs --comment dist/visual-report-site/comment.md
open dist/visual-report-site/index.html
```

Screenshots taken outside the Playwright image won't match the CI baselines, so expect failures when you run this on your own machine.
