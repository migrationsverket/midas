import { Heading, InfoBanner, VERSION } from '@midas-ds/components'
import { Information } from '../components/Information'
import { AppSettings } from '../components/AppSettings/AppSettings'

export default function Home() {
  return (
    <>
      <InfoBanner
        type='info'
        title='Scheduled maintenance'
        message='The portal will be unavailable on Sunday 2 March between 02:00–06:00 CET due to scheduled system maintenance. Please save any work in progress before then.'
      />
      <Heading level={1}>midas components e2e tests</Heading>
      <span data-midas-version={VERSION} />
      <Information />
      <AppSettings />
    </>
  )
}
