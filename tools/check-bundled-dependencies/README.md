# check-bundled-dependencies

Two scripts, both built on the same principle: don't trust `vite.config.ts` to say what actually got built — verify the real `dist/packages/<name>/` output. Shared file-walking/import-parsing helpers live in `shared.mjs`.

## index.mjs — are bundled imports declared?

Catches a real, recurring failure mode: our Vite/Rollup build externalizes imports matching known patterns (`react-aria-components`, `/@react-aria/`, `/@react-stately/`, `/@internationalized/`, ...) so they aren't bundled twice across Midas packages. That's correct for imports written directly in our own `src/`. But when a *bundled* (non-externalized) dependency — e.g. `@react-spectrum/utils` — itself imports something matching an external pattern, that import survives in the published chunk as a bare specifier with nothing in `package.json` requiring it. It works locally by accident (something else in this monorepo's tree happens to provide it) and breaks for real consumers the moment that accidental transitive path changes.

This happened for real: `@react-aria/ssr` was pulled in by `useIsMobileDevice.ts` (via `@react-spectrum/utils`'s `useMediaQuery`) but never declared in `packages/layout/package.json` — it only worked because `react-aria-components` used to depend on `@react-aria/ssr` itself. When that upstream dependency was dropped, consumers' builds broke with `Failed to resolve import "@react-aria/ssr"`. An audit the same day found five more instances of the identical gap across `layout`, `components`, and `table-styles`.

### What it checks

For each package under `dist/packages/<name>/` that has already been built, this script scans every `.js`/`.mjs` file for bare (non-relative) import specifiers, resolves each to its top-level npm package name, and verifies it's declared in that package's own `packages/<name>/package.json` — either `dependencies` or `peerDependencies`.

### What it does NOT check

- It does not build anything itself — run it after `nx build`/`nx affected -t build`.
- It doesn't check for the opposite problem (a dependency declared but never actually used, or used only via `import type` and so wrongly classified as a runtime dependency rather than a peer/dev dependency) — that's a real, separate category of bug (found by hand once, in `table-styles`/`select-styles`) and would need different tooling.

## check-shared-singletons.mjs — did a shared-singleton module get bundled instead of externalized?

The inverse risk: `react-aria-components`, `react-aria`, `react-stately`, and their `@react-aria/*`/`@react-stately/*`/`@internationalized/*` subpackages hold real module-scope state (id registries, focus-scope trees, description node maps). Every `@midas-ds/*` package must externalize them so the *consumer's* bundler resolves one shared instance. If any package's build config bundles one instead, that package ships a private copy — invisible until it's combined with a sibling `@midas-ds/*` package (e.g. `layout` depends on `components`) that correctly externalized the same module, at which point you get two disconnected copies of state that's supposed to be shared. Same failure class as the dual-module-instance bug this repo already hit once from corrupted `node_modules` (misplaced popovers, focus escaping a dialog, broken keyboard nav) — just reachable from a config mistake instead.

### What it checks

For each package under `dist/packages/<name>/`, finds every watched module actually referenced (as a real runtime import — type-only imports, including per-specifier `{ type Foo }`, are excluded since they compile away entirely) in that package's own `src/` (excluding `.stories.*`/`.spec.*`/`.test.*`, which never ship), then verifies the same module still appears as a bare external specifier somewhere in that package's built output. Deliberately excludes `@react-types/*` from the watched list — that scope ships type declarations only, no runtime JS, so it can never hold singleton state.

Verified against a real repro: reproducing PR #1363's `layout`/`table-styles` `vite.config.ts` changes locally and rebuilding correctly fails with exactly the modules each package's source actually uses (`@react-aria/utils` + `@react-stately/utils` for `layout`, `react-aria` for `table-styles`); reverting and rebuilding passes clean again.

### What it does NOT check

- It does not build anything itself — run it after `nx build`/`nx affected -t build`.
- Text-based import classification, not a type checker — could misclassify an unusual import form it hasn't been taught (e.g. dynamic `import()`, re-exports through several hops). Flags module names, not line numbers; check the package's `src/` for where a flagged module is actually used.

## Usage

```bash
npx nx affected -t build
node tools/check-bundled-dependencies/index.mjs
node tools/check-bundled-dependencies/check-shared-singletons.mjs
```

Both exit non-zero and print details per affected `packages/*` if anything is found.
