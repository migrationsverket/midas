'use client'

import { ChevronDown, Moon, Sun } from 'lucide-react'
import { ContrastFilled } from '../icons'
import * as React from 'react'
import { VisuallyHidden } from 'react-aria'
import { Key, MenuItem as AriaMenuItem } from 'react-aria-components'
import { Button } from '../button'
import { Menu, MenuTrigger, MenuPopover } from '../menu'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import type { ColorScheme, ColorSchemeSwitchProps } from './ColorSchemeSwitch'
import styles from './ColorSchemeSwitchMenu.module.css'
import messages from './intl/translations.json'
import { useColorScheme } from './useColorScheme'

const schemeIcon: Record<ColorScheme, React.ElementType> = {
  light: Sun,
  'light dark': ContrastFilled,
  dark: Moon,
}

const schemeTriggerKey = (scheme: ColorScheme) =>
  scheme === 'light'
    ? 'triggerLightMode'
    : scheme === 'dark'
      ? 'triggerDarkMode'
      : 'triggerSystem'

export const ColorSchemeSwitchMenu: React.FC<
  Omit<ColorSchemeSwitchProps, 'defaultValue'>
> = ({
  selector = ':root',
  defaultScheme = 'light dark',
  scheme,
  onSchemeChange,
  className,
}) => {
  const { resolved, onChange } = useColorScheme({
    selector,
    defaultScheme,
    scheme,
    onSchemeChange,
  })
  const Icon = schemeIcon[resolved]

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

  const handleAction = (key: Key) => onChange(key as ColorScheme)

  return (
    <MenuTrigger>
      <Button
        variant='icon'
        size='medium'
        className={clsx(styles.trigger, className)}
        aria-label={strings.format(schemeTriggerKey(resolved))}
      >
        <Icon size={20} />
        <ChevronDown
          size={20}
          className={styles.chevron}
        />
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
            id='dark'
            textValue={strings.format('darkMode')}
            className={styles.menuItem}
          >
            <Moon size={20} />
            <VisuallyHidden>{strings.format('darkMode')}</VisuallyHidden>
          </AriaMenuItem>
          <AriaMenuItem
            id='light dark'
            textValue={strings.format('system')}
            className={styles.menuItem}
          >
            <ContrastFilled size={20} />
            <VisuallyHidden>{strings.format('system')}</VisuallyHidden>
          </AriaMenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
