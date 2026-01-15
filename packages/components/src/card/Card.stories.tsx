import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pen, X } from 'lucide-react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardImage,
  CardLink,
  CardTitle,
} from './Card'
import { Text } from '../text'
import { Button } from '../button'

const meta: Meta<typeof Card> = {
  component: Card,
  subcomponents: {
    CardContent,
    CardImage,
    CardActionArea,
    CardActions,
    CardLink,
    CardTitle,
  },
  title: 'Components/Card',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Example: Story = {
  args: {
    children: (
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
    ),
  },
}

export const Horizontal: Story = {
  args: {
    ...Example.args,
    horizontal: true,
  },
}

export const WithActions: Story = {
  args: {
    children: (
      <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
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
    ),
  },
}

export const WithPrimaryAction: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
}

export const WithLink: Story = {
  args: {
    children: (
      <CardContent>
        <CardLink
          href='#'
          data-testid='card-link'
        >
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
    ),
  },
}

export const WithImage: Story = {
  tags: ['!snapshot'],
  args: {
    style: { maxWidth: 300 },
    children: (
      <>
        <CardImage
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg'
          alt='Ananas'
        />
        <CardContent>
          <CardLink
            href='#'
            data-testid='card-link'
          >
            <CardTitle>Dina uppgifter</CardTitle>
          </CardLink>
          <Text>Namn: Namn Namnsson</Text>
        </CardContent>
      </>
    ),
  },
}

export const WithContainedImage: Story = {
  tags: ['!snapshot'],
  args: {
    style: { maxWidth: 300 },
    children: (
      <CardContent>
        <CardLink
          href='#'
          data-testid='card-link'
        >
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>{' '}
        <CardImage
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg'
          alt='Ananas'
        />
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
    ),
  },
}
