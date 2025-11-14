## 15.2.7 (2025-11-14)

### 🩹 Fixes

- **select:** remove selection indicators in legacy select ([49e1ad52a0](https://github.com/migrationsverket/midas/commit/49e1ad52a0))

## 15.2.6 (2025-11-12)

### 🩹 Fixes

- **text-area, text-field:** explicitly set text color ([9c05a9bd14](https://github.com/migrationsverket/midas/commit/9c05a9bd14))

## 15.2.5 (2025-11-12)

### 🩹 Fixes

- **select:** prevent unexpected sizing when select is in a flex container ([07cca197a5](https://github.com/migrationsverket/midas/commit/07cca197a5))

## 15.2.4 (2025-11-11)

### 🚀 Features

- **skeleton:** tweak size/space to match textfield cmp ([6e2fce81f4](https://github.com/migrationsverket/midas/commit/6e2fce81f4))
- **skeleton:** use type `Size` for form variant ([4d4bf6424e](https://github.com/migrationsverket/midas/commit/4d4bf6424e))
- **skeleton:** add form variant ([f77655c09e](https://github.com/migrationsverket/midas/commit/f77655c09e))

### 🧪 Tests updated

- **skeleton:** fix test syntax and location for skeleton form tests ([86573b9647](https://github.com/migrationsverket/midas/commit/86573b9647))

## 15.2.3 (2025-11-11)

### 🩹 Fixes

- **textfield:** honor min and max for number fields ([8791661e57](https://github.com/migrationsverket/midas/commit/8791661e57))

## 15.2.2 (2025-11-11)

### 🔧 Maintenance

- **date-picker:** change complex css selector ([6ea5c10517](https://github.com/migrationsverket/midas/commit/6ea5c10517))
- **date-picker:** change complex css selector ([3442d959ec](https://github.com/migrationsverket/midas/commit/3442d959ec))

## 15.2.1 (2025-11-10)

### 🩹 Fixes

- **combobox:** use common ListBox component ([9bd9854d92](https://github.com/migrationsverket/midas/commit/9bd9854d92))
- **select:** deprecate legacy component and types ([7230bef1be](https://github.com/migrationsverket/midas/commit/7230bef1be))
- **list-box:** deprecate custom item and section types ([e5a415eb03](https://github.com/migrationsverket/midas/commit/e5a415eb03))

## 15.2.0 (2025-11-07)

### 🚀 Features

- **label:** add styling for read-only state ([9422f77547](https://github.com/migrationsverket/midas/commit/9422f77547))
- **text:** add styling for read-only state ([76d1f9c655](https://github.com/migrationsverket/midas/commit/76d1f9c655))
- **calendar:** add styling for read-only state ([53dadfad5c](https://github.com/migrationsverket/midas/commit/53dadfad5c))
- **date-picker:** add styling for read-only state ([d9d3856259](https://github.com/migrationsverket/midas/commit/d9d3856259))
- **date-field:** add styling for read-only state ([9cdfb7b8cc](https://github.com/migrationsverket/midas/commit/9cdfb7b8cc))
- **checkbox:** add styling for read-only state ([fc34e942be](https://github.com/migrationsverket/midas/commit/fc34e942be))
- **radio:** add styling for read-only state ([bb69e7e7ac](https://github.com/migrationsverket/midas/commit/bb69e7e7ac))
- **combobox:** add styling for read-only state ([65fe61058d](https://github.com/migrationsverket/midas/commit/65fe61058d))
- **textfield:** add styling for read-only state ([a25bce820a](https://github.com/migrationsverket/midas/commit/a25bce820a))

### 🩹 Fixes

- **checkbox:** set correct indeterminate icon and refactor styles ([baf09f4d11](https://github.com/migrationsverket/midas/commit/baf09f4d11))

### 🏭 Refactoring

- **textfield:** move data attributes from template to css ([387113c52d](https://github.com/migrationsverket/midas/commit/387113c52d))
- **date-field:** move data attributes from template to css ([3ad82fb182](https://github.com/migrationsverket/midas/commit/3ad82fb182))

### 🔧 Maintenance

- **theme:** revert read-only border color token (same as subtle) ([c42f60935b](https://github.com/migrationsverket/midas/commit/c42f60935b))

### 🧪 Tests updated

- update baseline snapshots ([015a9af328](https://github.com/migrationsverket/midas/commit/015a9af328))

### 🧱 Updated Dependencies

- Updated theme to 3.2.0

## 15.1.3 (2025-11-06)

### 🩹 Fixes

- **list-box:** add breaks for long words ([ee353f7654](https://github.com/migrationsverket/midas/commit/ee353f7654))

## 15.1.2 (2025-11-06)

### 🩹 Fixes

- **label:** remove unused global css ([4dccf5ce7f](https://github.com/migrationsverket/midas/commit/4dccf5ce7f))
- **textfield:** adjust text color in disabled mode ([2790ec6752](https://github.com/migrationsverket/midas/commit/2790ec6752))
- **combobox:** adjust text color in disabled mode ([88027e5b4a](https://github.com/migrationsverket/midas/commit/88027e5b4a))

## 15.1.1 (2025-10-30)

### 🩹 Fixes

- **list-box:** adjust selected styling for listBoxItem ([#901](https://github.com/migrationsverket/midas/pull/901))

## 15.1.0 (2025-10-30)

### 🚀 Features

- **accordion:** add size prop ([#896](https://github.com/migrationsverket/midas/pull/896))

# 15.0.0 (2025-10-28)

### 🚀 Features

- ⚠️ **select:** replace custom select with new RAC based select
- **select:** use midas popover
- **select:** update type imports
- **select:** add sections
- **select:** boilerplate for RAC select implementation

### 🩹 Fixes

- **select:** adjust selectAll styling
- **list-box:** adjust section header styling
- **list-box:** loosen type definitions
- **list-box:** adjust vertical padding
- **tag:** add visible keyboard focus for all tags
- **field-error:** remove margin from aria hidden siblings

### ⚠️ Breaking Changes

- ⚠️ **select:** replace custom select with new RAC based select

## 14.1.0 (2025-10-27)

### 🚀 Features

- **spinner:** color defaults to icon-tertiary, deprecate `isOnColor` ([68108dfea0](https://github.com/migrationsverket/midas/commit/68108dfea0))
- **accordion:** add panel animation support for non-chrome browsers ([1a00da2ddc](https://github.com/migrationsverket/midas/commit/1a00da2ddc))

### 🩹 Fixes

- **textfield:** omit duplicate prop definitions ([d19e6e3ad0](https://github.com/migrationsverket/midas/commit/d19e6e3ad0))
- **calendar:** set correct styles for days outside month ([61b9958ad6](https://github.com/migrationsverket/midas/commit/61b9958ad6))
- **tabs:** fix displaying horizontal/vertical tabs ([55507b2ed2](https://github.com/migrationsverket/midas/commit/55507b2ed2))

### 📖 Documentation changes

- **spinner:** update spinner docs with new props ([6ffbcabf1e](https://github.com/migrationsverket/midas/commit/6ffbcabf1e))

### 🔧 Maintenance

- **select:** utilize RAC multi select types ([06f9720a99](https://github.com/migrationsverket/midas/commit/06f9720a99))
- **deps:** update react-aria-components and react-stately ([a0d8b0bd63](https://github.com/migrationsverket/midas/commit/a0d8b0bd63))

### 🧱 Updated Dependencies

- Updated theme to 3.1.1

# 14.0.0 (2025-10-10)

### 🚀 Features

- ⚠️ **theme:** change plural to singular for transition tokens ([e54e1b9631](https://github.com/migrationsverket/midas/commit/e54e1b9631))
- **button:** expand :not condition for pressed state background ([47c6784cbf](https://github.com/migrationsverket/midas/commit/47c6784cbf))
- **button:** disable background change when button pressed && aria-expanded ([1a9b930509](https://github.com/migrationsverket/midas/commit/1a9b930509))
- **heading:** add a new flag for using built in margin ([3df0389120](https://github.com/migrationsverket/midas/commit/3df0389120))
- **modal:** add option to hide close button in header ([5e7b2c59d6](https://github.com/migrationsverket/midas/commit/5e7b2c59d6))
- **modal:** add support for custom className ([#842](https://github.com/migrationsverket/midas/pull/842))

### 🩹 Fixes

- style fixes for forced colors mode ([caca6865c0](https://github.com/migrationsverket/midas/commit/caca6865c0))
- **info-banner:** prevent double useEffect run in strict mode ([#873](https://github.com/migrationsverket/midas/pull/873))
- add clsx wrapper for react aria classname ([e07a2e84c6](https://github.com/migrationsverket/midas/commit/e07a2e84c6))
- **modal:** accept controlled open state props ([7cd6ff0175](https://github.com/migrationsverket/midas/commit/7cd6ff0175))
- **progress-bar:** expose single valueLabels for screen readers ([#852](https://github.com/migrationsverket/midas/pull/852))
- **accordion-item:** fix keyboard-focus/animation/hover bug in accordion-item ([a3663f64bb](https://github.com/migrationsverket/midas/commit/a3663f64bb))
- **accordion:** increase specificity for button css ([e2e9c75914](https://github.com/migrationsverket/midas/commit/e2e9c75914))

### 🔧 Maintenance

- break out storybook ([1746df3356](https://github.com/migrationsverket/midas/commit/1746df3356))

### ⚠️ Breaking Changes

- **theme:** transition tokens are now named without plural `s` and uses DTCG object style instead of arbitrary string

### 🧱 Updated Dependencies

- Updated theme to 3.1.0

## 13.0.1 (2025-09-26)

### 🩹 Fixes

- **menu:** add MenuTrigger export ([8107c24780](https://github.com/migrationsverket/midas/commit/8107c24780))
- **popover:** correct sizing for popover ([866f053f92](https://github.com/migrationsverket/midas/commit/866f053f92))
- **popover:** prevent line breaks too early ([08f365de66](https://github.com/migrationsverket/midas/commit/08f365de66))

### 🧪 Tests updated

- **integration:** setup verdaccio ([2ad7589f12](https://github.com/migrationsverket/midas/commit/2ad7589f12))

### 🧱 Updated Dependencies

- Updated theme to 3.0.1

# 13.0.0 (2025-09-23)

### 🚀 Features

- **components:** change feedback-status icon color to --midas-icon-primary ([a92b43b16b](https://github.com/migrationsverket/midas/commit/a92b43b16b))
- ⚠️ **components-theme:** add new default css export ([60df9c5b0c](https://github.com/migrationsverket/midas/commit/60df9c5b0c))

### 🩹 Fixes

- **textfield:** add native attributes to textfield and textarea ([b66f66e0c2](https://github.com/migrationsverket/midas/commit/b66f66e0c2))
- **table:** use correct background color for row ([11ba3df094](https://github.com/migrationsverket/midas/commit/11ba3df094))
- **layout:** remove hash from main role querySelector ([1de02a1daf](https://github.com/migrationsverket/midas/commit/1de02a1daf))

### 🏭 Refactoring

- remove theme from components project completely, rely on theme package ([5616f8ecc2](https://github.com/migrationsverket/midas/commit/5616f8ecc2))

### 📖 Documentation changes

- add an unreleased indicator in the header ([a531105b18](https://github.com/migrationsverket/midas/commit/a531105b18))

### 🔧 Maintenance

- split global.css into fonts.css and color-scheme.css ([4597020286](https://github.com/migrationsverket/midas/commit/4597020286))
- **components:** remove reference to missing plugin ([8afb0b77d7](https://github.com/migrationsverket/midas/commit/8afb0b77d7))
- **theme:** rename imported variables ([1f33edb0a8](https://github.com/migrationsverket/midas/commit/1f33edb0a8))
- **theme:** revert removal of css ([32fd9c10f6](https://github.com/migrationsverket/midas/commit/32fd9c10f6))
- fix jest module name mapper for theme project ([67ab292b9b](https://github.com/migrationsverket/midas/commit/67ab292b9b))
- temporary fix on named module imports in preview.tsx ([4ef7584195](https://github.com/migrationsverket/midas/commit/4ef7584195))
- fix component unused variables ([86456c1412](https://github.com/migrationsverket/midas/commit/86456c1412))
- fix stylelint references ([0772ed273e](https://github.com/migrationsverket/midas/commit/0772ed273e))
- **storybook:** refactor theme imports to point to theme package ([3410f92902](https://github.com/migrationsverket/midas/commit/3410f92902))
- buildable docs version ([b25c77fdf3](https://github.com/migrationsverket/midas/commit/b25c77fdf3))

### ⚠️ Breaking Changes

- **components-theme:** Default styles are now accessible from `import '@midas-ds/components/default.css'` or via the `@midas-ds/theme` package.

### 🧱 Updated Dependencies

- Updated theme to 3.0.0

## 12.1.1 (2025-09-12)

### 🩹 Fixes

- **modal:** remove modal enter animation ([929648ac35](https://github.com/migrationsverket/midas/commit/929648ac35))

### 💅 Refactors

- **components:** replace `@values` import with hard-coded values for all components ([417bab504b](https://github.com/migrationsverket/midas/commit/417bab504b))

### 🔧 Maintenance

- **components:** stylelint fixing and remove unused css ([b697a7d237](https://github.com/migrationsverket/midas/commit/b697a7d237))
- **theme:** sync tokens with components lib ([30c3df9190](https://github.com/migrationsverket/midas/commit/30c3df9190))
- **components:** remove irrelevant token script from project.json [nx] ([f640ca601c](https://github.com/migrationsverket/midas/commit/f640ca601c))
- setup theme package to export correct variables and tokens ([f71900e8e9](https://github.com/migrationsverket/midas/commit/f71900e8e9))

## 12.1.0 (2025-09-10)

### 🚀 Features

- **menu:** new Menu component ([#744](https://github.com/migrationsverket/midas/pull/744))
- **combobox:** add loading indicator ([#772](https://github.com/migrationsverket/midas/pull/772), [#712](https://github.com/migrationsverket/midas/issues/712))

### 🩹 Fixes

- repair broken tokens ([e905bbf788](https://github.com/migrationsverket/midas/commit/e905bbf788))
- **select:** minor screen reader announcement bugs ([#775](https://github.com/migrationsverket/midas/pull/775))
- **accordion:** add margin for focus indicator ([#780](https://github.com/migrationsverket/midas/pull/780))
- broken tokens ([#782](https://github.com/migrationsverket/midas/pull/782))
- **layout:** add basepath to active link comparison ([4dec0a45ef](https://github.com/migrationsverket/midas/commit/4dec0a45ef))
- **badge:** change background color in dark mode ([f40f2dad67](https://github.com/migrationsverket/midas/commit/f40f2dad67))
- **select:** add aria label to checkbox ([e6cb387a7f](https://github.com/migrationsverket/midas/commit/e6cb387a7f))
- **components:** export missing listbox types from component lib ([1f06b98610](https://github.com/migrationsverket/midas/commit/1f06b98610))
- **textfield:** remove duplicate props spreading ([#769](https://github.com/migrationsverket/midas/pull/769))
- **textfield:** make textarea resizable and remove size from controls storybook ([6d04e25308](https://github.com/migrationsverket/midas/commit/6d04e25308))

### 💅 Refactors

- rename variables in \*.module.css ([42329bde56](https://github.com/migrationsverket/midas/commit/42329bde56))
- Migrate CSS custom properties from tokens.css to theme.css ([8a21fe5783](https://github.com/migrationsverket/midas/commit/8a21fe5783))

### 📖 Documentation changes

- update tokens page with headers and remove tokens from list that are only refs ([ded9bfa8c7](https://github.com/migrationsverket/midas/commit/ded9bfa8c7))

### 🔧 Maintenance

- **deps:** bump vite in the npm_and_yarn group across 1 directory ([7758e60274](https://github.com/migrationsverket/midas/commit/7758e60274))
- add css variable linting ([c39e488881](https://github.com/migrationsverket/midas/commit/c39e488881))
- add dummy comment ([0c12e51cec](https://github.com/migrationsverket/midas/commit/0c12e51cec))
- move sd config into components package ([4e61ffb05b](https://github.com/migrationsverket/midas/commit/4e61ffb05b))
- replace rgba() with hex color ([c03b3a7737](https://github.com/migrationsverket/midas/commit/c03b3a7737))
- set proper object relationship `white: {base: {$value: ...` ([a60bd1643e](https://github.com/migrationsverket/midas/commit/a60bd1643e))
- add comments to deprecations in tokens.ts ([1adf6a5ffa](https://github.com/migrationsverket/midas/commit/1adf6a5ffa))
- fix incorrect color generation for nested light-dark ([83b80912f9](https://github.com/migrationsverket/midas/commit/83b80912f9))
- deprecate tokens.ts and add a warning text to relevant docs ([3025708cc3](https://github.com/migrationsverket/midas/commit/3025708cc3))
- fix additional `base` variables ([f698b08f8f](https://github.com/migrationsverket/midas/commit/f698b08f8f))
- replace `@` with `base`, additional cleanup ([2c6bf1e35a](https://github.com/migrationsverket/midas/commit/2c6bf1e35a))
- correct badge style fixes ([dc8555d733](https://github.com/migrationsverket/midas/commit/dc8555d733))
- update new badge colors ([f287e78fab](https://github.com/migrationsverket/midas/commit/f287e78fab))
- add types to generated tokens ([ba3749bd68](https://github.com/migrationsverket/midas/commit/ba3749bd68))
- temporarily allow js to get a successful build ([2615fe4c40](https://github.com/migrationsverket/midas/commit/2615fe4c40))
- ignore variables.css in stylelint ([859dbfbd75](https://github.com/migrationsverket/midas/commit/859dbfbd75))
- start working on docs ([551e825e38](https://github.com/migrationsverket/midas/commit/551e825e38))
- clean and update style dictionary script ([4a9423ddb6](https://github.com/migrationsverket/midas/commit/4a9423ddb6))
- remove theme.css generator ([75adb9e1d5](https://github.com/migrationsverket/midas/commit/75adb9e1d5))
- rename custom css properties ([aa3eddcef9](https://github.com/migrationsverket/midas/commit/aa3eddcef9))
- update sd build script ([0b9eb9955e](https://github.com/migrationsverket/midas/commit/0b9eb9955e))
- add basic config and json input for style dictionary ([6af3212a6a](https://github.com/migrationsverket/midas/commit/6af3212a6a))
- **deps:** bump the npm_and_yarn group across 1 directory with 4 updates ([67b2b595a1](https://github.com/migrationsverket/midas/commit/67b2b595a1))
- relax stylelint config to allow media query syntax ([5b6955e604](https://github.com/migrationsverket/midas/commit/5b6955e604))
- remove check-values-import.js since it is no longer applicable ([f4c3ee95a4](https://github.com/migrationsverket/midas/commit/f4c3ee95a4))
- create separate storybook configs for serve and build ([642e155d8a](https://github.com/migrationsverket/midas/commit/642e155d8a))
- update dependencies ([#751](https://github.com/migrationsverket/midas/pull/751))

### 🧪 Tests updated

- **table:** add a11y test with links in a striped table ([f3cd83cee2](https://github.com/migrationsverket/midas/commit/f3cd83cee2))
- **table:** remove flaky test ([9b309c1ade](https://github.com/migrationsverket/midas/commit/9b309c1ade))
- **tag:** add textValue to mute console.warn ([d5d68e4363](https://github.com/migrationsverket/midas/commit/d5d68e4363))

# 12.0.0 (2025-08-27)

### 🚀 Features

- **info-banner:** add controlled state ([#754](https://github.com/migrationsverket/midas/pull/754))
- **modal:** change title to `h2`, remove margin and center vertically ([400b06702a](https://github.com/migrationsverket/midas/commit/400b06702a))
- **modal:** move modal title to the header ([4889b827d4](https://github.com/migrationsverket/midas/commit/4889b827d4))
- **theme:** Implement dynamic theme generation and CSS validation ([f50ee50a5b](https://github.com/migrationsverket/midas/commit/f50ee50a5b))
- ⚠️ Automate ESLint versioning and remove deprecated features ([577253d5bb](https://github.com/migrationsverket/midas/commit/577253d5bb))
- **dropdown:** add custom icon support ([6d34b3061a](https://github.com/migrationsverket/midas/commit/6d34b3061a))
- ⚠️ **components:** change feedback status icons to consistent pattern ([8075adb685](https://github.com/migrationsverket/midas/commit/8075adb685))
- **accordion:** add option to display more statuses ([3eb637fc17](https://github.com/migrationsverket/midas/commit/3eb637fc17))
- **table:** add virtualizer recipe ([#736](https://github.com/migrationsverket/midas/pull/736))

### 🩹 Fixes

- **badge:** replace label color ([cfda450f4e](https://github.com/migrationsverket/midas/commit/cfda450f4e))
- **date-picker:** remove explicit height for calendar button ([3fe21636ea](https://github.com/migrationsverket/midas/commit/3fe21636ea))

### 💅 Refactors

- extract `FeedbackStatus` type ([8396c9e628](https://github.com/migrationsverket/midas/commit/8396c9e628))

### 🔧 Maintenance

- **theme:** export css variables in theme.css from @midas-ds/components package ([f9eddbf186](https://github.com/migrationsverket/midas/commit/f9eddbf186))
- remove storybook global size control ([#749](https://github.com/migrationsverket/midas/pull/749))
- deploy docweb from dev branch ([80f58e46d2](https://github.com/migrationsverket/midas/commit/80f58e46d2))

### 🧪 Tests updated

- **button:** move interaction tests to a separate story ([9dfd1459cd](https://github.com/migrationsverket/midas/commit/9dfd1459cd))
- **link-button:** remove a11y test bypass ([a059db212a](https://github.com/migrationsverket/midas/commit/a059db212a))
- **search-field:** remove global size ([#759](https://github.com/migrationsverket/midas/pull/759))
- remove size test from button linkButton and table ([48a26e096e](https://github.com/migrationsverket/midas/commit/48a26e096e))
- **badge:** bypass a11y tests ([626ceaf98c](https://github.com/migrationsverket/midas/commit/626ceaf98c))
- **badge:** fix failing test in dark mode ([d91b690316](https://github.com/migrationsverket/midas/commit/d91b690316))
- **link-button:** bypass a11y test ([ad33fbfd58](https://github.com/migrationsverket/midas/commit/ad33fbfd58))
- emulate media in prepare test hook ([e4060227d4](https://github.com/migrationsverket/midas/commit/e4060227d4))

### ⏪ Revert

- **theme:** Revert "fix(theme): change dark mode values for danger button" ([6cb506566e](https://github.com/migrationsverket/midas/commit/6cb506566e))

### ⚠️ Breaking Changes

- ⚠️ Automate ESLint versioning and remove deprecated features ([577253d5bb](https://github.com/migrationsverket/midas/commit/577253d5bb))
- **components:** when using `type` (`'success'|'info'|'warning'|'important'`) the string `default` is

## 11.2.0 (2025-08-14)

### 🚀 Features

- **listbox:** set `font-size` to 14px and set darkmode colors [run-chromatic] ([0352aedaf4](https://github.com/migrationsverket/midas/commit/0352aedaf4))

### 🩹 Fixes

- **grid:** add export for GridProps type ([9ebd6168d5](https://github.com/migrationsverket/midas/commit/9ebd6168d5))
- **modal:** re-arrange component to work with nested modals and tables ([#733](https://github.com/migrationsverket/midas/pull/733))
- **date-picker:** remove custom portal element ([51f82497ae](https://github.com/migrationsverket/midas/commit/51f82497ae))

### 🔧 Maintenance

- **chromatic:** trigger chromatic on push on feature and fix branches ([39039efa1a](https://github.com/migrationsverket/midas/commit/39039efa1a))
- remove whitespace ([d56b8680b9](https://github.com/migrationsverket/midas/commit/d56b8680b9))

### 🧪 Tests updated

- **date-picker:** add test for controlled state portal bug ([4d07dd8350](https://github.com/migrationsverket/midas/commit/4d07dd8350))

### 🎨 Styles

- **layout:** remove background color ([#732](https://github.com/migrationsverket/midas/pull/732))

## 11.1.0 (2025-08-10)

### 🚀 Features

- **components:** ✨ Export custom component types and interfaces ✨ ([4a07892b73](https://github.com/migrationsverket/midas/commit/4a07892b73))

### 🩹 Fixes

- **popover:** prevent long words from breaking up ([9e4758f156](https://github.com/migrationsverket/midas/commit/9e4758f156))
- **combobox:** make popover prop optional ([cbfb176fb1](https://github.com/migrationsverket/midas/commit/cbfb176fb1))

# 11.0.0 (2025-08-06)

### 🚀 Features

- ⚠️ **file-upload:** replace FileUpload with React Aria FileTrigger ([c539f84bcc](https://github.com/migrationsverket/midas/commit/c539f84bcc))
- **theme:** add badgeBackground token ([c37972d7a6](https://github.com/migrationsverket/midas/commit/c37972d7a6))
- **badge:** replace background token ([6f3cf9d4e8](https://github.com/migrationsverket/midas/commit/6f3cf9d4e8))
- **theme:** add badge-background token ([887eead46f](https://github.com/migrationsverket/midas/commit/887eead46f))

### 🩹 Fixes

- **link:** fix issue with Link not opening in new window when target='\_blank' ([e172ec0e7c](https://github.com/migrationsverket/midas/commit/e172ec0e7c))
- **theme:** change dark mode values for danger button ([46099f843e](https://github.com/migrationsverket/midas/commit/46099f843e))
- **popover:** add overflow-wrap to prevent long string from overflowing ([35895e2d99](https://github.com/migrationsverket/midas/commit/35895e2d99))

### 🔧 Maintenance

- **deps:** bump the npm_and_yarn group across 1 directory with 4 updates ([e267f19a62](https://github.com/migrationsverket/midas/commit/e267f19a62))

### ⚠️ Breaking Changes

- **file-upload:** FileUpload is removed and replaced by FileTrigger. Aligns API exactly with React Aria

## 10.4.1 (2025-07-05)

### 🩹 Fixes

- **tag:** 📏 padding changes ([8116a667ed](https://github.com/migrationsverket/midas/commit/8116a667ed))
- **tabs:** remove list border ([9f1ac2a251](https://github.com/migrationsverket/midas/commit/9f1ac2a251))

### 🔧 Maintenance

- upgrade RAC to 1.10 + some other minor package upgrades ([71a7ab8093](https://github.com/migrationsverket/midas/commit/71a7ab8093))
- cleanup repo from unused apps and dependencies ([4cf2fc61f8](https://github.com/migrationsverket/midas/commit/4cf2fc61f8))
- remove unused test apps ([74c5f90604](https://github.com/migrationsverket/midas/commit/74c5f90604))

## 10.4.0 (2025-07-02)

### 🚀 Features

- **tabs:** refactor tabs to support declarative children structure ([#678](https://github.com/migrationsverket/midas/pull/678))

### 🩹 Fixes

- **theme:** change dark mode color on calendarBackgroundInRange ([d745cb2adf](https://github.com/migrationsverket/midas/commit/d745cb2adf))
- **calendar:** change text color token for dates in range ([1656d6d7a1](https://github.com/migrationsverket/midas/commit/1656d6d7a1))
- **checkbox:** add margin-bottom to checkboxgroup-items [run-chromatic] ([0637fd9a5d](https://github.com/migrationsverket/midas/commit/0637fd9a5d))
- **calendar:** in range states ([3b7bcd03da](https://github.com/migrationsverket/midas/commit/3b7bcd03da))
- **theme:** new tokens for calendar date states ([0f819928d0](https://github.com/migrationsverket/midas/commit/0f819928d0))
- add translations for all text strings ([#689](https://github.com/migrationsverket/midas/pull/689))
- **breadcrumbs:** 💄 accept custom className ([#683](https://github.com/migrationsverket/midas/pull/683))
- **checkbox:** 💄 accept custom className ([#684](https://github.com/migrationsverket/midas/pull/684))
- **color-scheme-switch:** 💄 accept custom className ([#685](https://github.com/migrationsverket/midas/pull/685))
- **file-upload:** 💄 accept custom className ([#686](https://github.com/migrationsverket/midas/pull/686))
- **layout:** 💄 accept custom className ([#687](https://github.com/migrationsverket/midas/pull/687))
- **radio:** 💄 accept custom className ([#688](https://github.com/migrationsverket/midas/pull/688))
- **search-field:** 💄 accept custom className ([#690](https://github.com/migrationsverket/midas/pull/690))
- **spinner:** 💄 accept custom className ([#691](https://github.com/migrationsverket/midas/pull/691))
- **toast:** 💄 accept custom className ([#692](https://github.com/migrationsverket/midas/pull/692))

### 📖 Documentation changes

- add release notes for v10.3.0 ([00264e3cec](https://github.com/migrationsverket/midas/commit/00264e3cec))

## 10.3.0 (2025-06-25)

### 🚀 Features

- **popover:** new component popover ([#672](https://github.com/migrationsverket/midas/pull/672))

### 🩹 Fixes

- **combobox:** select the previous value on click ([b2440e9d2b](https://github.com/migrationsverket/midas/commit/b2440e9d2b))

### 💅 Refactors

- ♻️ checkbox ([#640](https://github.com/migrationsverket/midas/pull/640))

### 🧪 Tests updated

- **grid:** remove a11y test bypass ([ca09acfd1c](https://github.com/migrationsverket/midas/commit/ca09acfd1c))
- opt-in for chromatic on PRs ([#675](https://github.com/migrationsverket/midas/pull/675))
- remove storybook background transiton ([a7b633dca8](https://github.com/migrationsverket/midas/commit/a7b633dca8))

## 10.2.0 (2025-06-18)

### 🚀 Features

- **theme:** new color tokens for skeleton ([#663](https://github.com/migrationsverket/midas/pull/663))
- **skeleton:** add prop for use on layer01 backgrounds ([#655](https://github.com/migrationsverket/midas/pull/655))
- **grid:** new grid v2 📏 ([#656](https://github.com/migrationsverket/midas/pull/656))
- **table:** add size prop ([6f3cc36071](https://github.com/migrationsverket/midas/commit/6f3cc36071))
- **calendar:** extend calendar with state for disabled ([#635](https://github.com/migrationsverket/midas/pull/635))

### 🩹 Fixes

- css syntax errors for media queries ([d4935c1e57](https://github.com/migrationsverket/midas/commit/d4935c1e57))
- **calendar:** change text color for day button on hover ([#651](https://github.com/migrationsverket/midas/pull/651))
- **textfield:** remove `height:100%` on wrapper ([dccd5bdd09](https://github.com/migrationsverket/midas/commit/dccd5bdd09))

### 💅 Refactors

- **field-error:** make component usable without context ([9ce07e9444](https://github.com/migrationsverket/midas/commit/9ce07e9444))

### 📖 Documentation changes

- grid improvements ([5b0db59cd0](https://github.com/migrationsverket/midas/commit/5b0db59cd0))
- new get started pages ([fc4eb7851c](https://github.com/migrationsverket/midas/commit/fc4eb7851c))
- **table:** update docs on medium size ([c70a1ff4df](https://github.com/migrationsverket/midas/commit/c70a1ff4df))
- add release notes for 10.1.1 ([154ab05ae6](https://github.com/migrationsverket/midas/commit/154ab05ae6))

### 🔧 Maintenance

- chunk bundle with rollup ([80e3b0c949](https://github.com/migrationsverket/midas/commit/80e3b0c949))
- format css ([9c9e48254f](https://github.com/migrationsverket/midas/commit/9c9e48254f))
- **components:** add command to watch for typescript errors ([aeebaffc55](https://github.com/migrationsverket/midas/commit/aeebaffc55))
- **search-field:** add column id type to story ([12a8b9af66](https://github.com/migrationsverket/midas/commit/12a8b9af66))
- **deps-dev:** bump brace-expansion ([4cdfd0e167](https://github.com/migrationsverket/midas/commit/4cdfd0e167))
- run storybook tests in pipeline temporary ([730680d696](https://github.com/migrationsverket/midas/commit/730680d696))

### 🧪 Tests updated

- **table:** add chromatic modes ([7081f8adac](https://github.com/migrationsverket/midas/commit/7081f8adac))
- **table:** await queries ([7e18645ead](https://github.com/migrationsverket/midas/commit/7e18645ead))
- **table:** test medium size prop ([073b317cc8](https://github.com/migrationsverket/midas/commit/073b317cc8))
- **calendar:** bypass a11y tests on disabled stories ([d1ce956cb5](https://github.com/migrationsverket/midas/commit/d1ce956cb5))

### 🎨 Styles

- **link-button:** change chevron icon to arrow icon ([#647](https://github.com/migrationsverket/midas/pull/647))
- **table:** adjust paddings and heights ([b84828bfd7](https://github.com/migrationsverket/midas/commit/b84828bfd7))

## 10.1.1 (2025-06-09)

### 🩹 Fixes

- **combobox:** remove label element in ListBoxSection ([#631](https://github.com/migrationsverket/midas/pull/631))
- **link:** better icon logic on links, support for external and download ([#617](https://github.com/migrationsverket/midas/pull/617))
- **date-picker:** fix height issue with button in field ([#623](https://github.com/migrationsverket/midas/pull/623))
- **link-button:** add support for medium size ([#618](https://github.com/migrationsverket/midas/pull/618))
- replace invalid token --blue-140 ([#620](https://github.com/migrationsverket/midas/pull/620))
- **combobox:** virtualize the listbox ([14745432fc](https://github.com/migrationsverket/midas/commit/14745432fc))

### 💅 Refactors

- **combobox:** add explicit id prop to sections ([57b0df3264](https://github.com/migrationsverket/midas/commit/57b0df3264))
- **select:** merge select and combobox list item types ([ed6bbf4d50](https://github.com/migrationsverket/midas/commit/ed6bbf4d50))
- **select:** separate code ([01926124ee](https://github.com/migrationsverket/midas/commit/01926124ee))
- **select:** move list item class to list box ([a3a3a6f2e1](https://github.com/migrationsverket/midas/commit/a3a3a6f2e1))
- **combobox:** extract shared listbox components ([bfe30e237e](https://github.com/migrationsverket/midas/commit/bfe30e237e))

### 📖 Documentation changes

- remove broken anchor ([e2dd1e0766](https://github.com/migrationsverket/midas/commit/e2dd1e0766))
- **release-notes:** add release notes for 10.1.0 ([a912e097bc](https://github.com/migrationsverket/midas/commit/a912e097bc))

### 🔧 Maintenance

- **docs:** update docusaurus ([64d69a5239](https://github.com/migrationsverket/midas/commit/64d69a5239))
- update test files with changed props ([fd165fa775](https://github.com/migrationsverket/midas/commit/fd165fa775))
- **deps-dev:** bump next in the npm_and_yarn group across 1 directory ([2b6d2af5e7](https://github.com/migrationsverket/midas/commit/2b6d2af5e7))
- **deps:** bump tar-fs in the npm_and_yarn group across 1 directory ([f3b185c8e6](https://github.com/migrationsverket/midas/commit/f3b185c8e6))
- test chromatic build ([8613c3cded](https://github.com/migrationsverket/midas/commit/8613c3cded))
- **link-button:** remove the story icon from the storybook ([251945d26f](https://github.com/migrationsverket/midas/commit/251945d26f))

## 10.1.0 (2025-05-23)

### 🚀 Features

- **select:** allow for option id to be string or number ([b9f31bac6b](https://github.com/migrationsverket/midas/commit/b9f31bac6b))
- **select:** use midas checkbox ([94c2cdb61d](https://github.com/migrationsverket/midas/commit/94c2cdb61d))
- **accordion:** add variant `hasBackground` ([2b429a73b3](https://github.com/migrationsverket/midas/commit/2b429a73b3))
- **accordion:** add new variant `hasBackground` ([1022bcc58a](https://github.com/migrationsverket/midas/commit/1022bcc58a))
- **tag:** add dark mode style ([408be2acb7](https://github.com/migrationsverket/midas/commit/408be2acb7))
- **tag:** add new prop ([82a0998769](https://github.com/migrationsverket/midas/commit/82a0998769))

### 🩹 Fixes

- **link-button:** add disabled styling ([143f708127](https://github.com/migrationsverket/midas/commit/143f708127))
- **radio:** remove interactions with radiogroup items outside the label and button ([0b9f197971](https://github.com/migrationsverket/midas/commit/0b9f197971))
- **skeleton:** dont overwrite className and style props ([155a8ff437](https://github.com/migrationsverket/midas/commit/155a8ff437))
- **select:** virtualize the scroll box ([523b138e17](https://github.com/migrationsverket/midas/commit/523b138e17))
- **tag:** fix the hover and fix the disabled style ([3a21642715](https://github.com/migrationsverket/midas/commit/3a21642715))
- **tag:** unset border to make button the right width/height ([769cfa8ec5](https://github.com/migrationsverket/midas/commit/769cfa8ec5))
- **tag:** change token on button hover and pressed ([0f2ff1c422](https://github.com/migrationsverket/midas/commit/0f2ff1c422))
- **tag:** fix the missing nesting selector ([87ac33ab1c](https://github.com/migrationsverket/midas/commit/87ac33ab1c))

### 💅 Refactors

- **tag:** move render function to meta data ([48d9f9b126](https://github.com/migrationsverket/midas/commit/48d9f9b126))

### 📖 Documentation changes

- control size globally in storybook + new dark mode control ([#596](https://github.com/migrationsverket/midas/pull/596))

### 🔧 Maintenance

- **deps:** update RAC ([20da285b9e](https://github.com/migrationsverket/midas/commit/20da285b9e))
- extend commitlint conventional commits config ([4daa47926d](https://github.com/migrationsverket/midas/commit/4daa47926d))
- update eslint rule to handle major versions > 9 ([ba85178773](https://github.com/migrationsverket/midas/commit/ba85178773))
- **changelog:** group and display more commit types in changelog ([d86d18ae94](https://github.com/migrationsverket/midas/commit/d86d18ae94))
- change react import statement ([efe3c867f0](https://github.com/migrationsverket/midas/commit/efe3c867f0))

# 10.0.0 (2025-05-20)

### 🚀 Features

- **tokens:** add new tokens `blue50` and `blue70`, update link colors ([d814a4c961](https://github.com/migrationsverket/midas/commit/d814a4c961))
- ⚠️ **tokens:** rename tokens `blue140` & `blue170` and add new tokens `blue110`, `blue120`, rename `purple140` to `purple110` ([b79d586d53](https://github.com/migrationsverket/midas/commit/b79d586d53))
- **table:** remove deprecation of prop `narrow` and update documentation ([4cbbb8efd9](https://github.com/migrationsverket/midas/commit/4cbbb8efd9))
- **tag:** use button size medium instead of small ([731df78796](https://github.com/migrationsverket/midas/commit/731df78796))
- **search-field:** use button size medium instead of small ([a5f6020bbd](https://github.com/migrationsverket/midas/commit/a5f6020bbd))
- **progress-bar:** use button size medium instead of small ([24dad8eb80](https://github.com/migrationsverket/midas/commit/24dad8eb80))
- **file-upload:** use button size medium instead of small ([c4351ff469](https://github.com/migrationsverket/midas/commit/c4351ff469))
- ⚠️ **skeleton:** remove deprecated props ([cf5b52095c](https://github.com/migrationsverket/midas/commit/cf5b52095c))
- ⚠️ **label:** remove deprecated variants ([36c893a748](https://github.com/migrationsverket/midas/commit/36c893a748))
- ⚠️ **theme:** remove deprecated tokens `borderInvalid` and `textInvalid` ([d2f1620dc4](https://github.com/migrationsverket/midas/commit/d2f1620dc4))
- ⚠️ **table:** remove deprecated prop `narrow` from table ([2b61d27b75](https://github.com/migrationsverket/midas/commit/2b61d27b75))
- ⚠️ **tabs:** remove deprecated prop `defaultSelected` ([5271e93984](https://github.com/migrationsverket/midas/commit/5271e93984))
- ⚠️ **spinner:** remove deprecated prop `dark` ([309da278c9](https://github.com/migrationsverket/midas/commit/309da278c9))
- ⚠️ **modal:** remove deprecated `ModalTrigger` and `Dialog` ([9789773886](https://github.com/migrationsverket/midas/commit/9789773886))
- ⚠️ **accordion:** remove deprecated prop `type='multiple'`, use `allowsMultipleExpanded` instead ([8c82cbd681](https://github.com/migrationsverket/midas/commit/8c82cbd681))
- ⚠️ **button:** remove small size variant from button ([06430f2df2](https://github.com/migrationsverket/midas/commit/06430f2df2))
- **skeleton:** allow for more semantically correct props ([703237ec04](https://github.com/migrationsverket/midas/commit/703237ec04))
- **button:** add back the small variant ([2112557050](https://github.com/migrationsverket/midas/commit/2112557050))
- **button:** add size property, a story and style ([946bd9aa7d](https://github.com/migrationsverket/midas/commit/946bd9aa7d))
- **search-field:** add size prop ([4dab7eea96](https://github.com/migrationsverket/midas/commit/4dab7eea96))
- **combobox:** add size prop ([e64826ab11](https://github.com/migrationsverket/midas/commit/e64826ab11))
- **date-picker:** add size prop ([c1e1a04444](https://github.com/migrationsverket/midas/commit/c1e1a04444))
- **select:** add size property ([b1519f00cd](https://github.com/migrationsverket/midas/commit/b1519f00cd))
- **date-field:** ✨ medium size ([#558](https://github.com/migrationsverket/midas/pull/558))
- **theme:** add full scale of signal-red tokens ([abdca1e267](https://github.com/migrationsverket/midas/commit/abdca1e267))

### 🩹 Fixes

- **select:** increase the margin top to give more space between tag group and select ([5514f642b0](https://github.com/migrationsverket/midas/commit/5514f642b0))
- **calendar:** add cursor: not-allowed on disabled dates ([6592b4fb15](https://github.com/migrationsverket/midas/commit/6592b4fb15))
- **accordion:** set correct height on uncontained variant ([#557](https://github.com/migrationsverket/midas/pull/557))

### 📖 Documentation changes

- **layout:** update docs on clientSideHref prop ([6f1e0807ad](https://github.com/migrationsverket/midas/commit/6f1e0807ad))
- add untracked changelog files and update tsconfig ([9527e80ac0](https://github.com/migrationsverket/midas/commit/9527e80ac0))
- **changelog:** add docusaurus style changelog and release notes ([cba214be09](https://github.com/migrationsverket/midas/commit/cba214be09))

### 🔧 Maintenance

- **deps:** bump undici in the npm_and_yarn group across 1 directory ([63e9f61a23](https://github.com/migrationsverket/midas/commit/63e9f61a23))
- **deps:** bump vite in the npm_and_yarn group across 1 directory ([193b8d80b5](https://github.com/migrationsverket/midas/commit/193b8d80b5))
- disable snapshots for duplicate states ([52197ad135](https://github.com/migrationsverket/midas/commit/52197ad135))
- use medium sized buttons ([7d55406881](https://github.com/migrationsverket/midas/commit/7d55406881))
- ⚠️ **useMessageFormatter:** remove `useMessageFormatter` since deprecation ([01d94a8d75](https://github.com/migrationsverket/midas/commit/01d94a8d75))
- **button:** fix code documentation ([28974126de](https://github.com/migrationsverket/midas/commit/28974126de))
- add npm provenance flag ([039f1daa0d](https://github.com/migrationsverket/midas/commit/039f1daa0d))
- add new eslint rules ([#545](https://github.com/migrationsverket/midas/pull/545))
- update version in eslint config ([93edc05f7c](https://github.com/migrationsverket/midas/commit/93edc05f7c))

### 🧪 Tests updated

- **button:** add await to expect tests ([6a72c8d05b](https://github.com/migrationsverket/midas/commit/6a72c8d05b))
- **button:** add a test to stories ([0348794fc7](https://github.com/migrationsverket/midas/commit/0348794fc7))
- **button:** add a test in primary story ([53f4fe042e](https://github.com/migrationsverket/midas/commit/53f4fe042e))
- **docs:** add test baseline and chromatic tests ([57d6255477](https://github.com/migrationsverket/midas/commit/57d6255477))
- **select:** fix the test ([f41535787b](https://github.com/migrationsverket/midas/commit/f41535787b))
- **select:** add test to check the size ([2c692d9ea0](https://github.com/migrationsverket/midas/commit/2c692d9ea0))

### ⚠️ Breaking Changes

- ⚠️ **tokens:** rename tokens `blue140` & `blue170` and add new tokens `blue110`, `blue120`, rename `purple140` to `purple110` ([b79d586d53](https://github.com/migrationsverket/midas/commit/b79d586d53))
- **skeleton:** variant `rectangular` is no longer available, use `rectangle` instead. Animation is now a boolean and the prop to use is `isAnimated`
- **label:** label variants are no longer available, use component `Text` instead
- **useMessageFormatter:** Adobe has deprecated this hook in favour of `useLocalizedStringFormatter`. Use that instead!
- **theme:** use `supportBorderWarning` and `textWarning` instead
- **table:** prop `narrow` is no longer available
- **tabs:** `defaultSelected` no longer works, use `defaultSelectedKey` instead
- **spinner:** prop `dark` no longer works, use `isOnColor` instead
- **modal:** `ModalTrigger` and `Dialog` no longer works, use `DialogTrigger` and `Modal` instead
- **accordion:** API now conforms to React Aria standard. Same behavior is accomplished using `allowsMultipleExpanded`
- **button:** `size='small'` no longer has any effect on button size. Allowed sizes are `'medium' | 'large'`

# 9.0.0 (2025-05-05)

### 🩹 Fixes

- **info-banner:** add correct line-height ([#540](https://github.com/migrationsverket/midas/pull/540))
- **grid:** prevent midas classnames to get overwritten ([#541](https://github.com/migrationsverket/midas/pull/541))
- **textfield:** merge textfield and input/textarea native dom props ([#499](https://github.com/migrationsverket/midas/pull/499))

### Documentation Changes

- **toast:** fix local example in storybook ([#542](https://github.com/migrationsverket/midas/pull/542))

## 8.3.0 (2025-05-03)

### 🚀 Features

- **theme:** use `--support-border-warning` instead of `--border-invalid` ([#518](https://github.com/migrationsverket/midas/pull/518))
- **textfield:** add medium size variant ([#520](https://github.com/migrationsverket/midas/pull/520))
- **layout:** change font weight for active menu item ([57e2485234](https://github.com/migrationsverket/midas/commit/57e2485234))
- **layout:** change background color for menu item ([d9ffc16bb6](https://github.com/migrationsverket/midas/commit/d9ffc16bb6))

### 🩹 Fixes

- **modal:** adjust modal header when content is scollable ([#527](https://github.com/migrationsverket/midas/pull/527))
- **combobox:** add disabled color to the icon in disabled state ([9cd5657149](https://github.com/migrationsverket/midas/commit/9cd5657149))
- **select:** add disabled styling to description ([4cabb0c8ae](https://github.com/migrationsverket/midas/commit/4cabb0c8ae))
- **select:** change invalid border from 3px to 2 px ([834f1f8fdc](https://github.com/migrationsverket/midas/commit/834f1f8fdc))
- **accordion:** add a minimal padding to allow items with margin-bottom ([e0b2d8058b](https://github.com/migrationsverket/midas/commit/e0b2d8058b))
- **accordion:** remove padding bottom for last uncontained accordionitem ([463a7fa29e](https://github.com/migrationsverket/midas/commit/463a7fa29e))
- **textfield:** remove opacity from disabled ([0332d83cb6](https://github.com/migrationsverket/midas/commit/0332d83cb6))
- **textfield:** add border bottom in disabled and change ivalid border to 2px ([2bcd1d5beb](https://github.com/migrationsverket/midas/commit/2bcd1d5beb))

### Documentation Changes

- improvements to preview 💅 🔍 ✨ ([#530](https://github.com/migrationsverket/midas/pull/530))

## 8.2.0 (2025-05-01)

### 🚀 Features

- **theme:** add --icon-tertiary, new color for --icon-secondary ([f0ef381472](https://github.com/migrationsverket/midas/commit/f0ef381472))
- **label:** deprecate prop variant and add new css class ([42e33be662](https://github.com/migrationsverket/midas/commit/42e33be662))
- **tooltip:** allow locale agnostic tooltip placement ([#492](https://github.com/migrationsverket/midas/pull/492))

### 🩹 Fixes

- **accordion:** remove disabled styling if component has disabled children ([1c704b714d](https://github.com/migrationsverket/midas/commit/1c704b714d))
- **checkbox:** set correct line-height and adjust high contrast visibility ([6ca7ea9ba9](https://github.com/migrationsverket/midas/commit/6ca7ea9ba9))

### Documentation Changes

- **propstable:** add support for enums in table ([#511](https://github.com/migrationsverket/midas/pull/511))
- **modal:** change arg types in storybook ([f9588f170b](https://github.com/migrationsverket/midas/commit/f9588f170b))

## 8.1.0 (2025-05-02)

### 🚀 Features

- **accordion:** accordion status ✅ / 🚨 ([#485](https://github.com/migrationsverket/midas/pull/485))

### 🩹 Fixes

- **theme:** add dark mode focus ([#483](https://github.com/migrationsverket/midas/pull/483))
- **modal:** make text in modal selectable ([#490](https://github.com/migrationsverket/midas/pull/490))
- **accordion:** rename invalid token ([e4b13c928](https://github.com/migrationsverket/midas/commit/e4b13c928))
- **select:** remove explicit size for indeterminate symbol ([5f805c134](https://github.com/migrationsverket/midas/commit/5f805c134))
- **select:** change checkbox size to prevent disappearing border ([3ab520633](https://github.com/migrationsverket/midas/commit/3ab520633))

# 8.0.0 (2025-05-01)

### 🚀 Features

- **spinner:** change prop `dark` to `isOnColor` ([#443](https://github.com/migrationsverket/midas/pull/443))
- ✨ add errorPosition to form fields ([#416](https://github.com/migrationsverket/midas/pull/416))
- **layout:** new navbar component and external variant of layout ([ad54f5955](https://github.com/migrationsverket/midas/commit/ad54f5955))
- ✨💄 add semantic z-index tokens ([#401](https://github.com/migrationsverket/midas/pull/401))

### 🩹 Fixes

- **calendar:** add high contrast styling for selected date ([a5af1cafe](https://github.com/migrationsverket/midas/commit/a5af1cafe))
- **calendar:** sync calendars ([3e7b4fb06](https://github.com/migrationsverket/midas/commit/3e7b4fb06))
- **calendar:** add border for high contrast mode ([7ed989df8](https://github.com/migrationsverket/midas/commit/7ed989df8))
- **radio:** add support for horizontal orientation ([e5c9ad3eb](https://github.com/migrationsverket/midas/commit/e5c9ad3eb))
- **link:** remove active styling in disabled state ([71c1e1400](https://github.com/migrationsverket/midas/commit/71c1e1400))
- **heading:** set correct styles for heading and affected components ([#394](https://github.com/migrationsverket/midas/pull/394))
- **accordion:** fix responsive content hiding when changing screen size ([#446](https://github.com/migrationsverket/midas/pull/446))
- **button:** add cursor styling for disabled state ([1ab3f6c55](https://github.com/migrationsverket/midas/commit/1ab3f6c55))
- **date-picker:** add missing disabled styles ([492a1b789](https://github.com/migrationsverket/midas/commit/492a1b789))
- **combobox:** fix background color to input ([6ec2c1d3e](https://github.com/migrationsverket/midas/commit/6ec2c1d3e))
- **theme:** replace invalid text and border colors in dark mode ([a6259f46c](https://github.com/migrationsverket/midas/commit/a6259f46c))

### Documentation Changes

- **calendar:** update docs ([#469](https://github.com/migrationsverket/midas/pull/469))
- **link-button:** remove live-code from docs ([#451](https://github.com/migrationsverket/midas/pull/451))
- **heading:** expose ElementType ([79b85f4e4](https://github.com/migrationsverket/midas/commit/79b85f4e4))
- **tabs:** remove generic in prop interface ([d8bcf2b92](https://github.com/migrationsverket/midas/commit/d8bcf2b92))
- **tabs:** remove live code and update documentation ([c4b2c2e47](https://github.com/migrationsverket/midas/commit/c4b2c2e47))
- **tooltip:** update tooltip documentation 🔧 ([#439](https://github.com/migrationsverket/midas/pull/439))
- **label:** remove live code and update documentation ([1803a3ee1](https://github.com/migrationsverket/midas/commit/1803a3ee1))
- **table:** add prop comment ([6089593a4](https://github.com/migrationsverket/midas/commit/6089593a4))
- new page explaining tokens and use of color + removed and updated tokens ([c970f0eb5](https://github.com/migrationsverket/midas/commit/c970f0eb5))
- **text:** remove union type for documentation visibility ([675b94795](https://github.com/migrationsverket/midas/commit/675b94795))
- define error types at component level ([14dc2b8da](https://github.com/migrationsverket/midas/commit/14dc2b8da))
- update link docs with new code and examples ([a25a2def3](https://github.com/migrationsverket/midas/commit/a25a2def3))
- use markdown links ([f1fb5714b](https://github.com/migrationsverket/midas/commit/f1fb5714b))

## 7.1.0 (2025-05-01)

### 🚀 Features

- ✨💄 add semantic z-index tokens ([#401](https://github.com/migrationsverket/midas/pull/401))

### 🩹 Fixes

- **date-picker:** add missing disabled styles ([10b394897](https://github.com/migrationsverket/midas/commit/10b394897))
- **combobox:** fix background color to input ([997eac80b](https://github.com/migrationsverket/midas/commit/997eac80b))
- **theme:** replace invalid text and border colors in dark mode ([3291a9cbd](https://github.com/migrationsverket/midas/commit/3291a9cbd))

# 7.0.0 (2025-05-01)

This was a version bump only for components to align it with other projects, there were no code changes.

## 6.2.0 (2025-05-01)

### 🚀 Features

- **badge:** 🆕 new component - badge to indicate user of unread items

### 🩹 Fixes

- **theme:** update icon-secondary with new value for dark mode
- **date-picker:** add disabled style to divider
- **theme:** update more tokens in tokens.ts
- **theme:** update some tokens to new naming convention
- **tabs:** fix dark mode on tabs and example on docweb
- **theme:** change the token value to icon secondary
- **link-button:** fix secondary border and icon color in dark mode

## 6.1.0 (2025-05-01)

### 🚀 Features

- **text:** add description slot ([73d308a13](https://github.com/migrationsverket/midas/commit/73d308a13))

### 🩹 Fixes

- **textfield:** fix token on input value ([e79f935e3](https://github.com/migrationsverket/midas/commit/e79f935e3))
- **link-button:** add pseudo-classes in CSS link-button ([#385](https://github.com/migrationsverket/midas/pull/385))

## 6.0.1 (2025-05-01)

### 🩹 Fixes

- **select:** 🐛 Selected values doesn't match selected IDs

# 6.0.0 (2025-05-01)

### 🚀 Features

- **modal:** replace h2 with heading component
- ⚠️ **modal:** deprecate `ModalTrigger` and `Dialog`
- **modal:** fix overlay position to avoid moving the modal when y-overflow
- **modal:** increase z-index on overlay
- **modal:** add focustrap to modal
- **modal:** add styles and clean up types
- **modal:** add boilerplate code for new modal implementation
- use `cursor: not-allowed` for disabled elements

### 🩹 Fixes

- **layout:** change minimize menu button to icon variant
- **button:** change iconbtn color token
- **button:** tokenize icon button for better dark mode support
- **button:** clarify use of labels on button groups
- **button:** clarify use of labels on button groups
- add react types to dependencies
- remove test setup from build

### ⚠️ Breaking Changes

- **modal:** Use the new DialogTrigger and Modal instead of ModalTrigger and Dialog. New API will apply.

## 5.0.1 (2025-03-25)

### 🩹 Fixes

- **checkbox:** swap old focus token
- **checkbox:** swap old tokens
- **radio:** remove old tokens
- **link-button:** fix colors on hover state
- **toast:** re-organize animations and breakpoints
- **toast:** remove explicit dep
- **toast:** update react-aria deps
- **toast:** add temporary implementation of useToastState

### Documentation Changes

- display project changelog on docweb

# 5.0.0 (2025-03-17)

### 🚀 Features

- ⚠️ support for dark mode across all components

### 🩹 Fixes

- **button:** deprecate small version
- **card:** deprecate card background
- **date-picker:** change selected date color to blue150
- **date-picker:** resize button in invalid state, fixes #312
- **date-picker:** change cursor to pointer
- **layout:** design adjustments
- **search-field:** use aria-label instead of hidden label
- **select:** remove unsupported attribute
- **select:** change direct element selector
- **table:** deprecate narrow version

### Documentation Changes

- dark mode support for storybook and docusaurus
- add instructions for bug reporting
- dark mode page on docweb
- add security disclaimers
- update select docs
- fix new tokens
- fix local dark mode on portals in SB
- updated docs with tokens
- dark mode header image
- **docs:** add new UIkit
- **localization:** add dev instructions for localization

### ⚠️ Breaking Changes

- dark mode :city_sunrise:

# 4.0.0 (2025-03-10)

### 🚀 Features

- ⚠️ updated select, multi-select and modal components

### 🩹 Fixes

- **layout:** design adjustments
- **radio:** change cursor to pointer

### Documentation Changes

- **date-picker:** add style unavailable and code example for Unavailable Date in docs
- **docs:** add new UIkit

### ⚠️ Breaking Changes

- `Select`, `MultiSelect` and `Modal` now have updated API:s, expect things not to work as before. Make sure to check the API:s before upgrading.

## 3.1.0 (2025-03-06)

### 🚀 Features

- **button:** set primary border to 2px when in high-contrast mode ([fdcf32e1d](https://github.com/migrationsverket/midas/commit/fdcf32e1d))

### 🩹 Fixes

- **calendar** set default weekday style to `short` ([#303](https://github.com/migrationsverket/midas/pull/303))
- **checkbox:** change cursor to pointer ([d5ce18403](https://github.com/migrationsverket/midas/commit/d5ce18403))
- **date-picker:** change selected date color to blue150 ([6a7e856a9](https://github.com/migrationsverket/midas/commit/6a7e856a9))
- **date-picker:** resize button in invalid state, fixes #312 ([#312](https://github.com/migrationsverket/midas/issues/312))
- **datepicker:** change cursor to pointer ([5425f7282](https://github.com/migrationsverket/midas/commit/5425f7282))
- **radio:** change cursor to pointer ([c18ec8f4e](https://github.com/migrationsverket/midas/commit/c18ec8f4e))

### Documentation Changes

- add new UIkit ([a47947b63](https://github.com/migrationsverket/midas/commit/a47947b63))
- add instructions for bug reporting ([93205ee30](https://github.com/migrationsverket/midas/commit/93205ee30))
- **date-picker:** add style unavailable and code example for Unavailable Date in docs ([469da9424](https://github.com/migrationsverket/midas/commit/469da9424))

# 3.0.0 (2025-02-28)

### 🚀 Features

- ⚠️ **search-field:** remove broken property ([1c04349ce](https://github.com/migrationsverket/midas/commit/1c04349ce))

### 🩹 Fixes

- **card:** append props.className ([#295](https://github.com/migrationsverket/midas/pull/295))
- **search-field:** move validation error message ([85c1b7990](https://github.com/migrationsverket/midas/commit/85c1b7990))
- **search-field:** useSearchField to validate input and use internal key events ([fbe8cf54a](https://github.com/migrationsverket/midas/commit/fbe8cf54a))
- **search-field:** handle custom error messages ([99649c163](https://github.com/migrationsverket/midas/commit/99649c163))
- **search-field:** add disabled styling ([f508f2f6d](https://github.com/migrationsverket/midas/commit/f508f2f6d))
- **search-field:** add validation error utility function ([1f4758e41](https://github.com/migrationsverket/midas/commit/1f4758e41))
- **search-field:** add border bottom and pixel push some paddings ([e53d56bb7](https://github.com/migrationsverket/midas/commit/e53d56bb7))
- **search-field:** validation text ([#290](https://github.com/migrationsverket/midas/pull/290))

### Documentation Changes

- **search-field:** add stories ([8766d4d8e](https://github.com/migrationsverket/midas/commit/8766d4d8e))

### ⚠️ Breaking Changes

- **search-field:** `isRequired` property of `SearchField` is no longer supported

## 2.0.1 (2025-02-27)

### 🩹 Fixes

- **radio:** fix hover on mobile, remove 100% height on RadioGroup ([#286](https://github.com/migrationsverket/midas/pull/286))
- **text-field:** update dossnr regex to support new delimiter ([c5e1b4428](https://github.com/migrationsverket/midas/commit/c5e1b4428))
- **text-field:** add rule for matching delimiters for doss nr ([026073775](https://github.com/migrationsverket/midas/commit/026073775))
- **text-field:** cover more cases on dossnr ([0f27d8b33](https://github.com/migrationsverket/midas/commit/0f27d8b33))

### Documentation Changes

- update get started with node 22 ([098e4e1e0](https://github.com/migrationsverket/midas/commit/098e4e1e0))

# 2.0.0 (2025-02-25)

### 🚀 Features

- **layout:** design improvements + tooltip ([#231](https://github.com/migrationsverket/midas/pull/231))
- ⚠️ **textarea:** rename maxCharacters property ([06116cee9](https://github.com/migrationsverket/midas/commit/06116cee9))
- ⚠️ **text-field:** rename maxCharacters property ([44eec760e](https://github.com/migrationsverket/midas/commit/44eec760e))
- **tooltip:** new component tooltip ([3bc3fcd4f](https://github.com/migrationsverket/midas/commit/3bc3fcd4f))

### 🩹 Fixes

- **accessibility:** fix focus for high contrast mode ([#267](https://github.com/migrationsverket/midas/pull/267))
- **accordion:** append classname ([aaaa0ddb1](https://github.com/migrationsverket/midas/commit/aaaa0ddb1))
- **accordion:** remove dependency array from useLayoutEffect - fix render of dynamic content in AccordionItem ([db4c920ee](https://github.com/migrationsverket/midas/commit/db4c920ee))
- **accordion:** fix render of dynamic content in AccordionItem ([#283](https://github.com/migrationsverket/midas/pull/283))
- **combobox:** append classname ([570a1998e](https://github.com/migrationsverket/midas/commit/570a1998e))
- **components:** append prop.className ([#279](https://github.com/migrationsverket/midas/pull/279))
- **file-upload:** pass unhandled props ([fc90980d9](https://github.com/migrationsverket/midas/commit/fc90980d9))
- **file-upload:** add autdocs config ([809f0b894](https://github.com/migrationsverket/midas/commit/809f0b894))
- **file-upload:** import react to get autodocs props ([e6467ca66](https://github.com/migrationsverket/midas/commit/e6467ca66))
- **file-upload:** pass unhandled props to the FileTrigger component ([#277](https://github.com/migrationsverket/midas/pull/277))
- **layout:** design adjustments ([f086ad5fe](https://github.com/migrationsverket/midas/commit/f086ad5fe))
- **layout:** fix bug where mobile menu wouldn't open ([c61923662](https://github.com/migrationsverket/midas/commit/c61923662))
- **logo:** append classname ([66a189a6c](https://github.com/migrationsverket/midas/commit/66a189a6c))
- **radio:** append classname ([796173ba2](https://github.com/migrationsverket/midas/commit/796173ba2))
- **tag:** append classname ([df88ec9fb](https://github.com/migrationsverket/midas/commit/df88ec9fb))
- **textarea:** add validation for minLength property ([8df1f931a](https://github.com/migrationsverket/midas/commit/8df1f931a))
- **textarea:** append classname ([cdd9f3e5c](https://github.com/migrationsverket/midas/commit/cdd9f3e5c))
- **textarea:** set initial counter value on render ([924f5abda](https://github.com/migrationsverket/midas/commit/924f5abda))
- **text-field:** append classname ([53f5b603c](https://github.com/migrationsverket/midas/commit/53f5b603c))
- **text-field:** set initial counter value on render ([0e9e4a44d](https://github.com/migrationsverket/midas/commit/0e9e4a44d))
- **text-field:** set the initial value for useState ([#280](https://github.com/migrationsverket/midas/pull/280))
- **theme:** add global css export ([#282](https://github.com/migrationsverket/midas/pull/282))
- **tooltip:** append classname ([0e6e6e483](https://github.com/migrationsverket/midas/commit/0e6e6e483))

### Documentation Changes

- dropdown + layout + tooltip ([28d3bc661](https://github.com/migrationsverket/midas/commit/28d3bc661))
- **components:** sync docusaurus and storybook autodocs config ([4e061ad4d](https://github.com/migrationsverket/midas/commit/4e061ad4d))
- **docs:** add documentation about skeleton component ([460bf602c](https://github.com/migrationsverket/midas/commit/460bf602c))
- **docs:** add design pattern about loaders ([702136a89](https://github.com/migrationsverket/midas/commit/702136a89))
- **docs:** add link to design pattern ([38db9d2de](https://github.com/migrationsverket/midas/commit/38db9d2de))
- **file-upload:** manually extend react aria props for autodocs ([07ecde229](https://github.com/migrationsverket/midas/commit/07ecde229))

### ⚠️ Breaking Changes

- **textarea:** TextArea propert maxCharacters is renamed to maxLength

## 1.3.0 (2025-02-19)

### 🚀 Features

- **accordion:** support react nodes in title ([#259](https://github.com/migrationsverket/midas/pull/259))
- **text-field:** add dossier number validation ([#261](https://github.com/migrationsverket/midas/pull/261))

### 🩹 Fixes

- **accordion:** support any elements in title ([1129fd742](https://github.com/migrationsverket/midas/commit/1129fd742))
- **card:** add React.useId to generate unique id ([160319d03](https://github.com/migrationsverket/midas/commit/160319d03))
- **card:** fix to read title and content ([dd8d07c72](https://github.com/migrationsverket/midas/commit/dd8d07c72))
- **card:** remove the id content from p tag ([54e4fe9cd](https://github.com/migrationsverket/midas/commit/54e4fe9cd))
- **docs:** update theme imports ([5cbd797f4](https://github.com/migrationsverket/midas/commit/5cbd797f4))
- **table:** show hover background color for striped table ([a6b4f35d5](https://github.com/migrationsverket/midas/commit/a6b4f35d5))
- **table:** striped table hover effect and unused props ([#250](https://github.com/migrationsverket/midas/pull/250))
- **table:** add pointer if row has a link ([#262](https://github.com/migrationsverket/midas/pull/262))
- **table:** preserve classNames when using props.className ([d7a9142cd](https://github.com/migrationsverket/midas/commit/d7a9142cd))
- **text-field:** add dossier number validation ([b3027b5b9](https://github.com/migrationsverket/midas/commit/b3027b5b9))
- **text-field:** +/- divider should be optional ([b1393263a](https://github.com/migrationsverket/midas/commit/b1393263a))
- **theme:** point to theme types ([#248](https://github.com/migrationsverket/midas/pull/248))
- **theme:** reorder theme export ([#265](https://github.com/migrationsverket/midas/pull/265))

## 1.2.0 (2025-02-11)

### 🚀 Features

- **components:** new api and style for accordion ([efab0a198](https://github.com/migrationsverket/midas/commit/efab0a198))
- **components:** add nvm config ([7cbbce66e](https://github.com/migrationsverket/midas/commit/7cbbce66e))

### 🩹 Fixes

- import/export text-field css directly from css module ([#212](https://github.com/migrationsverket/midas/pull/212))
- **components:** fix text when titles are longer than one row ([28b06cd31](https://github.com/migrationsverket/midas/commit/28b06cd31))
- **info-banner:** fix icon to be in same line with text in docs and story ([f37b798c3](https://github.com/migrationsverket/midas/commit/f37b798c3))
- **theme:** create separate theme export ([a6c95a23c](https://github.com/migrationsverket/midas/commit/a6c95a23c))

## 1.1.0 (2025-01-31)

### 🚀 Features

- **components:** new api and style for accordion

## 1.0.2 (2025-01-27)

### 🚀 Features

- **modal:** create a new component
- **button:** add react aria button component
- **button:** added tertiary and danger themes
- **button:** remove underline from tertiary button
- **button:** add icon and iconSize prop and logic to make icon smaller when size=small
- **button:** update button stories
- **button:** remove unused icon
- **button:** add property to change button's icon direction
- **button:** change inline style to class style
- **button:** add buttongroup component, move mobile rules
- ⚠️ **card:** new api, replace button with stretched link
- **card:** support custom link component
- **checkbox:** select all checkbox
- **checkbox:** new wrapper
- **combobox:** create a combobox component with styling
- **date-picker:** new wrapper
- **date-picker:** new datepicker
- **date-picker:** datepicker renamed daterangepicker in favor of datepicker
- **docs:** add docusaurus boilerplate
- **dropdown:** new component
- **file-upload:** new wrapper
- **flex:** add fluid variant
- **flex:** can now take all props of usual div
- **info-banner:** add support for ReactNodes in message
- **info-banner:** dismissable banner
- **link:** add standalone link variant
- **link:** ability to stretch link in parent
- **link:** add icon in prop, add disabled, and add states in css
- **link-button:** inherits api from button
- **link-button:** add full width
- **link-button:** add icon
- **logo:** new variants and refactor
- ⚠️ **modal:** new API
- **multi-select:** new component
- **radio:** new wrapper
- **search-field:** props rewrite
- **select:** new wrapper
- **sidebar:** new component
- **storybook:** add boilerplate storybook instance
- **table:** new component!
- **table:** add docs + striped option
- **tag:** new component
- **tertiary button:** change padding
- **text-area:** creat textArea component
- **text-field:** add ssn validation
- **text-field:** support counter and maxCharacters
- **ui:** export new components
-

### 🩹 Fixes

- **accordion:** hover on trigger
- **accordion:** update icon size
- **accordion:** color on iOS
- **button:** add large option to size in storybook and fix styling to tertiary
- **button:** change name large to null in the size option in storybook
- **button:** add icon variant
- **button:** share api with link-button
- **button:** change property name to iconPlacement
- **button:** adjust spacing
- **button:** update icon size
- **button:** fix styling to focus-visible state
- **button:** delete the third box-shadow and fix style to all
- **button:** add variable focus in tokens.css and fix the style with variable
- **button:** add press style on icon btn
- **button:** change the styling in focus visible to a variable
- **button:** correct spacing on icon button
- **button:** remove pixel and rem mixing
- **card:** accessibility fix on icon
- **card:** only animate out arrow
- **card:** correct border-color
- **card:** better column stretching
- **card:** support custom link
- **checkbox:** change styling of description
- **checkbox:** fix gap between label and description
- **checkbox:** change to lucide icon and fix css
- **checkbox:** fix checkbox size and disabled state css
- **checkbox:** change back to polyline for checkmark
- **checkbox:** add the animation back again
- **checkbox:** select all can be indeterminate
- **checkbox:** change the styling in focus visible to a variable
- **checkbox:** fix state could be null
- **combobox:** fix disabled state style and fix combobox test
- **combobox:** rewrite to new wrapper
- **combobox:** fix props
- **combobox:** button alignment
- **combobox:** focus style fix
- **combobox:** chevron icon will be upp when select is opened
- **combobox:** add aria-expanded to css to rotate chevron icon
- **combobox:** update icon size
- **combobox:** new focus style
- **combobox:** support modals
- **combobox:** color on iOS
- **date-picker:** correct colors
- **date-picker:** update icon size
- **date-picker:** change the styling in focus visible to a variable
- **date-picker:** new focus state
- **date-picker:** dependency update
- **date-picker:** spacing on timefields
- **date-picker:** support modals
- **date-picker:** color on iOS
- **docs:** change doc structure
- **docs:** accessibility is back
- **docs:** mend broken pages
- **docs:** fix top banner
- **docs:** test commit on GitHub
- **docs:** updates to accomodate storybook
- **docs:** remove "build with"
- **docs:** fix storybook link
- **docs:** new frontpage
- **docs:** update url
- **file-upload:** update icon size
- **file-upload:** fix text overflow mobile
- **flex:** better column stretching
- **flex:** fix column wrapping
- **grid:** better column stretching
- **info-banner:** fix dismissable button
- **info-banner:** add div props to info-banner
- **info-banner:** fix classname info clsx
- **info-banner:** update icon size
- **link:** icon stays in size
- **link:** ignore icon prop if link is standalone
- **link:** fix style to center the icon with text
- **link:** fix the wrong style
- **link:** add style underline to hover and active state
- **link:** add visited state to css
- **link:** add url address which leads to link component in docsweb
- **link:** commit
- **link:** support custom link component
- **link-button:** fix styling justify-content
- **link-button:** fix padding
- **link-button:** adjust styles + add focus styles
- **link-button:** add variants
- **link-button:** change gap to 0.5rem
- **link-button:** remove the duplicated code
- **link-button:** change justify-content to center to make fullwidth look better
- **link-button:** custom link component
- **link-button:** external link icon on target \_blank
- **linkButton:** use button style and fix the story for icon
- **logo:** add support for all `<div>` props, like className
- **logo:** html tag name fix
- **modal:** delete trigger button and fix styling
- **modal:** fix styling in css file
- **modal:** delete icon backgrund-color in css file
- **modal:** update modal docs
- **modal:** fix bug of unopenable modal + new docs
- **modal:** fix spacing
- **modal:** adjust max height and overflow
- **multi-select:** style adjustments
- **multi-select:** support for all default key
- **multi-select:** validation
- **multi-select:** change remove to update list
- **multi-select:** support modals
- **multi-select:** null on item fix
- **multi-select:** fix intermittent errors in tag removal
- **radio:** remove padding
- **radio:** change padding on label and helper text
- **radio:** remove invalid line and fix css
- **radio:** change gap between elements to 0.5rem
- **radio:** change the styling in focus visible to a variable
- **radio:** move radioGroup storybook to radio storybook, and fix tsconfig
- **search-field:** update icon size
- **search-field:** inherit focus from text-field
- **search-field:** fix padding to remove style error between button and input
- **select:** remove padding and add variables
- **select:** fix list spacing
- **select:** change to lucide icon
- **select:** fix icon alignment
- **select:** remove hard value
- **select:** add aria-expanded to css to rotate chevron icon
- **select:** change to border
- **select:** update icon size
- **select:** change box-shadow to border
- **select:** change the styling in focus visible to a variable
- **select:** support modals
- **table:** use client
- **table:** update icon size
- **tabs:** new focus state
- **tabs:** fix styles
- **tabs:** responsive
- **tag:** fix stories and css and delete unuse codes
- **tag:** styling + dismissable
- **textarea:** fix handleChange run when element focus
- **textarea:** remove focus animation
- **textarea:** fix focus
- **textarea:** change color
- **text-field:** fix text color in invald error to red color
- **text-field:** fix text color in invald error to red color
- **text-field:** update icon size
- **text-field:** remove focus animation
- **text-field:** fix focus
- **text-field:** update error message docs + support
- **text-field:** change error message when > maxCharacter
- **text-field, textarea:** fix spacing
- **theme:** include tokens again
- **toast:** larger icon
- **toast:** fix button size
- **toast:** update icon size
- **toast:** new focus state
- **ui:** add modal
- **ui:** update theme version

### ⚠️ Breaking Changes

- **modal:** new API
- **card:** new card api

## 1.0.1 (2025-01-27)

### 🚀 Features

- **tag:** create a new component
- **modal:** create a new component
- **modal:** fix styling, delete not used codes and add button component
- **button:** added tertiary and danger themes
- **button:** remove underline from tertiary button
- **button:** add icon and iconSize prop and logic to make icon smaller when size=small
- **button:** add property to change button's icon direction
- **button:** change inline style to class style
- **button:** add buttongroup component, move mobile rules
- ⚠️ **card:** new api, replace button with stretched link
- **card:** support custom link component
- **checkbox:** select all checkbox
- **checkbox:** new wrapper
- **combobox:** create a combobox component with styling
- **date-picker:** new wrapper
- **date-picker:** datepicker renamed daterangepicker in favor of datepicker
- **dropdown:** new component
- **fileupload:** new wrapper
- **flex:** add fluid variant
- **flex:** can now take all props of usual div
- **grid:** add fluid variant
- **grid:** can now take all props of usual div
- **info-banner:** add support for ReactNodes in message
- **info-banner:** dismissable banner
- **link:** add standalone link variant
- **link:** ability to stretch link in parent
- **link:** add icon in prop, add disabeld, and add states in css
- **link-button:** inherits api from button
- **link-button:** add own style, delete unuse codes, and fix the stories
- **link-button:** add full width
- **linkButton:** add icon
- **logo:** new variants and refactor
- **multi-select:** new component
- **radio:** new wrapper
- **searchfield:** props rewrite
- **select:** new wrapper
- **sidebar:** new component
- **table:** new component!
- **table:** add docs + striped option
- **tag:** new component
- **tertiary button:** change padding
- **textArea:** creat textArea component
- **textarea:** new component
- **textarea:** new wrapper
- **text-field:** add ssn validation
- **text-field:** support counter and maxCharacters
- **ui:** export new components

### 🩹 Fixes

- **accordion:** hover on trigger
- **accordion:** update icon size
- **accordion:** color on iOS
- **breadcrumbs:** fix styles + new build
- **button:** add large option to size in storybook and fix styling to tertiary
- **button:** change name large to null in the size option in storybook
- **button:** add icon variant
- **button:** share api with link-button
- **button:** change property name to iconPlacement
- **button:** delete unused inline style and fix merge
- **button:** adjust spacing
- **button:** update icon size
- **button:** fix styling to focus-visible state
- **button:** delete the third box-shadow and fix style to all
- **button:** remove the duplicated code
- **button:** move the styling from global to under button class
- **button:** add variable focus in tokens.css and fix the style with variable
- **button:** add press style on icon btn
- **button:** change the styling in focus visible to a variable
- **button:** correct spacing on icon button
- **button:** remove pixel and rem mixing
- **card:** accessibility fix on icon
- **card:** only animate out arrow
- **card:** correct border-color
- **card:** better column stretching
- **card:** support custom link
- **checkbox:** change styling of description
- **checkbox:** change to luide icon and fix css
- **checkbox:** change back to polyline for checkmark
- **checkbox:** add the animation back again
- **checkbox:** remove unused icons
- **checkbox:** change gap to 0.5rem
- **checkbox:** remove left line when invalid
- **checkbox:** adjust styling
- **checkbox:** select all can be indeterminate
- **checkbox:** change the styling in focus visible to a variable
- **checkbox:** fix state could be null
- **combobox:** add a story autocomplete,fix storybook name,the tag to ComboBox,and style focus state
- **combobox:** fix disabled state style and fix combobox test
- **combobox:** rewrite to new wrapper
- **combobox:** fix props
- **combobox:** button alignment
- **combobox:** focus style fix
- **combobox:** chevron icon will be upp when select is opened
- **combobox:** add aria-expanded to css to rotate chevron icon
- **combobox:** update icon size
- **combobox:** fix style
- **combobox:** support modals
- **combobox:** color on iOS
- **date-picker:** correct colors
- **date-picker:** update icon size
- **date-picker:** change the styling in focus visible to a variable
- **date-picker:** add variable
- **date-picker:** new focus state
- **date-picker:** spacing on timefields
- **date-picker:** support modals
- **date-picker:** color on iOS
- **docs:** change doc structure
- **docs:** accessibility is back
- **docs:** mend broken pages
- **docs:** fix top banner
- **docs:** updates to accommodate storybook
- **docs:** remove "build with"
- **docs:** fix storybook link
- **docs:** new frontpage
- **file-upload:** fix text overflow mobile
- **flex:** better column stretching
- **flex:** fix column wrapping
- **grid:** better column stretching
- **info-banner:** fix dismissable button
- **info-banner:** add div props to info-banner
- **info-banner:** fix classname info clsx
- **info-banner:** update icon size
- **link:** icon stays in size
- **link:** ignore icon prop if link is standalone
- **link:** fix style to center the icon with text
- **link:** fix the wrong style
- **link:** add style underline to hover and active state
- **link:** add visited state to css
- **link:** add url address which leads to link component in docs
- **link:** support custom link component
- **link-button:** fix styling justify-content
- **link-button:** fix padding
- **link-button:** adjust styles + add focus styles
- **link-button:** add variants
- **link-button:** change gap to 0.5rem
- **link-button:** change justify-content to center to make fullwidth look better
- **link-button:** custom link component
- **link-button:** external link icon on target \_blank
- **linkButton:** use button style and fix the story for icon
- **logo:** add support for all `<div>` props, like className
- **logo:** html tag name fix
- **modal:** delete trigger button and fix styling
- **modal:** delete unused styling, and move styling for storybook to storybook
- **modal:** fix styling in css file
- **modal:** delete icon background-color in css file
- **modal:** update modal docs
- **modal:** fix bug of unopenable modal + new docs
- **modal:** fix spacing
- **modal:** adjust max height and overflow
- **multi-select:** style adjustments
- **multi-select:** support for all default key
- **multi-select:** validation
- **multi-select:** support modals
- **multi-select:** null on item fix
- **multi-select:** fix intermittent errors in tag removal
- **radio:** remove padding
- **radio:** change padding on label and helper text
- **radio:** remove invalid line and fix css
- **radio:** change gap between elements to 0.5rem
- **radio:** change the styling in focus visible to a variable
- **search-field:** update icon size
- **search-field:** inherit focus from text-field
- **search-field:** fix padding to remove style error between button and input
- **select:** remove padding and add variables
- **select:** fix list spacing
- **select:** use client
- **select:** change to lucide icon
- **select:** fix icon alignment
- **select:** remove hard value
- **select:** add aria-expanded to css to rotate chevron icon
- **select:** change to border
- **select:** update icon size
- **select:** change box-shadow to border
- **select:** change the styling in focus visible to a variable
- **select:** support modals
- **table:** update icon size
- **tabs:** new focus state
- **tabs:** fix styles
- **tabs:** responsive
- **tag:** styling + dismissable
- **text-field:** fix text color in invald error to red color
- **textarea:** fix handleChange run when element focus
- **textarea:** remove focus animation
- **textarea:** fix focus
- **textarea:** fix to show the error when the characters be more from max
- **textarea:** change color
- **textarea:** change error message at maxCharacters
- **text-field:** remove padding
- **text-field:** fix alignment
- **text-field:** fix error message alignment
- **text-field:** fix text color in invald error to red color
- **text-field:** update icon size
- **text-field:** remove focus animation
- **text-field:** fix focus
- **text-field:** change error message when > maxCharacter
- **text-field, textarea:** fix spacing
- **toast:** larger icon
- **toast:** fix button size + new build
- **toast:** update icon size
- **toast:** new focus state
- **ui:** add modal

### ⚠️ Breaking Changes

- **modal:** new API
- **card:** new card api
- ⚠️ **toast:** new build
- ⚠️ **text-field:** new build
- ⚠️ **textarea:** new build
- ⚠️ **tabs:** new build
- ⚠️ **table:** new build
- ⚠️ **spinner:** new build
- ⚠️ **select:** new build
- ⚠️ **search-field:** new build
- ⚠️ **radio:** new build + replace vite test
- ⚠️ **logo:** new build
- ⚠️ **link-button:** new build
- ⚠️ **link:** new build
- ⚠️ **info-banner:** new build
- ⚠️ **grid:** new build
- ⚠️ **flex:** new build
- ⚠️ **file-upload:** new build
- ⚠️ **date-picker:** new build
- ⚠️ **combobox:** new build
- ⚠️ **checkbox:** new build
- ⚠️ **card:** new build
- ⚠️ **button:** new build
- ⚠️ **breadcrumbs:** new build
- ⚠️ **accordion:** new build

# Changelog

All notable changes to this project will be documented in this file. See [conventional commits](https://www.conventionalcommits.org/) for commit guidelines.

---
