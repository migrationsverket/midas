import { Card, Grid, GridItem } from '@midas-ds/components'
import React from 'react'

export const BasicExample: React.FC = () => (
  <div className='card'>
    <Grid fluid>
      <GridItem col={4}>
        <Card
          title='Ananas'
          content='Tropisk frukt med taggigt skal'
          image={{
            description: 'Tropisk frukt med taggigt skal',
            source:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg',
          }}
          link={{ href: '#', children: 'Läs mer om denna frukt' }}
          headingTag='h2'
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title='Aprikos'
          content='Stenfrukt med orange färg'
          image={{
            description: 'Stenfrukt med orange färg',
            source:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/320px-Apricot_and_cross_section.jpg',
          }}
          link={{ href: '#', children: 'Läs mer om denna frukt' }}
          headingTag='h2'
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title='Apelsin'
          content='Citrusfrukt med orange skal'
          image={{
            description: 'Citrusfrukt med orange skal',
            source:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg',
          }}
          link={{ href: '#', children: 'Läs mer om denna frukt' }}
          headingTag='h2'
        />
      </GridItem>
    </Grid>
  </div>
)
