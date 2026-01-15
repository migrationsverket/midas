import type { Meta, StoryObj } from '@storybook/react-vite'
import { LinkButton } from './LinkButton'

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  title: 'Components/LinkButton',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    children: { name: 'label' },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    iconPlacement: {
      options: ['right', 'left'],
      control: { type: 'radio' },
      defaultValue: 'left',
    },
  },
  args: {
    size: 'large',
  },
}
export default meta
type Story = StoryObj<typeof LinkButton>

export const Primary: Story = {
  args: {
    children: 'Till E-tjänst',
    href: '#',
    'data-testid': 'link-button',
    className: 'test-class',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    variant: 'tertiary',
  },
}

export const Previous: Story = {
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left',
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
}

export const AppLink: Story = {
  args: {
    children: 'Till E-tjänst',
    'data-testid': 'link-button',
    onPress: () => alert('navigation fn'),
  },
}

export const Danger: Story = {
  args: {
    'data-testid': 'link-button',
    children: 'Radera',
    variant: 'danger',
  },
}
