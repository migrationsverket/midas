import { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'
import { TagGroup } from './tag-group'
import { TagList } from './tag-list'

type Story = StoryObj<typeof Tag>

export default {
  component: Tag,
  subcomponents: {
    TagGroup,
    TagList,
  },
  title: 'Components/Tag',
  tags: ['autodocs'],
  args: {
    children: 'Title',
    isDismissable: true,
    className: 'test-class',
  },
  render: args => {
    return (
      <TagGroup aria-label='Taggar'>
        <TagList>
          <Tag {...args} />
        </TagList>
      </TagGroup>
    )
  },
} as Meta<typeof Tag>

export const Primary: Story = {}

export const Green: Story = {
  args: {
    color: 'green',
  },
}

export const Blue: Story = {
  args: {
    color: 'blue',
  },
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
}

export const Red: Story = {
  args: {
    color: 'red',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const WithoutTagList: Story = {
  tags: ['!autodocs', '!dev'],
  render: args => (
    <TagGroup aria-label='Taggar'>
      <Tag {...args} />
    </TagGroup>
  ),
}
