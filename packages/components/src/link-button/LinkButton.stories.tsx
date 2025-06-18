import type { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from './LinkButton'
import { expect, userEvent } from '@storybook/test'

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
  render: (args, { globals: { size } }) => {
    return (
      <LinkButton
        {...args}
        size={size}
      />
    )
  },
  play: async ({ canvas, step, globals: { size } }) => {
    await step('it should change size according to size prop', async () => {
      await expect(
        canvas.getByTestId('link-button').getBoundingClientRect().height,
      ).toBe(size === 'large' ? 48 : 40)
    })
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
  play: async ({ canvas, step }) => {
    await step('It should have cursor not allowed when disabled', async () => {
      const linkButton = canvas.getByRole('link')
      await userEvent.hover(linkButton)
      await expect(linkButton).toHaveStyle({ cursor: 'not-allowed' })
    })
  },
}

export const AppLink: Story = {
  args: {
    children: 'Till E-tjänst',
    onPress: () => alert('navigation fn'),
  },
}

export const Danger: Story = {
  args: {
    children: 'Radera',
    variant: 'danger',
  },
}
