'use client'

import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import messages from './intl/translations.json'
import styles from './SkipToContent.module.css'

export interface SkipToContentProps {
  /**
   * A CSS selector that identifies the element to focus when the skip link is activated.
   * @default 'main:first-of-type'
   */
  selector?: string
}

export const SkipToContent = ({
  selector = 'main:first-of-type',
}: SkipToContentProps) => {
  const handlePress = () => {
    const container = document.querySelector<HTMLElement>(selector)

    if (container) {
      container.tabIndex = -1
      container.focus()
      container.addEventListener(
        'blur',
        () => container.removeAttribute('tabindex'),
        { once: true },
      )
    }
  }

  const strings = useLocalizedStringFormatter(messages)

  return (
    <Button
      onPress={handlePress}
      className={styles.skipToContent}
    >
      {strings.format('skipToContent')}
    </Button>
  )
}
