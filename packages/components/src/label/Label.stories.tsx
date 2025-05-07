import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'
import { expect } from '@storybook/test'

type Story = StoryObj<typeof Label>

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Typography/Label',
  tags: ['autodocs'],
}

export const _Label: Story = {
  args: {
    children: 'I am a label',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px',
      'font-weight': 500,
    })
  },
}

export default meta
