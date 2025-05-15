import React from 'react'
import { Size } from '../common/types'

export interface MidasThemeProviderProps {
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   */
  size?: Size
}

const ThemeContext = React.createContext<MidasThemeProviderProps>({
  size: undefined,
})

export const MidasThemeProvider = ThemeContext.Provider

/**
 * Merge local props with the ones provided via context by a parent component.
 * The local props always take precedence over the context values.
 */
export const useTheme = (localProps: MidasThemeProviderProps) => {
  const contextProps = React.useContext(ThemeContext)

  return {
    size: localProps.size || contextProps.size || 'large',
  } satisfies Required<MidasThemeProviderProps>
}
