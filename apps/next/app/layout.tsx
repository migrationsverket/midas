import type { Metadata } from 'next'
import { Layout } from '@midas-ds/components'
import '@midas-ds/components/default.css'

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
        <Layout
          items={[]}
          title={'next app'}
          user={{
            name: 'test',
            title: 'test',
          }}
          app={{
            name: 'test',
          }}
          variant='internal'
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
