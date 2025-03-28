import type { Meta, StoryObj } from '@storybook/react'
import { Layout, SidebarLinkGroup } from './Layout'
import { Calendar, Gavel, House, Plus, ClipboardList } from 'lucide-react'
import { semantic } from '../theme'
import { LinkButton } from '../link-button'

const meta: Meta<typeof Layout> = {
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof Layout>

const items: SidebarLinkGroup[] = [
  {
    items: [
      {
        title: 'Översikt',
        href: '#',
        icon: House,
      },
    ],
  },
  {
    title: 'Ansökan',
    items: [
      {
        title: 'Skapa ansökan',
        href: '#',
        icon: Plus,
      },
      {
        title: 'Beslut',
        href: '#',
        icon: Gavel,
      },
    ],
  },
  {
    title: 'Kort och konto',
    items: [
      {
        title: 'LMA-kort',
        href: '#',
        icon: Calendar,
      },
      {
        title: 'Avvikelser',
        href: '#',
        icon: ClipboardList,
      },
    ],
  },
]

const AppExample = () => {
  return (
    <div
      style={{
        background: semantic.layer02,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        border: `dotted 2px ${semantic.borderSubtle}`,
      }}
    >
      Din applikation
    </div>
  )
}

export const Primary: Story = {
  args: {
    items: items,
    user: { name: 'Namn Namnsson', title: 'Roll eller behörighet' },
    app: { name: 'Namn på applikationen' },
    title: 'Skapa ansökningar',
    children: <AppExample />,
  },
}

export const OnlyHeader: Story = {
  render: () => (
    <Layout.Provider
      items={items}
      title='Remix Vite Test App'
      user={{ name: 'Test Testsson', title: 'Testare' }}
      app={{ name: 'Remix Vite Test App' }}
      headerChildren={
        <LinkButton
          variant='tertiary'
          target='_blank'
        >
          Öppna annan tjänst
        </LinkButton>
      }
      isCollapsed={false}
      setIsCollapsed={() => null}
      isOpened={false}
      setIsOpened={() => null}
    >
      <Layout.Header />
    </Layout.Provider>
  ),
}

export const ActivePage: Story = {
  args: {
    ...Primary.args,
    items: [
      ...items,
      {
        title: 'Aktiv sida',
        items: [{ title: 'Aktiv sida', href: '#', icon: House, active: true }],
      },
    ],
  },
}
