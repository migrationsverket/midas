import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar, SidebarLinkGroup } from './Sidebar'
import { Gavel, House, Plus } from 'lucide-react'
import { baseColors } from '@midas-ds/theme'
import { LinkButton } from '@midas-ds/link-button'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Components/Sidebar',
  parameters: { layout: 'fullscreen' }
}
export default meta
type Story = StoryObj<typeof Sidebar>

const items: SidebarLinkGroup[] = [
  {
    items: [
      {
        title: 'Översikt',
        href: '#',
        icon: House
      }
    ]
  },
  {
    title: 'Ansökan',
    items: [
      {
        title: 'Skapa ansökan',
        href: '#',
        icon: Plus
      },
      {
        title: 'Beslut',
        href: '#',
        icon: Gavel
      }
    ]
  }
]

const AppExample = () => {
  return (
    <div
      style={{
        background: baseColors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        border: `dotted 2px ${baseColors.gray20}`
      }}
    >
      Din applikation
    </div>
  )
}

export const Primary: Story = {
  args: {
    items: items,
    user: {
      name: 'Philip Hjälmrud Ekströmersson',
      title: 'Teknisk förvaltare i myndighetssfären'
    },
    app: {
      name: 'Namn på applikationen',
      shortName: 'NPA'
    },
    title: 'Skapa ansökningar',
    children: (
      <>
        <AppExample />
        <AppExample />
      </>
    ),
    headerChildren: (
      <LinkButton
        variant='tertiary'
        target='_blank'
      >
        Öppna annan tjänst
      </LinkButton>
    )
  }
}
