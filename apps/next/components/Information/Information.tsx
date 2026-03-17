'use client'

import { Button, Text } from '@midas-ds/components'
import { Info } from 'lucide-react'
import styles from './Information.module.css'
import { usePanel } from '@midas-ds/layout'

export const Information = () => {
  const { setPanel } = usePanel()

  return (
    <Text className={styles.information}>
      This app tests components
      <Button
        className={styles.icon}
        variant='icon'
        size='medium'
        onPress={() =>
          setPanel({
            title: 'Details',
            'aria-label': 'details panel',
            children: 'More information',
          })
        }
      >
        <Info size={20} />
      </Button>
    </Text>
  )
}
