import { CopyButton } from '@midas-ds/components'
import styles from './CopyableText.module.css'

/** A name in the docs, e.g. an icon or a token, with a button that copies it */
export const CopyableText = ({ text }: { text: string }) => (
  <span className={styles.copyableText}>
    {text}
    <CopyButton
      value={text}
      aria-label={`Kopiera ${text}`}
      size='medium'
    />
  </span>
)
