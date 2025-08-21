import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from './Link'
import { LaughIcon } from 'lucide-react'

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

const r = (Math.random() + 1).toString(36).substring(7)

export const Primary: Story = {
  args: {
    children: 'Länk',
    href: 'https://designsystem.migrationsverket.se/components/link/?v=' + r, // force not visible state
  },
}

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
}

export const ExternalLink: Story = {
  args: {
    ...Primary.args,
    href: 'https://designsystem.migrationsverket.se/components/link/?v=' + r, // force not visible state
    target: '_blank',
  },
}

export const DownloadLink: Story = {
  args: {
    ...Primary.args,
    href: 'https://designsystem.migrationsverket.se/components/link/?v=' + r, // force not visible state
    download: true,
  },
}

export const Standalone: Story = {
  args: {
    children: 'En fristående länk',
    standalone: true,
    href: 'https://designsystem.migrationsverket.se/components/link/?v=' + r, // force not visible state
  },
}

export const StandaloneDisabled: Story = {
  args: {
    ...Standalone.args,
    isDisabled: true,
  },
}

export const ExternalLinkStandalone: Story = {
  args: {
    ...Standalone.args,
    href: 'https://designsystem.migrationsverket.se/components/link/?v=' + r, // force not visible state
    target: '_blank',
  },
}

export const DownloadLinkStandalone: Story = {
  args: {
    ...Standalone.args,
    href: 'https://designsystem.migrationsverket.se/components/link/?v=' + r, // force not visible state
    download: true,
  },
}

export const CustomIcon: Story = {
  args: {
    ...Standalone.args,
    icon: LaughIcon,
  },
}
