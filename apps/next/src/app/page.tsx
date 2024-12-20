// eslint-disable-next-line @nx/enforce-module-boundaries
import '../../../../packages/theme/src/lib/global.css'
import { Button } from '@midas-ds/button'
import { Link } from '@midas-ds/link'
import { Card } from '@midas-ds/card'
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
          title: ''
        }}
        content='Hej'
      ></Card>
    </div>
  )
}
