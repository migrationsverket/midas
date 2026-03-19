'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import * as React from 'react'
import { VisuallyHidden } from 'react-aria'
import { Key } from 'react-aria-components'
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
  /**
   * @deprecated since v17.9.0 Use `defaultScheme` instead.
   */
  defaultValue?: Set<ColorScheme>
  className?: string
}

export const ColorSchemeSwitch: React.FC<ColorSchemeSwitchProps> = ({
  selector = ':root',
  defaultScheme = 'light dark',
  defaultValue,
  className,
}) => {
  const [colorScheme, setColorScheme] = React.useState<Set<Key>>(
    defaultValue ?? new Set([defaultScheme]),
  )

  React.useEffect(() => {
    const targetElement = document.querySelector<HTMLElement>(selector)

    if (targetElement) {
      const scheme = Array.from(colorScheme).join(' ')
      targetElement.style.removeProperty('color-scheme')
      if (scheme === 'light dark') {
        delete targetElement.dataset.colorScheme
      } else {
        targetElement.dataset.colorScheme = scheme
      }
    } else {
      console.warn(`No element found for selector: "${selector}"`)
    }
  }, [colorScheme, selector])

  const strings = useLocalizedStringFormatter(messages)

  return (
    <ToggleButtonGroup
      selectionMode='single'
      selectedKeys={colorScheme}
      onSelectionChange={setColorScheme}
      disallowEmptySelection
      className={className}
    >
      <ToggleButton
        id='light dark'
        className={styles.button}
      >
        <Laptop />
        <VisuallyHidden>{strings.format('system')}</VisuallyHidden>
      </ToggleButton>
      <ToggleButton
        id='light'
        className={styles.button}
      >
        <Sun />
        <VisuallyHidden>{strings.format('lightMode')}</VisuallyHidden>
      </ToggleButton>
      <ToggleButton
        id='dark'
        className={styles.button}
      >
        <Moon />
        <VisuallyHidden>{strings.format('darkMode')}</VisuallyHidden>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
