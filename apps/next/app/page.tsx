import { Heading, VERSION } from '@midas-ds/components'
import { Information } from '../components/Information'

export default function Home() {
  return (
    <>
      <Heading level={1}>midas components e2e tests</Heading>
      <span data-midas-version={VERSION} />
      <Information />
    </>
  )
}
