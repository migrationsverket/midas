'use client'

import { useMediaQuery } from '@react-spectrum/utils'

export function useIsMobileDevice(): boolean {
  return useMediaQuery('(max-width: 640px)')
}
