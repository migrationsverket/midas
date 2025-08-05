import type { Meta, StoryObj } from '@storybook/react'
import { DropZone } from './FileUpload'

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: 'Components/DropZone',
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof DropZone>


export const DropIt: Story = {
  args: {children: 'Drop something here'},
}
