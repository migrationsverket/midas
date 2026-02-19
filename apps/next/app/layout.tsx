import type { Metadata } from 'next'
import '@midas-ds/components/default.css'
import './global.css'
import { AppShell } from './AppShell'
import { Main } from '@midas-ds/layout'

export const metadata: Metadata = {
  title: 'midas components E2E',
  description: 'E2E test app for Midas components',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en'>
      <body>
        <AppShell>
          <Main data-debug='Main'>{children}</Main>
        </AppShell>
      </body>
    </html>
  )
}
