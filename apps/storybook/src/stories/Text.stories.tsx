import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '@midas-ds/components'

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

export const Body: Story = {
  args: {
    variant: 'body',
    elementType: 'p',
    children: 'I am a paragraph with the variant of "body"',
  },
}

export const BodySmall: Story = {
  args: {
    variant: 'bodySmall',
    elementType: 'p',
    children: 'I am a paragraph with the variant of "bodySmall"',
  },
}

export const Description: Story = {
  args: {
    variant: 'description',
    elementType: 'p',
    children: 'I am a paragraph with the variant of "description"',
  },
}

export const DescriptionSmall: Story = {
  args: {
    variant: 'descriptionSmall',
    elementType: 'p',
    children: 'I am a paragraph with the variant of "descriptionSmall"',
  },
}

export const ExpressiveBody: Story = {
  args: {
    variant: 'body',
    children:
      'I am a paragraph with the variant of "body" using the expressive/external look which has a slightly increased line height',
    isExpressive: true,
  },
}

export const Body01: Story = {
  name: 'Body01 (deprecated)',
  tags: ['deprecated'],
  args: {
    variant: 'body-01',
    elementType: 'p',
    children: 'I am a paragraph with the variant of "body-01" (deprecated, use "body" instead)',
  },
}

export const Body02: Story = {
  name: 'Body02 (deprecated)',
  tags: ['deprecated'],
  args: {
    variant: 'body-02',
    children: 'I am a paragraph with the variant of "body-02" (deprecated, use "body" instead)',
  },
}

export const Span: Story = {
  args: {
    variant: 'body',
    elementType: 'span',
    children: 'I am a span element with the variant of "body"',
  },
}

export const SlotDescription: Story = {
  args: {
    slot: 'description',
    children: 'I am a description with the slot of "description"',
  },
}
export default meta
