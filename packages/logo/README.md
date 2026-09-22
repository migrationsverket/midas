# @midas-ds/logo

The Midas logotype component, published as its own package so it can be adopted independently of `@midas-ds/components`' major version.

## Installation

```bash
npm install @midas-ds/logo
```

## Usage

```tsx
import { Logo } from '@midas-ds/logo'

function Example() {
  return <Logo size='medium' />
}
```

`@midas-ds/components` re-exports `Logo` from this package, so most consumers don't need to install it directly. Install and import it here instead if you're pinned to an older major version of `@midas-ds/components` and want the latest logotype without upgrading the rest of the library.

## Documentation

For complete documentation and examples, visit [Midas Design System](https://designsystem.migrationsverket.se/)
