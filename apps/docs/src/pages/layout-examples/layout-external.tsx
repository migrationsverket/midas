import { Layout, LinkButton } from '@midas-ds/components'
import { semantic } from '@midas-ds/components/theme'
import {
  Calendar,
  House,
  Plus,
  Gavel,
  ClipboardList,
  Search,
  User,
} from 'lucide-react'

export default function LayoutExample() {
  return (
    <Layout
      variant='external'
      items={[
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
              hasBadge: true,
            },
          ],
        },
      ]}
      title='Skapa ansökningar'
      user={{ name: 'Namn Namnsson', title: 'Roll eller behörighet' }}
      app={{ name: 'Namn på applikationen' }}
      headerChildren={
        <LinkButton
          variant='tertiary'
          target='_blank'
        >
          Öppna annan tjänst
        </LinkButton>
      }
    >
      <div
        style={{
          background: semantic.layer02,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          border: `dotted 2px ${semantic.borderSubtle}`,
          color: semantic.textPrimary,
        }}
      >
        Din applikation
      </div>
    </Layout>
  )
}
