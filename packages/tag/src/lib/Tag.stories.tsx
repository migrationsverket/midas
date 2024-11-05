

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {  Tag , TagGroup} from './Tag'; 

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Components/Tag', 
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;




export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <TagGroup >
        <Tag title='title'></Tag>
      </TagGroup>
    )
  },
}

export const Disabled: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <TagGroup >
        <Tag isDisabled title='title'></Tag>
      </TagGroup>
    )
  },
}