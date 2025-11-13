import { Format } from 'style-dictionary/types'
import { fileHeader } from 'style-dictionary/utils'

/**
 * Custom Style Dictionary format that generates a Tailwind CSS @theme file.
 * This allows all Midas tokens to be used as Tailwind utility classes.
 */
export const tailwindTheme: Format = {
  name: 'css/tailwind-theme',
  format: async ({ dictionary, file, options }) => {
    const { outputReferences } = options
    const header = await fileHeader({ file })

    // Generate @theme block with all tokens mapped to Tailwind-friendly names
    const themeVariables = dictionary.allTokens
      .map((token) => {
        const name = token.name
        const value = outputReferences && token.original.$value
          ? `var(--midas-${name})`
          : token.value

        // Map midas tokens to Tailwind utilities
        // Example: color-blue-100 -> --color-midas-blue-100
        // This groups them by category (color, spacing, etc.)
        return `  --${name}: ${value};`
      })
      .join('\n')

    return header + '\n@theme {\n' + themeVariables + '\n}\n'
  },
}
