import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

type Story = StoryObj<typeof Text>

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Typography/Text',
  tags: ['autodocs'],
  args: {
    isExpressive: false,
  },
}

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const BodySmall: Story = {
  args: {
    size: 'small',
    children: 'I am a paragraph with small body text',
  },
}

export const Description: Story = {
  args: {
    slot: 'description',
    children: 'I am a description with the slot of "description"',
  },
}

export const DescriptionSmall: Story = {
  args: {
    slot: 'description',
    size: 'small',
    children: 'I am a paragraph with small description styling',
  },
}

export const Expressive: Story = {
  args: {
    children:
      'I am a paragraph using the expressive/external look which has a slightly increased line height',
    isExpressive: true,
  },
}

export const Body01: Story = {
  name: 'Body01 (deprecated)',
  tags: ['deprecated'],
  args: {
    variant: 'body-01',
    children: 'I am a paragraph with the variant of "body-01" (deprecated)',
  },
}

export const Body02: Story = {
  name: 'Body02 (deprecated)',
  tags: ['deprecated'],
  args: {
    variant: 'body-02',
    children: 'I am a paragraph with the variant of "body-02" (deprecated)',
  },
}
export default meta
