import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Badge, BadgeContainer, Button } from '@midas-ds/components'
import { Sidebar } from './Sidebar'
import * as navigationStories from '../navigation/Navigation.stories'
import { Navigation, NavigationItem, NavigationLink, NavigationSection } from '../navigation'
import { Bell, FileText, House, Settings } from 'lucide-react'

type Story = StoryObj<typeof Sidebar>

const { Nested: NestedNavigation } = composeStories(navigationStories)

export default {
  component: Sidebar,
  title: 'Layout/Sidebar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    rootElement: 'div',
  },
  args: {
    title: 'My app',
    children: <NestedNavigation />,
  },
} satisfies Meta<typeof Sidebar>

export const Primary: Story = {}

export const Collapsed: Story = {
  args: {
    defaultCollapsed: true,
  },
}

export const WithBadge: Story = {
  render: args => (
    <Sidebar
      {...args}
      title='My app'
    >
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink
              href='/'
              icon={<House />}
              isActive
            >
              Hem
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              href='/arenden'
              icon={<FileText />}
            >
              Ärenden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              href='/meddelanden'
              icon={
                <BadgeContainer>
                  <Bell />
                  <Badge>12</Badge>
                </BadgeContainer>
              }
            >
              Meddelanden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              href='/installningar'
              icon={<Settings />}
            >
              Inställningar
            </NavigationLink>
          </NavigationItem>
        </NavigationSection>
      </Navigation>
    </Sidebar>
  ),
}

export const WithBadgeCollapsed: Story = {
  args: { defaultCollapsed: true },
  render: args => (
    <Sidebar
      {...args}
      title='My app'
    >
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink
              href='/'
              icon={<House />}
              isActive
            >
              Hem
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              href='/meddelanden'
              icon={
                <BadgeContainer>
                  <Bell />
                  <Badge>12</Badge>
                </BadgeContainer>
              }
            >
              Meddelanden
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              href='/installningar'
              icon={<Settings />}
            >
              Inställningar
            </NavigationLink>
          </NavigationItem>
        </NavigationSection>
      </Navigation>
    </Sidebar>
  ),
}

export const Controlled: Story = {
  render: args => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        <Button onPress={() => setIsCollapsed(c => !c)}>
          {isCollapsed ? 'Expandera' : 'Kollapsa'} sidebar
        </Button>
        <Sidebar
          {...args}
          isCollapsed={isCollapsed}
          onCollapseChange={setIsCollapsed}
        />
      </div>
    )
  },
}
