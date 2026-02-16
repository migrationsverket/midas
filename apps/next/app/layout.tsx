import type { Metadata } from 'next'
import '@midas-ds/components/default.css'
import './global.css'
import { AppShell } from './AppShell'

export const metadata: Metadata = {
  title: 'midas components E2E',
  description: 'E2E test app for Midas components',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
