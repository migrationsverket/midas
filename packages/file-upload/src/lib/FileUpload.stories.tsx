import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
  title: 'FileUpload',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta
type Story = StoryObj<typeof FileUpload>

export const Primary: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    allowsMultiple: true,
  },
}
