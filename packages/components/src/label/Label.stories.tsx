import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'
import { expect } from '@storybook/test'

type Story = StoryObj<typeof Label>

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Typography/Label',
  tags: ['autodocs'],
}

export const LabelBase: Story = {
  args: {
    children: 'I am a label.',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px',
      'font-weight': 500,
    })
  },
}

export const Label01: Story = {
  args: {
    variant: 'label-01',
    children: 'I am a label with the variant of "label-01"',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '14px',
      'line-height': '18px',
      'font-weight': 400,
    })
  },
}

export const Label02: Story = {
  args: {
    variant: 'label-02',
    children: 'I am a label with the variant of "label-02"',
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
