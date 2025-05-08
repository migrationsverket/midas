export const baseColors = {
  black: '#000000',
  white: '#ffffff',

  blackHover: '#0d0d0d',
  whiteHover: '#e6e6e6',

  gray10: '#f2f2f2',
  gray20: '#e6e6e6',
  gray30: '#d9d9d9',
  gray40: '#cccccc',
  gray50: '#bfbfbf',
  gray60: '#b3b3b3',
  gray70: '#a6a6a6',
  gray80: '#999999',
  gray90: '#8c8c8c',
  gray100: '#808080',
  gray110: '#737373',
  gray120: '#666666',
  gray130: '#5d5d5d',
  gray140: '#525252',
  gray150: '#474747',
  gray160: '#383838',
  gray170: '#333333',
  gray180: '#262626',
  gray190: '#212121',
  gray200: '#171717',

  blue10: '#eaf2f6',
  blue20: '#d5e5ed',
  blue40: '#abcbdb',
  blue60: '#82b0c9',
  blue80: '#5897b8',
  blue90: '#4289ad',
  blue100: '#2e7ca5',
  blue140: '#25607f',
  blue170: '#143c50',

  purple80: '#b46ab4',
  purple140: '#954b95',
  red100: '#b90835',

  signalBlue10: '#eaf2f6',
  signalBlue100: '#0066cc',
  signalGreen20: '#d5f2d9',
  signalGreen30: '#bae5c5',
  signalGreen100: '#008d3c',
  signalYellow10: '#fff8e1',
  signalYellow100: '#fdb813',
  signalRed10: '#ffefef',
  signalRed20: '#ffdfdf',
  signalRed30: '#fcc8c8',
  signalRed40: '#f9b0b0',
  signalRed50: '#f69999',
  signalRed60: '#f38181',
  signalRed70: '#ef6a6a',
  signalRed80: '#eb4e4e',
  signalRed90: '#e93b3b',
  signalRed100: '#e62323',
  signalRed110: '#d12020',
  signalRed120: '#bc1d1d',
  signalRed130: '#a71919',
  signalRed140: '#921616',
  signalRed150: '#7d1313',
  signalRed160: '#691010',
  signalRed170: '#540d0d',
  signalRed180: '#3f0a0a',
  signalRed190: '#2a0606',
  signalRed200: '#150303',
}

export const typography = {
  fontFamily: '"Inter", sans-serif',

  lineHeight10: 1, // 16px
  lineHeight20: 1.125, // 18px (18/16)
  lineHeight30: 1.25, // 20px (20/16)
  lineHeight40: 1.375, // 22px (22/16)
  lineHeight50: 1.5, // 24px (24/16)
  lineHeight60: 1.75, // 28px (28/16)
  lineHeight70: 2, // 32px (32/16)
  lineHeight80: 2.25, // 36px (36/16)
  lineHeight90: 2.5, // 40px (40/16)
  lineHeight100: 2.75, // 44px (44/16)

  fontSize10: '0.75rem', // 12px (12/16)
  fontSize20: '0.875rem', // 14px (14/16)
  fontSize30: '1rem', // 16px (16/16)
  fontSize40: '1.125rem', // 18px (18/16)
  fontSize50: '1.25rem', // 20px (20/16)
  fontSize60: '1.5rem', // 24px (24/16)
  fontSize70: '1.75rem', // 28px (28/16)
  fontSize80: '2rem', // 32px (32/16)
  fontSize90: '2.25rem', // 36px (36/16)
  fontSize100: '2.625rem', // 42px (40/16)

  weightThin: 100,
  weightExtraLight: 200,
  weightLight: 300,
  weightRegular: 400,
  weightMedium: 500,
  weightSemiBold: 600,
  weightBold: 700,
  weightExtraBold: 800,
  weightBlack: 900,
}

export const spacing = {
  '10': '0.125rem', // 2px
  '20': '0.25rem', // 4px
  '30': '0.5rem', // 8px
  '40': '0.75rem', // 12px
  '50': '1rem', // 16px
  '60': '1.5rem', // 24px
  '70': '2rem', // 32px
  '80': '2.5rem', // 40px
  '90': '3rem', // 48px
  '100': '4rem', // 64px
  '110': '5rem', // 80px
  '120': '6rem', // 96px
}

export const states = {
  focus:
    '0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)',
}

export const transitions = {
  slow: '500ms',
  normal: '300ms',
  fast: '250ms',
}

export const windowSizes = {
  md: 768,
  lg: 1200,
  xl: 1440,
}

export const breakpoints = {
  sm: `(max-width: ${windowSizes.md - 1}px)`,
  md: `(min-width: ${windowSizes.md}px)`,
  lg: `(min-width: ${windowSizes.lg}px)`,
  xl: `(min-width: ${windowSizes.xl}px)`,
  forcedColorsMode: '(forced-colors: active)',
  darkMode: '(prefers-color-scheme: dark)',
  prefersReducedMotion: '(prefers-reduced-motion: reduced)',
}

export const semantic = {
  background: `light-dark(${baseColors.white}, ${baseColors.gray200})`,
  backgroundHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray190})`,
  backgroundInverse: `light-dark(${baseColors.gray200}, ${baseColors.gray10})`,

  layer01: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  layerHover01: `light-dark(${baseColors.gray20}, ${baseColors.gray170})`,
  layerSelected01: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,
  layerSelectedHover01: `light-dark(${baseColors.gray40}, ${baseColors.gray150})`,

  layer02: `light-dark(${baseColors.white}, ${baseColors.gray160})`,
  layerHover02: `light-dark(${baseColors.whiteHover}, ${baseColors.gray150})`,
  layerSelected02: `light-dark(${baseColors.gray30}, ${baseColors.gray140})`,
  layerSelectedHover02: `light-dark(${baseColors.gray40}, ${baseColors.gray130})`,

  layerAccent01: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,
  layerAccentHover01: `light-dark(${baseColors.gray40}, ${baseColors.gray150})`,
  layerAccentSelected01: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,

  layerAccent02: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  layerAccentHover02: `light-dark(${baseColors.gray20}, ${baseColors.gray170})`,
  layerAccentSelected02: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,

  brandPrimary: `light-dark(${baseColors.red100}, ${baseColors.red100})`,

  borderPrimary: `light-dark(${baseColors.gray200}, ${baseColors.gray10})`,
  borderSecondary: `light-dark(${baseColors.gray110}, ${baseColors.gray90})`,
  borderSubtle: `light-dark(${baseColors.gray50}, ${baseColors.gray160})`,
  borderTertiary: `light-dark(${baseColors.blue170}, ${baseColors.blue100})`,
  /*
   * @deprecated
   * Deprecated in 8.2.0
   * Please use --support-border-warning instead.
   */
  borderInvalid: `light-dark(${baseColors.signalRed100}, ${baseColors.signalRed80})`,
  borderDisabled: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,

  field01: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  fieldHover01: `light-dark(${baseColors.gray20}, ${baseColors.gray170})`,
  fieldActive01: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,

  field02: `light-dark(${baseColors.white}, ${baseColors.gray160})`,
  fieldHover02: `light-dark(${baseColors.whiteHover}, ${baseColors.gray150})`,
  fieldActive02: `light-dark(${baseColors.gray30}, ${baseColors.gray140})`,

  fieldDisabled: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  fieldSkeleton: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,

  iconPrimary: `light-dark(${baseColors.gray200}, ${baseColors.gray10})`,
  iconSecondary: `light-dark(${baseColors.gray140}, ${baseColors.gray70})`,
  iconTertiary: `light-dark(${baseColors.blue170}, ${baseColors.gray10})`,
  iconInverse: `light-dark(${baseColors.white}, ${baseColors.gray200})`,
  iconOnColor: `light-dark(${baseColors.white}, ${baseColors.white})`,
  iconDisabled: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,
  iconSuccess: `light-dark(${baseColors.signalGreen100}, ${baseColors.signalGreen100})`,
  iconInfo: `light-dark(${baseColors.signalBlue100}, ${baseColors.signalBlue100})`,
  iconWarning: `light-dark(${baseColors.signalRed100}, ${baseColors.signalRed100})`,
  iconImportant: `light-dark(${baseColors.signalYellow100}, ${baseColors.signalYellow100})`,

  linkEnabled: `light-dark(${baseColors.blue100}, ${baseColors.blue90})`,
  linkHover: `light-dark(${baseColors.blue170}, ${baseColors.blue80})`,
  linkPressed: `light-dark(${baseColors.gray200}, ${baseColors.blue60})`,
  linkVisited: `light-dark(${baseColors.purple140}, ${baseColors.purple80})`,

  supportBorderSuccess: `light-dark(${baseColors.signalGreen100}, ${baseColors.signalGreen100})`,
  supportBorderInfo: `light-dark(${baseColors.signalBlue100}, ${baseColors.signalBlue100})`,
  supportBorderImportant: `light-dark(${baseColors.signalYellow100}, ${baseColors.signalYellow100})`,
  supportBorderWarning: `light-dark(${baseColors.signalRed100}, ${baseColors.signalRed100})`,
  supportBackgroundSuccess: `light-dark(${baseColors.signalGreen20}, ${baseColors.gray180})`,
  supportBackgroundSuccessHover: `light-dark(${baseColors.signalGreen30}, ${baseColors.gray170})`,
  supportBackgroundInfo: `light-dark(${baseColors.signalBlue10}, ${baseColors.gray180})`,
  supportBackgroundImportant: `light-dark(${baseColors.signalYellow10}, ${baseColors.gray180})`,
  supportBackgroundWarning: `light-dark(${baseColors.signalRed20}, ${baseColors.gray180})`,
  supportBackgroundWarningHover: `light-dark(${baseColors.signalRed30}, ${baseColors.gray170})`,

  textPrimary: `light-dark(${baseColors.gray200}, ${baseColors.gray10})`,
  textSecondary: `light-dark(${baseColors.gray140}, ${baseColors.gray70})`,
  textTertiary: `light-dark(${baseColors.blue170}, ${baseColors.gray10})`,
  textOnColor: `light-dark(${baseColors.white}, ${baseColors.white})`,
  textInverse: `light-dark(${baseColors.gray10}, ${baseColors.gray200})`,
  textDisabled: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,
  textInvalid: `light-dark(${baseColors.signalRed100}, ${baseColors.signalRed80})`,
  textPlaceholder: `light-dark(${baseColors.gray70}, ${baseColors.gray140})`,

  buttonBackgroundPrimary: `light-dark(${baseColors.blue170}, ${baseColors.blue100})`,
  buttonBackgroundPrimaryHover: `light-dark(${baseColors.blue140}, ${baseColors.blue140})`,
  buttonBackgroundPrimaryActive: `light-dark(${baseColors.blue100}, ${baseColors.blue170})`,
  buttonBackgroundSecondary: `light-dark(${baseColors.white}, ${baseColors.gray200})`,
  buttonBackgroundSecondaryHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray190})`,
  buttonBackgroundSecondaryActive: `light-dark(${baseColors.gray30}, ${baseColors.gray180})`,
  buttonBackgroundTertiaryHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray190})`,
  buttonBackgroundTertiaryActive: `light-dark(${baseColors.gray30}, ${baseColors.gray180})`,
  buttonBackgroundDanger: `light-dark(${baseColors.signalRed100}, ${baseColors.signalRed100})`,
  buttonBackgroundDangerHover: `light-dark(${baseColors.signalRed120}, ${baseColors.signalRed120})`,
  buttonBackgroundDangerActive: `light-dark(${baseColors.signalRed150}, ${baseColors.signalRed150})`,
  buttonBackgroundDisabled: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  buttonBackgroundSkeleton: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  buttonBorderSecondary: `light-dark(${baseColors.blue170}, ${baseColors.gray10})`,

  logoPrimary: `light-dark(${baseColors.red100}, ${baseColors.white})`,

  menuItemBackgroundHover: `light-dark(${baseColors.gray20}, ${baseColors.gray190})`,
  menuItemBackgroundSelected: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
}

export const zIndex = {
  base: 1,
  above: 10,
  modal: 1000,
  toast: 1100,
  skipToContent: 1200,
}
