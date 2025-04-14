import React from 'react'
import { Layout, LinkButton, MidasLayout } from '@midas-ds/components'
import { semantic } from '@midas-ds/components/theme'
import { Calendar, House, Plus, Gavel, ClipboardList } from 'lucide-react'

export const BasicExample: React.FC<Partial<MidasLayout>> = props => (
  <Layout
    variant='internal'
    items={[
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
    {...props}
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
