import type { Meta, StoryObj } from '@storybook/react'
import { SearchField } from './SearchField'

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: 'SearchField',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof SearchField>

export const Primary: Story = {
  args: {
    placeholder: 'Sök efter en person',
  },
}
