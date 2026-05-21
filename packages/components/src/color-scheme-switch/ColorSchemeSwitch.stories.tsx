import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { ColorSchemeSwitch, type ColorScheme } from './ColorSchemeSwitch'

const meta: Meta<typeof ColorSchemeSwitch> = {
  component: ColorSchemeSwitch,
  title: 'Components/ColorSchemeSwitch',
  tags: ['autodocs'],
  args: {
    className: 'test-class',
  },
}

export default meta
type Story = StoryObj<typeof ColorSchemeSwitch>

export const Primary: Story = {}

export const WithCallback: Story = {
  render: () => {
    const [last, setLast] = useState<ColorScheme | null>(null)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <ColorSchemeSwitch onSchemeChange={setLast} />
        {last && <span>onSchemeChange called with: {last}</span>}
      </div>
    )
  },
}
