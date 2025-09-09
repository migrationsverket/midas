# @midas-ds/theme

This package contains the design tokens for the Midas Design System, managed by [Style Dictionary](https://style-dictionary.com/).
It automatically generates theme assets, such as CSS variables and JavaScript modules, from a common set of token definitions.

## Installation

To install the theme package, run the following command in your project root:

```bash
npm install @midas-ds/theme
```

## Usage

The theme provides assets for both CSS and JavaScript environments.

### CSS

Import the `variables.css` file into your project's main entry point or global stylesheet. This will make all the design tokens available as CSS Custom Properties.

The CSS variables are prefixed with `midas`.

```css
/* Example: In your main stylesheet */
@import '@midas-ds/theme/variables.css';

body {
  background-color: var(--midas-color-background-default);
  font-family: var(--midas-typography-font-family);
  font-size: var(--midas-font-size-base);
}
```

### JavaScript / TypeScript

You can import the tokens directly into your JavaScript or TypeScript files to use them in your component logic or styled-components.

```typescript
// Example: Using tokens in a JavaScript file
import { variables } from '@midas-ds/theme';

const customStyle = {
  backgroundColor: variables.color.background.default,
  padding: variables.spacing.base,
};
```

## Contributing

The source of truth for all design tokens is located in the `tokens/` directory, organized into JSON files by category (e.g., `colors.json`, `spacing.json`).

To make changes to the theme:

1.  Modify the desired token values in the JSON files under the `tokens/` directory.
2.  Run the build script `sd.build.mjs` to regenerate the theme assets. This will update the files in the `src/lib/style-dictionary-dist/` directory.

This process ensures that all theme assets are kept in sync with the master token definitions.
