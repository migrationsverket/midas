import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from '@midas-ds/components'

type Story = StoryObj<typeof Heading>

export default {
  component: Heading,
  title: 'Components/Typography/Heading',
  tags: ['autodocs'],
  args: {
    isExpressive: false,
    enableMargins: false,
  },
  argTypes: {
    level: {
      control: {
        max: 6,
        min: 1,
      },
    },
  },
} satisfies Meta<typeof Heading>

export const Heading1: Story = {
  args: {
    level: 1,
    children: 'I am a regular h1 element',
  },
}

export const ExpressiveHeading1: Story = {
  args: {
    level: 1,
    children: 'I am an expressive h1 element',
    isExpressive: true,
  },
}

export const Heading2: Story = {
  args: {
    level: 2,
    children: 'I am a regular h2 element',
  },
}

export const ExpressiveHeading2: Story = {
  args: {
    level: 2,
    children: 'I am an expressive h2 element',
    isExpressive: true,
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    children: 'I am a regular h3 element',
  },
}

export const ExpressiveHeading3: Story = {
  args: {
    level: 3,
    children: 'I am an expressive h3 element',
    isExpressive: true,
  },
}

export const ExpressiveHeading4: Story = {
  args: {
    level: 4,
    children: 'I am an expressive h4 element',
    isExpressive: true,
  },
}

export const ExpressiveHeading5: Story = {
  args: {
    level: 5,
    children: 'I am an expressive h5 element',
    isExpressive: true,
  },
}

export const ChangeSemanticElement: Story = {
  args: {
    level: 3,
    elementType: 'h1',
    children: 'I am a regular h1 element with a look of a regular h3',
  },
}
