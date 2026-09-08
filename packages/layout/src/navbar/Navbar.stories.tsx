import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import * as navigationStories from '../navigation/Navigation.stories'
import { Navbar } from './Navbar'
import { Navigation, NavigationItem, NavigationLink } from '../navigation'
import { Plus } from 'lucide-react'
import { Layout } from '../layout'

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

export const OverriddenBreakpoint: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Wrapping Navbar in `<Layout breakpoint={900}>` moves the mobile/desktop split from the default 640px to 900px. Resize the viewport to see the Navbar stay visible up to 900px instead of 640px.',
      },
    },
  },
  render: args => (
    <Layout breakpoint={900}>
      <Navbar {...args} />
    </Layout>
  ),
}

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
