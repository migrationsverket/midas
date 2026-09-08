'use client'

import { useMediaQuery } from '@react-spectrum/utils'
import { variables } from '@midas-ds/theme'

export function useIsMobileDevice(): boolean {
  return useMediaQuery(`(max-width: ${variables.windowSizesLayoutSplit})`)
}
