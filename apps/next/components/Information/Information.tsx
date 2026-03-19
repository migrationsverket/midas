'use client'

import { Button } from '@midas-ds/components'
import { useDismissPanels } from '@midas-ds/layout'

export const Information = () => {
  const { addPanel } = useDismissPanels()

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
