'use client'

import * as React from 'react'
import { Button, MidasButton } from '../button'
import { X } from 'lucide-react'

export const ClearButton: React.FC<MidasButton> = props => {
  return (
    <Button
      variant='icon'
      slot={null}
      {...props}
    >
      <X
        size={20}
        aria-hidden
      />
    </Button>
  )
}
