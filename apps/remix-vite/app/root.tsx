import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'
// eslint-disable-next-line @nx/enforce-module-boundaries
import '../../../packages/components/src/theme/global.css'
import { Layout as MidasLayout, SidebarLinkGroup } from '@midas-ds/components'
import { House, Info } from 'lucide-react'
import { useNavigate } from '@remix-run/react'

export const meta: MetaFunction = () => [
  {
    title: 'New Remix App',
  },
]

const pages: SidebarLinkGroup[] = [
  {
    items: [
      {
        title: 'Hem',
        href: '/',
        icon: House,
      },
      {
        title: 'Om',
        href: '/about',
        icon: Info,
      },
    ],
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        <MidasLayout
          items={pages}
          title='Remix Vite Test App'
          user={{ name: 'Test Testsson', title: 'Testare' }}
          app={{ name: 'Remix Vite Test App' }}
          clientSideRouter={navigate}
        >
          {children}
        </MidasLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
