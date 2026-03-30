'use client'

import { Button } from '@midas-ds/components'
import { usePanels } from '@midas-ds/layout'

export const Information = () => {
  const { addPanel } = usePanels()

  return (
    <Button
      variant='secondary'
      onPress={() =>
        addPanel({
          id: 'details',
          title: 'Details',
          'aria-label': 'details panel',
          children: 'More information',
        })
      }
    >
      Open panel
    </Button>
  )
}
