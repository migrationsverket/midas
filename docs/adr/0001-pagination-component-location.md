# 0001. Pagination Component Location

**Date:** 2026-01-13
**Status:** Accepted

## Context

We needed to decide where to place a new pagination component in the Midas Design System architecture. The main considerations were:

1. Should pagination be a separate npm package?
2. Should it be included in the main `@midas-ds/components` package?
3. Should it be included in the existing `@midas-ds/table-styles` package?
4. If included in table-styles, should we rename that package to reflect its broader scope?

The pagination component is closely tied to TanStack Table and is primarily used in table contexts. The table-styles package originally contained only CSS, but now needs to include actual components.

## Decision

We decided to include the pagination component in the existing `@midas-ds/table-styles` package **without renaming the package** (for now).

The rationale:
- The pagination component is closely tied to TanStack Table implementation
- Putting it in the main `@midas-ds/components` package doesn't make sense since it's table-specific
- The table-styles package name originally represented its state as CSS-only, but now it contains components as well
- Creating a separate package would add unnecessary maintenance overhead
- The current package name, while not perfect, is acceptable for the immediate term
- We can revisit the naming decision in the future if the package scope expands significantly

## Consequences

**Positive:**
- Faster implementation - no need to set up new package infrastructure
- Keeps table-related functionality co-located with TanStack Table utilities
- Users working with tables only need one additional package beyond `@midas-ds/components`
- Pagination can share dependencies and utilities with table implementations

**Negative:**
- Package name "table-styles" no longer accurately describes its contents (CSS + components)
- The package has evolved from its original CSS-only purpose
- May cause confusion about what belongs in this package vs. the main components package

**Future Considerations:**
- We may need to rename the package if it continues to evolve beyond table-specific components
- A future ADR could propose renaming to something like `@midas-ds/table` or `@midas-ds/table-components`
- The decision to rename can be made based on actual usage patterns and whether the package scope expands significantly
