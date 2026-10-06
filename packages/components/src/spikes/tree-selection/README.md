# Spike: tree selection patterns

Hands-on comparison of the ways forward from the tree + combobox investigation. Stories live under **Spikes/Tree selection** in Storybook. Nothing here is exported from the package.

Every story has a `dataset` control: a large organisation (15 regioner → 186 enheter → 1,679 avdelningar) or about 40 public Migrationsverket ärendetyper. Below each example is a note on what it would cost to productise.

| Story                     | What it is                                                                                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Select all per section | Midas `Select` where a whole section can be selected, with a "Välj alla i …" option row (or a checkbox in the section header, `sectionAll: 'header'`). **Three Levels With Pre Filter** adds a level 1 pre-filter in front, so the Select covers three levels |
| A. Search and browse      | Flat multi-select search with the React Aria Autocomplete feel, plus "Bläddra i hela strukturen" opening the tree. **Compact Search Popover** puts the same search behind a button. Also a comparison with Midas `ComboBox` in multi-select mode              |
| B. Tree in a dialog       | Search, tree and a running list of what's selected. B1: search that switches to flat results while typing. B2: the search filters the tree itself. B3 (`container: 'popover'`): the same in a Popover instead of a Modal                                      |
| B4. Cascading menu        | Region → enhet → a multi-select menu, with no tree and no search                                                                                                                                                                                              |
| C. Hybrid                 | The selection as tags, a quick flat search, and "Bläddra…" opening B1's dialog                                                                                                                                                                                |

Common controls: `withScope` (pre-filter), `showCounts` (count pills), `selectedDisplay` (`leaves`, `collapsed` or `grouped` list of what's selected).

## Two datasets (`dataset`)

Every story has a `dataset` control:

- **organisation** (default in Storybook): 15 regioner → 10–15 enheter → 8–10 avdelningar, **1,679 avdelningar** in total, 38 of them disabled. Generated with a fixed seed (`organisation.ts`). The avdelning names repeat under every enhet, like in a real organisation, so only the path tells them apart.
- **ärendetyper**: public Migrationsverket case types, about 40, for detailed behaviour. The tests run on this one.

The building blocks take their data and texts as props. Only the stories and the `TreeDialog` composition read the dataset (`DatasetContext.tsx`), so the parts don't know there's more than one dataset.

**What the large dataset showed:**

- **The tree has to be virtualized.** Filtering on "juridik" took 2.5 s with 387 rows in the DOM. With React Aria's `Virtualizer` + `ListLayout` (the same approach as Midas `ListBox`) it takes 190 ms with 17 rows, and the arrow keys still work through it. `SpikeTree` virtualizes automatically above 200 nodes.
- **Searches use several words.** "juridik malmö" or "skåne juridik" gave zero hits, since `contains` needs one unbroken string. The search now requires every word to appear somewhere in the name or path, in any order. That's the `filter` prop on React Aria's `Autocomplete`, so it's logic, not hand-rolled.
- **Escape cleared the whole selection.** That's React Aria's default for `ListBox`, and it makes sense for a standalone list, but not here, where Escape already means "clear the search" or "close the popover" and the selection is the user's work. The second Escape (after one that cleared the field) removed everything selected. The search list now uses `escapeKeyBehavior='none'`, the same choice Midas `Select` makes, and there's a test for it.
- Select-based step 1 and the cascading menu cope with the size as they are (virtualized Select, about 9 rows in the DOM).

## Summarised selection (`selectedDisplay`)

With the organisation dataset, one region is about 100 avdelningar, so "one tag per selected item" quickly means hundreds of tags. The list of what's selected has a `display` option, controlled by `selectedDisplay` (and `groupLevel`) on every story with a list, plus `CollapsedSelection` and `GroupedSelection` in C:

| `selectedDisplay` | Shows                                                                                                                            | Region Stockholm + 2 single avdelningar |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `leaves`          | One tag per selected item, with its enhet, since names repeat ("Juridik · Mottagningsenhet Umeå")                                | 104 tags                                |
| `collapsed`       | A fully selected branch is one tag at the highest level where that's true ("Region Stockholm · alla 102"), the rest one tag each | 3 tags                                  |
| `grouped`         | One tag per parent at `groupLevel` with a count ("Region Norrbotten · 1 av 96")                                                  | at most 15 (regions) or 186 (enheter)   |

- The logic is pure functions in `summary.ts` with tests. The tags are the same Midas `TagGroup`, so there's nothing new in the UI.
- Counts are against what **can** be selected. Region Stockholm has 3 closed avdelningar, so all 102 selectable ones read as "alla 102", not "102 av 105".
- Removing a summary tag clears everything it stands for, except disabled items. That can be a whole region in one click, which is worth discussing with the designers, for example as an undo toast.
- The heading always shows the real total ("104 valda") whichever mode is used.

## Compact search (A, `CompactSearchPopover`)

The React Aria docs' searchable menu: only a button is visible, and it opens a Midas `Popover` with a React Aria `Dialog` holding the same `SearchPanel` as the inline search. The search field gets focus on open, the popover stays open between picks, the first Escape clears the field, the second closes the popover, and focus returns to the button.

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

### B3. Popover instead of Modal

- The same content as B (search, tree, list, Klar/Avbryt) in a Midas `Popover` anchored to the button, with a React Aria `Dialog` inside. That's the pattern from React Aria's docs. `TreeDialog` takes `container: 'modal' | 'popover'`, so it's a one-to-one comparison.
- **It holds up:** arrowing 25 rows down doesn't close it (the scroll stays inside the popover), Tab cycles inside it, and Esc closes it on the first press.
- **Gap:** Midas `Popover` caps its width at 320px. The spike overrides it to 44rem, so a real version needs a size variant.

### B4. Cascading menu

- Verksamhetsområde → ärendeområde → a multi-select menu with "Välj alla i …" first. Only Midas `MenuTrigger`/`Menu`/`MenuItem`/`MenuPopover` and React Aria's `SubmenuTrigger`, the same as Midas' own SubMenus story. No tree and no search.
- **Mouse:** all three menu levels stay open while picking. **Keyboard:** → opens a submenu, ← goes back, and Space toggles while keeping the menu open. **Enter selects and closes the whole menu** (React Aria's menu behaviour), so a user who presses Enter has to reopen it for every pick.
- Only one branch is visible at a time, and a menu item can only be selected or not, so partly selected groups need the count pill. There's no free-text search.

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

## Reusability of the building blocks

Ranked by how freely each part can be reused when someone needs to add or remove a feature. All of them take their data and texts as props.

| Rank | Part                                                 | Used in                                        | Why                                                                                                                                                   |
| ---- | ---------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | `selection.ts`, `scope.ts`, `useFilteredTree`        | everything with a tree or a pre-filter         | Pure logic, no UI. Works with any container or component                                                                                              |
| 2    | `SearchPanel` (Autocomplete + SearchField + ListBox) | A inline, A compact popover, B1 in a dialog, C | The same part in four containers, unchanged                                                                                                           |
| 3    | `SpikeTree`                                          | A browse, B1, B2, B3, C                        | Tree-only, filtered or scoped. Virtualizes by itself when the data is large                                                                           |
| 4    | `SelectedList`, `CountPill`                          | every pattern                                  | Small and display-only. Can be added to or removed from any layout. `SelectedList` summarises large selections with one prop                          |
| 5    | `ScopeFilter` + `useScope`                           | 1, A, B, B4, C                                 | Narrows the data before it reaches anything else, so it can be put in front of any part                                                               |
| 6    | `CascadingMenu`                                      | B4                                             | Self-contained. Reusable as a whole, but its pieces aren't meant to be split up                                                                       |
| 7    | `useSectionSelectAll`                                | 1                                              | Tied to `Select`. Would move into Select as a feature                                                                                                 |
| 8    | `TreeDialog`                                         | B, and the browse buttons in A and C           | A composition (container + search mode + list + draft), so it's the least reusable. Better documented as a recipe than shipped as one large component |

Adding or removing a feature is a matter of combining parts, not configuring one big component: a pre-filter is `ScopeFilter` in front, counts are a prop, the container is `container: 'modal' | 'popover'` or just a different parent, and the search mode is a different body (flat search, filtered tree, or tree only).

## Usability

✅ = verified in the browser or by tests, 🔸 = estimated from how the UI works, ❓ = not tested.

### Clicks per task (mouse) 🔸

Five typical tasks on the organisation data.

| Task                             | 1 (Select)                                                   | 1 + pre-filter (3 levels) | A inline search | B1/B3 dialog | B2 filtered tree | B4 menu                             | C hybrid       |
| -------------------------------- | ------------------------------------------------------------ | ------------------------- | --------------- | ------------ | ---------------- | ----------------------------------- | -------------- |
| One avdelning I know the name of | 2 + scrolling (typeahead only matches the start of the name) | 4–5                       | **1** + typing  | 3 + typing   | 3 + typing       | 4, and you need to know where it is | **1** + typing |
| A whole enhet                    | **2**                                                        | 4–5                       | 4 (via Bläddra) | 4            | 3 + typing       | 4                                   | 4              |
| A whole region                   | not possible (2 levels)                                      | **4–5**                   | 3               | **3**        | 3 + typing       | **not possible** ⚠️                 | 3              |
| An enhet minus 2                 | **4**                                                        | 6–7                       | 6               | 6            | 5 + typing       | 6                                   | 6              |
| Review and remove                | tags in the Select                                           | the summarised list       | the list        | the list     | the list         | the list                            | the list       |

B4 only has "Välj alla i …" in the last submenu, so a whole region can't be selected there. It would need the same item at every level.

### Keyboard

|                      | Works ✅                                                                 | Problem                                                                                                |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1. Select            | ↓ to the section row, Space. The row is reachable with the arrow keys    | Opening focuses the first _selected_ option, so Space can deselect by mistake ✅                       |
| 1b. Header checkbox  | —                                                                        | Only the first section's checkbox can be reached, and focus gets stuck there ✅. Don't use             |
| A/C search           | Focus stays in the field, ↓ and Enter, multi-word search ✅              | Ctrl+A selects the text, not the hits ✅                                                               |
| Tree (A, B, C)       | ↑↓ ←→ and Space, also virtualized ✅                                     | Many Tab stops in the dialog (pre-filter, search, tree, list, buttons) 🔸                              |
| B1                   |                                                                          | Search to tree is a mode switch, and the tree starts collapsed again, so the user loses their place ✅ |
| B3 / compact popover | Tab stays inside, Esc clears then closes, focus returns to the button ✅ |                                                                                                        |
| B4 menu              | → in, ← back, Space toggles and keeps the menu open ✅                   | Enter selects and closes the whole menu, so an Enter user reopens it for every pick ✅                 |
| Escape               | No longer clears the selection in the search list ✅                     |                                                                                                        |

### Accessibility

**Verified ✅**

- Section rows are real options: `aria-selected` when everything is selected, and the partial state is in the accessible name ("Välj alla i Familj, 3 av 4 valda").
- The tree uses real checkboxes with an indeterminate state. Count pills read as "5 valda", not "5".
- Focus rings on tree rows, forced-colors outlines on the pills and the tree, and focus returns from the popover.

**Known problems**

- ⚠️ B2 shows the wrong state for parents while the filter is active: "Arbete" looks fully selected when only the visible hit is. Not fixed yet.
- ⚠️ 1b puts a checkbox in a listbox, outside the ARIA pattern.
- A menu item can't show "partly selected", so B4 relies on the count pill.
- `--midas-text-placeholder` has too little contrast (1.95:1), so it isn't used here.

**Not tested ❓**

- Screen readers (VoiceOver, NVDA). The biggest gap.
- 400% zoom and reflow (only 375px has been tried), and forced colors beyond the pills and the tree.
- How "Region Skåne · alla 88" and removing a summary tag are announced.

### Ease of understanding 🔸

| Pattern              | Mental model                                                    | Risk                                                                                     |
| -------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1 and 1 + pre-filter | Familiar: a Select with groups. "Välj alla i …" explains itself | The pre-filter is one more field, and it can hide hits ("no matches" without saying why) |
| A search             | Familiar: search and pick, with the path as context             | Good when the name is known, not for "everything under X"                                |
| B tree               | Familiar from file explorers                                    | Expand and select are two click targets on the same row                                  |
| B1                   | Two modes in one field (search is flat, empty shows the tree)   | Confusing: a hit "disappears" from the tree when the search is cleared                   |
| B4 menu              | Menus mean navigation to most people, not multi-select          | Closing on Enter feels like the choice was lost                                          |
| C                    | Three ways in                                                   | The most to explain, though each way is familiar on its own                              |
| Summarised list      | "alla 88" is clear                                              | Removing a summary tag clears a whole region, so it needs undo or a confirmation         |

The dialog works on a draft (Klar and Avbryt), while the compact search and the menu apply directly. That should be the same everywhere.

### Before a usability test

- Fix the B2 parent state, add region-level "Välj alla" to B4, and decide between a draft and applying directly.
- Measure clicks and keystrokes with scripted tasks instead of estimating.
- Do a short test with real users and a screen reader pass.

On paper, **1 + pre-filter** is strongest for up to three levels (familiar, few clicks, all React Aria), and **C** for deeper or search-driven cases.

## Tests

`npx nx test components -- src/spikes/tree-selection` runs 44 tests: the cascade helpers, section select-all (keyboard, sentinels never stored, combined with global select-all, the header checkbox variant with counts), the Autocomplete search keeping focus, cascade from the top level, indeterminate branches, Avbryt vs Klar, a nested match being revealed, C's results only showing while there's a query, the count pills, the pre-filter (scope logic, narrowing each pattern, keeping selections outside the scope), the summarised list, the three-level story and the popover and menu variants.
