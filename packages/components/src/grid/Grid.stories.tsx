import type { Meta } from '@storybook/react'
import { Grid } from './Grid'
import { Card } from '../card'
import { GridItem } from './GridItem'

const meta: Meta<typeof Grid> = {
  component: Grid,
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
        <Card
          title={'Ett kort'}
          content={'Som är i tre kolumner'}
          link={{ children: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={3}>
        <Card
          title={'Ett kort'}
          content={'Som är i tre kolumner'}
          link={{ children: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={6}>
        <Card
          title={'Ett kort'}
          content={'Som är i sex kolumner'}
          link={{ children: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
          link={{ children: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
          link={{ children: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={
            'Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.'
          }
          link={{ children: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={10}>
        <Card
          title={'Ett kort'}
          content={'Som är utan kolumner'}
          link={{ children: 'Länk', href: '#' }}
        />
      </GridItem>
    </Grid>
  ),
}
