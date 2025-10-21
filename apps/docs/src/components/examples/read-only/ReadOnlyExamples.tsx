import { Button, InfoBanner, TextField } from '@midas-ds/components'
import { useState } from 'react'

export const AccessLevelExample = () => {
  return (
    <div
      className='card'
      style={{ gap: '16px' }}
    >
      <InfoBanner
        type='info'
        message='Du har endast behörighet att redigera vissa fält. Kontakta din administratör om du behöver kunna ändra alla fält'
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

export const EditFormExample = () => {
  const [isReadOnly, setReadonly] = useState(true)

  const [formData, setFormData] = useState({
    kortnummer: '12345678',
    anvandarnamn: 'Midas',
  })

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleToggle = () => {
    setReadonly(prev => !prev)
  }

  return (
    <div
      className='card'
      style={{ gap: '16px' }}
    >
      <TextField
        label='Kortnummer'
        value={formData.kortnummer}
        onChange={value => handleChange('kortnummer', value)}
        isReadOnly={isReadOnly}
      />
      <TextField
        label='Användarnamn'
        value={formData.anvandarnamn}
        onChange={value => handleChange('anvandarnamn', value)}
        isReadOnly={isReadOnly}
      />
      <Button onPress={handleToggle}>
        {isReadOnly ? 'Redigera' : 'Spara'}
      </Button>
    </div>
  )
}
