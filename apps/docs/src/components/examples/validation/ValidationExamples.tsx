import { useState } from 'react'
import {
  TextField,
  Grid,
  GridItem,
  Button,
  InfoBanner,
  Link,
  Spinner,
  toastQueue,
  GlobalToastRegion,
} from '@midas-ds/components'
import { Form } from 'react-aria-components'

export const ErrorMessagePositionExample = () => {
  return (
    <div className='card'>
      <Grid>
        <GridItem size={6}>
          <TextField
            label='Ange förnamn'
            errorMessage='Du måste ange ett förnamn'
            isInvalid
            errorPosition='top'
          />
        </GridItem>
        <GridItem size={6}>
          <TextField
            label='Ange förnamn'
            errorMessage='Du måste ange ett förnamn'
            isInvalid
            errorPosition='bottom'
          />
        </GridItem>
      </Grid>
    </div>
  )
}

export const ValidateAfterSubmitExample = () => {
  const [name, setName] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const handleChange = (value: string) => {
    setName(value)
    if (value.trim() !== '') {
      setIsInvalid(false)
    }
  }

  const handlePress = () => {
    setIsInvalid(name.trim() === '')
    if (name.trim() !== '') {
      alert(`Du fyllde i ditt förnamn och det är ${name}`)
    }
  }

  return (
    <div className='card'>
      <Grid>
        <GridItem size={12}>
          <TextField
            label='Ange förnamn'
            value={name}
            onChange={handleChange}
            errorMessage={isInvalid ? 'Du måste ange ett förnamn' : undefined}
            isInvalid={isInvalid}
          />
        </GridItem>
        <GridItem size='auto'>
          <Button onPress={handlePress}>Skicka</Button>
        </GridItem>
      </Grid>
    </div>
  )
}

export const DirectValidationExample = () => {
  return (
    <div className='card'>
      <TextField
        type='email'
        label='Ange din epostadress'
        description='Ange den epost du vill använda för att kommunicera med Migrationsverket'
        errorMessage='Du måste ha @ och domän med i din epostadress'
        errorPosition='top'
      />
    </div>
  )
}

export const ErrorMessageListExample = () => {
  const [values, setValues] = useState({ name: '', email: '' })
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({})

  const validators: Record<keyof typeof values, (v: string) => string | null> =
    {
      name: v => (v.trim() === '' ? 'Du måste ange ett namn' : null),
      email: v => (v.trim() === '' ? 'Du måste ange en e-postadress' : null),
    }

  return (
    <div className='card'>
      <GlobalToastRegion />
      <Form
        validationErrors={validationErrors}
        onSubmit={e => {
          e.preventDefault()
          const errs = Object.fromEntries(
            (Object.keys(validators) as (keyof typeof values)[])
              .map(key => [key, validators[key](values[key])])
              .filter(([, msg]) => msg),
          ) as Record<string, string>
          setValidationErrors(errs)
          if (Object.keys(errs).length === 0)
            // Show success toast
            toastQueue.add(
              { message: 'Formuläret skickades!', type: 'success' },
              { timeout: 5000 },
            )
        }}
      >
        <Grid>
          {Object.keys(validationErrors).length > 0 && (
            <GridItem size={12}>
              <InfoBanner
                type='warning'
                title='Justera dessa fält'
              >
                <ul>
                  {Object.entries(validationErrors).map(([field, msg]) => (
                    <li key={field}>
                      <Link href={`#${field}`}>{msg}</Link>
                    </li>
                  ))}
                </ul>
              </InfoBanner>
            </GridItem>
          )}
          <GridItem size={12}>
            <TextField
              id='name'
              name='name'
              label='Namn'
              value={values.name}
              onChange={v => setValues(prev => ({ ...prev, name: v }))}
            />
          </GridItem>
          <GridItem size={12}>
            <TextField
              id='email'
              name='email'
              label='E-postadress'
              value={values.email}
              onChange={v => setValues(prev => ({ ...prev, email: v }))}
            />
          </GridItem>
          <GridItem size='auto'>
            <Button type='submit'>Skicka</Button>
          </GridItem>
        </Grid>
      </Form>
    </div>
  )
}

export const DatabaseValidationExample = () => {
  const [isChecking, setIsChecking] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  async function handleBlur() {
    if (!error && value.trim() !== '') {
      setIsChecking(true)
      // Simulate an async database check
      await new Promise(resolve => setTimeout(resolve, 2500))

      setIsChecking(false)
      if (value.trim() !== '12345') {
        setError('Kortnumret kunde inte hittas i databasen. Testa med 12345')
      } else {
        setError('')
      }
    }
  }

  async function handleSubmit() {
    if (value.trim() === '') {
      setError('Du måste fylla i ditt kortnummer för att kunna gå vidare')
      return
    } else if (error) {
      return
    }
    setError('')
    alert(`Du fyllde i ditt kortnummer och det är ${value}`)
  }

  return (
    <div className='card'>
      <Grid>
        <GridItem size={12}>
          <div className='field-and-spinner'>
            <TextField
              label='Ange ditt kortnummer'
              description='Ditt kortnummer kommer kontrolleras mot databasen. Det kan ta en liten stund'
              value={value}
              onChange={newValue => {
                setValue(newValue)
                if (error) setError('')
              }}
              onBlur={handleBlur}
              isInvalid={!!error}
              errorMessage={error}
            />
            <div className='spinner-box'>{isChecking && <Spinner small />}</div>
          </div>
        </GridItem>
        <GridItem size='auto'>
          <Button
            isDisabled={isChecking}
            onPress={handleSubmit}
          >
            Skicka
          </Button>
        </GridItem>
      </Grid>
    </div>
  )
}

export const ErrorMessageList = () => {
  return (
    <div className='card'>
      <InfoBanner
        type='warning'
        title='Justera dessa fält'
      >
        <ul>
          <li>
            <Link href='#felmeddelandelista'>Felmeddelande från fält A</Link>
          </li>
          <li>
            <Link href='#felmeddelandelista'>Felmeddelande från fält B</Link>
          </li>
        </ul>
      </InfoBanner>
    </div>
  )
}
