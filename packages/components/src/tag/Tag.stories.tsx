import { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'
import { TagGroup } from './tag-group'
import { TagList } from './tag-list'
import { ScooterIcon } from 'lucide-react'

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

export const Blue: Story = {
  args: {
    color: 'blue',
  },
}

export const Green: Story = {
  args: {
    color: 'green',
  },
}

export const Lagoonblue: Story = {
  args: {
    color: 'lagoonblue',
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
  },
}

export const Red: Story = {
  args: {
    color: 'red',
  },
}

export const Teal: Story = {
  args: {
    color: 'teal',
  },
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    isDismissable: false,
    children: (
      <>
        <ScooterIcon /> Scooters
      </>
    ),
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
