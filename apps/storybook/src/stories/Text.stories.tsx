import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '@midas-ds/components'
import { expect } from 'storybook/test'

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
    children: 'I am a paragraph with the variant of "body-02"',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px',
    })
  },
}

export const ExpressiveBody02: Story = {
  args: {
    variant: 'body-02',
    children:
      'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',
    isExpressive: true,
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
    })
  },
}

export const Span: Story = {
  args: {
    variant: 'body-02',
    elementType: 'span',
    children: 'I am a span element with the variant of "body-02"',
  },
  play: async ({ canvas, args: { children, elementType } }) => {
    const span = canvas.getByText(children as string)
    expect(span.nodeName.toLowerCase()).toBe(elementType)
    expect(span).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px',
    })
  },
}

export const Description: Story = {
  args: {
    slot: 'description',
    children: 'I am a description with the slot of "description"',
  },
  play: async ({ canvas, args: { children } }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '14px',
      'line-height': '18px',
      'font-weight': 400,
    })
  },
}
export default meta
