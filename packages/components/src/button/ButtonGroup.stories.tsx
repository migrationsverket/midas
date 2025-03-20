import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ButtonGroup } from './ButtonGroup'
import React from 'react'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Components/Button/ButtonGroup',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {},
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Primary: Story = {
  args: {
    'aria-label': 'Acceptera ändringen',
  },
  render: ({ ...args }) => (
    <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
  ),
}

export const VisibleTitle: Story = {
  args: {
    title: 'Acceptera ändringen',
  },
  render: ({ ...args }) => (
    <ButtonGroup {...args}>
      <Button>Fortsätt</Button>
      <Button variant='secondary'>Avbryt</Button>
    </ButtonGroup>
  ),
}
