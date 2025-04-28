import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardImage,
  CardLink,
  CardTitle,
  Text,
} from '@midas-ds/components'
import { Pen, X } from 'lucide-react'
import React from 'react'

export const BasicExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardContent>
        <CardTitle>Här är en titel</CardTitle>
        <Text>Här är lite innehåll</Text>
      </CardContent>
    </Card>
  </div>
)

export const ActionExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardContent>
        <CardTitle>Här är en titel</CardTitle>
        <Text>Här är lite innehåll</Text>
        <CardActions>
          <Button
            variant='icon'
            icon={Pen}
          >
            Ändra
          </Button>
          <Button
            variant='icon'
            icon={X}
          >
            Avbryt
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  </div>
)

export const ActionAreaExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardActionArea
        onPress={() => {
          return
        }}
      >
        <CardContent>
          <CardTitle>Dina uppgifter</CardTitle>
          <Text>Namn: Namn Namnsson</Text>
        </CardContent>
      </CardActionArea>

      <CardContent>
        <CardActions>
          <Button
            variant='icon'
            icon={Pen}
          >
            Ändra
          </Button>
          <Button
            variant='icon'
            icon={X}
          >
            Avbryt
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  </div>
)

export const LinkExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardContent>
        <CardLink href='#'>
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>
        <Text>Här är lite innehåll</Text>
      </CardContent>
    </Card>
  </div>
)

export const ImageExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardImage
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg'
        alt='Ananas'
      />
      <CardContent>
        <CardLink href='#'>
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
    </Card>
  </div>
)

export const HorizontalExample: React.FC = () => (
  <div className='card'>
    <Card horizontal>
      <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Button
            variant='icon'
            icon={Pen}
          >
            Redigera
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  </div>
)
