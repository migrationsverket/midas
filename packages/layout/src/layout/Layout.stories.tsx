import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import { Layout } from '.'
import { Header } from '../header'
import { Panel } from '../panel'
import { Navbar } from '../navbar'
import { House, List, Menu } from 'lucide-react'
import { Button } from '@midas-ds/components'
import { useId, useState } from 'react'
import * as panelStories from '../panel/Panel.stories'
import { Navigation } from '../navigation'

const { Collapse: CollapsePanel } = composeStories(panelStories)

type Story = StoryObj<typeof Layout>

export default {
  component: Layout,
  title: 'Components/Layout/Layout',
  tags: ['autodocs'],
  args: {
    children: 'Content',
  },
  parameters: { layout: 'fullscreen', rootElement: 'div' },
} satisfies Meta<typeof Layout>

export const Primary: Story = {
  render: ({ children, ...rest }) => {
    const drawerId = useId()

    const [isNavigationOpen, setIsNavigationOpen] = useState(false)
    const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false)

    const toggleIsNavigationOpen = () => setIsNavigationOpen(x => !x)

    return (
      <Layout {...rest}>
        <Header>
          <Button
            aria-controls={drawerId}
            aria-expanded={isNavigationOpen}
            aria-haspopup='dialog'
            icon={Menu}
            onPress={toggleIsNavigationOpen}
            variant='icon'
          />
        </Header>
        <CollapsePanel
          isCollapsed={isNavigationCollapsed}
          onCollapseChange={setIsNavigationCollapsed}
        />
        <main style={{ height: '5rem', padding: '1rem' }}>{children}</main>
        <Panel
          aria-label='right panel'
          style={{ gridArea: 'panelRight' }}
        >
          Panel
        </Panel>
        <Navbar>
          <ul>
            <Navigation.Link
              href='/'
              isActive
              variant='navbar'
              title='Hem'
            >
              <House />
            </Navigation.Link>
            <Navigation.Link
              href='/categories'
              variant='navbar'
              title='Kategorier'
            >
              <List />
            </Navigation.Link>
          </ul>
        </Navbar>
      </Layout>
    )
  },
}
