import type { Meta, StoryObj } from '@storybook/react'
import { Form as AriaForm } from 'react-aria-components'
import { TextField } from '@midas-ds/textfield'
import { Flex, FlexItem } from '@midas-ds/flex'
import { TextArea } from '@midas-ds/textarea'
import { CheckboxGroup, Checkbox } from '@midas-ds/checkbox'
import { DatePicker } from '@midas-ds/date-picker'
import { FileUpload } from '@midas-ds/file-upload'
import { RadioGroup, Radio } from '@midas-ds/radio'
import { Select, Item } from '@midas-ds/select'

const meta: Meta<typeof AriaForm> = {
  component: AriaForm,
  title: 'Examples/Form',
  argTypes: {},
}
export default meta
type Story = StoryObj<typeof AriaForm>

export const Form: Story = {
  args: {},
  render: ({ ...args }) => {
    const ITEMS = ['Banan', 'Apple', 'Mango']

    return (
      <Flex>
        <FlexItem col={12}>
          <TextField
            label="Namn"
            description="Förnamn Efternamn"
          />
        </FlexItem>
        <FlexItem col={12}>
          <TextField
            label="E-post"
            description="fornamn.efternam@doman.toppdoman"
            type="email"
          />
        </FlexItem>
        <FlexItem col={4}>
          <TextField
            label="Postnummer"
            description="XXX XX"
          />
        </FlexItem>
        <FlexItem col={8}>
          <TextField label="Postort" />
        </FlexItem>

        <FlexItem col={12}>
          <TextArea
            label="Kommentar"
            description="Vad du vill!"
            showCounter
          />
        </FlexItem>

        <FlexItem col={4}>
          <DatePicker label="Ort" />
        </FlexItem>
        <FlexItem col={4}>
          <FileUpload
            allowsMultiple
            description="Description"
            label="Label"
          />
        </FlexItem>
        <FlexItem col={4}>
          <Select label="Hej">
            {ITEMS.map((item: string) => (
              <Item
                key={item}
                isDisabled={item === 'Banan'}
              >
                {item}
              </Item>
            ))}
          </Select>
        </FlexItem>
        <FlexItem col={2}>
          <CheckboxGroup
            label="Välj nån"
            description="Hej"
          >
            {ITEMS.map((item: string) => (
              <Checkbox
                value={item}
                key={item}
                isDisabled={item === 'Banan'}
              >
                {item}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </FlexItem>
        <FlexItem col={2}>
          <RadioGroup
            label="Välj nån"
            description="Hej"
          >
            {ITEMS.map((item: string) => (
              <Radio
                value={item}
                key={item}
                isDisabled={item === 'Banan'}
              >
                {item}
              </Radio>
            ))}
          </RadioGroup>
        </FlexItem>
      </Flex>
    )
  },
}
