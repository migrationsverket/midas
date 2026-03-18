'use client'

import { Button, Text } from '@midas-ds/components'
import { Info } from 'lucide-react'
import styles from './Information.module.css'
import { usePanels } from '@midas-ds/layout'

export const Information = () => {
  const { setPanels } = usePanels()

  return (
    <Text className={styles.information}>
      This app tests components
      <Button
        className={styles.icon}
        variant='icon'
        size='medium'
        onPress={() =>
          setPanels(panels => [
            ...panels,
            {
              id: 'details',
              title: 'Details',
              'aria-label': 'details panel',
              children: 'More information',
            },
          ])
        }
      >
        <Info size={20} />
      </Button>
    </Text>
  )
}
