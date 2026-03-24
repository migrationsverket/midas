'use client'

import { Button, Text } from '@midas-ds/components'
import { Info } from 'lucide-react'
import { useState } from 'react'
import styles from './Information.module.css'
import { Panel } from '@midas-ds/layout'

export const Information = () => {
  const [isDismissPanelOpen, setIsDismissPanelOpen] = useState(false)

  return (
    <Text className={styles.information}>
      This app tests components
      <Button
        className={styles.icon}
        variant='icon'
        size='medium'
        onPress={() => setIsDismissPanelOpen(prev => !prev)}
      >
        <Info size={20} />
      </Button>
      <Panel
        variant='dismiss'
        title='Details'
        aria-label='details panel'
        data-debug='Panel (dismiss)'
        isOpen={isDismissPanelOpen}
        onOpenChange={setIsDismissPanelOpen}
      >
        More information
      </Panel>
    </Text>
  )
}
