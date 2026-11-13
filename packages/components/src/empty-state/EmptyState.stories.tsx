import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { Inbox, Star } from 'lucide-react'
import { Button } from '../button'
import { Link } from '../link'
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateHeading,
  EmptyStateText,
  EmptyStateVisual,
} from '.'

type Story = StoryObj<typeof EmptyState>

export default {
  component: EmptyState,
  subcomponents: {
    EmptyStateHeading,
    EmptyStateText,
  },
  title: 'Components/EmptyState',
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export const Default: Story = {
  render: args => (
    <EmptyState {...args}>
      <EmptyStateHeading>Welcome to the wiki</EmptyStateHeading>
      <EmptyStateText>
        Wikis provide a place in your repository to lay out the roadmap of your
        project, show the current status, and document software better,
        together.
      </EmptyStateText>
      <EmptyStateActions>
        <Button>New page</Button>
      </EmptyStateActions>
    </EmptyState>
  ),
}

export const Mobile: Story = {
  globals: { viewport: { value: 'smallest' } },
  render: args => (
    <EmptyState {...args}>
      <EmptyStateVisual>
        <Inbox />
      </EmptyStateVisual>
      <EmptyStateHeading>Du har inga ärenden</EmptyStateHeading>
      <EmptyStateText>
        När du skickar in en ansökan visas den här
      </EmptyStateText>
      <EmptyStateActions>
        <Button>Gör en ansökan</Button>
      </EmptyStateActions>
    </EmptyState>
  ),
}

export const OnlyHeading: Story = {
  render: args => (
    <EmptyState {...args}>
      <EmptyStateHeading>Inga kommande aktiviteter</EmptyStateHeading>
    </EmptyState>
  ),
}

export const VisualAndHeading: Story = {
  render: args => (
    <EmptyState {...args}>
      <EmptyStateVisual>
        <Star />
      </EmptyStateVisual>
      <EmptyStateHeading>Inga fler uppgifter idag!</EmptyStateHeading>
    </EmptyState>
  ),
}

export const HeadingAndButton: Story = {
  args: {
    align: 'start',
  },
  render: args => (
    <EmptyState {...args}>
      <EmptyStateHeading>Sökningen gav inga träffar</EmptyStateHeading>
      <EmptyStateActions>
        <Button variant='secondary'>Rensa</Button>
      </EmptyStateActions>
    </EmptyState>
  ),
}

export const HeadingAndText: Story = {
  args: {
    align: 'start',
  },
  render: args => (
    <EmptyState {...args}>
      <EmptyStateHeading>Du har ingen fullmakt</EmptyStateHeading>
      <EmptyStateText>
        Du har ingen fullmakt med ett ombud för denna ansökan och det behövs
        inte. Du kan när som helst upprätta en fullmakt senare.
      </EmptyStateText>
    </EmptyState>
  ),
}

export const WithLink: Story = {
  render: args => (
    <EmptyState {...args}>
      <EmptyStateHeading>Sidan är tom</EmptyStateHeading>
      <EmptyStateText>Det finns inget innehåll här just nu.</EmptyStateText>
      <EmptyStateActions>
        <Link href='#'>Gå till startsidan</Link>
      </EmptyStateActions>
    </EmptyState>
  ),
}

const CustomLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) => (
  <a
    {...props}
    data-custom-link
  >
    {props.children}
  </a>
)

export const WithClientSideLink: Story = {
  tags: ['!autodocs', '!dev'],
  render: args => (
    <EmptyState {...args}>
      <EmptyStateHeading>Sidan är tom</EmptyStateHeading>
      <EmptyStateActions>
        <Link
          as={CustomLink}
          href='#'
        >
          Gå till startsidan
        </Link>
      </EmptyStateActions>
    </EmptyState>
  ),
}

/** Props set directly on the components take precedence over  defaults */
export const LocalOverrides: Story = {
  tags: ['!autodocs', '!dev'],
  render: args => (
    <EmptyState {...args}>
      <EmptyStateHeading
        level={1}
        elementType='h3'
      >
        Egen rubriknivå
      </EmptyStateHeading>
      <EmptyStateText size='small'>Liten text</EmptyStateText>
      <EmptyStateActions>
        <Button
          size='medium'
          variant='tertiary'
        >
          Liten knapp
        </Button>
      </EmptyStateActions>
    </EmptyState>
  ),
}
