import * as React from 'react'
import styles from './DateInput.module.css'

export const DateInputDivider: React.FC = () => (
  <span
    aria-hidden='true'
    className={styles.divider}
  >
    -
  </span>
)
