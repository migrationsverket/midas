# @midas-ds/docusaurus-typedoc-plugin

A Docusaurus plugin that generates API documentation from TypeScript source files using TypeDoc.

## Features

- Generate API documentation from TypeScript source files
- Parse React components with complex generics
- Automatic props extraction with JSDoc comments
- Categorized props display (Props, Events, Accessibility)
- Type signatures and type parameters
- Caching for faster incremental builds
- Watch mode for development
- Reusable across multiple component libraries

## Installation

This plugin is part of the Midas monorepo and is already configured in the workspace.

## Usage

### 1. Configure in docusaurus.config.ts

```typescript
import type { Config } from '@docusaurus/types';

const config: Config = {
  // ... other config
  plugins: [
    [
      '@midas-ds/docusaurus-typedoc-plugin',
      {
        id: 'components',
        entryPoints: ['../packages/components/src/*/index.tsx'],
        tsconfig: '../packages/components/tsconfig.json',
        out: '.docusaurus/typedoc-api',
        watch: true,
        exclude: ['**/*.test.tsx', '**/*.stories.tsx'],
        typedocOptions: {
          excludePrivate: true,
          excludeExternals: true,
        },
      },
    ],
  ],
};
```

### 2. Use in MDX files

```mdx
---
title: Button Component
---

import ApiDocBlock from '@theme/ApiDocBlock';

# Button

The Button component provides...

<ApiDocBlock name="Button" />
```

### 3. Manual usage with individual components

```mdx
import { PropsTable, TypeSignature } from '@midas-ds/docusaurus-typedoc-plugin';
import { usePluginData } from '@docusaurus/useGlobalData';

export function MyCustomApiDocs() {
  const pluginData = usePluginData('@midas-ds/docusaurus-typedoc-plugin', 'components');
  const component = pluginData.apiData.components['Button'];

  return (
    <div>
      <TypeSignature component={component} />
      <PropsTable props={component.props} />
    </div>
  );
}
```

## Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `id` | `string` | Yes | - | Unique identifier for this plugin instance |
| `entryPoints` | `string[]` | Yes | - | Entry points for TypeDoc (supports globs) |
| `tsconfig` | `string` | Yes | - | Path to tsconfig.json |
| `out` | `string` | No | `.docusaurus/typedoc-api` | Output directory for generated files |
| `watch` | `boolean` | No | `false` | Enable watch mode in development |
| `exclude` | `string[]` | No | `['**/*.test.tsx', '**/*.stories.tsx']` | Patterns to exclude |
| `typedocOptions` | `object` | No | - | Additional TypeDoc options |

## Components

### ApiDocBlock

Main component for rendering complete API documentation.

**Props:**
- `name` (string, required): Component name to display documentation for
- `pluginId` (string, optional): Plugin ID if using multiple instances
- `showSignature` (boolean, optional): Whether to show type signature (default: true)
- `showProps` (boolean, optional): Whether to show props table (default: true)

### PropsTable

Renders a categorized table of component props.

**Props:**
- `props` (PropDoc[], required): Array of prop documentation
- `groupByCategory` (boolean, optional): Group props by category (default: true)

### TypeSignature

Renders the type signature and type parameters of a component.

**Props:**
- `component` (ComponentDoc, required): Component documentation object

## How It Works

1. **Build Phase**: Plugin runs TypeDoc on configured entry points during Docusaurus build
2. **Parse Phase**: TypeDoc generates JSON output with full type information
3. **Transform Phase**: Plugin transforms TypeDoc JSON into a simplified format
4. **Cache Phase**: Results are cached for faster subsequent builds
5. **Inject Phase**: Data is injected into Docusaurus global context
6. **Render Phase**: Theme components consume data and render documentation

## Caching

The plugin includes an intelligent caching system that:
- Generates a hash of source files (mtime + size)
- Skips regeneration if files haven't changed
- Clears cache automatically when files are modified
- Stores cache in `.docusaurus/typedoc-cache/`

## Development

When `watch: true` is enabled, the plugin will:
- Monitor entry point files for changes
- Regenerate documentation automatically
- Trigger Docusaurus hot reload

## TypeDoc Options

The plugin passes these options to TypeDoc by default:
- `excludePrivate: true` - Skip private members
- `excludeExternals: true` - Skip external modules
- `skipErrorChecking: false` - Catch TypeScript errors

You can override these in the `typedocOptions` configuration.

## Troubleshooting

### No components found

Make sure your entry points match actual files:
```bash
# Test your glob pattern
ls ../packages/components/src/*/index.tsx
```

### TypeDoc errors

Check your TypeScript configuration:
```bash
# Verify tsconfig path is correct
cat ../packages/components/tsconfig.json
```

### Cache issues

Clear the cache manually:
```bash
rm -rf .docusaurus/typedoc-cache
```

## Multiple Plugin Instances

You can configure multiple instances to document different packages:

```typescript
plugins: [
  [
    '@midas-ds/docusaurus-typedoc-plugin',
    { id: 'components', entryPoints: ['../packages/components/src/*/index.tsx'], ... }
  ],
  [
    '@midas-ds/docusaurus-typedoc-plugin',
    { id: 'theme', entryPoints: ['../packages/theme/src/index.ts'], ... }
  ],
]
```

Then use the `pluginId` prop:
```mdx
<ApiDocBlock name="Button" pluginId="components" />
<ApiDocBlock name="ThemeProvider" pluginId="theme" />
```
