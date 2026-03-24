# Mobile-First Plan

**Date:** 2026-03-24
**Status:** Draft

## Background

Midas components were initially designed with desktop app developers as the primary audience. With the system now being used for external-facing services, the user base is expected to skew significantly more toward mobile than the current internal desktop-heavy audience. This document maps out what needs to change, how to validate it, and where the tradeoffs are.

React Aria handles touch/pointer events via `data-*` attributes rather than `:hover`, focus management works correctly, and Storybook already has mobile viewport presets (320px–1280px). However, several components deviate from this pattern and use CSS `:hover` directly — those components do not benefit from RAC's touch handling and are the primary gap to address.

---

## 1. What Needs to Change

### Tap targets

WCAG 2.5.8 recommends a minimum 24×24px target, with 44×44px as the practical guideline for comfortable touch use.

| Component | Current size | Issue |
|-----------|-------------|-------|
| Icon buttons | 16px (`size.icon`) | Relies entirely on surrounding padding — needs audit per usage |
| Tag dismiss button | ~16px icon | Minimal padding in context |
| Select options | 32px (`size.option`) | Borderline — acceptable for list items but worth increasing |
| Calendar day cells | 40px (`size.control-md`) | Under guideline, noticeable in a tapping-intensive component |

The core `Button` and form controls (`size.control` = 48px) are already compliant. The risk area is icon-only buttons in dense layouts.

### Components with no mobile adaptation

These components have no breakpoint-specific styles and will likely cause problems on small screens:

**Table**
The most pressing issue. No reflow, no horizontal scroll container, selection checkboxes at 18px. On a 320–480px screen a 6-column table is unusable. Options: horizontal scroll wrapper, column priority hiding, or a card/list fallback pattern. This needs a design decision before implementation.

**Modal**
`min-width: 300px` + `max-width: 75%` can produce a 225px modal on a 300px screen. No full-screen adaptation. On XS breakpoints (≤479px) a modal should be full-screen or bottom-sheet style.

**Calendar / DatePicker**
No portrait orientation handling. The calendar grid (7 columns × up to 6 rows) is tight at 320px with 40px cells. Consider reducing cell size at XS or switching to native `<input type="date">` on mobile (see risks below).

**Select / Combobox dropdown**
ListBox is capped at `295px` height regardless of viewport. On a short phone in landscape, this can overflow. Should be `min(295px, 50vh)` or similar.

**Tooltip**
Used for the collapsed sidebar label — hover-only, never shows on touch. Not critical for external consumers (sidebar is a desktop layout pattern) but worth documenting.

### Breakpoint consistency

Most responsive styles use ad-hoc media queries. The theme has defined breakpoints (`xs: 479px`, `sm: 480px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) but they are not consistently used across components — some hardcode the same values. CSS custom media queries or a shared breakpoint mixin would help.

### Hover deviations

Despite using React Aria, several components use CSS `:hover` directly instead of RAC's `data-hovered`. On touch devices, `:hover` either never fires or fires briefly and unreliably. These components need to be migrated to `data-hovered` or wrapped in `@media (hover: hover)` so touch users get appropriate feedback.

| Component | Deviation | Mobile impact |
|-----------|-----------|---------------|
| ListBox | `:hover` on list items | No feedback when tapping options |
| Select | `:hover` on trigger, options, multiselect tags | No feedback on tap |
| Card | `:has(.cardLink:hover)` | Card highlight never shows on touch |
| LinkButton | `:hover` throughout (5 instances) | No hover state on touch |
| Link | `:hover` for underline/color | No hover state on touch |
| DateField | `:hover` on date segment | No feedback on tap |
| Checkbox | `:hover` on selected/indeterminate inner | Partial — other states use `data-*` correctly |
| Calendar | `:hover` on nav buttons | No feedback on tap |
| Table | Sort icon only shown on `:hover` | **Functionality hidden** — touch users cannot discover sortable columns |
| ComboBox | `onMouseUp` JS handler | Won't fire on touch at all |

The Table case is the most severe — it's not just missing visual feedback, it actively hides functionality from touch users.

### Touch feedback (pressed states)

React Aria's `data-pressed` is implemented on Button, Checkbox, and Radio. Select trigger, ListBox items, and Calendar cells lack pressed states entirely. On mobile, pressed feedback is the primary interaction signal — without it these components feel unresponsive.

---

## 2. How to Test

### Viewport testing in Storybook

Storybook already has custom viewport presets. Every component story should be reviewed at:
- 320×568px (smallest supported phone, portrait)
- 479px (XS boundary)
- 768px (tablet)

This should be part of the PR checklist, not an afterthought.

### Accessibility tests

Run `nx a11y storybook` — it covers light, dark, and forced-colors. Extend it with a mobile viewport pass. The `@storybook/addon-a11y` axe rules cover tap target size (WCAG 2.5.8) if configured.

### Real device / browser testing

Emulation is not enough. Test on:
- iOS Safari (the most restrictive mobile browser — different scroll behaviour, `position: fixed` quirks, input zoom on font-size < 16px)
- Android Chrome
- Focus especially on: DatePicker (native keyboard behaviour), Modal (scroll lock), Select (bottom sheet vs dropdown)

**iOS-specific gotchas to watch for:**
- `position: fixed` elements move when the virtual keyboard opens
- Inputs with `font-size < 16px` trigger auto-zoom — audit all input fields
- `-webkit-overflow-scrolling` on scroll containers
- `100vh` is unreliable (does not account for browser chrome) — use `dvh` or `svh`

### E2E tests

`nx e2e next` runs Playwright against `apps/next`. Add mobile viewport configurations to the Playwright config:

```ts
// playwright.config.ts
projects: [
  { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
  { name: 'mobile-safari', use: { ...devices['iPhone 12'] } },
]
```

Key scenarios to cover: form submission with virtual keyboard open, modal open/close on touch, date selection on mobile.

### Visual regression

Chromatic (already configured) should include mobile viewport snapshots. Add 375px and 768px as additional story viewports for visual regression.

---

## 3. Risks and Tradeoffs

### Native mobile inputs vs custom components

Several Midas components wrap a native browser element in a custom React Aria implementation for design control. On mobile, those native elements often get first-class OS treatment — bottom-sheet pickers, virtual keyboard optimisation, autofill — that the custom component can't replicate. Each has a different tradeoff.

#### DatePicker / Calendar

The most contentious. Native `<input type="date">` renders as a bottom-sheet date wheel on iOS/Android — exactly what users expect and already fully accessible.

| | Native `<input type="date">` | Custom RAC Calendar |
|---|---|---|
| Mobile UX | ✅ OS bottom-sheet | ❌ Tap-intensive grid |
| Design control | ❌ Not possible | ✅ Full |
| Date ranges | ❌ No | ✅ Yes |
| Disabled dates / min/max | ⚠️ min/max only | ✅ Full |
| Locale / format | ⚠️ Browser-controlled | ✅ Controlled |

**Recommendation:** For simple single-date inputs, detect touch device and delegate to native. Keep the custom calendar for range pickers and constraint-heavy cases. Implement as a prop: `nativeOnMobile` defaulting to `true`.

#### Select

Native `<select>` on iOS/Android opens the OS wheel/bottom-sheet picker — familiar, fast, and accessible without any implementation effort. Our custom Select adds searchability (ComboBox), multi-select, custom option rendering, and grouping — none of which have native equivalents.

| | Native `<select>` | Custom RAC Select |
|---|---|---|
| Mobile UX | ✅ OS bottom-sheet | ⚠️ Small scrollable dropdown |
| Design control | ❌ Not possible | ✅ Full |
| Search / filter | ❌ No | ✅ Via ComboBox |
| Multi-select | ⚠️ Clunky on mobile | ✅ Custom UI |
| Custom option content | ❌ Text only | ✅ Yes |
| `autocomplete` / autofill | ✅ Works | ❌ No |

**Recommendation:** For simple, non-searchable selects with few options, native is the better mobile experience and worth a `nativeOnMobile` prop. For anything searchable (ComboBox), multi-select, or with custom option rendering, native is not a viable fallback — focus on fixing the dropdown height cap (`min(295px, 50vh)`) and the `onMouseUp` touch bug instead.

#### ComboBox

Native `<datalist>` + `<input>` is the browser equivalent, but it's severely limited — no custom rendering, inconsistent across browsers, no grouping, no controlled filtering. There is no credible native fallback for ComboBox.

**Recommendation:** No native fallback. Fix the existing `onMouseUp` touch bug (see hover deviations section) and cap dropdown height relative to viewport.

#### DateField (segment-based)

RAC's DateField renders as keyboard-navigable segments (`DD / MM / YYYY`). On mobile these are individually tappable spans, not a native input — the virtual keyboard doesn't open contextually, and segment navigation is clunky.

**Recommendation:** Same strategy as DatePicker — `nativeOnMobile` prop rendering `<input type="date">` for simple cases. DateField used standalone (outside DatePicker) is rare in practice.

#### SearchField

Uses RAC's `SearchField` which wraps a native `<input type="search">` — already native under the hood. No issue here; mobile gets the system search keyboard with the correct action button.

### Responsive table patterns

Every responsive table pattern has tradeoffs:

| Pattern | Pros | Cons |
|---------|------|------|
| Horizontal scroll | Preserves structure, easy to implement | Users must discover scroll, bad for many columns |
| Column priority hiding | Clean, progressive | Requires metadata on each column, hides data |
| Card/list reflow | Feels native on mobile | Completely different layout, double maintenance |
| Freeze first column | Good for keyed data | Complex implementation |

This is primarily a design decision. Engineering follows once the pattern is chosen.

### `100vh` and virtual keyboard

When the virtual keyboard opens on mobile, `100vh` does not shrink — elements get hidden behind the keyboard. Modals, bottom-sheets, and full-screen overlays are affected. Use `height: 100dvh` (dynamic viewport height) with a `100vh` fallback. Browser support for `dvh` is good (95%+) but should be verified against the project's support targets.

### Performance

Mobile devices have less CPU/GPU than desktop. Animations using `transform` and `opacity` (GPU-composited) are fine. Anything animating `height`, `width`, or `margin` (layout-triggering) should be replaced. The calendar width transition (`transition: width`) on CollapsePanel is a current example — acceptable on desktop, potentially janky on low-end Android.

### Component complexity vs mobile usability

Some components that work well on desktop are fundamentally hard to use on mobile regardless of implementation — multi-column layouts, data-dense tables, complex comboboxes. For these, the right answer may be a separate mobile-specific component or pattern documented in the design system, rather than trying to make one component serve both contexts.

---

## 4. Legal Accessibility Requirements

Migrationsverket is subject to DOS-lagen (Lagen om tillgänglighet till digital offentlig service), which implements the EU Web Accessibility Directive. The enforcing authority is DIGG (Myndigheten för digital förvaltning). The required standard is **WCAG 2.1 AA** at minimum — but WCAG 2.2 is now current and EN 301 549 references it, so targeting 2.2 AA now avoids a retrofit later.

Non-compliance can result in DIGG issuing binding improvement orders. A public conformance statement and a feedback/complaint mechanism are also legally required — these are app-level concerns but the design system must not make them impossible to implement.

### Mobile-relevant legal criteria

These are the WCAG criteria that intersect directly with mobile and require component-level enforcement rather than just guidelines:

**1.3.4 Orientation (AA)**
Content must not be restricted to portrait or landscape. Components and layouts must never lock orientation. Document as a hard constraint in contribution guidelines.

**1.3.5 Identify Input Purpose (AA)**
Form inputs must have correct `autocomplete` attributes. On mobile this is especially important — it enables autofill and reduces cognitive load for users with motor impairments.

**How autocomplete works (or doesn't) in Midas components:**

| Component | Native input | `autocomplete` works | Notes |
|-----------|-------------|---------------------|-------|
| TextField | ✅ `<input>` | ✅ Pass via prop | Flows through `...rest` → RAC `TextField` → native `<input>` |
| TextArea | ✅ `<textarea>` | ✅ Pass via prop | Same RAC passthrough mechanism |
| NumberField | ✅ `<input>` | ✅ Pass via prop | Same RAC passthrough mechanism |
| DateField | ❌ Custom segments | ⚠️ Not applicable | RAC renders span-based segments, not a native date input |
| Select | ❌ Custom listbox | ❌ Not applicable | Not a native `<select>` — no autofill possible |
| ComboBox | ❌ Custom input | ⚠️ Limited | Has a native `<input>` but is not a standard form field type |

No Midas component *requires* or *defaults* `autocomplete` — the attribute must be provided by the consumer. The design system's role is to ensure it is never accidentally blocked.

**What the design system should do:**

- **Don't block passthrough**: `autocomplete` currently flows through RAC's context mechanism on TextField/TextArea/NumberField. Verify this is not broken when these components are refactored.
- **Component docs**: Each form component's documentation should list recommended `autocomplete` values for common use cases (e.g. `email`, `given-name`, `street-address`). MDN's [autocomplete values list](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values) is the reference.
- **Storybook examples**: Each form component story should include at least one example demonstrating correct `autocomplete` usage. This makes the expectation visible and gives consumers a copy-paste reference.
- **Testing**: The `nx a11y storybook` axe suite does not currently check for `autocomplete` on individual field stories — the stories are isolated and don't have the identity context axe needs. A dedicated Storybook story per component that renders a representative form (name, email, phone) with correct attributes would serve both documentation and testability.

**Consumer responsibility:**
Choosing the correct `autocomplete` token is always application-context-dependent — only the consuming app knows whether a text field collects `given-name`, `organization`, or `street-address-line1`. Document this clearly so consumers don't assume the design system handles it.

**1.4.4 Resize Text (AA)**
Content must remain functional when text is scaled to 200% in the browser. All inputs must have `font-size ≥ 16px` to prevent iOS Safari's auto-zoom behaviour — this is both a legal requirement and a mobile UX issue.

**1.4.10 Reflow (AA)**
Content must be usable at 320px CSS pixels without horizontal scrolling (except for content that inherently requires two dimensions, like data tables). This is effectively a mandate for the mobile layout work — the Table is the most obvious current failure. Reflow compliance should be part of the `nx a11y` test suite.

**1.4.11 Non-text Contrast (AA)**
UI component boundaries (input borders, button outlines, focus indicators) must meet 3:1 contrast against adjacent colours in both light and dark mode. Design token values should be validated against this — particularly border colours on form fields.

**2.4.11 Focus Appearance (AA — WCAG 2.2)**
Focus indicators must meet a minimum area and contrast ratio. The current `box-shadow`-based focus rings need to be verified against the formula: the focus indicator must have an area of at least the perimeter of the component × 2px, at 3:1 contrast. This is stricter than the old 2.4.7 "focus visible" criterion.

**2.5.8 Target Size (AA — WCAG 2.2)**
Minimum 24×24px for pointer targets, with no closer than 24px spacing between adjacent targets. Already flagged in section 1 — this is now a formal legal requirement, not just a best practice.

### What the design system enforces vs. what goes in guidelines

| Criterion | Enforced by component | Consumer responsibility | Guidelines |
|-----------|----------------------|------------------------|------------|
| 1.3.4 Orientation | Don't lock in CSS | — | Document constraint |
| 1.3.5 Input purpose | Don't block passthrough; Storybook examples | Add correct value per field | Component docs with recommended values |
| 1.4.4 Resize text | Ensure `font-size ≥ 16px` on inputs | — | — |
| 1.4.10 Reflow | Mobile layout work (Table, Modal) | Don't override breakpoints | — |
| 1.4.11 Non-text contrast | Token validation | — | — |
| 2.4.11 Focus appearance | Verify focus ring formula | — | — |
| 2.5.8 Target size | Tap target fixes (section 1) | Don't reduce padding | — |

### Mobile screen readers

VoiceOver (iOS) and TalkBack (Android) behave differently from desktop screen readers and must be tested separately. Key differences:
- Navigation is swipe-based — focus order is more critical than on desktop
- Touch exploration mode changes how `aria-*` attributes surface
- Custom swipe gestures in components can conflict with screen reader gestures

No mobile screen reader testing is currently documented or practised. This should be added as a required step before any component is marked as mobile-ready.

---

## Proposed Work Order

1. **Foundation** — migrate `:hover` deviations to `data-hovered` / `@media (hover: hover)`, `dvh` for full-screen overlays, `data-pressed` states on missing components
2. **Modal** — full-screen on XS, scroll lock fix
3. **Calendar tap targets** — increase cell size or reduce at XS
4. **Select/ListBox** — cap height relative to viewport
5. **Table** — design decision first, then implementation
6. **DatePicker native fallback** — design decision, then implementation
7. **Testing infrastructure** — Playwright mobile viewports, Chromatic mobile snapshots
