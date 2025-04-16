import { Card } from '@midas-ds/components'
import React from 'react'

export const BasicExample: React.FC = () => (
  <div className='card'>
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
  </div>
)
