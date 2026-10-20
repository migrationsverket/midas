# browser-targets

The browsers Midas supports, and the build target that gives the packages.

The browsers are in the root `.browserslistrc`: the two latest major versions of Chrome, Edge, Firefox, Safari on iOS, Chrome on Android and Samsung Internet.

```sh
npx nx run browser-targets:print
# Browsers: and_chr 155, chrome 155, chrome 154, edge 155, edge 154, firefox 158, ...
# Build target: chrome136, edge154, firefox157, ios26.0
```

## In a Vite config

```ts
import { buildTarget } from '@midas-ds/browser-targets'

build: {
  target: buildTarget(),
}
```

Vite also uses `build.target` for the CSS, which Lightning CSS lowers for these browsers, e.g. flattening nesting or prefixing properties. Lightning CSS can't add a fallback for everything, so a newer feature, like `@starting-style`, is still used as is: check that the browsers support it.

Vite's target only names engines, so Chrome on Android counts as Chrome, and Samsung Internet as the Chromium version it's built on, from `baseline-browser-mapping`. Samsung Internet lags behind Chrome, so it sets the oldest Chromium, e.g. Samsung Internet 29 is Chromium 136.

The package is never compiled: Vite config files are loaded by Node, which runs it from source with type stripping. It's linked into `node_modules` as a `file:` dev dependency, like `@midas-ds/visual-testing`.

## Keeping it up to date

"The two latest versions" come from `caniuse-lite`, and Samsung Internet's Chromium versions from `baseline-browser-mapping`. Update both now and then, so the targets move with the releases:

```sh
npm update caniuse-lite baseline-browser-mapping
```

When Samsung Internet releases a version `baseline-browser-mapping` doesn't know yet, `buildTarget()` fails and asks you to update it. `.browserslistrc` is a shared Nx input, so changing it rebuilds every project.
