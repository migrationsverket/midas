import type { Meta, StoryObj } from '@storybook/react'
import { Body } from './Body'
import { expect } from '@storybook/test'

type Story = StoryObj<typeof Body>

const meta: Meta<typeof Body> = {
  component: Body,
  title: 'Components/Typography/Body',
  tags: ['autodocs'],
  args: {
    isExpressive: false,
  },
}

export const Body01: Story = {
  args: {
    variant: 'body-01',
    children: 'body-01',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px',
    })
  },
}

export const Body02: Story = {
  args: {
    variant: 'body-02',
    children: 'body-02',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px',
    })
  },
}

export const ExpressiveBody: Story = {
  args: {
    variant: 'body-02',
    children: 'Body',
    isExpressive: true,
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
    })
  },
}

export default meta
