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
  argTypes: {
    level: {
      control: {
        max: 6,
        min: 1,
      },
    },
  },
}

export const Heading1: Story = {
  args: {
    level: 1,
    children: 'I am a regular h1 element',
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
    level: 1,
    children: 'I am an expressive h1 element',
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '48px',
      'font-weight': 400,
    })
  },
}

export const Heading2: Story = {
  args: {
    level: 2,
    children: 'I am a regular h2 element',
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
    level: 2,
    children: 'I am an expressive h2 element',
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '34px',
      'font-weight': 500,
    })
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    children: 'I am a regular h3 element',
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
    level: 3,
    children: 'I am an expressive h3 element',
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

export const ExpressiveHeading4: Story = {
  args: {
    level: 4,
    children: 'I am an expressive h4 element',
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '26px',
      'font-weight': 600,
    })
  },
}

export const ExpressiveHeading5: Story = {
  args: {
    level: 5,
    children: 'I am an expressive h5 element',
    isExpressive: true,
  },
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600,
    })
  },
}

export const ChangeSemanticElement: Story = {
  args: {
    level: 3,
    elementType: 'h1',
    children: 'I am a regular h1 element with a look of a regular h3',
  },
  play: async ({ canvas, args: { isExpressive, elementType } }) => {
    const heading = canvas.getByRole('heading')
    expect(heading.nodeName.toLowerCase()).toBe(elementType)
    expect(heading).toHaveStyle({
      'font-size': isExpressive ? '24px' : '16px',
      'line-height': isExpressive ? '32px' : '24px',
      'font-weight': 600,
    })
  },
}

export default meta
