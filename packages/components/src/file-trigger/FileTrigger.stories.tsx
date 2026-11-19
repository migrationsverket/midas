import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../button'
import { FileTrigger } from './FileTrigger'

export default {
  component: FileTrigger,
  title: 'Components/FileTrigger',
  tags: ['autodocs'],
} satisfies Meta<typeof FileTrigger>

type Story = StoryObj<typeof FileTrigger>

export const Primary: Story = {
  render: args => (
    <FileTrigger {...args}>
      <Button variant='secondary'>Välj fil</Button>
    </FileTrigger>
  ),
}
