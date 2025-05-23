/**
 * A utility for making visual assertions in Storybook play tests based on the browsers "prefers-colors-scheme" setting
 */
export const lightDark = (
  light: string,
  dark: string,
  mode?: 'light' | 'dark',
) => {
  if (mode) {
    return mode === 'dark' ? dark : light
  }
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? dark
    : light
}

/**
 * Convert a CSS hex color to CSS rgb color
 * ```
 * '#f2f2f2' => 'rgb(242, 242, 242)'
 * ```
 */
export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : ''
}
