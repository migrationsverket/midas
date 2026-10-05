# Spike: tree selection patterns

Hands-on comparison of the ways forward from the tree + combobox investigation. Stories live under **Spikes/Tree selection** in Storybook. Nothing here is exported from the package.

The dummy data (`data.ts`) is public Migrationsverket case types: verksamhetsområde → ärendeområde → ärendetyp, about 40 ärendetyper, two of them disabled.

| Story                     | What it is                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Select all per section | The two-level case: Midas `Select` where a whole section can be selected, either with a "Välj alla i …" option row or with a checkbox in the section header (`sectionAll: 'header'`) |
| A. Search and browse      | Flat multi-select search with the React Aria Autocomplete feel, plus "Bläddra i hela strukturen" opening the tree. Also a comparison with Midas `ComboBox` in multi-select mode      |
| B. Tree in a dialog       | Search, tree and a running list of what's selected in a `Modal`. B1: Autocomplete search that switches to flat results while typing. B2: the search filters the tree itself          |
| C. Hybrid                 | The selection as tags, a quick flat search, and "Bläddra…" opening B1's dialog                                                                                                       |

## Pre-filter (`withScope`)

In real use, people rarely search all ärendetyper freely. They usually narrow by verksamhetsområde (level 1) and/or ärendeområde (level 2) first. Every pattern has a `WithScopeFilter` story (B has one per variant), or toggle `withScope` in the controls.

**How it's built, and how much of it is real:**

- `scope.ts` is ~50 lines of pure functions with no React: `applyScope(nodes, scope)` returns the narrowed tree, `getCategoryOptions` the level 2 options for the chosen level 1, and `pruneCategories` drops level 2 choices that no longer fit. It has 7 unit tests.
- `ScopeFilter.tsx` is **two existing Midas `Select`s** (Verksamhetsområde → Ärendeområde, the level 2 options grouped by level 1 with `ListBoxSection`). There are no new components, styling or keyboard handling. `useScope()` holds the state and returns `scopedNodes`.
- Everything downstream just takes data as props: `SearchPanel` takes `leaves`, `SpikeTree` and `TreeDialog` take `nodes`. Scoping is a matter of passing `flattenLeaves(scopedNodes)` / `scopedNodes`, which is the composable part. Productised, the scope would most likely come from the consumer's own filter UI or URL state, not from a built-in component.
- Midas `Tag` has no selected style, so filter chips would need new styling. `ToggleButton` is styled as an icon button. Two Selects is the most honest option today.

**Findings:**

- **Selections outside the scope are kept** in every pattern. `SearchPanel` and `SpikeTree` merge explicitly instead of relying on React Aria to keep keys that aren't in the collection. That's covered by tests.
- **But Midas `Select` hides them.** In step 1 with the scope set to Skydd, a preselected Visum is still in the value, but it disappears from the tags and the "N valda" count, because Select only shows selected items that are in the list. The user can't see that something outside the filter is selected. A/B/C don't have the problem, since "Valda ärendetyper" is a separate list showing everything. That's an argument for a separate selection list whenever there's a pre-filter.
- When the scope leaves a single verksamhetsområde, the tree still starts collapsed. Expanding the only root automatically would be a one-line change, but it's a design decision.

## Findings

### 1. Select all per section

- **Works:** the row is a real option, so it's reachable with the arrow keys and announced as an option. It's `aria-selected` only while the whole section is selected, and the partial state is in its accessible name ("Välj alla i Familj, 3 av 4 valda"). Disabled ärendetyper are left alone, and it combines with the existing global "Välj alla".
- **Blocker for productising:** Select treats the row as a selected item. With all of Familj selected, the trigger says one more than the real count, and `showTags` shows a "Välj alla i Familj" tag. The value we store is correct. `Select` would need to know about section rows (e.g. a prop) so `MultiSelectValue` and `SelectTags` can skip them.
- When the Select opens, focus goes to the first _selected_ option, not the first option. That's React Aria behaviour, but it means Space on open can deselect something unexpectedly.
- The story turns off virtualization (`listBoxProps={{ virtualized: false }}`) so every row exists in the DOM for the tests. That's not needed in real use.

### 1b. Checkbox in the section header

- **Mouse works:** clicking the section name selects or clears the section, and the list stays open. The trigger count is right, since there are no extra option rows.
- **Keyboard doesn't:** the arrow keys only move between options and never reach the header. Tab from the list goes to the **first** section's checkbox (Arbete) and stays there, so the other sections' checkboxes can't be reached with the keyboard at all. Fixing that would mean hand-rolled focus handling inside the Select popover.
- A checkbox inside a listbox is also outside the listbox pattern (a listbox should only contain options and groups), so screen readers are likely to announce it oddly. That isn't tested.
- **Conclusion:** it looks like the Figma sketch, but it's a mouse-only feature. The option row is the accessible version of the same idea.

### Count pills (`showCounts`)

- An optional pill with the number selected: per section header (1), per branch in the tree, on the list heading, and on the dialog button (A, B, C). Each has a `…WithCounts` story, or toggle `showCounts` in the controls.
- Midas has no counter pill. `Badge` is a notification dot (0.625rem, meant to sit on an icon), so the spike has its own `CountPill`. Screen readers hear "5 valda", not just "5". On a primary button the pill is inverted, otherwise it disappears into the button.

### The Autocomplete feel (A, B1, C)

- **Works with existing Midas components, no changes:** RAC `Autocomplete` around Midas `SearchField` and Midas `ListBox`. Focus stays in the field while the arrow keys move through the results, as in React Aria's own examples.
- Matching on name _and_ path means "skydd" finds everything under Skydd, which is useful.
- **Gap:** Midas `ListBoxItem` has no layout for a description, so the name and the path ran together on one line. The spike stacks them with its own wrapper (`.option`). A real version would add description support to `ListBoxItem`.
- `Autocomplete` can't drive a `Tree` (confirmed earlier), so B1 shows flat results while typing and the tree when the query is empty.

### A. Midas ComboBox in multi-select mode

- **Works at runtime:** React Aria 1.21's `ComboBox` supports `selectionMode='multiple'`, and Midas `ComboBox` passes it through, with checkboxes and several selected.
- **But it's not typed:** Midas `ComboBoxProps` doesn't expose React Aria's selection mode generic, so the story has to pass the props untyped. The field also doesn't show what's selected, so a separate list is needed.

### The tree (A, B, C)

- **Midas has no Tree component.** `SpikeTree` is about 160 lines: React Aria `Tree` + Midas `Checkbox` (it fills Tree's `selection` slot directly) + cascade selection in data (`selection.ts`, no React).
- **Gotcha:** React Aria caches rendered tree items when using `items` + a render function. Without `dependencies={[selected]}` on `Tree` and the nested `Collection`, the partial (indeterminate) state of a branch never updates. There's a test for it.
- Deep trees in a narrow modal (375px) run out of room fast. The spike halves the indentation below 600px, but long ärendetyper still wrap.
- B2's filter auto-expands the branches leading to a match, and the user can still collapse them afterwards without them snapping back open.

### B. Dialog

- `main` has no `footer` prop on `Modal` (#1377 isn't merged), so Klar/Avbryt sit in the body. With a long tree they'd scroll away, which the sticky footer would solve.
- Avbryt throws away a draft. Klar commits it.

### Repo things noticed along the way

- `nx lint components` passed while running ESLint directly on the spike folder found three `jsx-a11y/no-autofocus` errors. Worth checking whether the Nx lint target lints every file.
- Every `*.stories.tsx` gets a `.d.ts` in the published package (`tsconfig.lib.json` only excludes specs). The spikes would add 14 more if this branch were merged.
- Visual regression: `Card`'s `LegacyWithImage`/`LegacyWithContainedImage` fail locally (87px expected, 290px received). It looks like the baselines were taken before the image loaded. That's unrelated to the spikes.

## Comparison checklist

To fill in after trying the stories. Keyboard behaviour is partly covered by the tests. Screen readers haven't been tested.

|                                   | 1. Section all                                                            | A                                                 | B1                                            | B2                 | C              |
| --------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------- | --------------------------------------------- | ------------------ | -------------- |
| Keyboard only (in, select, out)   |                                                                           |                                                   |                                               |                    |                |
| VoiceOver / NVDA                  |                                                                           |                                                   |                                               |                    |                |
| Select a whole branch             | ✅ section                                                                | via the dialog                                    | ✅                                            | ✅                 | via the dialog |
| Matches always visible            | –                                                                         | ✅ flat                                           | ✅ flat                                       | ✅ expanded        | ✅ flat        |
| Hierarchy visible while searching | ✅ sections                                                               | path only                                         | path only                                     | ✅                 | path only      |
| 375px                             |                                                                           |                                                   |                                               |                    |                |
| What Midas would need             | Select support for section rows (header variant: not keyboard-accessible) | `ListBoxItem` description, typed multi `ComboBox` | a `Tree` component, `ListBoxItem` description | a `Tree` component | all of A and B |

## Tests

`npx nx test components -- src/spikes/tree-selection` runs 31 tests: the cascade helpers, section select-all (keyboard, sentinels never stored, combined with global select-all, the header checkbox variant with counts), the Autocomplete search keeping focus, cascade from the top level, indeterminate branches, Avbryt vs Klar, a nested match being revealed, C's results only showing while there's a query, the count pills, and the pre-filter (scope logic, narrowing each pattern, keeping selections outside the scope).
