import { Checkbox, CheckboxGroup } from '@midas-ds/components'
import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'

type Story = StoryObj<typeof CheckboxGroup>

export default {
  title: 'Components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    label: 'Etikett',
    description: 'Beskrivning',
    errorMessage: 'Du måste välja en frukt',
    errorPosition: 'top',
    children: ['Banan', 'Apple', 'Mango'].map((item: string) => (
      <Checkbox
        value={item}
        key={item}
      >
        {item}
      </Checkbox>
    )),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>

export const Example: Story = {}

export const ShowSelectAll: Story = {
  args: {
    showSelectAll: true,
  },
}

export const SelectAllInteraction: Story = {
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL',
  },
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({ ...args }) => {
    return (
      <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>
    )
  },
  play: async ({ canvas, step }) => {
    const selectAllCheckbox = canvas.getByText('SELECT ALL')
    await step(
      'It should show all selected as checked when all options are checked',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await expect(selectAllCheckbox).toHaveAttribute('data-selected', 'true')
      },
    )
    await step(
      'It should show select all as indeterminate when 0 > check < max is selected',
      async () => {
        const banana = canvas.getByLabelText('Banana')
        await userEvent.click(banana)
        await expect(selectAllCheckbox).toHaveAttribute(
          'data-indeterminate',
          'true',
        )
      },
    )
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const InvalidInteraction: Story = {
  args: {
    isRequired: true,
    isInvalid: undefined,
    label: 'Invalid (by required)',
    description: 'This is a working test',
    validationBehavior: 'aria',
    errorMessage: 'Du måste välja en av frukterna',
  },
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'It should display correct error message when invalid',
      async () => {
        await expect(
          canvas.getByText(args.errorMessage as string),
        ).toBeVisible()
      },
    )

    await step('All checkboxes should be required', async () => {
      canvas
        .getAllByRole('checkbox')
        .forEach(async checkbox => await expect(checkbox).toBeRequired())
    })

    await step(
      'Validation should be satisfied when checking one checkbox',
      async () => {
        await userEvent.click(canvas.getAllByRole('checkbox')[0])
        canvas
          .getAllByRole('checkbox')
          .forEach(async checkbox => await expect(checkbox).toBeValid())
      },
    )
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
}
