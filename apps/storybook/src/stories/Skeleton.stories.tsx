import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from '@midas-ds/components'
import { variables } from '@midas-ds/theme'

type Story = StoryObj<typeof Skeleton>

export default {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs', '!snapshot'],
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
}

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '50px',
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
}

export const IsOnLayer01: Story = {
  args: {
    ...Rectangle.args,
    isOnLayer01: true,
  },
  render: args => (
    <div style={{ backgroundColor: variables.layer01Base, padding: '1rem' }}>
      <Skeleton
        {...args}
        data-testid='skeleton'
      />
    </div>
  ),
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
}
