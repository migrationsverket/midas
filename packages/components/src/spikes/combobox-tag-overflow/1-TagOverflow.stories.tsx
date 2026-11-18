import type { Meta, StoryObj } from '@storybook/react-vite'
import { options } from '@midas-ds/test-utils'
import { ComboBox } from '../../combobox'
import { ListBoxItem } from '../../list-box'
import type { TagOverflow } from '../../combobox/ComboBoxTags'
import styles from './spike.module.css'

type Item = (typeof options)[number]

interface SpikeArgs {
  tagOverflow: TagOverflow
  /** Fill the container, so resizing the window resizes the field */
  fullWidth: boolean
  /** Width of the field in px, when it doesn't fill the container */
  width: number
  /** How many fruits are selected from the start */
  selectedCount: number
  size: 'large' | 'medium'
}

const Field = ({
  tagOverflow,
  fullWidth,
  width,
  selectedCount,
  size,
}: SpikeArgs) => (
  <div style={{ width: fullWidth ? '100%' : width }}>
    <ComboBox<Item, 'multiple'>
      // A new key resets the default selection when the control changes
      key={selectedCount}
      label={`tagOverflow='${tagOverflow}'`}
      placeholder='Välj eller sök frukt'
      items={options}
      selectionMode='multiple'
      defaultValue={options.slice(0, selectedCount).map(({ id }) => id)}
      tagOverflow={tagOverflow}
      size={size}
    >
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ComboBox>
  </div>
)

const meta = {
  title: 'Spikes/ComboBox tag overflow/1. Variants',
  component: Field,
  tags: ['!snapshot', '!autodocs'],
  parameters: { layout: 'padded' },
  args: {
    tagOverflow: 'wrap',
    fullWidth: true,
    width: 400,
    selectedCount: 8,
    size: 'large',
  },
  argTypes: {
    tagOverflow: {
      control: 'inline-radio',
      options: ['wrap', 'scroll', 'collapse'],
    },
    width: {
      control: { type: 'range', min: 200, max: 900, step: 10 },
      if: { arg: 'fullWidth', truthy: false },
    },
    selectedCount: {
      control: { type: 'range', min: 0, max: options.length, step: 1 },
    },
    size: { control: 'inline-radio', options: ['large', 'medium'] },
  },
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

/** The tags stack on more rows, and the input follows the last tag */
export const Wrap: Story = {
  tags: ['!snapshot', '!autodocs'],
  args: { tagOverflow: 'wrap' },
}

/** One row, always the same height, that scrolls sideways without a scrollbar */
export const Scroll: Story = {
  tags: ['!snapshot', '!autodocs'],
  args: { tagOverflow: 'scroll' },
}

/** One row with the tags that fit and "+n" for the rest */
export const Collapse: Story = {
  tags: ['!snapshot', '!autodocs'],
  args: { tagOverflow: 'collapse' },
}

/** All three with the same selection, to compare */
export const SideBySide: Story = {
  tags: ['!snapshot', '!autodocs'],
  argTypes: { tagOverflow: { table: { disable: true } } },
  render: args => (
    <div className={styles.sideBySide}>
      <Field
        {...args}
        tagOverflow='wrap'
      />
      <Field
        {...args}
        tagOverflow='scroll'
      />
      <Field
        {...args}
        tagOverflow='collapse'
      />
    </div>
  ),
}
