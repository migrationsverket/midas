import { createContext } from 'react'
import { type LogoProps } from './Logo'

export type LogoContextValue = Pick<LogoProps, 'size'>

export const LogoContext = createContext<LogoProps>({
  size: undefined,
})
