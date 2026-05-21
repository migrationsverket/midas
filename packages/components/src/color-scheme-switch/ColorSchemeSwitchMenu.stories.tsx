import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { type ColorScheme } from './ColorSchemeSwitch'
import { ColorSchemeSwitchMenu } from './ColorSchemeSwitchMenu'

const meta: Meta<typeof ColorSchemeSwitchMenu> = {
  component: ColorSchemeSwitchMenu,
  title: 'Components/ColorSchemeSwitchMenu',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ColorSchemeSwitchMenu>

export const Primary: Story = {}

export const WithCallback: Story = {
  render: () => {
    const [last, setLast] = useState<ColorScheme | null>(null)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <ColorSchemeSwitchMenu onSchemeChange={setLast} />
        {last && <span>onSchemeChange called with: {last}</span>}
      </div>
    )
  },
}
