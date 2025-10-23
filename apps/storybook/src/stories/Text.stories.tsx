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

export const Body01: Story = {
  args: {
    variant: 'body-01',
    elementType: 'p',
    children: 'I am a paragraph with the variant of "body-01"',
  },
}

export const Body02: Story = {
  args: {
    variant: 'body-02',
    children: 'I am a paragraph with the variant of "body-02"',
  },
}

export const ExpressiveBody02: Story = {
  args: {
    variant: 'body-02',
    children:
      'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',
    isExpressive: true,
  },
}

export const Span: Story = {
  args: {
    variant: 'body-02',
    elementType: 'span',
    children: 'I am a span element with the variant of "body-02"',
  },
}

export const Description: Story = {
  args: {
    slot: 'description',
    children: 'I am a description with the slot of "description"',
  },
}
export default meta
