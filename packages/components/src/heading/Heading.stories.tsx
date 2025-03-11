import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'
import { expect } from '@storybook/test'

type Story = StoryObj<typeof Heading>

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Typography/Heading',
  tags: ['autodocs'],
  args: {
    isExpressive: false,
  },
}

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Sapindales',
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '32px',
      'font-weight': 400,
    })
  },
}

export const ExpressiveHeading1: Story = {
  args: {
    ...Heading1.args,
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '44px',
      'font-weight': 400,
    })
  },
}

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Rutaceae',
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 400,
    })
  },
}

export const ExpressiveHeading2: Story = {
  args: {
    ...Heading2.args,
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '36px',
      'font-weight': 500,
    })
  },
}

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Citrus',
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600,
    })
  },
}

export const ExpressiveHeading3: Story = {
  args: {
    variant: 'h3',
    children: 'Citrus',
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '24px',
      'line-height': '32px',
      'font-weight': 600,
    })
  },
}

export const ExpressiveHeading4: Story = {
  args: {
    variant: 'h4',
    children: 'C. reticulata',
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 600,
    })
  },
}

export const ExpressiveHeading5: Story = {
  args: {
    variant: 'h5',
    children: 'Clementin',
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '24px',
      'font-weight': 600,
    })
  },
}

export const ChangeSemanticElement: Story = {
  args: {
    variant: 'h3',
    component: 'h1',
    children: 'A h1 that looks just like a h3',
  },
  play: async ({ canvas, args: { isExpressive } }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': isExpressive ? '24px' : '16px',
      'line-height': isExpressive ? '32px' : '24px',
      'font-weight': 600,
    })
  },
}

export default meta
