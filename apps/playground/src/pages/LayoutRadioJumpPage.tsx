import { RadioGroup, Radio } from '@midas-ds/components'
import {
  Header,
  HeaderLogo,
  HeaderTitle,
  Layout,
  LayoutContent,
  Main,
  Navigation,
  NavigationItem,
  NavigationLink,
  NavigationSection,
  Sidebar,
} from '@midas-ds/layout'
import { House } from 'lucide-react'

// Repro for support bug: clicking a radio button far down a long, internally
// scrolling Main causes the layout to jump and part of the screen flashes white.
export const LayoutRadioJumpPage = () => {
  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Demo</HeaderTitle>
      </Header>

      <LayoutContent>
        <Sidebar title='Nav'>
          <Navigation>
            <NavigationSection title='Section'>
              <NavigationItem>
                <NavigationLink
                  href='/'
                  icon={<House />}
                >
                  Item
                </NavigationLink>
              </NavigationItem>
            </NavigationSection>
          </Navigation>
        </Sidebar>
        <Main>
          <div
            style={{
              display: 'flex',
              height: 2000,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <RadioGroup label='Radio stuff'>
              <Radio value='1'>1</Radio>
              <Radio value='2'>2</Radio>
              <Radio value='3'>3</Radio>
            </RadioGroup>
          </div>
        </Main>
      </LayoutContent>
    </Layout>
  )
}
