'use client'

import { useSyncExternalStore } from 'react'

const QUERY = '(max-width: 640px)'

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

const getSnapshot = () => window.matchMedia(QUERY).matches

// No window on the server, and the first client render has to match it
const getServerSnapshot = () => false

export function useIsMobileDevice(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
