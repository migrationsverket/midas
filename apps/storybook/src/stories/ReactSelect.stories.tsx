import type { Meta, StoryObj } from '@storybook/react-vite'
import Select, { CSSObjectWithLabel, MultiValueProps } from 'react-select'
import { options } from '../utils/storybook'
import { variables } from '@midas-ds/theme'
import '@midas-ds/select-styles/lib/react-select.css'
import { Label, Text } from '@midas-ds/components'

type Story = StoryObj<typeof Select>

const inputId = 'react-select'

export default {
  component: Select,
  title: 'Components/ReactSelect',
  tags: ['autodocs'],
  args: {
    className: 'select',
    classNamePrefix: 'midas',
    unstyled: true,
    isMulti: false,
    isSearchable: true,
    isClearable: true,
    placeholder: 'Välj en artikel',
    noOptionsMessage: () => 'Inga träffar',
    hideSelectedOptions: false,
    closeMenuOnSelect: true,
    options: options.map(({ id, name }) => ({ value: id, label: name })),
    inputId,
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Label htmlFor={inputId}>Label</Label>
      <Text slot='description'>Description</Text>
      <Select {...args} />
    </div>
  ),
} satisfies Meta<typeof Select>

export const Primary: Story = {}

export const Medium: Story = {
  args: {
    className: 'select medium',
  },
}

export const MultiSelect: Story = {
  args: {
    closeMenuOnSelect: false,
    isMulti: true,
    styles: {
      multiValue: (
        provided: CSSObjectWithLabel,
        { isFocused }: MultiValueProps,
      ) => ({
        ...provided,
        boxShadow: isFocused ? variables.stateFocus : undefined,
      }),
    },
  },
}

export const MultiSelectMedium: Story = {
  args: {
    ...MultiSelect.args,
    className: 'select medium',
  },
}
