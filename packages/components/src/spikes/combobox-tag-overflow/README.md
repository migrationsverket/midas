# Spike: ComboBox tag overflow

What should a multi-select `ComboBox` do when the selected tags don't fit on one row? This spike compares three versions in the same component. The stories are under **Spikes/ComboBox tag overflow** in Storybook. **1. Variants → Side By Side** shows all three with the same selection; use the `width` and `selectedCount` controls to compare them.

The versions are switched with a `tagOverflow` prop on `ComboBox` that only exists on this branch: `'wrap'` (the default), `'scroll'` or `'collapse'`. Nothing else here is exported from the package.

## 1. Wrap (`tagOverflow='wrap'`)

What's on `feat/combobox` now. The tags stack on as many rows as they need, and the input follows the last tag on its row. It only drops to a row of its own when less than `8ch` is left. After three rows the field scrolls vertically.

- **Good:** everything selected is visible and can be removed with one click. Nothing new to learn.
- **Bad:** the field grows, so the layout below it moves while you select.

## 2. Scroll (`tagOverflow='scroll'`)

One row, always the same height as an empty field. The tags and the input scroll sideways, with no scrollbar.

- **Good:** the layout never moves. Each tag is still a real, removable tag.
- **Bad:** with no scrollbar, nothing shows that there's more. Tags cut off at the edges are the only hint. Scrolling sideways with a mouse wheel needs Shift; trackpads and touch scroll naturally.
- The field scrolls to the input when the input gets focus and after each pick, and to a tag when a tag gets focus (arrow keys in the tag list).

## 3. Collapse (`tagOverflow='collapse'`)

One row with the tags that fit and a "+n" chip for the rest. The input keeps at least `8ch` at the end of the row. Resizing the field shows more or fewer tags.

- **Good:** the layout never moves, and it's clear how many are selected.
- **Bad:** the hidden tags can't be seen or removed from the field, only by deselecting them in the list. Backspace in an empty input removes the last selected item, which is one of the hidden ones, so "+n" goes down without any visible tag going away.
- Screen readers hear the visible tags in the tag list, then "n more selected" ("n fler valda" in Swedish, `moreSelected` in the translations).
- The tags are measured before the browser paints: all of them are rendered, the ones that fit are counted, then only those are rendered. A `ResizeObserver` on the field measures again when its width changes.
- The input keeps its `8ch` even while it's empty, so one tag fewer often fits than there seems to be room for. Shrinking the input until it gets focus would show more tags, but then the row has to be measured again on focus.

## What the spike found

- **React Aria renders the tags in a later pass than the component around them.** An effect that runs after a pick doesn't see the new tag yet. Both `scroll` (keeping the input in view) and `collapse` (measuring) wait for the tags with a `MutationObserver` on the row.
- **The row's element is passed down through state, not a ref.** `ComboBoxTags`' effects run before React attaches the parent's ref, so with a ref they saw `null` on mount and never started their observers.
- **Shift+Tab from the input reaches the focused tag's Remove button before the tag.** That's React Aria's tab order for tags (the same in their docs), so it's the same in all three versions.
- `scroll` scrolls only the row, never the page, when a tag or the input gets focus. Scrolling the page would close the list, since React Aria closes a ComboBox's popover when the page scrolls.

## What it would take to ship one

- **wrap:** nothing more, it's on `feat/combobox`.
- **scroll:** small. A fade at the edges that have more would be the main addition, since nothing shows there's more. Needs a check with VoiceOver on iOS, where scrolling a row of tags sideways may not be obvious.
- **collapse:** the most work and the most open questions. What should "+n" do: nothing, open the list, or expand the row while the field has focus (like MUI's `limitTags`)? And Backspace removing a hidden tag needs either a different behaviour or an announcement.

The tests are in `TagOverflow.spec.tsx`.
