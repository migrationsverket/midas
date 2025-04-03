/**
 * A utility for making visual assertions in Storybook play tests based on the browsers "prefers-colors-scheme" setting
 */
export const lightDark = (light: string, dark: string) =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? dark
    : light
