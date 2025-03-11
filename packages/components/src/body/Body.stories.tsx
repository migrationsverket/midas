import type { Meta, StoryObj } from '@storybook/react'
import { Body } from './Body'
import { expect } from '@storybook/test'

type Story = StoryObj<typeof Body>

const meta: Meta<typeof Body> = {
  component: Body,
  title: 'Components/Typography/Body',
  tags: ['autodocs'],
  args: {
    isExternal: false,
  },
}

export const Body02: Story = {
  args: {
    variant: 'normal',
    children: 'body-02',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px',
    })
  },
}

export const Body01: Story = {
  args: {
    variant: 'compact',
    children: 'body-01',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px',
    })
  },
}

export const ExpressiveBody: Story = {
  args: {
    variant: 'normal',
    children: 'Body',
    isExternal: true,
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
    })
  },
}

export default meta
