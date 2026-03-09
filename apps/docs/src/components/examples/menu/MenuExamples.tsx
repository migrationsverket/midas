import { Button, Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'
import { MenuIcon } from 'lucide-react'
import React, { useState } from 'react'

export const OnActionExample: React.FC = () => {
  const [actions, setActions] = useState<string[]>([])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <MenuTrigger>
        <Button aria-label='Menu' variant='icon'>
          <MenuIcon size={20} />
        </Button>
        <MenuPopover>
          <Menu onAction={key => setActions(prev => [...prev, key as string])}>
            <MenuItem id='open'>Open</MenuItem>
            <MenuItem id='rename'>Rename...</MenuItem>
            <MenuItem id='duplicate'>Duplicate</MenuItem>
            <MenuItem id='share'>Share...</MenuItem>
            <MenuItem id='delete'>Delete...</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
      <div>
        <strong>onAction</strong>
        <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.25rem' }}>
          {actions.length === 0 && <li style={{ color: 'var(--midas-text-secondary)' }}>–</li>}
          {actions.map((action, i) => (
            <li key={i}>{action}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
