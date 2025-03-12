export const baseColors = {
  black: '#000000',
  white: '#ffffff',

  blackHover: '#0d0d0d',
  whiteHover: '#e6e6e6',

  gray100: '#f2f2f2',
  gray150: '#e6e6e6',
  gray200: '#bfbfbf',
  gray250: '#cccccc',
  gray300: '#bfbfbf',
  gray350: '#b3b3b3',
  gray400: '#a6a6a6',
  gray450: '#999999',
  gray500: '#8c8c8c',
  gray550: '#808080',
  gray600: '#737373',
  gray650: '#666666',
  gray700: '#525252',
  gray750: '#5d5d5d',
  gray800: '#383838',
  gray850: '#474747',
  gray900: '#262626',
  gray950: '#333333',
  gray1000: '#171717',
  gray1050: '#212121',

  blue700: '#2e7ca5',
  blue800: '#25607f',
  blue900: '#143c50',
  blue200: '#d5e5ed',
  purple: '#663366',
  red700: '#b90835',
  signalBlue100: '#eaf2f6',
  signalBlue700: '#0066cc',
  signalGreen100: '#d5f2d9',
  signalGreen700: '#008d3c',
  signalRed100: '#ffdfdf',
  signalRed700: '#e62323',
  signalRed800: '#b31b1b',
  signalRed900: '#801313',
  signalYellow100: '#fff8e1',
  signalYellow700: '#fdb813',
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
  background01: `light-dark(${baseColors.white}, ${baseColors.gray1000})`,
  backgroundHover01: `light-dark(${baseColors.whiteHover}, ${baseColors.gray1050})`,
  backgroundInverse01: `light-dark(${baseColors.gray1000}, ${baseColors.gray100})`,
  layer01: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  layerHover01: `light-dark(${baseColors.gray150}, ${baseColors.gray950})`,
  layerSelected01: `light-dark(${baseColors.gray200}, ${baseColors.gray800})`,
  layerSelectedHover01: `light-dark(${baseColors.gray250}, ${baseColors.gray850})`,
  layer02: `light-dark(${baseColors.white}, ${baseColors.gray800})`,
  layerHover02: `light-dark(${baseColors.whiteHover}, ${baseColors.gray850})`,
  layerSelected02: `light-dark(${baseColors.gray200}, ${baseColors.gray700})`,
  layerSelectedHover02: `light-dark(${baseColors.gray250}, ${baseColors.gray750})`,
  layerAccent01: `light-dark(${baseColors.gray200}, ${baseColors.gray800})`,
  layerAccentHover01: `light-dark(${baseColors.gray250}, ${baseColors.gray850})`,
  layerAccentSelected01: `light-dark(${baseColors.gray300}, ${baseColors.gray700})`,
  layerAccent02: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  layerAccentHover02: `light-dark(${baseColors.gray150}, ${baseColors.gray950})`,
  layerAccentSelected02: `light-dark(${baseColors.gray200}, ${baseColors.gray800})`,
  brandPrimary: `light-dark(${baseColors.red700}, ${baseColors.red700})`,
  borderStrong: `light-dark(${baseColors.gray1000}, ${baseColors.gray100})`,
  borderMedium: `light-dark(${baseColors.gray600}, ${baseColors.gray500})`,
  borderSubtle: `light-dark(${baseColors.gray300}, ${baseColors.gray800})`,
  borderBrand: `light-dark(${baseColors.blue900}, ${baseColors.blue900})`,
  borderInvalid: `light-dark(${baseColors.signalRed700}, ${baseColors.signalRed700})`,
  borderDisabled: `light-dark(${baseColors.gray300}, ${baseColors.gray700})`,
  borderSkeleton: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  borderInverse: `light-dark(${baseColors.white}, ${baseColors.gray900})`,
  field01: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  fieldHover01: `light-dark(${baseColors.gray150}, ${baseColors.gray950})`,
  fieldActive01: `light-dark(${baseColors.gray200}, ${baseColors.gray800})`,
  field02: `light-dark(${baseColors.white}, ${baseColors.gray800})`,
  fieldHover02: `light-dark(${baseColors.whiteHover}, ${baseColors.gray850})`,
  fieldActive02: `light-dark(${baseColors.gray200}, ${baseColors.gray700})`,
  fieldDisabled: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  fieldSkeleton: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  iconPrimary: `light-dark(${baseColors.gray1000}, ${baseColors.gray100})`,
  iconSecondary: `light-dark(${baseColors.blue900}, ${baseColors.blue900})`,
  iconInverse: `light-dark(${baseColors.white}, ${baseColors.black})`,
  iconOnColor: `light-dark(${baseColors.white}, ${baseColors.white})`,
  iconDanger: `light-dark(${baseColors.signalRed700}, ${baseColors.signalRed700})`,
  iconDisabled: `light-dark(${baseColors.gray300}, ${baseColors.gray700})`,
  iconSuccess: `light-dark(${baseColors.signalGreen700}, ${baseColors.signalGreen700})`,
  iconInfo: `light-dark(${baseColors.signalBlue700}, ${baseColors.signalBlue700})`,
  iconWarning: `light-dark(${baseColors.signalRed700}, ${baseColors.signalRed700})`,
  iconImportant: `light-dark(${baseColors.signalYellow700}, ${baseColors.signalYellow700})`,
  linkEnabled: `light-dark(${baseColors.blue700}, ${baseColors.blue700})`,
  linkHover: `light-dark(${baseColors.blue900}, ${baseColors.blue700})`,
  linkPressed: `light-dark(${baseColors.black}, ${baseColors.white})`,
  linkVisited: `light-dark(${baseColors.purple}, ${baseColors.purple})`,
  notificationBorderSuccess: `light-dark(${baseColors.signalGreen700}, ${baseColors.signalGreen700})`,
  notificationBorderInfo: `light-dark(${baseColors.signalBlue700}, ${baseColors.signalBlue700})`,
  notificationBorderImportant: `light-dark(${baseColors.signalYellow700}, ${baseColors.signalYellow700})`,
  notificationBorderWarning: `light-dark(${baseColors.signalRed700}, ${baseColors.signalRed700})`,
  notificationBackgroundSuccess: `light-dark(${baseColors.signalGreen100}, ${baseColors.gray100})`,
  notificationBackgroundInfo: `light-dark(${baseColors.signalBlue100}, ${baseColors.gray100})`,
  notificationBackgroundImportant: `light-dark(${baseColors.signalYellow100}, ${baseColors.gray100})`,
  notificationBackgroundWarning: `light-dark(${baseColors.signalRed100}, ${baseColors.gray100})`,
  textPrimary: `light-dark(${baseColors.gray1000}, ${baseColors.gray100})`,
  textSecondary: `light-dark(${baseColors.gray700}, ${baseColors.gray400})`,
  textBrand: `light-dark(${baseColors.blue900}, ${baseColors.gray100})`,
  textOnColor: `light-dark(${baseColors.white}, ${baseColors.white})`,
  textInverse: `light-dark(${baseColors.white}, ${baseColors.black})`,
  textSubtle: `light-dark(${baseColors.gray500}, ${baseColors.gray500})`,
  textDisabled: `light-dark(${baseColors.gray300}, ${baseColors.gray700})`,
  textInvalid: `light-dark(${baseColors.signalRed700}, ${baseColors.signalRed700})`,
  textPlaceholder: `light-dark(${baseColors.gray400}, ${baseColors.gray700})`,
  buttonBackgroundPrimary: `light-dark(${baseColors.blue900}, ${baseColors.blue700})`,
  buttonBackgroundPrimaryHover: `light-dark(${baseColors.blue800}, ${baseColors.blue800})`,
  buttonBackgroundPrimaryActive: `light-dark(${baseColors.blue700}, ${baseColors.blue900})`,
  buttonBackgroundSecondary: `light-dark(${baseColors.white}, ${baseColors.gray1000})`,
  buttonBackgroundSecondaryHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray1050})`,
  buttonBackgroundSecondaryActive: `light-dark(${baseColors.gray200}, ${baseColors.gray900})`,
  buttonBackgroundTertiaryHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray1050})`,
  buttonBackgroundTertiaryActive: `light-dark(${baseColors.gray200}, ${baseColors.gray900})`,
  buttonBackgroundDanger: `light-dark(${baseColors.signalRed700}, ${baseColors.signalRed700})`,
  buttonBackgroundDangerHover: `light-dark(${baseColors.signalRed800}, ${baseColors.signalRed800})`,
  buttonBackgroundDangerActive: `light-dark(${baseColors.signalRed900}, ${baseColors.signalRed900})`,
  buttonBackgroundDisabled: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  buttonBackgroundSkeleton: `light-dark(${baseColors.gray100}, ${baseColors.gray900})`,
  buttonBackgroundGhostHover: `light-dark(${baseColors.whiteHover}, ${baseColors.gray1050})`,
  buttonBackgroundGhostActive: `light-dark(${baseColors.gray200}, ${baseColors.gray1050})`,
  buttonBorderPrimary: `light-dark(${baseColors.blue900}, ${baseColors.gray100})`,
}
