import { Breadcrumb, Breadcrumbs, Card, CardContent, CardTitle, Heading, Text } from '@midas-ds/components'
import { Building2, Globe, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Profile() {
  return (
    <div className={styles.page}>
      <Breadcrumbs>
        <Breadcrumb><Link href='/'>Home</Link></Breadcrumb>
        <Breadcrumb>Profile</Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>Profile</Heading>

      <div className={styles.header}>
        <div className={styles.avatar} aria-hidden>AL</div>
        <div className={styles.headerInfo}>
          <Heading level={2}>Anna Lindgren</Heading>
          <Text>Case Officer · Immigration Authority</Text>
        </div>
      </div>

      <div className={styles.cards}>
        <Card>
          <CardContent>
            <CardTitle>Contact information</CardTitle>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Mail size={16} aria-hidden />
                <Text>anna.lindgren@migrationsverket.se</Text>
              </li>
              <li className={styles.listItem}>
                <Phone size={16} aria-hidden />
                <Text>+46 10 485 00 00</Text>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Office</CardTitle>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Building2 size={16} aria-hidden />
                <Text>Stockholm office</Text>
              </li>
              <li className={styles.listItem}>
                <MapPin size={16} aria-hidden />
                <Text>Sturegatan 15, 102 36 Stockholm</Text>
              </li>
              <li className={styles.listItem}>
                <Globe size={16} aria-hidden />
                <Text>Swedish, English, Arabic</Text>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
