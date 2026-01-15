import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup } from './ButtonGroup'
import { Button } from './Button'

type Story = StoryObj<typeof ButtonGroup>

export default {
  component: ButtonGroup,
  title: 'Components/Button/ButtonGroup',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {},
  argTypes: {},
} satisfies Meta<typeof ButtonGroup>

export const Primary: Story = {
  args: {
    'aria-label': 'Vill du acceptera ändringen?',
  },
  render: ({ ...args }) => (
    <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
  ),
}
