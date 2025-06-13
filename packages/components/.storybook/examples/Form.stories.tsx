import type { Meta, StoryObj } from '@storybook/react'
import { Form as AriaForm } from 'react-aria-components'
import {
  TextField,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Select,
  Button,
} from '../../src/index'
import React from 'react'

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
      <Grid>
        <GridItem size={12}>
          <TextField
            label='Ange ditt fullständiga namn'
            description='Glöm inte dina eventuella mellannamn!'
          />
        </GridItem>
        <GridItem size={12}>
          <TextField
            label='Personnummmer'
            description='Anges på formen ÅÅMMDD-XXXX'
          />
        </GridItem>
        <GridItem size={12}>
          <Select
            label='Vilken är din favoritfrukt'
            placeholder='Välj en frukt'
            selectionMode='single'
            options={ITEMS.map(i => ({ id: i, name: i }))}
          />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>
    )
  },
}

export const TwoColumnForm: Story = {
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C']
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C']

    return (
      <div>
        <Grid>
          <GridItem size={6}>
            <RadioGroup
              label='Anledning'
              description='Ange anledning till att du söker i databasen'
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
          </GridItem>
          <GridItem size={6}>
            <CheckboxGroup
              label='Databas'
              description='Välj databas att söka i'
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
          </GridItem>
          <GridItem size={6}>
            <TextField
              label='Namn'
              description=''
            />
          </GridItem>
          <GridItem size={6}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={6}>
            <Select
              label='Kön'
              description='Kan lämnas tomt'
              placeholder='Välj kön'
              selectionMode='single'
              options={ITEMS.map(i => ({ name: i, id: i }))}
            />
          </GridItem>
          <GridItem size={6}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>
    )
  },
}
