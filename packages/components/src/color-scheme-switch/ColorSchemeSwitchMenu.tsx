'use client'

import { ChevronDown, ChevronUp, Laptop, Moon, Sun } from 'lucide-react'
import * as React from 'react'
import { VisuallyHidden } from 'react-aria'
import { Key, MenuItem as AriaMenuItem } from 'react-aria-components'
import { Button } from '../button'
import { Menu, MenuTrigger } from '../menu'
import { MenuPopover } from '../menu'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import type { ColorScheme, ColorSchemeSwitchProps } from './ColorSchemeSwitch'
import styles from './ColorSchemeSwitchMenu.module.css'
import messages from './intl/translations.json'

const schemeIcon: Record<ColorScheme, React.ElementType> = {
  light: Sun,
  'light dark': Laptop,
  dark: Moon,
}

const schemeKey = (scheme: ColorScheme) =>
  scheme === 'light' ? 'lightMode' : scheme === 'dark' ? 'darkMode' : 'system'

export const ColorSchemeSwitchMenu: React.FC<
  Omit<ColorSchemeSwitchProps, 'defaultValue'>
> = ({
  selector = ':root',
  defaultScheme = 'light dark',
  scheme,
  onSchemeChange,
  className,
}) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    scheme ?? defaultScheme,
  )
  const [isOpen, setIsOpen] = React.useState(false)

  const resolved = scheme ?? colorScheme
  const Icon = schemeIcon[resolved]
  const Chevron = isOpen ? ChevronUp : ChevronDown

  React.useEffect(() => {
    const targetElement = document.querySelector<HTMLElement>(selector)
    if (!targetElement) {
      console.warn(`No element found for selector: "${selector}"`)
      return
    }
    if (resolved === 'light dark') {
      delete targetElement.dataset.colorScheme
    } else {
      targetElement.dataset.colorScheme = resolved
    }
  }, [resolved, selector])

  const strings = useLocalizedStringFormatter(messages)

  const handleAction = (key: Key) => {
    const next = key as ColorScheme
    setColorScheme(next)
    onSchemeChange?.(next)
  }

  return (
    <MenuTrigger
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <Button
        variant='icon'
        size='medium'
        className={clsx(styles.trigger, className)}
        aria-label={strings.format(schemeKey(resolved))}
      >
        <Icon size={20} />
        <Chevron size={20} />
      </Button>
      <MenuPopover placement='bottom start'>
        <Menu
          onAction={handleAction}
          className={styles.menu}
        >
          <AriaMenuItem
            id='light'
            textValue={strings.format('lightMode')}
            className={styles.menuItem}
          >
            <Sun size={20} />
            <VisuallyHidden>{strings.format('lightMode')}</VisuallyHidden>
          </AriaMenuItem>
          <AriaMenuItem
            id='light dark'
            textValue={strings.format('system')}
            className={styles.menuItem}
          >
            <Laptop size={20} />
            <VisuallyHidden>{strings.format('system')}</VisuallyHidden>
          </AriaMenuItem>
          <AriaMenuItem
            id='dark'
            textValue={strings.format('darkMode')}
            className={styles.menuItem}
          >
            <Moon size={20} />
            <VisuallyHidden>{strings.format('darkMode')}</VisuallyHidden>
          </AriaMenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
