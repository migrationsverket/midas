import type { Meta } from '@storybook/react'
import { Grid } from './Grid'
import { Card } from '@midas-ds/card'
import { GridItem } from './GridItem'
import React from 'react'

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Components/Grid',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    fluid: {
      description:
        'Tar bort alla marginaler för nestad användning. Ha gärna marginal om den används över hela sidan',
      control: { type: 'boolean' }
    }
  }
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
          link={{ title: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={3}>
        <Card
          title={'Ett kort'}
          content={'Som är i tre kolumner'}
          link={{ title: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={6}>
        <Card
          title={'Ett kort'}
          content={'Som är i sex kolumner'}
          link={{ title: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
          link={{ title: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
          link={{ title: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
          link={{ title: 'Länk', href: '#' }}
        />
      </GridItem>
      <GridItem col={10}>
        <Card
          title={'Ett kort'}
          content={'Som är utan kolumner'}
          link={{ title: 'Länk', href: '#' }}
        />
      </GridItem>
    </Grid>
  )
}
