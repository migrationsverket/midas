import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import * as navigationStories from '../navigation/Navigation.stories'
import { Navbar } from './Navbar'
import { Navigation, NavigationItem, NavigationLink } from '../navigation'
import { Plus } from 'lucide-react'

type Story = StoryObj<typeof Navbar>

const { Flat: FlatNavigation } = composeStories(navigationStories)

export default {
  component: Navbar,
  title: 'Layout/Navbar',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', rootElement: 'div' },
  globals: {
    viewport: { value: 'small' },
  },
  args: {
    children: <FlatNavigation />,
  },
} satisfies Meta<typeof Navbar>

export const Primary: Story = {}

export const FiveItems: Story = {
  args: {
    children: (
      <Navigation>
        {['Första', 'Andra', 'Tredje', 'Fjärde', 'Femte'].map((title, i) => (
          <NavigationItem key={title}>
            <NavigationLink
              href='#'
              icon={<Plus />}
              isActive={i === 0}
            >
              {title}
            </NavigationLink>
          </NavigationItem>
        ))}
      </Navigation>
    ),
  },
}
