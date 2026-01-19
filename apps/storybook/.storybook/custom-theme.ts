import { create } from 'storybook/theming/create'

export const customLightTheme = create({
  base: 'light',
  brandImage: './mig-logo.svg',
  brandTitle: 'Midas - Migrationsverkets designsystem',
  brandUrl: 'https://designsystem.migrationsverket.se',
  fontBase: '"Inter", sans-serif',
  colorPrimary: '#143c50',
  colorSecondary: '#143c50',
  appBorderRadius: 0,
})

export const customDarkTheme = create({
  base: 'dark',
  brandImage: './mig-logo-white.svg',
  brandTitle: 'Midas - Migrationsverkets designsystem',
  brandUrl: 'https://designsystem.migrationsverket.se',
  fontBase: '"Inter", sans-serif',
  colorPrimary: '#ffffff',
  colorSecondary: '#ffffff',
  textColor: '#ffffff',
  textInverseColor: '#1a1a1a',
  appBorderRadius: 0,
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barHoverColor: '#ffffff',
})

export const getPreferredColorScheme = () => {
  if (!globalThis || !globalThis.matchMedia) return 'light'

  const isDarkThemePreferred = globalThis.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  if (isDarkThemePreferred) return 'dark'

  return 'light'
}
