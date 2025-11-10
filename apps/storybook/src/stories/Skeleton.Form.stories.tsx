import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton, TextField } from '@midas-ds/components'
import { variables } from '@midas-ds/theme'

type Story = StoryObj<typeof Skeleton>

export default {
  component: Skeleton,
  title: 'Components/Skeleton/Form',
  tags: ['autodocs'],
  args: {
    variant: 'form',
    width: '400px',
  },
  render: args => (
    <Skeleton
      {...args}
      data-testid='skeleton'
    />
  ),
} satisfies Meta<typeof Skeleton>

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
  },
}

export const NoAnimation: Story = {
  args: {
    size: 'large',
    isAnimated: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`,
      },
    },
  },
}

export const OnLayer01: Story = {
  args: {
    size: 'large',
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

export const Multiple: Story = {
  args: {
    size: 'large',
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
  ),
}

export const Comparison: Story = {
  tags: ['!autodocs'],
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginTop: 0, fontSize: '1rem', fontWeight: 500 }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginTop: 0, fontSize: '1rem', fontWeight: 500 }}>
          Actual TextField
        </h3>
        <TextField
          label='Namn'
          description='Fyll i ditt fullständiga namn'
        />
      </div>
    </div>
  ),
}
