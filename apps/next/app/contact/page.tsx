import { Breadcrumb, Breadcrumbs, Heading } from '@midas-ds/components'
import Link from 'next/link'

export default function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--midas-space-medium)' }}>
      <Breadcrumbs>
        <Breadcrumb><Link href='/'>Home</Link></Breadcrumb>
        <Breadcrumb>Contact</Breadcrumb>
      </Breadcrumbs>
      <Heading level={1}>Contact</Heading>
    </div>
  )
}
