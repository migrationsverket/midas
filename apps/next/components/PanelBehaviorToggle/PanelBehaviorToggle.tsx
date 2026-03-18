'use client'

import { Label, ToggleButton, ToggleButtonGroup } from '@midas-ds/components'
import { useAppStore } from '../../store/useAppStore'

export const PanelBehaviorToggle = () => {
  const panelBehavior = useAppStore(s => s.panelBehavior)
  const setPanelBehavior = useAppStore(s => s.setPanelBehavior)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Label>Panel behavior</Label>
      <ToggleButtonGroup
        selectionMode='single'
        selectedKeys={[panelBehavior]}
        onSelectionChange={keys => {
          const value = [...keys][0]
          if (value) setPanelBehavior(value as typeof panelBehavior)
        }}
      >
        <ToggleButton id='bring-to-front'>Bring to front</ToggleButton>
        <ToggleButton id='pop-to'>Pop to</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
