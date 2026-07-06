import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardImage,
  CardLink,
  CardTitle,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Text,
  MenuTrigger,
  Menu,
  MenuItem,
  MenuPopover,
} from '@midas-ds/components'
import { Pen, Trash2, X, EllipsisVertical, Phone } from 'lucide-react'
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export const BasicExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardHeader heading='Sven Svensson' />
      <CardBody>
        <Text>Sven är en designer på Migrationsverket</Text>
      </CardBody>
    </Card>
  </div>
)

export const ActionExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardHeader heading='Inköpslista' />
      <CardBody>
        <Text>
          <ul>
            <li>3 bananer</li>
            <li>2 meloner</li>
            <li>4 kiwi</li>
            <li>2 citroner</li>
          </ul>
        </Text>
      </CardBody>
      <CardActions>
        <Button
          variant='secondary'
          aria-label='Redigera inköpslista'
          icon={Pen}
        >
          Redigera
        </Button>
        <Button
          variant='tertiary'
          aria-label='Ta bort inköpslista'
          icon={Trash2}
        >
          Ta bort
        </Button>
      </CardActions>
    </Card>
  </div>
)

export const ActionAreaExample: React.FC = () => (
  <div className='card'>
    <Card style={{ maxWidth: '320px' }}>
      <CardActionArea onPress={() => alert('Klickat på CardActionArea')}>
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
          <CardTitle>Min sida</CardTitle>
        </CardLink>
        <Text>
          På min sida kan du ändra dina uppgifter och se status på dina
          ansökningar
        </Text>
      </CardContent>
    </Card>
  </div>
)

export const ImageExample: React.FC = () => {
  const imgSrc = useBaseUrl('/img/CardImage.jpg')

  return (
    <div className='card'>
      <Grid>
        <GridItem>
          <Card style={{ maxWidth: '320px' }}>
            <CardImage
              src={imgSrc}
              alt='Illustration av en ung man'
            />
            <CardHeader heading='Sven Svensson' />
            <CardBody>
              <Text>Sven är en designer på Migrationsverket</Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card style={{ maxWidth: '320px' }}>
            <CardHeader heading='Sven Svensson' />
            <CardImage
              src={imgSrc}
              alt='Illustration av en ung man'
            />
            <CardBody>
              <Text>Sven är en designer på Migrationsverket</Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  )
}

export const MenuExample: React.FC = () => {
  const imgSrc = useBaseUrl('/img/CardImage.jpg')

  return (
    <div className='card'>
      <Card style={{ maxWidth: '320px' }}>
        <CardHeader
          heading='Sven Svensson'
          subHeading='Designer på Migrationsverket'
        >
          <MenuTrigger>
            <Button
              aria-label='Menu'
              variant='icon'
              size='medium'
            >
              <EllipsisVertical size={20} />
            </Button>
            <MenuPopover>
              <Menu>
                <MenuItem id='spara'>Spara kontaktuppgifter</MenuItem>
                <MenuItem id='epost'>Skicka e-post</MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </CardHeader>
        <CardImage src={imgSrc} />
        <CardBody>
          <Text>Prata med Sven Svensson om du har frågor om design tokens</Text>
        </CardBody>
        <CardActions>
          <Button
            variant='secondary'
            aria-label='Boka möte med Sven Svensson'
            icon={Phone}
          >
            Boka möte
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

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

export const LinkMenuExample: React.FC = () => {
  return (
    <div className='card'>
      <Card style={{ maxWidth: '320px' }}>
        <CardLink href='https://www.migrationsverket.se'>
          <CardHeader
            heading='Sven Svensson'
            subHeading='Designer på Migrationsverket'
          >
            <MenuTrigger>
              <Button
                aria-label='Menu'
                variant='icon'
                size='medium'
              >
                <EllipsisVertical size={20} />
              </Button>
              <MenuPopover>
                <Menu>
                  <MenuItem id='spara'>Spara kontaktuppgifter</MenuItem>
                  <MenuItem id='epost'>Skicka e-post</MenuItem>
                </Menu>
              </MenuPopover>
            </MenuTrigger>
          </CardHeader>
        </CardLink>
        <CardBody>
          <Text>Prata med Sven Svensson om du har frågor om design tokens</Text>
        </CardBody>
      </Card>
    </div>
  )
}
