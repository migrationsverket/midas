import type { Meta, StoryObj } from '@storybook/react'
import { Form as AriaForm } from 'react-aria-components'
import { TextField } from '@midas-ds/textfield'
import { Flex, FlexItem } from '@midas-ds/flex'
import { CheckboxGroup, Checkbox } from '@midas-ds/checkbox'
import { RadioGroup, Radio } from '@midas-ds/radio'
import { Select, Item } from '@midas-ds/select'
import { Button } from '@midas-ds/button'

const meta: Meta<typeof AriaForm> = {
  component: AriaForm,
  title: 'Examples/Form',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta
type Story = StoryObj<typeof AriaForm>

export const SimpleForm: Story = {
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango']

    return (
      <Flex>
        <FlexItem col={12}>
          <TextField
            label="Ange ditt fullständiga namn"
            description="Glöm inte dina eventuella mellannamn!"
          />
        </FlexItem>
        <FlexItem col={12}>
          <TextField
            label="Personnummmer"
            description="Anges på formen ÅÅMMDD-XXXX"
          />
        </FlexItem>
        <FlexItem col={12}>
          <Select
            label="Vilken är din favoritfrukt"
            placeholder="Välj en frukt"
          >
            {ITEMS.map((item: string) => (
              <Item key={item}>{item}</Item>
            ))}
          </Select>
        </FlexItem>

        <FlexItem>
          <Button>Skicka</Button>
        </FlexItem>
      </Flex>
    )
  },
}

export const TwoColumnForm: Story = {
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C']
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C']
    const SEX = ['Man', 'Kvinna', 'Annat']
    return (
      <div>
        <Flex>
          <FlexItem col={6}>
            <RadioGroup
              label="Anledning"
              description="Ange anledning till att du söker i databasen"
            >
              {RADIOITEMS.map((item: string) => (
                <Radio
                  value={item}
                  key={item}
                >
                  {item}
                </Radio>
              ))}
            </RadioGroup>
          </FlexItem>
          <FlexItem col={6}>
            <CheckboxGroup
              label="Databas"
              description="Välj databas att söka i"
            >
              {ITEMS.map((item: string) => (
                <Checkbox
                  value={item}
                  key={item}
                >
                  {item}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </FlexItem>
          <FlexItem col={6}>
            <TextField
              label="Namn"
              description=""
            />
          </FlexItem>
          <FlexItem col={6}>
            <TextField label="Personnummer" />
          </FlexItem>

          <FlexItem col={6}>
            <Select
              label="Kön"
              description="Kan lämnas tomt"
              placeholder="Välj kön"
            >
              {SEX.map((item: string) => (
                <Item key={item}>{item}</Item>
              ))}
            </Select>
          </FlexItem>
          <FlexItem col={6}>
            <TextField label="Ärendekod" />
          </FlexItem>

          <FlexItem col={'auto'}>
            <Button>Sök</Button>
          </FlexItem>
          <FlexItem col={'auto'}>
            <Button variant="secondary">Rensa</Button>
          </FlexItem>
        </Flex>
      </div>
    )
  },
}
