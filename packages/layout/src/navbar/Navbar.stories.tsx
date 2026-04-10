import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import * as navigationStories from '../navigation/Navigation.stories'
import { Navbar } from './Navbar'

type Story = StoryObj<typeof Navbar>

const { Flat: FlatNavigation } = composeStories(navigationStories)

export default {
  component: Navbar,
  title: 'Layout/Navbar',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', rootElement: 'div' },
  args: {
    children: <FlatNavigation />,
  },
} satisfies Meta<typeof Navbar>

export const Primary: Story = {}
