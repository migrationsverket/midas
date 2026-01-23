# 0003. Design Token Shadow Syntax

**Date:** 2026-01-23
**Status:** Accepted

## Context

When adding an invalid state token (`--midas-state-invalid`) for form field validation styling, we needed to decide how to define shadow tokens in our design token system.

The DTCG (Design Tokens Community Group) specification 2025.10 introduced a composite `shadow` type with structured properties:

```json
{
  "$type": "shadow",
  "$value": {
    "inset": true,
    "color": "{support.border.warning}",
    "offsetX": "0px",
    "offsetY": "0px",
    "blur": "0px",
    "spread": "2px"
  }
}
```

However, using this format requires:
1. Style Dictionary transforms to convert the composite type to CSS `box-shadow` syntax
2. Either `@tokens-studio/sd-transforms` package or custom transform implementation
3. Additional tooling configuration and maintenance

Our existing focus state tokens (`state.focus`, `state.focusInset`) already use `$type: "string"` with raw CSS values.

## Decision

We decided to use `$type: "string"` for shadow tokens, matching our existing focus state token pattern:

```json
{
  "invalid": {
    "$type": "string",
    "$value": "inset 0 0 0 2px {support.border.warning}",
    "$description": "Invalid state style for form fields (box-shadow)."
  }
}
```

This generates: `--midas-state-invalid: inset 0 0 0 2px var(--midas-support-border-warning)`

## Consequences

**Positive:**
- Consistent with existing `state.focus` and `state.focusInset` tokens
- No additional tooling or transforms required
- Works reliably with current Style Dictionary setup
- Simpler to understand and maintain

**Negative:**
- Less structured than DTCG composite shadow type
- No built-in validation of shadow properties
- Manual string construction instead of typed properties

**Future Considerations:**
- When Style Dictionary has better built-in support for DTCG shadow composite types (including `inset`), we should revisit this decision
- The `@tokens-studio/sd-transforms` package could be evaluated if we need more advanced token transformations
- Migration to DTCG shadow type would require updating all shadow tokens and adding appropriate transforms
