import { type Meta, type StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Badge, BadgeContainer, Button } from '@midas-ds/components'
import { Sidebar } from './Sidebar'
import { Navigation, NavigationItem, NavigationLink, NavigationSection } from '../navigation'
import { Bell, CalendarPlus2, CalendarX, Candy, Car, Caravan, Settings } from 'lucide-react'

type Story = StoryObj<typeof Sidebar>

const ExampleNavigation = () => (
  <Navigation>
    <NavigationSection>
      <NavigationItem>
        <NavigationLink
          href='/add-event'
          icon={<CalendarPlus2 />}
        >
          Add event
        </NavigationLink>
      </NavigationItem>
    </NavigationSection>
    <NavigationSection title='Dates'>
      <NavigationItem>
        <NavigationLink
          href='/remove-event'
          icon={<CalendarX />}
        >
          Remove event
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink
          href='/vehicle'
          icon={<Car />}
        >
          Vehicle information
        </NavigationLink>
      </NavigationItem>
    </NavigationSection>
    <NavigationSection title='Travel'>
      <NavigationItem>
        <NavigationLink
          href='/treats'
          icon={<Candy />}
        >
          Treats
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink
          href='/road-trip'
          icon={<Caravan />}
        >
          Road trip
        </NavigationLink>
      </NavigationItem>
    </NavigationSection>
  </Navigation>
)

export default {
  component: Sidebar,
  title: 'Layout/Sidebar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    rootElement: 'div',
  },
  args: {
    title: 'Navigation',
    children: <ExampleNavigation />,
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
    <Sidebar {...args}>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink
              href='/add-event'
              icon={<CalendarPlus2 />}
              isActive
            >
              Add event
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
    <Sidebar {...args}>
      <Navigation>
        <NavigationSection>
          <NavigationItem>
            <NavigationLink
              href='/add-event'
              icon={<CalendarPlus2 />}
              isActive
            >
              Add event
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
