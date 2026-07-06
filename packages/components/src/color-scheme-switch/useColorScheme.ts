'use client'

import { useEffect, useState } from 'react'
import type { ColorScheme } from './ColorSchemeSwitch'

interface UseColorSchemeOptions {
  selector?: string
  defaultScheme?: ColorScheme
  scheme?: ColorScheme
  onSchemeChange?: (scheme: ColorScheme) => void
}

interface UseColorSchemeReturn {
  resolved: ColorScheme
  onChange: (next: ColorScheme) => void
}

export const useColorScheme = ({
  selector = ':root',
  defaultScheme = 'light dark',
  scheme,
  onSchemeChange,
}: UseColorSchemeOptions): UseColorSchemeReturn => {
  const [internal, setInternal] = useState<ColorScheme>(scheme ?? defaultScheme)

  const resolved = scheme ?? internal

  useEffect(() => {
    const target = document.querySelector<HTMLElement>(selector)
    if (!target) {
      console.warn(`No element found for selector: "${selector}"`)
      return
    }
    if (resolved === 'light dark') {
      delete target.dataset.colorScheme
    } else {
      target.dataset.colorScheme = resolved
    }
  }, [resolved, selector])

  const onChange = (next: ColorScheme) => {
    setInternal(next)
    onSchemeChange?.(next)
  }

  return { resolved, onChange }
}
