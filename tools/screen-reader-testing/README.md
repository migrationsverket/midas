# screen-reader-testing

Everything for the screen reader regression tests: the helpers that read with a simulated screen reader, the shared Vitest config and setup, the story helper and an Nx plugin that adds the `screen-reader` target. Built the same way as `tools/visual-testing`. Background and rollout in `docs/screen-reader-testing-plan.md`.

The simulated screen reader is [`@guidepup/virtual-screen-reader`](https://github.com/guidepup/virtual-screen-reader). It follows the ARIA specs, not NVDA, so it catches changes in what is exposed (names, descriptions, states, reading order, live regions), not how a specific screen reader phrases it.

## Adding screen reader tests to a package

Two small files, nothing else:

```ts
// vitest.config.screen-reader.mts
import { mergeConfig } from 'vitest/config'
import { screenReaderConfig } from '@midas-ds/screen-reader-testing'
import viteConfig from './vite.config.mts'

export default mergeConfig(viteConfig, screenReaderConfig)
```

```tsx
// src/screen-reader.spec.tsx
import { readStories } from '@midas-ds/screen-reader-testing/stories'

readStories(import.meta.glob('./**/*.stories.tsx', { eager: true }))
```

The Nx plugin sees `src/screen-reader.spec.tsx` and gives the project a `screen-reader` target. Also exclude the spec from the package's regular `test` target, so it only runs in its own, non-blocking one.

Stories opt in with the `screen-reader` tag, so the baseline only grows with stories someone has reviewed. Each one is read from start to end and stored as plain text in `src/__screen-reader__/<folder>/<Component>/<Story>.txt`. Run with `nx run <project>:screen-reader` and update the baselines with `nx run <project>:screen-reader -- -u`. A changed baseline is reviewed like a visual diff.

## Entry points

The Vitest config runs in Node and the helpers run in the browser, so they're separate:

| Import                                        | Runs in | For                                    |
| --------------------------------------------- | ------- | -------------------------------------- |
| `@midas-ds/screen-reader-testing`             | Node    | `screenReaderConfig`                   |
| `@midas-ds/screen-reader-testing/stories`     | Browser | `readStories`                          |
| `@midas-ds/screen-reader-testing/read`        | Browser | `readAll`, `collectAnnouncements`      |
| `@midas-ds/screen-reader-testing/setup`       | Browser | The shared setup (added automatically) |
| `./tools/screen-reader-testing/src/plugin.ts` | Nx      | The plugin, referenced from `nx.json`  |

Use `readAll` and `collectAnnouncements` directly in a component spec for targeted checks, e.g. that an upload announces its result.

Like `visual-testing`, the package is TypeScript that is never compiled, and it's linked into `node_modules` as a `file:` dev dependency because Node loads the Vitest config without the tsconfig path alias.
