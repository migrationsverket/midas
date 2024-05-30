export const baseColors = {
  white: '#ffffff',
  black: '#000000',
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
  gray130: '#5d5d5d',
  gray150: '#1f1f1f',
  red10: '#f7e9e7',
  red20: '#f1d4d1',
  red30: '#e9beba',
  red40: '#e2a8a4',
  red50: '#d9918e',
  red60: '#d37a7a',
  red70: '#cc6467',
  red80: '#c54c56',
  red90: '#be3345',
  red100: '#b90835',
  red130: '#8b1327',
  red150: '#641018',
  blue10: '#eaf2f6',
  blue20: '#d5e5ed',
  blue30: '#c0d7e4',
  blue40: '#abcbdb',
  blue50: '#94bcd1',
  blue60: '#82b0c9',
  blue70: '#6ca3c0',
  blue80: '#5897b8',
  blue90: '#4289ad',
  blue100: '#2e7ca5',
  blue130: '#25607f',
  blue150: '#143c50',
};

export const buttonColors = {
  outline: '#303030',
  primaryBackground: '#143c50',
  primaryText: '#303030',
  primaryHover: '#25607f',
  primaryFocus: '#000000',
  primaryActive: '#4289ae',
  secondaryBackground: '#5d5d5d',
  secondaryText: baseColors['white'],
  secondaryHover: '#303030',
  secondaryActive: '#303030',
};

export const inputColor = {
  inputText: baseColors['gray150'],
};

export const signalColors = {
  signalGreen10: '#d5f2d9',
  signalGreen100: '#008d3c',
  signalBlue10: baseColors['blue10'],
  signalBlue100: '#0066cc',
  signalYellow10: '#fff8e1',
  signalYellow100: '#f1c21b',
  signalRed10: '#ffdfdf',
  signalRed100: '#e62323',
  signalRed130: '#b31b1b',
};

export const borderRadii = {
  s: ' 0.125rem', // 2px
  m: ' 0.25rem', // 4px
};

export const borderWidths = {
  xs: ' 0.0625rem', // 1px
  s: ' 0.125rem', // 2px
  m: ' 0.25rem', // 4px
};

export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  black: '900',
};

export const fontSizes = {
  desktop: '1rem',
  mobile: '1rem',
  large: '1.5rem',
  inputNormal: '0.875rem',
  inputMessage: '0.75rem',
  inputLabel: '1rem',
  inputDescription: '0.875rem',
};

export const midasColors = {
  logoPrimary: baseColors['red100'],
  logoSecondary: baseColors['white'],
  textPrimary: baseColors['gray150'],
  textSecondary: baseColors['white'],
  textTertiary: baseColors['red100'],
  link: baseColors['blue130'],
  linkVisited: '#663366',
  backgroundPrimary: baseColors['white'],
  backgroundSecondary: baseColors['gray10'],
  backgroundFooter1: baseColors['red100'],
  backgroundFooter2: baseColors['red130'],
  backgroundInfo: baseColors['blue10'],
  backgroundImportant: signalColors['signalYellow10'],
  borderPrimary: baseColors['black'],
  borderSecondary: baseColors['gray60'],
  borderFocusOuter: baseColors['black'],
  borderFocusInner: baseColors['white'],
  iconPrimary: baseColors['black'],
  iconInverted: baseColors['white'],
};

export const midasTransitions = {
  slow: '500ms',
  normal: '300ms',
  fast: '250ms',
};

export const breakpoints = {
  // change later maybe
  sm: '(max-width: 767px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1200px)',
  xl: '(min-width: 1440px)',
};

export const accessibility = {
  forcedColors: '(forced-colors: active)',
};
