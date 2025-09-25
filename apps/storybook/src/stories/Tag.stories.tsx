import { Meta, StoryObj } from '@storybook/react-vite'
import { Tag, TagGroup } from '@midas-ds/components'
import { expect } from 'storybook/test'
import styles from '@midas-ds/components/tag/Tag.module.css'

type Story = StoryObj<typeof Tag>

const testID = 'test'

export default {
  component: Tag,
  subcomponents: {
    TagGroup: TagGroup as React.ComponentType<unknown>,
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
        <Tag
          {...args}
          data-testid={testID}
        >
          {args.children}
        </Tag>
      </TagGroup>
    )
  },
} as Meta<typeof Tag>

export const Default: Story = {
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
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
