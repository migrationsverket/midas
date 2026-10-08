import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack, type StackSpacing } from '.'

type Story = StoryObj<typeof Stack>

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: 'var(--midas-space-small) var(--midas-space-medium)',
      backgroundColor: 'var(--midas-layer-02-base)',
      border: '1px solid var(--midas-border-color-subtle)',
      color: 'var(--midas-text-primary)',
      fontFamily: 'var(--midas-typography-font-family)',
    }}
  >
    {children}
  </div>
)

const boxes = ['Första', 'Andra', 'Tredje'].map(label => (
  <Box key={label}>{label}</Box>
))

export default {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
  args: {
    children: boxes,
    direction: 'column',
    alignItems: 'stretch',
    justifyContent: 'start',
    wrap: false,
  },
} satisfies Meta<typeof Stack>

export const Vertical: Story = {}

export const Horizontal: Story = {
  args: {
    direction: 'row',
    alignItems: 'center',
  },
}

const spacings: StackSpacing[] = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
]

/** Every Midas semantic space token */
export const Spacing: Story = {
  render: args => (
    <Stack spacing='xlarge'>
      {spacings.map(spacing => (
        <Stack
          key={spacing}
          {...args}
          direction='row'
          spacing={spacing}
        >
          {boxes}
        </Stack>
      ))}
    </Stack>
  ),
}

/** A list keeps its list semantics, also without bullets */
export const AsList: Story = {
  args: {
    elementType: 'ul',
    'aria-label': 'Steg',
    spacing: 'small',
    children: ['Fyll i ansökan', 'Bifoga dokument', 'Skicka in'].map(step => (
      <li key={step}>
        <Box>{step}</Box>
      </li>
    )),
  },
}

export const Wrap: Story = {
  args: {
    direction: 'row',
    wrap: true,
    spacing: 'small',
    style: { maxWidth: '20rem' },
    children: [
      'Asyl',
      'Arbete',
      'Studier',
      'Familj',
      'Besök',
      'Medborgarskap',
    ].map(label => <Box key={label}>{label}</Box>),
  },
}

export const SpaceBetween: Story = {
  args: {
    direction: 'row',
    justifyContent: 'between',
    alignItems: 'center',
  },
}
