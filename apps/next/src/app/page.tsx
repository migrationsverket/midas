// eslint-disable-next-line @nx/enforce-module-boundaries
import '../../../../packages/components/src/theme/global.css'
import { Button, Link, Card } from '@midas-ds/components'
import NextLink from 'next/link'

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <Button>Klicka på mig</Button>
      <Link
        href='/'
        as={NextLink}
        standalone
        prefetch={false}
      >
        Hej
      </Link>
      <Card
        title='hej'
        link={{
          href: '',
          children: '',
          title: '',
        }}
        content='Hej'
      ></Card>
    </div>
  )
}
