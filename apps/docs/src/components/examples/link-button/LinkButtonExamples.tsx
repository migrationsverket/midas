import { LinkButton } from '@midas-ds/components'

export const Example = () => {
  return (
    <div
      className='card'
      style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}
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
    </div>
  )
}
