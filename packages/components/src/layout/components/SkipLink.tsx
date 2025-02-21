'use client'

import { Button } from '../../button'
import styles from '../Layout.module.css'
import * as React from 'react'

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

  return (
    <Button
      onPress={handleSkipToContent}
      className={styles.skipToContent}
    >
      Hoppa till huvudinnehåll
    </Button>
  )
}
