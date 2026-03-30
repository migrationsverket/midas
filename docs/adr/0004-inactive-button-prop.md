# 0003. Inactive Button Prop

**Date:** 2026-03-10
**Status:** Accepted

## Context

Sometimes we want to avoid using disabled buttons. Disabled buttons cannot be reached by system focus nor do they provide an explanation of their disabled state.
We need an "inactive" `Button` that can recieve focus and be explained by a `Tooltip` component.

## Decision

We decided implement a pseudo disabled state to our `Button` with a prop called `isInactive`. This prop adds `aria-disabled="true"`, blocks the onPress handler and removes the hover and press styles.
The `TooltipTrigger` and `Tooltip` are provided by the app rather than us bloating our standard `Button` with the two components.
How to implement the inactive button pattern will be documented with code examples.

## Consequences

**Positive:**

- No extra component export
- Our original `Button` component is left unbloated
- We offer full control of the `Tooltip` component via composition

**Negative:**

- More code for developers to write
- Risk for code duplication in several apps

**Future Considerations:**

- If this pattern is widely adopted we can consider exporting an `InactiveButton` compoenent that extends `ButtonProps`, `TooltipTriggerProps` and `TooltipProps`.
