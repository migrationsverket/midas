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
import { Main } from '../main'

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
    const [isRightPanelOpen, setIsRightPanelOpen] = useState(true)

    const toggleIsNavigationOpen = () => setIsNavigationOpen(x => !x)

    return (
      <Layout
        {...rest}
        header={
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
        }
        sidebar={
          <CollapsePanel
            isCollapsed={isNavigationCollapsed}
            onCollapseChange={setIsNavigationCollapsed}
          />
        }
        navbar={
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
        }
        dismissPanel={
          <Panel
            variant='dismiss'
            aria-label='right panel'
            isOpen={isRightPanelOpen}
            onOpenChange={setIsRightPanelOpen}
            style={{ gridArea: 'panelRight' }}
            title='Panel'
          />
        }
      >
        <Main>
          {children}
          {!isRightPanelOpen && (
            <Button onPress={() => setIsRightPanelOpen(true)}>
              Öppna sidopanel
            </Button>
          )}
        </Main>
      </Layout>
    )
  },
}
