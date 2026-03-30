# 0005. DatePicker Calendar Height When Rendered Above Input

**Date:** 2026-03-24
**Status:** Accepted — no action

## Context

A user reported that when the DatePicker calendar renders above the input (which happens automatically when the input is near the bottom of the viewport), navigating between months causes the previous/next buttons to shift position. This occurs because the calendar height is dynamic — months with 5 or 6 weeks are taller than months with 4 weeks. Since the calendar is anchored at its bottom edge (above the input), the top of the calendar — where the navigation buttons live — floats up and down as the month changes.

## Decision

No change to the component.

The proposed fix was to apply a `min-height` to the calendar scoped to `[data-placement^="top"]` on the popover, ensuring the calendar always reserves space for 6 weeks when rendered above the input. This would keep the navigation buttons stable regardless of month length.

However, the condition under which this occurs is narrow:

- The user must be near the bottom of the viewport for the calendar to flip above the input
- The user must be actively clicking through months (rather than typing a date directly)
- The shift only occurs when crossing a week-count boundary (e.g. July → August)

Given the specificity of the edge case, the added visual weight of a fixed-height calendar in the above-placement scenario is not justified.

## Consequences

The button drift remains present but only under the described conditions. Users near the bottom of the viewport clicking through months may need to re-acquire the navigation button when the week count changes. This is an accepted trade-off.
