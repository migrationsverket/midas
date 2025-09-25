import type { Meta, StoryObj } from '@storybook/react-vite'
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
import { expect, userEvent } from 'storybook/test'

const meta: Meta<typeof Card> = {
  component: Card,
  subcomponents: {
    CardContent: CardContent as React.ComponentType<unknown>,
    CardImage: CardImage as React.ComponentType<unknown>,
    CardActionArea: CardActionArea as React.ComponentType<unknown>,
    CardActions: CardActions as React.ComponentType<unknown>,
    CardLink: CardLink as React.ComponentType<unknown>,
    CardTitle: CardTitle as React.ComponentType<unknown>,
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
  play: async ({ canvas, step }) => {
    await step('It should be possible to focus the button', async () => {
      const button = canvas.getByText('Avbryt')
      expect(button).not.toHaveFocus()

      // focus the link
      await userEvent.tab()
      await userEvent.tab()

      expect(button).toHaveFocus()
    })
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
          data-testid='card-action-area'
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
  play: async ({ canvas, step }) => {
    await step(
      'It should be possible to focus the primary action area',
      async () => {
        const button = canvas.getByTestId('card-action-area')
        expect(button).not.toHaveFocus()

        // focus the link
        await userEvent.tab()

        expect(button).toHaveFocus()
      },
    )
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
  play: async ({ canvas, step }) => {
    await step('It should be possible to focus the link', async () => {
      const link = canvas.getByTestId('card-link')
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
