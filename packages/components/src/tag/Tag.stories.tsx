import { Meta, StoryObj } from '@storybook/react'
import { Tag, TagGroup } from './Tag'
import { expect } from '@storybook/test'
import styles from './Tag.module.css'

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Components/Tag',
  tags: ['autodocs'],
  args: {
    children: 'Title',
    dismissable: true,
    className: 'test-class',
  },
}

const testID = 'test'

export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  render: args => {
    return (
      <TagGroup aria-label='Taggar'>
        <Tag
          {...args}
          data-testid={testID}
        >
          {args.children}
        </Tag>
      </TagGroup>
    )
  },
  play: async ({ canvas, step, args: { className } }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(canvas.getByTestId(testID)).toHaveClass(
          styles.tag,
          className as string,
        )
      },
    )
  },
}

export const Status: Story = {
  args: {
    type: 'success',
  },
  render: Default.render,
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: Default.render,
}
