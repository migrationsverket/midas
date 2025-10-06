import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from '@midas-ds/components'
import { expect } from 'storybook/test'
import styles from '@midas-ds/components/skeleton/Skeleton.module.css'
import { variables } from '@midas-ds/theme'
const { layer01Base } = variables

type Story = StoryObj<typeof Skeleton>

export default {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  args: {
    variant: 'rectangle',
  },
  argTypes: {
    isAnimated: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  render: args => (
    <Skeleton
      {...args}
      data-testid='skeleton'
    />
  ),
} as Meta<typeof Skeleton>

export const Rectangle: Story = {
  args: {
    width: '100px',
    height: '40px',
  },
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
  play: async ({ canvas }) => {
    const skeleton = canvas.getByTestId('skeleton')
    await expect(skeleton).toHaveClass(styles.wave, styles.circle)
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
  play: async ({ canvas }) => {
    const skeleton = canvas.getByTestId('skeleton')
    await expect(skeleton).toHaveClass(styles.wave)
  },
}

export const IsOnLayer01: Story = {
  args: {
    ...Rectangle.args,
    isOnLayer01: true,
  },
  render: args => (
    <div style={{ backgroundColor: layer01Base, padding: '1rem' }}>
      <Skeleton
        {...args}
        data-testid='skeleton'
      />
    </div>
  ),
  play: async ({ canvas }) => {
    const skeleton = canvas.getByTestId('skeleton')
    await expect(skeleton).toHaveClass(styles.wave, styles.onLayer01)
  },
}
export const DS1191: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    width: '100px',
    height: '40px',
    className: 'derp',
    style: {
      verticalAlign: 'bottom',
    },
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should merge provided className and style props',
      async () => {
        const skeleton = canvas.getByTestId('skeleton')
        await expect(skeleton).toHaveClass(styles.wave, styles.skeleton, 'derp')
        await expect(skeleton).toHaveStyle({
          width: '100px',
          height: '40px',
          verticalAlign: 'bottom',
        })
      },
    )
  },
}
