# 0007. Context composition

**Date:** 2026-11-04
**Status:** Accepted

## Context

During development of the EmptyState component (9e468722aff650e69978e2bfafff46b27ddf8d11) a pattern using React.context was proposed. The pattern allowed developers
from other apps to compose standard Midas components inside the EmptyState parent without adding any default props. Default for this particular context:

```tsx
<EmptyState>
  <Heading>My heading</Heading>
  <Text>A text</Text>
  <Button>CTA</Button>
</EmptyState>
```

Under the hood we then could add standard props to the contexts, something like:

```tsx
export const EmptyState = () => (
  <Provider
    values={[
      [HeadingContext, { level: 2, className: styles.emptyStateHeading }],
      [TextContext, { elementType: 'p', className: styles.emptyStateText }],
      [ButtonContext, { variant: 'secondary', className: styles.emptyStateButton }],
    ]}
  />
)
```

After som POC:ing we realized that every component (since every component in theory could be placed inside an EmptyState parent) would need to reset every context
to ensure nothing leaks. Consider the following:

```tsx
<EmptyState>
  <Heading>404 - resource not found</Heading>
  <DialogTrigger>
    <Button>Click here for help</Button>
    <Modal heading='this heading is reading the HeadingContext, so is the closeButton etc.' />
  </DialogTrigger>
</EmptyState>
```

## Decision

We will not introduce this pattern in a new component feature PR, for now we stick with statically styled components (EmptyStateHeading, EmptyStateText etc.).

## Future work

This pattern is adopted by react-aria-components and could possibly create a clean API for our developers.
The amount of components we export could be reduced meanwhile the risk of introducing (hard to debug) bugs would increase.
