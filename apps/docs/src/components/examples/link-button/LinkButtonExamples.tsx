import { LinkButton } from '@midas-ds/components'

export const Example = () => {
  return (
    <>
      {/* start_here */}
      <LinkButton href='#'>Starta tjänst</LinkButton>
      <LinkButton
        variant='secondary'
        href='#'
      >
        Starta tjänst
      </LinkButton>
      <LinkButton
        variant='tertiary'
        href='#'
      >
        Starta tjänst
      </LinkButton>
      {/* end_here */}
    </>
  )
}
