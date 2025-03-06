import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'
import { expect, within } from '@storybook/test'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Components/Logo',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['x-small', 'small', 'medium', 'large'],
    },
    background: {
      control: { type: 'boolean' },
    },
    primary: {
      control: { type: 'boolean' },
    },
    padding: {
      control: { type: 'boolean' },
    },
  },
}
export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {
  args: {
    className: 'test-class',
    // @ts-expect-error dont recognize this property
    'data-testid': 'test',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    // @ts-expect-error dont recognize this property
    const logotype = canvas.getByTestId(args['data-testid'])
    expect(logotype).toHaveClass(/container/, args.className as string)
  },
}

export const Dark: Story = {
  args: {
    primary: false,
  },
}

export const BackgroundPrimary: Story = {
  args: {
    background: true,
  },
}

export const BackgroundDark: Story = {
  args: {
    primary: false,
    background: true,
  },
}
