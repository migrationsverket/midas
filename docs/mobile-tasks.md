# Mobile Readiness — Task Breakdown

Dry-run issue list for `docs/mobile-first-plan.md`. Each task is scoped to be a single PR. Not prioritised yet — see the work order in the plan doc for sequencing.

---

## Group 1 — Hover deviations: real gaps (no touch feedback at all)

These components use CSS `:hover` with **no** `data-hovered` counterpart on the affected element. Touch users get zero visual feedback.

**Why this matters:** React Aria's `useHover` hook explicitly filters out emulated mouse events fired by touch devices — `:hover` in CSS is simply unreliable on touch. The `data-hovered` attribute is only set when the pointer device genuinely supports hover, making it the only safe hook for hover styles. [React Aria docs — useHover](https://react-spectrum.adobe.com/react-aria/useHover.html)

---

### [M-01] Fix ListBox item hover — missing `data-hovered`

**File:** `packages/components/src/list-box/ListBox.module.css` L74, L87
**Impact:** Touch users get no tap feedback on list items in Select, ComboBox, and standalone ListBox.

Replace:
```css
/* L74 */
&:hover:not([data-disabled])
/* L87 */
&:hover:not([data-disabled])  /* when selected */
```
With `[data-hovered]` equivalents. Wrap the removed `:hover` rules in `@media (hover: hover)` if keeping them for mouse-only fallback, or remove entirely since RAC handles hover via `data-hovered`.

---

### [M-02] Fix DateField segment hover — missing `data-hovered`

**File:** `packages/components/src/date-field/DateField.module.css` L42
**Impact:** Touch users get no feedback when tapping individual date segments.

DateField is unique — segments are RAC's `DateSegment` which does support `data-hovered`. Replace:
```css
.dateField:not([data-disabled], [data-readonly]) & :hover
```
with:
```css
.dateField:not([data-disabled], [data-readonly]) & [data-hovered]
```

---

### [M-03] Fix Calendar nav button hover — missing `data-hovered`

**File:** `packages/components/src/calendar/Calendar.module.css` L104
**Impact:** Previous/Next month buttons have no tap feedback. Day cells are already on `data-hovered` (L133) — only the header nav is broken.

The nav buttons are plain `<button>` elements, not RAC components — wrap the hover rule in `@media (hover: hover)` instead and add a `data-hovered` alternative if the buttons get RAC-ified, or use `[data-focused]` / `:active` as a touch substitute.

---

### [M-04] Fix Table sort icon — hidden functionality on touch (CRITICAL)

**File:** `packages/components/src/table/Table.module.css` L46
**Impact:** Sort icon only appears on `:hover`. Touch users cannot discover that columns are sortable — this is a functionality gap, not just missing feedback.

```css
.column[data-allows-sorting] &:hover .sortIconNeutral { opacity: 0.5 }
```

Fix: show `sortIconNeutral` at a low opacity (e.g. `0.3`) always, increase to `0.5` on `data-hovered`. Touch users can see the column is sortable even without hovering. Wrap the `:hover` rule in `@media (hover: hover)`.

---

### [M-05] Fix Select trigger hover — missing `data-hovered`

**File:** `packages/components/src/select/Select.module.css` L46
**Impact:** Select trigger button has no tap feedback.

`.trigger &:hover` → `.trigger &[data-hovered]`. The trigger is a Midas `Button` wrapped in RAC's `SelectValue`, which should provide `data-hovered` correctly.

Also check L155 (clear button `:hover`) and L216/L233 (selectAll `:hover`) — these need the same treatment.

---

### [M-06] Fix Card link hover — missing `data-hovered`

**File:** `packages/components/src/card/Card.module.css` L16
**Impact:** Clickable card highlight never appears on touch.

```css
&:has(.cardLink:hover)
```

RAC's `Link` exposes `data-hovered` on itself. If `.cardLink` is a RAC `Link`, replace with:
```css
&:has(.cardLink[data-hovered])
```
If it's a plain `<a>`, wrap in `@media (hover: hover)` and add an `:active` fallback for touch.

---

### [M-07] Fix Checkbox compound-state hover — partial `data-hovered` coverage

**File:** `packages/components/src/checkbox/Checkbox.module.css` L83, L84, L101
**Impact:** Base checkbox hover is correctly on `data-hovered` (L68), but selected+hover, indeterminate+hover, and invalid+hover states still use `:hover`. Touch users won't see hover feedback in those compound states.

Replace:
- `&[data-selected]:hover .checkboxInner` → `&[data-selected][data-hovered] .checkboxInner`
- `&[data-indeterminate]:hover .checkboxInner` → `&[data-indeterminate][data-hovered] .checkboxInner`
- `&[data-invalid]:hover .checkboxInner` → `&[data-invalid][data-hovered] .checkboxInner`

---

## Group 2 — Hover deviations: redundant `:hover` cleanup

These components already have `data-hovered` — the `:hover` rules are redundant dead weight and may cause sticky hover states on touch. Lower priority than group 1.

---

### [M-08] Clean up LinkButton redundant `:hover` rules

**File:** `packages/components/src/link-button/LinkButton.module.css` L22, L70, L108, L130, L149
**Impact:** Each variant has both `[data-hovered]` (correct) and `:hover` (redundant) — on touch, `:hover` can fire briefly and cause visual glitches. `data-hovered` already covers all cases.

Remove the `:hover` selectors or move them under `@media (hover: hover)` to make them mouse-only.

---

### [M-09] Clean up Link redundant `:hover` rules

**File:** `packages/components/src/link/Link.module.css` L12, L62
**Impact:** Same situation as LinkButton — `data-hovered` is present and correct, `:hover` is redundant.

---

## Group 3 — Missing `data-pressed` (touch feedback)

RAC sets `data-pressed` during pointer-down. Without it, components feel unresponsive on mobile — there's a noticeable gap between tap and visual change.

**Art of the possible:** React Aria's `usePress` handles press interactions across mouse, touch, keyboard, and screen readers uniformly. It fires `onPressStart` on pointer-down and `onPressEnd` on lift or drag-off, and sets `data-pressed` throughout. Crucially it also handles the awkward case where a user starts a press and drags off the element — something raw `onClick` misses entirely on touch. [React Aria docs — usePress](https://react-spectrum.adobe.com/react-aria/usePress.html)

---

### [M-10] Add `data-pressed` state to Select trigger

**File:** `packages/components/src/select/Select.module.css`
**What to add:** A pressed visual on the trigger button — typically a slightly darker background than hover, similar to how `Button` handles it.

```css
.trigger &[data-pressed] {
  background-color: var(--midas-field-01-hover); /* or a dedicated pressed token */
}
```

---

### [M-11] Add `data-pressed` state to ListBox items

**File:** `packages/components/src/list-box/ListBox.module.css`
**What to add:** Pressed visual on list items. RAC's `ListBoxItem` sets `data-pressed` on pointer-down.

```css
&[data-pressed]:not([data-disabled]) {
  background-color: var(--midas-layer-01-hover);
}
```

---

### [M-12] Add `data-pressed` state to Calendar day cells

**File:** `packages/components/src/calendar/Calendar.module.css`
**What to add:** Pressed visual on tappable day cells. Most critical calendar interaction on mobile.

---

## Group 4 — Touch bug fix

### [M-13] Fix ComboBox `onMouseUp` — doesn't fire on touch

**File:** `packages/components/src/combobox/ComboBox.tsx` L56–L60, L81
**Impact:** The handler selects all input text when the user re-taps a pre-filled ComboBox, making it easy to replace the value. On touch, `onMouseUp` never fires — the UX feature silently doesn't work.

Replace `onMouseUp` with `onPointerUp` (fires for both mouse and touch pointer events). The Pointer Events spec unifies mouse, touch, and stylus with a `pointerType` property to distinguish them if needed — this is the modern standard React Aria itself is built on. [MDN — Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

```tsx
const handlePointerUp: React.PointerEventHandler<HTMLInputElement> = event => {
  if (event.currentTarget.value) {
    inputRef.current?.select()
  }
}
// ...
<Input onPointerUp={handlePointerUp} ... />
```

---

## Group 5 — Modal mobile adaptation

### [M-14] Modal: full-screen on XS breakpoint

**File:** `packages/components/src/modal/Dialog.module.css`
**Current:** `max-width: 75%` + `min-width: 300px` can produce a 225px-wide modal on a 300px screen.
**Fix:** Add XS breakpoint styles:

```css
@media (max-width: 479px) {
  .modal {
    max-width: 100%;
    min-width: 0;
    width: 100%;
    max-height: 100dvh;
    margin: 0;
    border-radius: 0;
  }
}
```

Design decision needed: full-screen vs bottom-sheet. This task assumes full-screen as a safe default.

**Art of the possible:** React Spectrum's `DialogTrigger` has a `type` prop with `"fullscreen"`, `"fullscreenTakeover"`, and `"tray"` (bottom-sheet) options, and a separate `mobileType` prop to render a different variant on small screens — e.g. a popover on desktop becomes a tray on mobile automatically. This is the gold standard pattern. A `mobileType` prop on Midas's `Modal`/`DialogTrigger` is the natural long-term direction; the XS CSS fix in this task is the near-term floor. [React Spectrum — DialogTrigger](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html)

---

### [M-15] Modal: replace `90vh` with `90dvh`

**File:** `packages/components/src/modal/Dialog.module.css` L6
**Current:** `max-height: 90vh` — on iOS, `100vh` includes browser chrome, so `90vh` can overflow or get clipped when the URL bar is visible.
**Fix:**
```css
max-height: min(90dvh, 90vh); /* dvh fallback for older browsers */
```
The overlay already uses `--visual-viewport-height` (RAC's runtime variable) which handles this correctly for the backdrop. The modal itself needs to follow suit.

---

## Group 6 — Dropdown height

### [M-16] Cap ListBox/Select dropdown height relative to viewport

**File:** `packages/components/src/list-box/ListBox.module.css` L5
**Current:** `max-height: 295px` — on a short phone in landscape this can exceed available space below/above the trigger.
**Fix:**
```css
max-height: min(295px, 50vh);
```
`50vh` gives a reasonable upper bound on any screen orientation. Consider `50dvh` for dynamic viewport accuracy.

**Note:** React Spectrum goes further — their overlay positioning (`useOverlayPosition`) dynamically calculates available space above and below the trigger at runtime and constrains the listbox accordingly, so it never clips regardless of scroll position. Our CSS-only approach is simpler and good enough for now, but if edge cases come up (partially scrolled page, dropdown near bottom on short screen) the RAC `useOverlayPosition` hook is the right tool. [React Aria — useOverlayPosition](https://react-spectrum.adobe.com/react-aria/useOverlayPosition.html)

---

## Group 7 — Tap targets

### [M-17] Audit and fix Calendar day cell tap targets

**File:** `packages/components/src/calendar/Calendar.module.css` L30–L31
**Current:** Cells are `var(--midas-size-control-md)` (~40px). WCAG 2.5.8 requires 24×24px minimum; 44×44px is the practical guideline for comfortable touch.
**Options:**
- Increase token value (affects all `control-md` usage — check impact)
- Add a `min-width`/`min-height: 44px` override scoped to calendar cells only
- At XS breakpoint, reduce the 7-column grid to fit 44px cells (requires layout rethink)

---

### [M-18] Audit Tag dismiss button tap target

**File:** `packages/components/src/tag/Tag.module.css`
**Current:** Dismiss button is icon-sized with `xsmall` padding. Likely under 24×24px.
**Fix:** Ensure minimum 24×24px hit area. Can use `padding` increase or a transparent `::before` pseudo-element to expand the tap zone without changing visual size.

---

### [M-19] Audit icon-only Button tap targets in context

**File:** `packages/components/src/button/` (Button with `variant='icon'`)
**Issue:** Icon buttons rely on surrounding padding for tap target size. The button itself may be 16–24px of icon with varying context padding. There is no hard minimum enforced by the component.
**Fix:** Add a `min-width` / `min-height` of 44px (or 24px as hard floor) to the icon variant, regardless of the icon size inside it. Document the constraint in component props.

---

## Group 8 — Testing infrastructure

### [M-20] Add mobile viewports to Playwright config

**File:** `apps/next/playwright.config.ts`
**What to add:**
```ts
{ name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
{ name: 'mobile-safari', use: { ...devices['iPhone 12'] } },
```
Key scenarios to cover: form submission with virtual keyboard, modal open/close on touch, date selection, ComboBox search.

---

### [M-21] Add mobile viewport snapshots to Chromatic

**File:** Storybook / Chromatic config
**What to add:** 375px and 768px as additional story viewports for visual regression snapshots. Currently only default (desktop) viewport is captured.

---

### [M-22] Add mobile viewport pass to a11y test suite

**File:** Storybook a11y configuration / `nx a11y storybook` setup
**What to add:** Run the existing axe suite at 320px viewport. Currently tests run at desktop width only. WCAG 1.4.10 (Reflow) failures only appear at 320px.

---

## Group 9 — Documentation and consumer guidance

### [M-23] Document and demonstrate `autocomplete` and `inputmode` on form components

**Components:** TextField, NumberField, SearchField, ComboBox
**WCAG:** 1.3.5 Identify Input Purpose

**`autocomplete`**
Add a story per component showing correct `autocomplete` attribute usage (e.g. `autoComplete="email"`, `autoComplete="given-name"`). The attribute passes through to the native `<input>` via RAC's context mechanism. [MDN — autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values)

**`inputmode` — also missing, also easy**
`inputmode` controls which virtual keyboard opens on mobile without changing input validation semantics. Unlike `type="number"`, `inputmode="numeric"` opens a numpad while still allowing the consumer to control the actual value format. Common values:

| `inputmode` | Opens | Use for |
|---|---|---|
| `numeric` | Number pad (0–9) | PINs, postal codes, ID numbers |
| `decimal` | Number pad with decimal | Amounts, quantities |
| `email` | Email keyboard (@ prominent) | Email fields |
| `tel` | Phone keyboard | Phone numbers |
| `search` | Search keyboard (go/search button) | SearchField |
| `url` | URL keyboard (/ and .com) | URL fields |

`inputmode` passes through to the native `<input>` via RAC the same way `autocomplete` does — no implementation work, documentation only. Add examples alongside `autocomplete` in the same stories. [MDN — inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)

---

### [M-24] Document orientation constraint in contribution guidelines

**WCAG 1.3.4**
**What to add:** A note in the contribution guide that components must never lock orientation via CSS (`orientation: portrait/landscape` media queries that hide or break content). This is a hard legal constraint under DOS-lagen.

---

### [M-25] Validate focus ring formula against WCAG 2.4.11

**WCAG 2.4.11 (AA, WCAG 2.2)**
**What to check:** The current `box-shadow`-based focus rings. The criterion requires: focus indicator area ≥ perimeter × 2px, at 3:1 contrast. Measure a few representative components (Button, TextField, Checkbox) and verify compliance. Document result.

---

### [M-26] Validate form input font sizes for iOS auto-zoom

**WCAG 1.4.4 / iOS Safari quirk**
**Status:** Initial audit done — standard inputs are all ≥ 16px. Badge text is 10px (worst case) but is not an input.
**Remaining:** Confirm ComboBox input, SearchField input, and DateField segments all render at ≥ 16px in all size variants (`large` and `medium`). Document findings. Add note to `medium` size docs warning consumers that reducing font-size further will trigger iOS auto-zoom.

---

## Group 10 — Manual device testing

Automated tests and emulation don't catch everything. These tasks require a real device or at minimum a browser dev tools mobile mode with touch simulation enabled. Each task has a defined checklist so it's clear when it's done.

---

### [M-30] iOS Safari — overlays and fixed positioning

**Device:** iPhone (any recent model), Safari
**Why separate:** iOS Safari has unique `position: fixed` behaviour when the virtual keyboard opens, and `100vh` is unreliable. Emulation does not reproduce this.

Checklist:
- [ ] Modal opens and is fully visible with virtual keyboard open
- [ ] Modal closes correctly on tap outside / dismiss button
- [ ] Modal dismiss button and header are not hidden behind keyboard
- [ ] Select dropdown is not clipped by keyboard
- [ ] ComboBox dropdown is not clipped when typing in the field
- [ ] Sidebar (CollapsePanel) is not affected by keyboard open/close
- [ ] No `position: fixed` element drifts or jumps when keyboard opens/closes
- [ ] Overlay backdrop covers full screen in both portrait and landscape

---

### [M-31] iOS Safari — form inputs and autofill

**Device:** iPhone, Safari
**Why separate:** iOS auto-zoom on `font-size < 16px` and autofill UI are Safari-specific. Also tests the `autocomplete` passthrough in practice.

Checklist:
- [ ] TextField does not trigger auto-zoom when tapped (font-size ≥ 16px)
- [ ] TextField `medium` size variant does not trigger auto-zoom
- [ ] ComboBox input does not trigger auto-zoom
- [ ] SearchField does not trigger auto-zoom
- [ ] Autofill suggestions appear correctly on TextField with `autoComplete` set
- [ ] Autofill does not visually break the input (yellow background overlay)
- [ ] DateField segments are individually tappable and open correct keyboard
- [ ] Number inputs open numeric keyboard

---

### [M-32] iOS Safari — DatePicker and Calendar

**Device:** iPhone, Safari
**Why separate:** Calendar is the most tap-intensive component and has the most mobile concerns (tap targets, orientation, pressed feedback).

Checklist:
- [ ] Calendar renders correctly at 320px width (portrait)
- [ ] Calendar renders correctly in landscape without overflow
- [ ] Previous/Next month buttons are tappable with a comfortable hit area
- [ ] Day cells are tappable without mis-tapping adjacent cells
- [ ] Selected date is visually clear
- [ ] DatePicker popover does not overlap the input trigger
- [ ] DatePicker popover is fully visible when rendered above the input (short page)
- [ ] DatePicker closes correctly on tap outside

---

### [M-33] Android Chrome — core interactions

**Device:** Android phone, Chrome
**Why separate:** Scroll behaviour, bottom-sheet patterns, and TalkBack differ from iOS.

Checklist:
- [ ] Modal opens and closes correctly
- [ ] Select dropdown scrolls smoothly within its container
- [ ] ComboBox search input opens correct keyboard type
- [ ] Tap feedback (pressed states) is perceptible on Button, Checkbox, Select
- [ ] Toast appears correctly and does not overlap interactive content
- [ ] Tabs are scrollable when they overflow the viewport
- [ ] Table horizontal scroll works if implemented (M-38)

---

### [M-34] Landscape orientation — layout components

**Devices:** Both iOS and Android
**WCAG:** 1.3.4 Orientation — content must not be restricted to portrait or landscape.

Checklist:
- [ ] Modal is usable in landscape (not taller than viewport, scrollable if needed)
- [ ] Calendar fits in landscape without columns being cut off
- [ ] DatePicker popover does not overflow viewport in landscape
- [ ] Select/ComboBox dropdown height respects viewport height in landscape (`min(295px, 50vh)` — M-16)
- [ ] Sidebar (CollapsePanel) does not break layout in landscape
- [ ] No component hard-codes an orientation-specific layout that breaks the other

---

### [M-35] VoiceOver (iOS) — focus order and announcements

**Device:** iPhone, VoiceOver enabled (triple-click side button)
**Why separate:** Swipe-based navigation, `aria-*` attribute surfacing, and gesture conflicts are not testable any other way.

Checklist:
- [ ] Modal: focus moves into modal on open, trapped while open, returns to trigger on close
- [ ] Modal: announced as dialog with correct label
- [ ] Select: options announced correctly on swipe through list
- [ ] ComboBox: search result count announced when list updates
- [ ] DatePicker: calendar navigation announces current month/year
- [ ] DatePicker: individual day cells announced with full date
- [ ] Checkbox: state (checked/unchecked/indeterminate) announced on tap
- [ ] Table: column headers associated with cells, sort state announced
- [ ] Toast: announced without stealing focus
- [ ] No custom gesture conflicts with VoiceOver swipe gestures

---

### [M-36] TalkBack (Android) — focus order and announcements

**Device:** Android, TalkBack enabled
**Why separate:** TalkBack behaviour differs from VoiceOver — different gesture model, different announcement patterns.

Same checklist as M-35, tested on Android. Document any differences in behaviour between VoiceOver and TalkBack as they are found — these become component-specific notes in the docs.

---

### [M-37] Low-end Android — animation performance

**Device:** A mid-range or older Android device (or Chrome DevTools CPU throttle 4×)
**Why:** Mobile devices have significantly less GPU than desktop. Layout-triggering animations are fine on a MacBook, janky on a budget Android.

Checklist:
- [ ] Sidebar collapse/expand animation is smooth (currently uses `transition: width` — flagged in plan)
- [ ] Modal fade-in/out is smooth
- [ ] Toast slide-in is smooth
- [ ] Accordion open/close is smooth
- [ ] No visible jank when scrolling a page with many components
- [ ] ComboBox dropdown open/close is smooth

Note: Use Chrome DevTools Performance tab with CPU throttle to triage before testing on real hardware.

---

## Group 11 — Design decisions required (blocked)

These tasks cannot start until a design decision is made. Engineering is unblocked once the direction is chosen.

---

### [M-38] Table mobile adaptation — DESIGN DECISION NEEDED

**Blocked on:** design team decision — see `mobile-first-plan.md` §3 for pattern tradeoffs.

Midas has **two separate table implementations** with different ownership models, and the right mobile solution may differ between them:

#### RAC Table (`@midas-ds/components`)

Built on React Aria Components. Midas owns the full DOM structure — selection, sorting, keyboard navigation, and row markup are all component-controlled. This means the design system _can_ implement mobile adaptation directly (scroll wrapper, breakpoint reflow, column hiding) and consumers get it for free.

Best suited for: moderately complex tables with selection and basic sorting. Typically fewer columns.

**What the design system can do:**
- Add a horizontal scroll wrapper at XS with visual scroll affordance
- Hide less-important columns at breakpoints via a priority API (`data-mobile-hidden` prop on Column or similar)
- Increase row height at XS for easier tap targets (selection checkboxes are currently 18px)

**What it can't do for consumers:**
- Know which columns are "less important" — that requires consumer metadata

#### TanStack Table (`@midas-ds/table-styles`)

A CSS adapter only — one global stylesheet (`tanstack-table.css`) plus a `Pagination` component. Midas controls styling but **not markup or structure**. The consumer owns the full `<table>` DOM using TanStack's headless API.

Best suited for: complex, data-dense tables with sorting, filtering, pagination, virtual scrolling. Often many columns.

**What the design system can do:**
- Add mobile-specific CSS rules to `tanstack-table.css` (scroll wrapper on the container, reduced padding at XS)
- Document a recommended mobile pattern using TanStack's `table.setColumnVisibility()` API
- Provide an example story/snippet showing column priority hiding on mobile

**What it can't do:**
- Enforce column hiding — consumers control the markup and must opt in via TanStack's visibility API
- Reflow to card layout — that's a structural change the consumer has to implement

#### Summary

| | RAC Table | TanStack Table |
|---|---|---|
| Midas owns DOM? | ✅ Yes | ❌ No |
| Can add scroll wrapper | ✅ In component | ✅ In CSS |
| Can enforce column hiding | ✅ Via prop API | ❌ Docs/examples only |
| Card reflow possible | ✅ With effort | ❌ Consumer responsibility |
| Typical use case | Selection, simple grids | Complex data tables |

The design decision should be made per implementation type — the answer does not have to be the same for both. A reasonable split: horizontal scroll + selection checkbox tap-target fix for RAC Table, scroll wrapper CSS + documented TanStack visibility pattern for TanStack Table.

**Also note:** `tanstack-table.css` uses `:hover` on `tbody tr` (L27, L35) with no `data-hovered` equivalent. That's a separate fix from the mobile adaptation work but worth bundling into the same PR — see [M-41] below.

---

### [M-39] DatePicker/DateField `nativeOnMobile` prop — DESIGN DECISION NEEDED

**Proposal:** `nativeOnMobile?: boolean` (default `true`) that renders native `<input type="date">` on touch devices instead of the custom calendar.
**Blocked on:** design team sign-off on cross-platform inconsistency tradeoff.

**Counter-argument from the field:** React Spectrum does not do this. Their bet is on investing in making the custom calendar good enough on mobile rather than delegating to native. The argument: native date pickers are inconsistent between iOS and Android, offer no design control, and lose features (range, disabled dates, min/max). For a government design system where visual consistency and token-based branding matter, the Spectrum approach may actually be more aligned with Midas's needs. **Consider this direction seriously before implementing the `nativeOnMobile` prop.** [React Spectrum — DatePicker](https://react-spectrum.adobe.com/react-spectrum/DatePicker.html)

---

### [M-40] Select `nativeOnMobile` prop for simple selects — DESIGN DECISION NEEDED

**Proposal:** Same `nativeOnMobile` pattern as DatePicker for non-searchable, non-multi Selects.
**Blocked on:** design team sign-off. Searchable (ComboBox) and multi-select are explicitly out of scope for native fallback.

**Counter-argument from the field:** Same reasoning as M-39 — React Spectrum ships a fully custom Select with no native fallback and invests instead in making the custom component mobile-usable. Native `<select>` loses all Midas styling and token application. The higher-value path may be fixing M-05 (hover), M-10 (pressed), and M-16 (height cap) to bring the custom Select to an acceptable mobile baseline rather than punting to native. [React Spectrum — Select](https://react-spectrum.adobe.com/react-spectrum/Select.html)

---

### [M-41] Fix TanStack table row hover — missing touch equivalent

**File:** `packages/table-styles/src/lib/tanstack-table.css` L27, L35
**Note:** Not blocked on the design decision above — this is a standalone hover deviation fix that can land independently.

`tbody tr:hover` has no `data-hovered` equivalent (TanStack rows are plain `<tr>` elements, not RAC components, so `data-hovered` won't be set automatically). Fix: wrap both hover rules in `@media (hover: hover)` so they only apply on pointer devices, and add a `:active` rule as a touch pressed fallback:

```css
@media (hover: hover) {
  .midas-tanstack-table tbody tr:hover { ... }
  .midas-tanstack-table tbody tr:nth-child(even):hover { ... }
}

.midas-tanstack-table tbody tr:active {
  background-color: var(--midas-layer-01-hover);
}
```

---

### [M-42] Popover: adapt to modal on XS breakpoint

**File:** `packages/components/src/popover/` (to be identified)
**Impact:** A Popover triggered near the bottom of a 320px screen will render off-screen or clipped. There are no mobile-specific styles or fallback behaviour. Unlike Modal (which is centered), Popovers are anchor-positioned relative to their trigger — on small screens this is almost always wrong.

**Fix options (pick one — design decision):**
1. **CSS only:** At `max-width: 479px`, override popover positioning to render centered and full-width, similar to M-14.
2. **Prop-based:** Add a `mobileType="modal"` prop that renders a centered modal instead of a popover on touch devices, following React Spectrum's `DialogTrigger` pattern.
3. **Automatic via RAC:** React Aria's overlay system may already handle some of this via `useOverlayPosition` — investigate before implementing.

**Art of the possible:** This is exactly the problem React Spectrum solves with `DialogTrigger`'s `mobileType` prop. Their ComboBox also automatically renders its dropdown in a "tray" (bottom-sheet) on small screens. The concept scales to any anchored overlay. [React Spectrum — DialogTrigger mobileType](https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html)

---

### [M-43] Audit `user-select: none` on non-RAC interactive elements

**Impact:** On mobile, holding a tap on a text-containing button triggers native text selection — the press animation is interrupted, the text gets highlighted, and the button action may not fire. RAC components handle this internally via `usePress`, but plain HTML elements (calendar nav buttons, custom wrappers, table sort headers) are not protected.

**What to audit:** Find interactive elements not based on RAC primitives and check if `user-select: none` is needed. Also check `touch-action` — setting `touch-action: manipulation` on interactive elements disables double-tap zoom on iOS, which adds a 300ms delay to taps. Both are small but polished mobile improvements.

```css
/* On non-RAC interactive elements */
button, [role="button"] {
  user-select: none;
  touch-action: manipulation; /* removes 300ms tap delay on iOS */
}
```

**Reference:** Radix UI explicitly sets both `user-select` and `touch-action` on their interactive primitives. [Radix — Pointer events handling](https://www.radix-ui.com/primitives)

---

### [M-44] Design system gap: no drawer/tray component

**Type:** Gap investigation — not a bug fix
**Impact:** Bottom-sheet drawers are the primary mobile navigation and action pattern on both iOS and Android. React Spectrum ships `Tray` as a first-class component. shadcn/ui's `Drawer` (built on Vaul) supports swipe-to-dismiss and drag handles. Midas has nothing equivalent.

This is not a mobile fix for an existing component — it is a missing component that would unlock a whole class of mobile-first UX patterns (mobile nav drawers, action sheets, form sheets).

**What this task is:** Investigate and document the gap. Decide whether:
1. The `Modal` XS full-screen adaptation (M-14) is sufficient for now
2. A dedicated `Drawer`/`Tray` component should be added to the roadmap
3. A `mobileType="tray"` prop on `Modal`/`DialogTrigger` bridges the gap without a new component

**References:**
- [React Spectrum — Tray](https://react-spectrum.adobe.com/react-spectrum/Tray.html)
- [shadcn/ui — Drawer (Vaul)](https://ui.shadcn.com/docs/components/drawer)
- [Vaul — swipe-to-dismiss drawer for React](https://vaul.emilkowal.ski/)
