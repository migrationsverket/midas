'use client'

import { Button } from '../../button'
import styles from '../Layout.module.css'
import * as React from 'react'
import { useLocalizedStringFormatter } from '../../utils/intl'
import messages from '../intl/translations.json'

interface SkipLinkProps {
  id?: string
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  id = '#main:first-of-type',
}) => {
  const handleSkipToContent = () => {
    const container = document.querySelector<HTMLElement>(id)

    if (container) {
      container.tabIndex = -1
      container.focus()
      setTimeout(() => container.removeAttribute('tabindex'), 1000)
    }
  }

  const strings = useLocalizedStringFormatter(messages)

  return (
    <Button
      onPress={handleSkipToContent}
      className={styles.skipToContent}
    >
      {strings.format('skipToContent')}
    </Button>
  )
}
