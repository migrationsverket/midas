import { Format } from 'style-dictionary/types'
import { fileHeader } from 'style-dictionary/utils'

/**
 * Custom Style Dictionary format that generates a Tailwind CSS @theme file.
 * This allows all Midas tokens to be available as CSS variables within Tailwind's theme.
 *
 * Note: Tailwind v4 only auto-generates utilities for standard color patterns (e.g., blue-100, gray-500).
 * Semantic tokens (background-base, text-primary, etc.) must be used with arbitrary values like:
 * - bg-[--midas-background-base]
 * - text-[--midas-text-primary]
 *
 * Or directly mapped in the theme for standard Tailwind utilities.
 */
export const tailwindTheme: Format = {
  name: 'css/tailwind-theme',
  format: async ({ dictionary, file, options }) => {
    const { outputReferences } = options
    const header = await fileHeader({ file })

    // Generate @theme block with all tokens using their original names
    const themeVariables = dictionary.allTokens
      .map((token) => {
        const name = token.name
        const value = outputReferences && token.original.$value
          ? `var(--midas-${name})`
          : token.value

        return `  --${name}: ${value};`
      })
      .join('\n')

    return header + '\n@theme {\n' + themeVariables + '\n}\n'
  },
}
