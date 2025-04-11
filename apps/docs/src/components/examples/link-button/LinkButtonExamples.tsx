import { LinkButton } from '@midas-ds/components'

export const Example = () => {
  return (
    <>
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
    </>
  )
}
