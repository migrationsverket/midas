# 0002. Component Package Architecture

**Date:** 2026-01-13
**Status:** Proposed

## Context

Currently, all components in the Midas Design System are bundled together in a single `@midas-ds/components` package. This means all components share the same version number and are tightly coupled.

**The Problem:**

As we create specialized packages outside the main stream (like `@midas-ds/select-styles` and `@midas-ds/table-styles`), we're facing a dependency management challenge:

- If `select-styles` depends on `@midas-ds/components` for Button and Select
- And an unrelated component like Checkbox gets updated in `@midas-ds/components`
- Then `select-styles` needs to bump its dependency version even though it doesn't use Checkbox
- This creates a web of unnecessary version bumps and coupling

We're considering whether to refactor the architecture to have individual npm packages per component (e.g., `@midas-ds/button`, `@midas-ds/textfield`, etc.) with `@midas-ds/components` becoming a pure re-export layer for convenience. This would allow packages to depend only on the specific components they actually use.

This is similar to how libraries like Radix UI are structured.

## Options Being Considered

### Option 1: Split into Individual Packages

**Structure:**
```
@midas-ds/button
@midas-ds/textfield
@midas-ds/checkbox
...
@midas-ds/components (re-exports all)
```

**Pros:**
- **Solves the dependency coupling problem**: Packages like `select-styles` can depend only on `@midas-ds/button` without being affected by unrelated component updates
- Each component can be versioned independently
- Clear boundaries between components
- More granular dependency management - only bump what you actually use
- Prevents cascading version bumps across unrelated packages

**Cons:**
- Significant maintenance overhead (managing 30+ packages)
- More complex release process
- Harder to make cross-component changes
- More complex CI/CD pipelines
- Potential version incompatibility issues between components
- Breaking changes require coordinating multiple package updates

### Option 2: Keep Monolithic Package

**Structure:**
```
@midas-ds/components (everything in one package)
```

**Pros:**
- Simple maintenance (one package to manage)
- Easier to make cross-component changes
- Single version number (no compatibility concerns)
- Simpler release process
- One install command gets everything
- Easier for users to stay up-to-date

**Cons:**
- **Creates dependency web problem**: Packages depending on `@midas-ds/components` must bump versions even when unrelated components update
- All components must be versioned together
- Can't independently update a single component
- Tight coupling between all components and their consumers

### Option 3: Hybrid Approach

Keep monolithic package as primary, but publish individual packages for specific use cases where bundle size is critical.

## Open Questions

1. **What's the maintenance burden** of managing 30+ individual packages in CI/CD?
2. **How would this affect internal dependencies** between components that share utilities?
3. **What's the migration path** if we decide to switch later?
4. **How often do specialized packages actually need to depend on specific components?**
5. **Can we solve the dependency coupling problem** with a different approach (e.g., better peer dependency management)?

## Decision

**Status: Under discussion**

This ADR will be updated with the final decision once we've evaluated:
- Bundle size impact analysis
- Developer experience considerations
- Maintenance cost assessment
- User feedback

## Next Steps

- [ ] Map out current dependency graph between specialized packages and components
- [ ] Research maintenance overhead of similar design systems (e.g., Radix UI)
- [ ] Prototype a few components as separate packages to test the workflow
- [ ] Evaluate CI/CD complexity for managing multiple packages
- [ ] Assess whether peer dependencies could solve the coupling problem without splitting packages
