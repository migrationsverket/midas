import { resolve } from 'node:path'

const workspaceRoot = resolve(__dirname, '../../..')

const pkg = (name: string, relPath: string) =>
  resolve(workspaceRoot, 'packages', name, 'src', relPath)

// Native resolve.tsconfigPaths (and vite-tsconfig-paths, which it's based on)
// resolves specifiers the way module resolution does — probing .ts/.tsx/.js
// extensions and index files — not by literally substituting the tsconfig.json
// wildcard glob. That means it can't resolve a `@midas-ds/*` subpath that lands
// on a non-JS/TS file, like these package CSS exports. Alias them explicitly
// instead of relying on the wildcard.
export const cssAliases = {
  '@midas-ds/components/default.css': pkg('components', 'default.css'),
  '@midas-ds/layout/default.css': pkg('layout', 'default.css'),
  '@midas-ds/table-styles/lib/tanstack-table.css': pkg(
    'table-styles',
    'lib/tanstack-table.css',
  ),
  '@midas-ds/select-styles/lib/react-select.css': pkg(
    'select-styles',
    'lib/react-select.css',
  ),
  '@midas-ds/datepicker-styles/lib/react-datepicker.css': pkg(
    'datepicker-styles',
    'lib/react-datepicker.css',
  ),
  '@midas-ds/theme/lib/fonts.css': pkg('theme', 'lib/fonts.css'),
  '@midas-ds/theme/lib/color-scheme.css': pkg('theme', 'lib/color-scheme.css'),
  '@midas-ds/theme/lib/style-dictionary-dist/variables.css': pkg(
    'theme',
    'lib/style-dictionary-dist/variables.css',
  ),
}
