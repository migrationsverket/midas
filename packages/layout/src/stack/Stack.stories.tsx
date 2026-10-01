import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '.'

type Story = StoryObj<typeof Stack>

const Box = ({ label, color }: { label: string; color: string }) => (
  <div
    style={{
      backgroundColor: color,
      padding: '16px 24px',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: '4px',
      textAlign: 'center',
    }}
  >
    {label}
  </div>
)

const defaultChildren = [
  <Box key="1" label="Element 1" color="#005a9c" />,
  <Box key="2" label="Element 2" color="#0073c2" />,
  <Box key="3" label="Element 3" color="#008eed" />,
]

export default {
  title: 'Components/Stack',
  args: {
    children: defaultChildren,
    direction: 'column',
    spacing: 5,
    alignItems: 'stretch',
    justifyContent: 'start',
    wrap: false,
  },
  component: Stack,
  tags: ['autodocs'],
} satisfies Meta<typeof Stack>

export const Vertical: Story = {
    args: {
    spacing: 30,
  },
}

export const Horizontal: Story = {
  args: {
    direction: 'row',
    alignItems: 'center',
    spacing: 'small'
  },
}

export const LargeSpacing: Story = {
  args: {
    direction: 'row',
    spacing: 'large',
  },
}
