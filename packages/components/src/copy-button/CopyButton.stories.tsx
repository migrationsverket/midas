import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '../text'
import { CopyButton } from './CopyButton'

const meta = {
  component: CopyButton,
  title: 'Components/CopyButton',
  tags: ['autodocs'],
  args: { value: '1234-56789' },
  // Keeps the value and its button on one line, like they'd be placed
  decorators: [
    Story => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CopyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: args => (
    <>
      <Text>{args.value}</Text>
      <CopyButton {...args} />
    </>
  ),
}

export const WithText: Story = {
  args: { variant: 'text' },
  render: Primary.render,
}

/** Several on a page: each is named after what it copies */
export const Details: Story = {
  decorators: [Story => <Story />],
  render: () => (
    <dl
      style={{
        display: 'grid',
        gridTemplateColumns: 'max-content auto',
        gap: '0.5rem 1rem',
        alignItems: 'center',
        margin: 0,
      }}
    >
      {[
        ['Ärendenummer', '1234-56789'],
        ['Kontrollnummer', 'A7F3-K9Q2'],
        ['E-post', 'anna.andersson@example.se'],
      ].map(([label, value]) => (
        <div
          key={label}
          style={{ display: 'contents' }}
        >
          <dt>
            <Text>{label}</Text>
          </dt>
          <dd
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              margin: 0,
            }}
          >
            <Text>{value}</Text>
            <CopyButton
              value={value}
              aria-label={`Kopiera ${label.toLowerCase()}`}
            />
          </dd>
        </div>
      ))}
    </dl>
  ),
}
