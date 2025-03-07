import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'
import { ArrowRight } from 'lucide-react'
import { Link as ReactRouterLink } from 'react-router'

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Components/Link',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
}
export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {
    children: 'Länk',
    icon: ArrowRight,
    href: 'https://designsystem.migrationsverket.se/components/link/',
  },
}
export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
}

export const Standalone: Story = {
  args: {
    children: 'En fristående länk',
    standalone: true,
    href: 'https://designsystem.migrationsverket.se/components/link/',
  },
}

export const StandaloneDisabled: Story = {
  args: {
    ...Standalone.args,
    isDisabled: true,
  },
}
