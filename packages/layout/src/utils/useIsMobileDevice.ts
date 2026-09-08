'use client'

import { useContext } from 'react'
import { useMediaQuery } from '@react-spectrum/utils'
import { variables } from '@midas-ds/theme'
import { LayoutBreakpointContext } from '../layout/LayoutBreakpointContext'

export function useIsMobileDevice(): boolean {
  const breakpointOverride = useContext(LayoutBreakpointContext)
  const breakpoint =
    breakpointOverride !== undefined
      ? `${breakpointOverride}px`
      : variables.windowSizesLayoutSplit

  return useMediaQuery(`(max-width: ${breakpoint})`)
}
