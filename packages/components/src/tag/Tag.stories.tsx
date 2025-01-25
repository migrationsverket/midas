import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tag, TagGroup } from './Tag'

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Components/Tag',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    isDisabled: false,
    children: 'Title',
    dismissable: true
  },
  render: ({ ...args }) => {
    return (
      <TagGroup aria-label='Taggar'>
        <Tag {...args}>{args.children}</Tag>
      </TagGroup>
    )
  }
}

export const Disabled: Story = {
  args: {
    children: 'Title',
    isDisabled: true,
    dismissable: true
  },
  render: ({ ...args }) => {
    return (
      <TagGroup aria-label='Taggar'>
        <Tag {...args}>{args.children}</Tag>
      </TagGroup>
    )
  }
}
