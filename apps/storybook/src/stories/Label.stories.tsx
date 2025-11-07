import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@midas-ds/components'

type Story = StoryObj<typeof Label>

export default {
  component: Label,
  title: 'Components/Typography/Label',
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export const Primary: Story = {
  args: {
    children: 'I am a label',
  },
}
