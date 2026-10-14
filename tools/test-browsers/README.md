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

Every profile runs with `prefers-reduced-motion: reduce`, so the components skip their enter and exit animations. Overlays stay mounted until their exit animation ends, which made closing them and clicking near them flaky on CI.

These are Playwright's builds of each engine, not the branded browsers, so they catch engine differences, not version differences.

Install the browsers you want to run with `npx playwright install firefox webkit`.

## Real browsers

`<browser>@<version>` profiles run the branded browsers through WebdriverIO, which downloads the browser and its driver:

```sh
MIDAS_BROWSERS=chrome@stable npx nx run components:test
MIDAS_BROWSERS=chrome@154 npx nx run components:test           # a milestone
MIDAS_BROWSERS=firefox@stable npx nx run components:test
MIDAS_BROWSERS=firefox@stable_157.0.1 npx nx run components:test # an exact release
MIDAS_BROWSERS=edge@stable npx nx run components:test           # the installed Edge
```

Firefox's `latest` is Nightly, so use `stable` or `stable_<version>`. These can't be mixed with the Playwright profiles in one run.

`src/resolve-versions.ts` prints the profiles for the two latest versions of each browser, which the nightly workflow (`browsers-nightly.yml`) runs. A failing browser opens an issue, which is closed when it passes again.

Known differences: under WebdriverIO, Vitest computes accessible names for `getByRole` itself, and they can differ from Playwright's.

## In a Vitest config

```ts
import { browserInstances, browserProvider } from '@midas-ds/test-browsers'

browser: {
  provider: browserProvider(),
  instances: browserInstances(),
}
```

`browserProvider()` picks Playwright or WebdriverIO for the selected profiles. Vitest needs every instance to use the same kind of provider as the project.

Pass variants to run every profile in several setups. With one profile the instances keep the variant names; with several, the profile is added, e.g. `mobile (firefox)`, so check names with `startsWith`:

```ts
instances: browserInstances([
  { name: 'desktop', viewport: { width: 1024, height: 768 } },
  { name: 'mobile', viewport: { width: 320, height: 568 } },
])
```

`MIDAS_BROWSERS` is an input of the `test` target in `nx.json`, so Nx caches each profile separately.

The package is never compiled: Vitest config files are loaded by Node, which runs it from source with type stripping. Node doesn't know the tsconfig path alias, so it's also linked into `node_modules` as a `file:` dev dependency, like `@midas-ds/visual-testing`.

## In CI

The `test` job in `pr-checks.yml` runs the affected tests once per profile, in parallel jobs. Only Chromium blocks the PR for now. Firefox and WebKit run one test file at a time, because they throttle the background tabs Vitest opens per file. Visual regression and Storybook a11y tests stay in Chromium only.
