# 0004. Breaking Change Strategy

**Date:** 2026-03-17
**Status:** Accepted

## Context

As Midas matures, breaking changes to the component API are inevitable — components need to be refactored, patterns evolve, and dependencies change. At the same time, consumers depend on stability. A major version bump that introduces many simultaneous breaking changes is painful to adopt and risks teams staying on outdated versions indefinitely.

We needed a strategy that lets the project evolve without holding it hostage to backward compatibility, while still giving consumers a clear, low-friction migration path.

## Decision

We adopt a **future flag** pattern for managing breaking changes.

### How it works

1. **The breaking change ships as an opt-in flag in a minor release.** The new behavior is available but not the default. Consumers can adopt it at their own pace.
2. **In the next major release, the flag becomes the default.** The flag prop is removed. Consumers who already adopted the flag have nothing to do.
3. **Deprecations are signalled via JSDoc**, not via runtime warnings. The `@deprecated` tag is reserved for APIs being removed with no migration path. Future flags use a `Future flag:` notice in the JSDoc instead.
4. **A tracking issue is maintained** listing all active future flags, their migration paths, and their target major version. See [#1109](https://github.com/migrationsverket/midas/issues/1109).

### Example

```tsx
// v17.x — button shown by default (backward compat)
// Pass showButton={false} to opt into the v18 default today
<SearchField placeholder='Sök' />

// v17.x — future flag: opt in early
<SearchField placeholder='Sök' showButton={false} />

// v18 — showButton prop deprecated, no button by default
<SearchField placeholder='Sök' />
```

### Criteria for using a future flag

Use a future flag when:
- The change alters **default behavior** visible to consumers
- The change is a **visual or UX regression** for existing users if adopted silently
- The migration requires consumers to **change their code**

Do not use a future flag for:
- Internal refactors with no API surface changes
- Bug fixes, even if they alter behavior
- Additive changes (new props, new variants)

### Versioning

Midas follows semantic versioning via [Conventional Commits](../../CONTRIBUTING.md). Breaking changes trigger a major bump. Future flags allow us to batch multiple breaking changes into a single major release without surprising anyone.

## Consequences

**Positive:**
- Consumers can migrate incrementally, one flag at a time
- Major releases become predictable — no surprises for teams that follow the flags
- The project can evolve at its own pace without accumulating technical debt in the name of backward compat
- A single tracking issue gives visibility into what's coming

**Negative:**
- More overhead per breaking change — requires a flag, JSDoc, docs update, and tracking issue entry
- The transition period means maintaining two code paths simultaneously
- Risk of flag proliferation if not kept disciplined

**Future Considerations:**
- If the number of active flags grows large, consider a structured `future` config object on a provider level (similar to Remix/React Router)
- Revisit this strategy at the v18 planning stage to assess what worked and what didn't
