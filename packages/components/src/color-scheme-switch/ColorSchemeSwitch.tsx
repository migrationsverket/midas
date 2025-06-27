'use client'

import { Laptop, Moon, Sun } from 'lucide-react'
import * as React from 'react'
import { VisuallyHidden } from 'react-aria'
import { Key } from 'react-aria-components'
import { ToggleButton, ToggleButtonGroup } from '../toggle-button'
import styles from './ColorSchemeSwitch.module.css'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export interface ColorSchemeSwitchProps {
  /** Choose what element that should be affected by the scheme switch.
   * @default body
   */
  selector?: string
  /** Set the default value for the color scheme. Default is "light dark" meaning follow system settings
   *
   * @default new Set(['light dark'])
   */
  defaultValue?: Set<'light' | 'dark' | 'light dark'>
  className?: string
}

export const ColorSchemeSwitch: React.FC<ColorSchemeSwitchProps> = ({
  selector = 'body',
  defaultValue = new Set(['light dark']),
  className,
}) => {
  // set hard to light or dark or "light dark" for system
  const [colorScheme, setColorScheme] = React.useState<Set<Key>>(defaultValue)

  React.useEffect(() => {
    const targetElement = document.querySelector<HTMLElement>(selector)

    if (targetElement) {
      targetElement.style.setProperty(
        'color-scheme',
        Array.from(colorScheme).join(' '),
      )
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
