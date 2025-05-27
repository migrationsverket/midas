import type { Meta } from '@storybook/react'
import { Grid } from './Grid'
import { Card, CardContent, CardTitle } from '../card'
import { GridItem } from './GridItem'
import { Text } from '../text'

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
      control: { type: 'boolean' },
    },
  },
}
export default meta

export const Primary = {
  args: {},
  render: ({ ...args }) => (
    <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem col={3}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem col={6}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem col={4}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem col={4}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem col={4}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem col={10}>
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
