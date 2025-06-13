import type { Meta } from '@storybook/react'
import { Card, CardContent, CardTitle } from '../card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'
import { Text } from '../text'
import { TextField } from '../textfield'

const meta: Meta<typeof Grid> = {
  component: Grid,
  subcomponents: {
    GridItem: GridItem as React.ComponentType<unknown>,
  },
  title: 'Components/Grid',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      test: 'todo',
    },
  },
  argTypes: {
    fluid: {
      control: {
        type: 'boolean',
      },
    },
    isContained: {
      control: {
        type: 'boolean',
      },
    },
    hasMargins: {
      control: {
        type: 'boolean',
      },
    },
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
      <GridItem size={{ sm: 6, md: 6 }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{ sm: 6, md: 12, lg: 6, xl: 12 }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{ sm: 5, md: 6 }}>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      <GridItem size={{ sm: 5, md: 6 }}>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      {/* <GridItem size={6}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={3}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={4}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={4}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem
        size={3}
        offset={1}
      >
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
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
      </GridItem> */}
    </Grid>
  ),
}
