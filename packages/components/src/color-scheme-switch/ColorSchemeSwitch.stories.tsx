import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorSchemeSwitch } from './ColorSchemeSwitch'

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
