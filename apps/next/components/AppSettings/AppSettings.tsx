'use client'

import { Heading } from '@midas-ds/components'
import { PanelBehaviorToggle } from '../PanelBehaviorToggle/PanelBehaviorToggle'
import styles from './AppSettings.module.css'

export const AppSettings = () => {
  return (
    <section className={styles.settings}>
      <Heading level={2}>Test settings</Heading>
      <PanelBehaviorToggle />
    </section>
  )
}
