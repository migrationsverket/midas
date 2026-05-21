'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import * as React from 'react'
import { VisuallyHidden } from 'react-aria'
import { Key } from 'react-aria-components'
import { SelectionIndicator } from 'react-aria-components'
import { ToggleButton, ToggleButtonGroup } from '../toggle-button'
import styles from './ColorSchemeSwitch.module.css'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export type ColorScheme = 'light' | 'dark' | 'light dark'

export interface ColorSchemeSwitchProps {
  /** The CSS selector for the element to apply the color scheme to.
   * @default ':root'
   */
  selector?: string
  /** The default color scheme. Use `'light dark'` to follow the system setting.
   * @default 'light dark'
   */
  defaultScheme?: ColorScheme
  /** The controlled color scheme. When provided, the component becomes controlled — pair with `onSchemeChange` to update it. */
  scheme?: ColorScheme
  /** Called when the user selects a new color scheme. Use this to persist the selection, e.g. to `localStorage`. */
  onSchemeChange?: (scheme: ColorScheme) => void
  /**
   * @deprecated since v17.9.0 Use `defaultScheme` instead.
   */
  defaultValue?: Set<ColorScheme>
  className?: string
}

export const ColorSchemeSwitch: React.FC<ColorSchemeSwitchProps> = ({
  selector = ':root',
  defaultScheme = 'light dark',
  scheme,
  onSchemeChange,
  defaultValue,
  className,
}) => {
  const [colorScheme, setColorScheme] = React.useState<Set<Key>>(
    defaultValue ?? new Set([scheme ?? defaultScheme]),
  )

  const resolvedKeys = scheme ? new Set<Key>([scheme]) : colorScheme

  React.useEffect(() => {
    const targetElement = document.querySelector<HTMLElement>(selector)

    if (targetElement) {
      const resolved = Array.from(resolvedKeys).join(' ')
      targetElement.style.removeProperty('color-scheme')
      if (resolved === 'light dark') {
        delete targetElement.dataset.colorScheme
      } else {
        targetElement.dataset.colorScheme = resolved
      }
    } else {
      console.warn(`No element found for selector: "${selector}"`)
    }
  }, [resolvedKeys, selector])

  const strings = useLocalizedStringFormatter(messages)

  const handleSelectionChange = (keys: Set<Key>) => {
    const next = Array.from(keys)[0] as ColorScheme
    setColorScheme(keys)
    onSchemeChange?.(next)
  }

  return (
    <ToggleButtonGroup
      selectionMode='single'
      selectedKeys={resolvedKeys}
      onSelectionChange={handleSelectionChange}
      disallowEmptySelection
      className={className}
    >
      <ToggleButton
        id='light dark'
        className={styles.button}
      >
        <Laptop />
        <VisuallyHidden>{strings.format('system')}</VisuallyHidden>
        <SelectionIndicator className={styles.selectionIndicator} />
      </ToggleButton>
      <ToggleButton
        id='light'
        className={styles.button}
      >
        <Sun />
        <VisuallyHidden>{strings.format('lightMode')}</VisuallyHidden>
        <SelectionIndicator className={styles.selectionIndicator} />
      </ToggleButton>
      <ToggleButton
        id='dark'
        className={styles.button}
      >
        <Moon />
        <VisuallyHidden>{strings.format('darkMode')}</VisuallyHidden>
        <SelectionIndicator className={styles.selectionIndicator} />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
