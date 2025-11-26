import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@midas-ds/components'
import styles from './CopyButton.module.css'

export interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <span className={styles.copyButtonContainer}>
      <span className={styles.text}>{text}</span>
      <Button
        variant="icon"
        size="medium"
        onPress={handleClick}
        aria-label={`Copy ${text}`}
        className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
      >
        <Copy size={16} aria-hidden />
        <Check size={16} aria-hidden />
      </Button>
    </span>
  )
}
