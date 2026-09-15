# check-bundled-dependencies

Catches a real, recurring failure mode: our Vite/Rollup build externalizes imports matching known patterns (`react-aria-components`, `/@react-aria/`, `/@react-stately/`, `/@internationalized/`, ...) so they aren't bundled twice across Midas packages. That's correct for imports written directly in our own `src/`. But when a *bundled* (non-externalized) dependency — e.g. `@react-spectrum/utils` — itself imports something matching an external pattern, that import survives in the published chunk as a bare specifier with nothing in `package.json` requiring it. It works locally by accident (something else in this monorepo's tree happens to provide it) and breaks for real consumers the moment that accidental transitive path changes.

This happened for real: `@react-aria/ssr` was pulled in by `useIsMobileDevice.ts` (via `@react-spectrum/utils`'s `useMediaQuery`) but never declared in `packages/layout/package.json` — it only worked because `react-aria-components` used to depend on `@react-aria/ssr` itself. When that upstream dependency was dropped, consumers' builds broke with `Failed to resolve import "@react-aria/ssr"`. An audit the same day found five more instances of the identical gap across `layout`, `components`, and `table-styles`.

## What it checks

For each package under `dist/packages/<name>/` that has already been built, this script scans every `.js`/`.mjs` file for bare (non-relative) import specifiers, resolves each to its top-level npm package name, and verifies it's declared in that package's own `packages/<name>/package.json` — either `dependencies` or `peerDependencies`.

## What it does NOT check

- It does not build anything itself — run it after `nx build`/`nx affected -t build`.
- It doesn't check for the opposite problem (a dependency declared but never actually used, or used only via `import type` and so wrongly classified as a runtime dependency rather than a peer/dev dependency) — that's a real, separate category of bug (found by hand once, in `table-styles`/`select-styles`) and would need different tooling.

## Usage

```bash
npx nx affected -t build
node tools/check-bundled-dependencies/index.mjs
```

Exits non-zero and prints every missing package per affected `packages/*` if anything is found.
