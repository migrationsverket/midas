import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardImage,
  CardTitle,
} from './Card'
import { Text } from '../text'
import { Button } from '../button'
import { Pen, X } from 'lucide-react'
import { Link } from '../link'
import { expect, userEvent } from '@storybook/test'

const meta: Meta<typeof Card> = {
  component: Card,
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
  play: async ({ canvas, step }) => {
    await step('It should be possible to focus the button', async () => {
      const link = canvas.getByText('Redigera')
      expect(link).not.toHaveFocus()

      // focus the link
      await userEvent.tab()

      expect(link).toHaveFocus()
    })
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
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Link
            href='#'
            standalone
            stretched
          >
            Läs mer om det här
          </Link>
        </CardActions>
      </CardContent>
    ),
  },
  play: async ({ canvas, step }) => {
    await step('It should be possible to focus the link', async () => {
      const link = canvas.getByText('Läs mer om det här')
      expect(link).not.toHaveFocus()

      // focus the link
      await userEvent.tab()

      expect(link).toHaveFocus()
    })
  },
}

export const WithImage: Story = {
  args: {
    style: { maxWidth: 300 },
    children: (
      <>
        <CardImage
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg'
          alt='Ananas'
        />
        <CardContent>
          <CardTitle>Dina uppgifter</CardTitle>
          <Text>Namn: Namn Namnsson</Text>
          <CardActions>
            <Link
              href='#'
              standalone
              stretched
            >
              Läs mer om detta här
            </Link>
          </CardActions>
        </CardContent>
      </>
    ),
  },
}

export const WithContainedImage: Story = {
  args: {
    style: { maxWidth: 300 },
    children: (
      <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <CardImage
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg'
          alt='Ananas'
        />
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Link
            href='#'
            standalone
            stretched
          >
            Läs mer om detta här
          </Link>
        </CardActions>
      </CardContent>
    ),
  },
}
