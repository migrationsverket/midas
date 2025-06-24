import type { Meta } from '@storybook/react'
import { Card, CardContent, CardTitle } from '../card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'
import { Text } from '../text'
import { TextField } from '../textfield'

const meta: Meta<typeof Grid> = {
  component: Grid,
  subcomponents: { GridItem: GridItem as React.ComponentType<unknown> },
  title: 'Components/Grid',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    fluid: { control: { type: 'boolean' } },
    isContained: { control: { type: 'boolean' } },
    removeMargins: { control: { type: 'boolean' } },
  },
}

export default meta

export const Primary = {
  args: {},
  render: ({ ...args }) => (
    <Grid {...args}>
      <GridItem>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      <GridItem size={{ xs: 12, sm: 6, md: 6 }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 12 }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{ xs: 12, sm: 5, md: 6 }}>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      <GridItem size={{ xs: 12, sm: 5, md: 6 }}>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      <GridItem size='auto'>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
  ),
}
