import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileQuestion, FolderSearch, Lock, SearchX } from 'lucide-react'
import {
  Blankslate,
  BlankslateVisual,
  BlankslateHeading,
  BlankslateDescription,
  BlankslateActions,
} from './Blankslate'
import { Button } from '../button'
import { LinkButton } from '../link-button'

const meta: Meta<typeof Blankslate> = {
  component: Blankslate,
  subcomponents: {
    BlankslateVisual,
    BlankslateHeading,
    BlankslateDescription,
    BlankslateActions,
  },
  title: 'Components/Blankslate',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Blankslate adapts to the width of its container rather than the viewport, so the same component works for a full page and for a single region, such as a micro frontend that failed to load while the rest of the page keeps working. See GitHub\'s guidance on [degraded experiences](https://primer.style/product/ui-patterns/degraded-experiences/) for why failures should be handled locally.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Blankslate>

export const Default: Story = {
  render: args => (
    <Blankslate {...args}>
      <BlankslateVisual>
        <FolderSearch size={48} />
      </BlankslateVisual>
      <BlankslateHeading>No results found</BlankslateHeading>
      <BlankslateDescription>
        Try adjusting your search or filters to find what you're looking for.
      </BlankslateDescription>
      <BlankslateActions>
        <Button variant='primary'>Clear filters</Button>
      </BlankslateActions>
    </Blankslate>
  ),
}

export const WithSecondaryAction: Story = {
  render: args => (
    <Blankslate {...args}>
      <BlankslateVisual>
        <SearchX size={48} />
      </BlankslateVisual>
      <BlankslateHeading>No cases match your search</BlankslateHeading>
      <BlankslateDescription>
        We couldn't find any cases matching your criteria. Try a different
        search term or start a new case.
      </BlankslateDescription>
      <BlankslateActions>
        <Button variant='primary'>New case</Button>
        <LinkButton
          variant='tertiary'
          href='#'
        >
          Learn more
        </LinkButton>
      </BlankslateActions>
    </Blankslate>
  ),
}

export const InNarrowContainer: Story = {
  render: args => (
    <div style={{ width: '20rem', border: '1px dashed' }}>
      <Blankslate {...args}>
        <BlankslateVisual>
          <FolderSearch size={48} />
        </BlankslateVisual>
        <BlankslateHeading>Nothing here yet</BlankslateHeading>
        <BlankslateDescription>
          Items you add will appear here.
        </BlankslateDescription>
      </Blankslate>
    </div>
  ),
}

export const InWideContainer: Story = {
  render: args => (
    <div style={{ width: '48rem', border: '1px dashed' }}>
      <Blankslate {...args}>
        <BlankslateVisual>
          <FolderSearch size={48} />
        </BlankslateVisual>
        <BlankslateHeading>Nothing here yet</BlankslateHeading>
        <BlankslateDescription>
          Items you add will appear here.
        </BlankslateDescription>
      </Blankslate>
    </div>
  ),
}

export const NotFound: Story = {
  name: 'Pattern: 404',
  render: args => (
    <Blankslate {...args}>
      <BlankslateVisual>
        <FileQuestion size={48} />
      </BlankslateVisual>
      <BlankslateHeading>Page not found</BlankslateHeading>
      <BlankslateDescription>
        The page you're looking for doesn't exist or has been moved.
      </BlankslateDescription>
      <BlankslateActions>
        <LinkButton
          variant='primary'
          href='/'
        >
          Go to start page
        </LinkButton>
      </BlankslateActions>
    </Blankslate>
  ),
}

export const NoPermission: Story = {
  name: 'Pattern: No permission',
  render: args => (
    <Blankslate {...args}>
      <BlankslateVisual>
        <Lock size={48} />
      </BlankslateVisual>
      <BlankslateHeading>Access denied</BlankslateHeading>
      <BlankslateDescription>
        You don't have permission to view this page. Contact your administrator
        if you think this is a mistake.
      </BlankslateDescription>
    </Blankslate>
  ),
}
