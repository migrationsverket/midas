import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tag, TagGroup } from './Tag'

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Components/Tag',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    title: 'titel',
    isDisabled: false,
  },
  render: ({ ...args }) => {
    return (
      <TagGroup>
        <Tag {...args}></Tag>
      </TagGroup>
    )
  },
}

export const Disabled: Story = {
  args: {
    title: 'titel',
    isDisabled: true,
  },
  render: ({ ...args }) => {
    return (
      <TagGroup>
        <Tag {...args}> </Tag>
      </TagGroup>
    )
  },
}
