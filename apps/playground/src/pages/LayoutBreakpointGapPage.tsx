import {
  Header,
  HeaderLogo,
  HeaderTitle,
  Layout,
  LayoutContent,
  Main,
  Navbar,
  Navigation,
  NavigationItem,
  NavigationLink,
  PanelProvider,
  PanelRegion,
  Sidebar,
  usePanels,
} from '@midas-ds/layout'
import { Button } from '@midas-ds/components'
import { House } from 'lucide-react'

const Content = () => {
  const { addPanel, closePanel } = usePanels()

  return (
    <Main style={{ padding: 16 }}>
      Main content
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <Button onPress={() => addPanel({ id: 'demo', title: 'Details' })}>
          Open panel
        </Button>
        <Button
          variant='secondary'
          onPress={() => closePanel('demo')}
        >
          Close panel
        </Button>
      </div>
    </Main>
  )
}

export const LayoutBreakpointGapPage = () => (
  <PanelProvider panelVariant='push'>
    <Layout>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Demo</HeaderTitle>
      </Header>

      <LayoutContent>
        <Sidebar title='Nav'>
          <Navigation>
            <NavigationItem>
              <NavigationLink
                href='/'
                icon={<House />}
              >
                Item
              </NavigationLink>
            </NavigationItem>
          </Navigation>
        </Sidebar>
        <Content />
        <PanelRegion />
      </LayoutContent>

      <Navbar>
        <Navigation>
          <NavigationItem>
            <NavigationLink
              href='/'
              icon={<House />}
            >
              Item
            </NavigationLink>
          </NavigationItem>
        </Navigation>
      </Navbar>
    </Layout>
  </PanelProvider>
)
