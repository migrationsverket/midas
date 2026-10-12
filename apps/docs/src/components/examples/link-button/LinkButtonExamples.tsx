import { LinkButton, Stack } from '@midas-ds/components'

export const Example = () => {
  return (
    <Stack
      direction='row'
      spacing='medium'
      className='card'
    >
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
    </Stack>
  )
}
