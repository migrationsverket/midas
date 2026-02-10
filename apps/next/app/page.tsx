import { Heading, VERSION } from '@midas-ds/components'

export default function Home() {
  return (
    <>
      <Heading level={1}>midas components e2e tests</Heading>
      <span data-midas-version={VERSION} />
    </>
  )
}
