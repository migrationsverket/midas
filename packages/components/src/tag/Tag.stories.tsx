import { Meta, StoryObj } from '@storybook/react-vite'
import { Tag, TagGroup } from './Tag'

type Story = StoryObj<typeof Tag>

export default {
  component: Tag,
  subcomponents: {
    TagGroup,
  },
  title: 'Components/Tag',
  tags: ['autodocs'],
  args: {
    children: 'Title',
    textValue: 'Title',
    dismissable: true,
    className: 'test-class',
  },
  render: args => {
    return (
      <TagGroup aria-label='Taggar'>
        <Tag {...args}>{args.children}</Tag>
      </TagGroup>
    )
  },
} as Meta<typeof Tag>

export const Primary: Story = {}

export const Status: Story = {
  args: {
    type: 'success',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
