import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  Layout,
  LinkButton,
  SidebarLinkGroup,
} from '@midas-ds/components'
import {
  Calendar,
  Gavel,
  House,
  Plus,
  ClipboardList,
  Search,
  User,
  LogOut,
  Languages,
  Bell,
} from 'lucide-react'
import { variables } from '@midas-ds/theme'
import { expect, userEvent } from 'storybook/test'
import styles from '@midas-ds/components/layout/Layout.module.css'
const { layer02Base, borderColorSubtle, textPrimary } = variables

const meta: Meta<typeof Layout> = {
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
  parameters: { layout: 'fullscreen', rootElement: 'div' },
  args: {
    className: 'test-class',
  },
}

export default meta
type Story = StoryObj<typeof Layout>

const items: SidebarLinkGroup[] = [
  {
    items: [
      {
        title: 'Hem',
        href: '#',
        icon: House,
        active: true,
      },
      {
        title: 'Ansökan',
        href: '#',
        icon: Search,
      },
      {
        title: 'Boka',
        href: '#',
        icon: Calendar,
        hasBadge: true,
      },
      {
        title: 'Profil',
        href: '#',
        icon: User,
      },
      {
        title: 'Kontakt',
        href: '#',
        icon: Plus,
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
        background: layer02Base,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        border: `dotted 2px ${borderColorSubtle}`,
        color: textPrimary,
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
  play: async ({ canvasElement, step, args }) => {
    await step('it should use accept a custom className', async () => {
      // rootElement is set to 'div' in the default exported parameters
      await expect(canvasElement.querySelector('div')?.firstChild).toHaveClass(
        styles.baseLayout,
        args.className as string,
      )
    })
  },
}

export const External: Story = {
  args: {
    items: items,
    user: { name: 'Namn Namnsson', title: 'Roll eller behörighet' },
    app: { name: 'Namn på applikationen' },
    title: 'Skapa ansökningar',
    variant: 'external',
    children: <AppExample />,
    headerChildren: (
      <>
        <Button
          variant='icon'
          icon={Bell}
          aria-label='Notiser'
          size='medium'
        />
        <Button
          variant='icon'
          icon={Languages}
          aria-label='Byt språk'
          size='medium'
        />
        <Button
          variant='icon'
          icon={LogOut}
          aria-label='Logga ut'
          size='medium'
        />
      </>
    ),
  },
}

export const OnlyHeader: Story = {
  render: () => (
    <Layout.Provider
      id='test'
      items={items}
      title='Skapa ansökningar'
      user={{ name: 'Test Testsson', title: 'Testare' }}
      app={{ name: 'Namn på applikationen' }}
      variant='internal'
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
    >
      <Layout.Header />
    </Layout.Provider>
  ),
}

export const Navbar: Story = {
  render: () => (
    <Layout.Provider
      id='test'
      items={items}
      title='Skapa ansökningar'
      user={{ name: 'Test Testsson', title: 'Testare' }}
      app={{ name: 'Namn på applikationen' }}
      variant='external'
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
    >
      <Layout.Navbar />
    </Layout.Provider>
  ),
}

export const DS1375: Story = {
  ...Primary,
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvas, step }) => {
    await step('it should be possible to skip to content', async () => {
      await userEvent.tab()
      await userEvent.keyboard('[Enter]')
      await expect(canvas.getByRole('main')).toHaveFocus()
    })
  },
}
