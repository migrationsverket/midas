import { InfoBanner, TextField } from '@midas-ds/components'

export const AccessLevelExample = () => {
  return (
    <div
      className='card'
      style={{ gap: '16px' }}
    >
      <InfoBanner
        type='info'
        message='Du har endast behörighet att redigera vissa fält. Kontakta din administratör om för behörighetsfrågor.'
      />
      <TextField
        label='Kortnummer'
        value='12345678'
        isReadOnly
      />
      <TextField label='Användarnamn' />
    </div>
  )
}
