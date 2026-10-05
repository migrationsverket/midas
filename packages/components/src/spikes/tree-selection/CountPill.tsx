import { VisuallyHidden } from 'react-aria'
import styles from './spikes.module.css'

/**
 * A small pill with the number of selected ärendetyper. Midas' Badge is a
 * notification dot meant to sit on an icon, so the spike has its own. Screen
 * readers hear "3 valda" instead of a bare number.
 */
export const CountPill = ({
  count,
  hideWhenZero = true,
  tone = 'default',
}: {
  count: number
  hideWhenZero?: boolean
  /** `inverse` for use on a primary button */
  tone?: 'default' | 'inverse'
}) => {
  if (hideWhenZero && count === 0) return null

  return (
    <span
      className={
        tone === 'inverse'
          ? `${styles.countPill} ${styles.countPillInverse}`
          : styles.countPill
      }
    >
      {count}
      <VisuallyHidden> valda</VisuallyHidden>
    </span>
  )
}
