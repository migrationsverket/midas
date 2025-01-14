import type { Meta, StoryObj } from '@storybook/react'
import { Header, Layout, SidebarLinkGroup } from './Layout'
import { Calendar, Gavel, House, Plus, ClipboardList } from 'lucide-react'
import { baseColors } from '@midas-ds/theme'
import { LinkButton } from '@midas-ds/link-button'

const meta: Meta<typeof Layout> = {
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Layout>

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
  },
  {
    title: 'Kort och konto',
    items: [
      {
        title: 'LMA-kort',
        href: '#',
        icon: Calendar
      },
      {
        title: 'Avvikelser',
        href: '#',
        icon: ClipboardList
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
        height: '80vh',
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
      name: 'Namn Namnsson',
      title: 'Roll eller behörighet'
    },
    app: {
      name: 'Namn på applikationen',
      shortName: 'NPA'
    },
    title: 'Skapa ansökningar',
    children: <AppExample />,
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

export const OnlyHeader: Story = {
  render: () => (
    <Header
      title='Skapa ansökningar'
      user={{ name: 'Namn Namnsson', title: 'Roll eller behörighet' }}
      app={{ name: 'Namn på applikationen', shortName: 'NPA' }}
      headerChildren={
        <LinkButton
          variant='tertiary'
          target='_blank'
        >
          Öppna annan tjänst
        </LinkButton>
      }
    />
  )
}
