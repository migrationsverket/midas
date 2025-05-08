import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { expect } from '@storybook/test'
import styles from './Skeleton.module.css'
const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  args: {
    variant: 'rectangle',
  },
  argTypes: {
    variant: {
      options: ['circle', 'rectangle', 'rectangular'],
      control: { type: 'radio' },
    },
    width: {
      type: 'string',
    },
    height: {
      type: 'string',
    },
    animation: {
      options: ['wave', false],
      control: { type: 'radio' },
      defaultValue: 'wave',
    },
    isAnimated: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: true,
    },
  },
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Rectangle: Story = {
  args: {
    variant: 'rectangle',
    width: '100px',
    height: '40px',
  },
  render: args => (
    <Skeleton
      {...args}
      data-testid='skeleton'
    />
  ),
  play: async ({ canvas }) => {
    const skeleton = canvas.getByTestId('skeleton')
    await expect(skeleton).toHaveClass(styles.wave, styles.skeleton)
  },
}

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '50px',
  },
  render: args => (
    <Skeleton
      {...args}
      data-testid='skeleton'
    />
  ),
  play: async ({ canvas }) => {
    const skeleton = canvas.getByTestId('skeleton')
    await expect(skeleton).toHaveClass(styles.wave, styles.circle)
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px',
  },
}

export const NoAnimation: Story = {
  args: {
    ...Rectangle.args,
    isAnimated: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Skeleton 
  height="40px" 
  isAnimated={false} 
  variant="rectangle" 
  width="100px"
/>`,
      },
    },
  },
  render: args => (
    <Skeleton
      {...args}
      data-testid='skeleton'
    />
  ),
  play: async ({ canvas }) => {
    const skeleton = canvas.getByTestId('skeleton')
    await expect(skeleton).not.toHaveClass(styles.wave)
  },
}

export const Animation: Story = {
  args: {
    ...Rectangle.args,
    isAnimated: true,
  },
  render: args => (
    <Skeleton
      {...args}
      data-testid='skeleton'
    />
  ),
  play: async ({ canvas }) => {
    const skeleton = canvas.getByTestId('skeleton')
    await expect(skeleton).toHaveClass(styles.wave)
  },
}

export const Wave: Story = {
  args: {
    ...Rectangle.args,
    animation: 'wave',
  },
}
