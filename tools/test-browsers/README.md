# test-browsers

Picks the browsers the packages' Vitest browser tests run in, from the `MIDAS_BROWSERS` environment variable.

```sh
# Chromium only, the default
npx nx run components:test

# One or more profiles
MIDAS_BROWSERS=firefox npx nx run components:test
MIDAS_BROWSERS=webkit,mobile-safari npx nx run layout:test

# Every profile
MIDAS_BROWSERS=all npx nx run components:test
```

| Profile         | Engine   | Emulates                                  |
| --------------- | -------- | ----------------------------------------- |
| `chromium`      | Chromium | Desktop Chrome and Edge                   |
| `firefox`       | Firefox  | Desktop Firefox                           |
| `webkit`        | WebKit   | Desktop Safari                            |
| `mobile-safari` | WebKit   | iPhone 15: touch, user agent and viewport |
| `mobile-chrome` | Chromium | Pixel 7: touch, user agent and viewport   |

These are Playwright's builds of each engine, not the branded browsers, so they catch engine differences, not version differences.

Install the browsers you want to run with `npx playwright install firefox webkit`.

## In a Vitest config

```ts
import { browserInstances } from '../../tools/test-browsers/index.mts'

browser: {
  provider: playwright(),
  instances: browserInstances(),
}
```

Pass variants to run every profile in several setups. With one profile the instances keep the variant names; with several, the profile is added, e.g. `mobile (firefox)`, so check names with `startsWith`:

```ts
instances: browserInstances([
  { name: 'desktop', viewport: { width: 1024, height: 768 } },
  { name: 'mobile', viewport: { width: 320, height: 568 } },
])
```

`MIDAS_BROWSERS` is an input of the `test` target in `nx.json`, so Nx caches each profile separately.

## In CI

The `test` job in `pr-checks.yml` runs the affected tests once per profile, in parallel jobs. Only Chromium blocks the PR for now. Firefox and WebKit run one test file at a time, because they throttle the background tabs Vitest opens per file. Visual regression and Storybook a11y tests stay in Chromium only.
