# 0006. Configurable Layout Mobile/Desktop Breakpoint

**Date:** 2026-09-11
**Status:** Accepted — not pursuing, revisit if demand emerges

## Context

Issue #1325 identified that Layout's 640px mobile/desktop breakpoint is hardcoded independently in three stylesheets (`Sidebar.module.css`, `HeaderLogo.module.css`, `Navbar.module.css`), with nothing enforcing they stay in sync — a drift risk, not an active bug. That issue was explicitly filed as low-priority: worth doing "if a 4th component needs the same split, or if a team asks to make the breakpoint configurable."

PR #1353 explored this, single-sourcing the value via a consistency test (after `@custom-media` proved fragile across tooling) and additionally introducing a `breakpoint` prop on `Layout` so consumers could override the split — going beyond #1325's original single-sourcing scope into actual configurability.

In review, @derpbravely raised whether a single override prop is the right shape if more than one breakpoint might eventually need to be configurable — proposing instead a configuration object extensible to future screen sizes — and separately questioned whether breakpoint configuration belongs in `@midas-ds/theme` rather than `Layout` itself. Following further discussion, the team decided not to pursue either shape right now.

## Decision

We will not merge PR #1353. No breakpoint-override mechanism — single prop, configuration object, or theme-level feature — will be added at this time.

This is a decision to defer, not to reject the underlying idea: there is no concrete consumer need driving it yet, and building any of these shapes speculatively risks locking in an API before an actual use case tells us which one is right.

Issue #1325's narrower problem — the 640px value living independently in three stylesheets — remains open and can still be addressed on its own, without adding configurability.

## Consequences

- `Layout`'s mobile/desktop split stays fixed at 640px, with no override mechanism.
- PR #1353 will be closed without merging.
- If a real consumer need for a configurable breakpoint comes up, revisit this decision then. The actual use case should drive the choice between a single prop, a configuration object, and whether it belongs on `Layout` or in `@midas-ds/theme` — not a speculative decision made now.
- Issue #1325 (single-sourcing the value across the three existing stylesheets, without configurability) is unaffected and can still be picked up independently.
