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
  blue50: '#abcbdb',
  blue60: '#82b0c9',
  blue70: '#6ca3c0',
  blue80: '#5897b8',
  blue90: '#4289ad',
  blue100: '#2e7ca5',
  blue140: '#25607f',
  blue170: '#143c50',

  purple: '#663366',
  red100: '#b90835',

  signalBlue20: '#eaf2f6',
  signalBlue130: '#0066cc',
  signalBlue140: '#0066cc',
  signalGreen20: '#d5f2d9',
  signalGreen130: '#008d3c',
  signalGreen140: '#008d3c',
  signalRed20: '#ffdfdf',
  signalRed130: '#e62323',
  signalRed140: '#e62323',
  signalRed150: '#801313',
  signalRed160: '#b31b1b',
  signalRed180: '#801313',
  signalYellow20: '#fff8e1',
  signalYellow130: '#fdb813',
  signalYellow140: '#fdb813',
}

export const typography = {
  fontFamily: '"Inter", sans-serif',

  lineHeight01: 1, // 16px
  lineHeight02: 1.125, // 18px (18/16)
  lineHeight03: 1.25, // 20px (20/16)
  lineHeight04: 1.375, // 22px (22/16)
  lineHeight05: 1.5, // 24px (24/16)
  lineHeight06: 1.75, // 28px (28/16)
  lineHeight07: 2, // 32px (32/16)
  lineHeight08: 2.25, // 36px (36/16)
  lineHeight09: 2.5, // 40px (40/16)

  size01: '0.75rem', // 12px (12/16)
  size02: '0.875rem', // 14px (14/16)
  size03: '1rem', // 16px (16/16)
  size04: '1.125rem', // 18px (18/16)
  size05: '1.25rem', // 20px (20/16)
  size06: '1.5rem', // 24px (24/16)
  size07: '1.75rem', // 28px (28/16)
  size08: '2rem', // 32px (32/16)
  size09: '2.25rem', // 36px (36/16)
  size10: '2.625rem', // 42px (40/16)

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
  '01': '0.125rem', // 2px
  '02': '0.25rem', // 4px
  '03': '0.5rem', // 8px
  '04': '0.75rem', // 12px
  '05': '1rem', // 16px
  '06': '1.5rem', // 24px
  '07': '2rem', // 32px
  '08': '2.5rem', // 40px
  '09': '3rem', // 48px
  '10': '4rem', // 64px
  '11': '5rem', // 80px
  '12': '6rem', // 96px
}

export const states = {
  focus: '0 0 0 2px white, 0 0 0 4px black',
}

export const transitions = {
  slow: '500ms',
  normal: '300ms',
  fast: '250ms',
}

export const breakpoints = {
  sm: '(max-width: 767px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1200px)',
  xl: '(min-width: 1440px)',
  forcedColorsMode: '(forced-colors: active)',
  darkMode: '(prefers-color-scheme: dark)',
  prefersReducedMotion: '(prefers-reduced-motion: reduced)',
}

export const semantic = {
  background01: `light-dark(${baseColors.white}, ${baseColors.gray30})`,
  backgroundHover01: `light-dark(${baseColors.whiteHover}, ${baseColors.gray190})`,
  backgroundInverse01: `light-dark(${baseColors.gray30}, ${baseColors.gray10})`,

  layer01: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  layerHover01: `light-dark(${baseColors.gray20}, ${baseColors.gray170})`,
  layerSelected01: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,
  layerSelectedHover01: `light-dark(${baseColors.gray40}, ${baseColors.gray20})`,

  layer02: `light-dark(${baseColors.white}, ${baseColors.gray160})`,
  layerHover02: `light-dark(${baseColors.whiteHover}, ${baseColors.gray20})`,
  layerSelected02: `light-dark(${baseColors.gray30}, ${baseColors.gray140})`,
  layerSelectedHover02: `light-dark(${baseColors.gray40}, ${baseColors.gray130})`,

  layerAccent01: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,
  layerAccentHover01: `light-dark(${baseColors.gray40}, ${baseColors.gray20})`,
  layerAccentSelected01: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,
  layerAccent02: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  layerAccentHover02: `light-dark(${baseColors.gray20}, ${baseColors.gray170})`,
  layerAccentSelected02: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,

  brandPrimary: `light-dark(${baseColors.red100}, ${baseColors.red100})`,

  borderStrong: `light-dark(${baseColors.gray30}, ${baseColors.gray10})`,
  borderMedium: `light-dark(${baseColors.gray110}, ${baseColors.gray90})`,
  borderSubtle: `light-dark(${baseColors.gray50}, ${baseColors.gray160})`,
  borderBrand: `light-dark(${baseColors.blue170}, ${baseColors.blue170})`,
  borderInvalid: `light-dark(${baseColors.signalRed130}, ${baseColors.signalRed130})`,
  borderDisabled: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,
  borderSkeleton: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  borderInverse: `light-dark(${baseColors.white}, ${baseColors.gray180})`,

  field01: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  fieldHover01: `light-dark(${baseColors.gray20}, ${baseColors.gray170})`,
  fieldActive01: `light-dark(${baseColors.gray30}, ${baseColors.gray160})`,

  field02: `light-dark(${baseColors.white}, ${baseColors.gray160})`,
  fieldHover02: `light-dark(${baseColors.whiteHover}, ${baseColors.gray20})`,
  fieldActive02: `light-dark(${baseColors.gray30}, ${baseColors.gray140})`,

  fieldDisabled: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  fieldSkeleton: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,

  iconPrimary: `light-dark(${baseColors.gray30}, ${baseColors.gray10})`,
  iconSecondary: `light-dark(${baseColors.blue170}, ${baseColors.blue170})`,
  iconInverse: `light-dark(${baseColors.white}, ${baseColors.black})`,
  iconOnColor: `light-dark(${baseColors.white}, ${baseColors.white})`,
  iconDanger: `light-dark(${baseColors.signalRed130}, ${baseColors.signalRed130})`,
  iconDisabled: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,
  iconSuccess: `light-dark(${baseColors.signalGreen130}, ${baseColors.signalGreen130})`,
  iconInfo: `light-dark(${baseColors.signalBlue130}, ${baseColors.signalBlue130})`,
  iconWarning: `light-dark(${baseColors.signalRed130}, ${baseColors.signalRed130})`,
  iconImportant: `light-dark(${baseColors.signalYellow130}, ${baseColors.signalYellow130})`,

  linkEnabled: `light-dark(${baseColors.blue100}, ${baseColors.blue90})`,
  linkHover: `light-dark(${baseColors.blue170}, ${baseColors.blue80})`,
  linkPressed: `light-dark(${baseColors.gray200}, ${baseColors.blue60})`,
  linkVisited: `light-dark(${baseColors.purple}, ${baseColors.purple})`,

  notificationBorderSuccess: `light-dark(${baseColors.signalGreen130}, ${baseColors.signalGreen130})`,
  notificationBorderInfo: `light-dark(${baseColors.signalBlue130}, ${baseColors.signalBlue130})`,
  notificationBorderImportant: `light-dark(${baseColors.signalYellow130}, ${baseColors.signalYellow130})`,
  notificationBorderWarning: `light-dark(${baseColors.signalRed130}, ${baseColors.signalRed130})`,
  notificationBackgroundSuccess: `light-dark(${baseColors.signalGreen20}, ${baseColors.gray10})`,
  notificationBackgroundInfo: `light-dark(${baseColors.signalBlue20}, ${baseColors.gray10})`,
  notificationBackgroundImportant: `light-dark(${baseColors.signalYellow20}, ${baseColors.gray10})`,
  notificationBackgroundWarning: `light-dark(${baseColors.signalRed20}, ${baseColors.gray10})`,

  textPrimary: `light-dark(${baseColors.gray30}, ${baseColors.gray10})`,
  textSecondary: `light-dark(${baseColors.gray140}, ${baseColors.gray70})`,
  textBrand: `light-dark(${baseColors.blue170}, ${baseColors.gray10})`,
  textOnColor: `light-dark(${baseColors.white}, ${baseColors.white})`,
  textInverse: `light-dark(${baseColors.white}, ${baseColors.black})`,
  textSubtle: `light-dark(${baseColors.gray90}, ${baseColors.gray90})`,
  textDisabled: `light-dark(${baseColors.gray50}, ${baseColors.gray140})`,
  textInvalid: `light-dark(${baseColors.signalRed130}, ${baseColors.signalRed130})`,
  textPlaceholder: `light-dark(${baseColors.gray70}, ${baseColors.gray140})`,

  buttonBackgroundPrimary: `light-dark(${baseColors.blue170}, ${baseColors.blue100})`,
  buttonBackgroundPrimaryHover: `light-dark(${baseColors.blue140}, ${baseColors.blue140})`,
  buttonBackgroundPrimaryActive: `light-dark(${baseColors.blue100}, ${baseColors.blue170})`,
  buttonBackgroundSecondary: `light-dark(${baseColors.white}, ${baseColors.gray30})`,
  buttonBackgroundSecondaryHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray190})`,
  buttonBackgroundSecondaryActive: `light-dark(${baseColors.gray30}, ${baseColors.gray180})`,
  buttonBackgroundTertiaryHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray190})`,
  buttonBackgroundTertiaryActive: `light-dark(${baseColors.gray30}, ${baseColors.gray180})`,
  buttonBackgroundDanger: `light-dark(${baseColors.signalRed130}, ${baseColors.signalRed130})`,
  buttonBackgroundDangerHover: `light-dark(${baseColors.signalRed140}, ${baseColors.signalRed140})`,
  buttonBackgroundDangerActive: `light-dark(${baseColors.signalRed150}, ${baseColors.signalRed150})`,
  buttonBackgroundDisabled: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  buttonBackgroundSkeleton: `light-dark(${baseColors.gray10}, ${baseColors.gray180})`,
  buttonBackgroundGhostHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray190})`,
  buttonBackgroundGhostActive: `light-dark(${baseColors.gray30}, ${baseColors.gray190})`,
  buttonBorderPrimary: `light-dark(${baseColors.blue170}, ${baseColors.gray10})`,

  logoPrimary: `light-dark(${baseColors.red100}, ${baseColors.white})`,
}
