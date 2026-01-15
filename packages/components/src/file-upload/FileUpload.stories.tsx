import type { Meta, StoryObj } from '@storybook/react-vite'
import { DropZone } from './FileUpload'

type Story = StoryObj<typeof DropZone>

export default {
  component: DropZone,
  title: 'Components/DropZone',
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof DropZone>

export const DropIt: Story = {
  args: { children: 'Drop something here' },
}
