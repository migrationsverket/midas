'use client'

import { Button } from '../../button'
import styles from '../Layout.module.css'
import * as React from 'react'

export const SkipLink: React.FC = ({
  id = 'main:first-of-type',
}: {
  id?: string
}) => {
  const handleSkipToContent = () => {
    const container: HTMLElement | null = document.querySelector(id)

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
