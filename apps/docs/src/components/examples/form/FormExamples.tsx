import React from 'react'
import styles from './FormExamples.module.css'
import { Form } from 'react-aria-components'
import {
  TextField,
  Button,
  ButtonGroup,
  CheckboxGroup,
  Checkbox,
  Spinner,
  InfoBanner,
  Link,
} from '@midas-ds/components'

export const UncontrolledForm = () => {
  const [result, setResult] = React.useState<Record<
    string,
    FormDataEntryValue
  > | null>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      FormDataEntryValue
    >
    setResult(data)
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className={styles.form}
        validationBehavior='native' // use 'aria' to allow submit when invalid
      >
        <TextField
          label='Namn'
          name='name'
          isRequired
        />
        <TextField
          label='E-post'
          type='email'
          name='email'
          isRequired
        />
        <CheckboxGroup
          label='Spara mina uppgifter'
          name='saveData'
          isRequired
        >
          <Checkbox value='agree'>Jag godkänner</Checkbox>
        </CheckboxGroup>
        <ButtonGroup>
          <Button type='submit'>Skicka</Button>
          <Button
            type='reset'
            variant='secondary'
          >
            Rensa
          </Button>
        </ButtonGroup>
      </Form>
      <span>{result && <pre>{JSON.stringify(result, null, 2)}</pre>}</span>
    </>
  )
}

export const ControlledForm = () => {
  const [name, setName] = React.useState('')
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <Form onSubmit={onSubmit}>
      <TextField
        name='name'
        label='Namn'
        onChange={setName}
        isRequired
      />
      <div>Ditt namn: {name}</div>
      <Button type='submit'>Skicka</Button>
    </Form>
  )
}

export const RealtimeValidation = () => {
  const [password, setPassword] = React.useState('')
  const errors: string[] = []
  if (password.length < 8) {
    errors.push('Lösenordet måste vara fler än 8 tecken.')
  }
  if ((password.match(/[A-Z]/g) ?? []).length < 2) {
    errors.push('Lösenordet måste innehålla minst 2 versaler.')
  }
  if ((password.match(/[^a-z]/gi) ?? []).length < 2) {
    errors.push('Lösenordet måste innehålla minst två symboler.')
  }

  return (
    <TextField
      label='Lösenord'
      style={{ whiteSpace: 'pre-line' }}
      isInvalid={errors.length > 0}
      value={password}
      onChange={setPassword}
      errorMessage={errors.join('\n')}
      errorPosition='bottom'
    />
  )
}

export const RealtimeValidationEmail = () => {
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')

  const handleBlur = () => {
    if (!email.includes('@')) {
      setError('E-postadressen måste innehålla ett @-tecken.')
    } else {
      setError('')
    }
  }

  return (
    <TextField
      label='E-postadress'
      description='Ange en epostadress som innehåller @'
      value={email}
      onChange={setEmail}
      onBlur={handleBlur}
      isInvalid={!!error}
      errorMessage={error}
      errorPosition='top'
    />
  )
}

export const ServerValidation = () => {
  const [isWaiting, setIsWaiting] = React.useState(false)
  // Fake server used in this example.
  const delay = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms))
  async function callServer(
    data: Record<string, FormDataEntryValue>,
  ): Promise<{ errors: Record<string, string> }> {
    setIsWaiting(true)
    await delay(1000)
    setIsWaiting(false)
    return {
      errors: {
        username: `Tyvärr, användarnamnet ${data.username} är upptaget.`,
      },
    }
  }
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      FormDataEntryValue
    >
    const result = await callServer(data)
    setErrors(result.errors)
  }

  return (
    <Form
      validationErrors={errors}
      onSubmit={onSubmit}
      className={styles.form}
    >
      <TextField
        label='Användarnamn'
        name='username'
        isRequired
      />
      <TextField
        label='Lösenord'
        name='password'
        type='password'
        isRequired
      />
      <ButtonGroup>
        <Button type='submit'>
          {isWaiting ? (
            <>
              <Spinner
                isOnColor
                small
              />
              Skickar...
            </>
          ) : (
            'Skicka'
          )}
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export const ErrorMessageList = () => {
  const [isWaiting, setIsWaiting] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [invalidFields, setInvalidFields] = React.useState<
    Record<string, FormDataEntryValue>
  >({})

  // Fake server used in this example.
  const delay = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms))

  async function callServer(
    data: Record<string, FormDataEntryValue>,
  ): Promise<{ errors: Record<string, string> }> {
    setIsWaiting(true)
    await delay(1000)
    setIsWaiting(false)
    return {
      errors: {
        username: `Användarnamnet ${data.username} är upptaget.`,
        password: 'Lösenordet är tyvärr felaktigt.',
      },
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInvalidFields({})

    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      FormDataEntryValue
    >
    const result = await callServer(data)
    setErrors(result.errors)
  }

  const onInvalid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      FormDataEntryValue
    >

    setInvalidFields(data)
  }

  return (
    <Form
      validationErrors={errors}
      onSubmit={onSubmit}
      className={styles.form}
      onInvalid={onInvalid}
    >
      {(Object.keys(invalidFields).length !== 0 ||
        Object.keys(errors).length !== 0) && (
        <InfoBanner
          type='warning'
          role='alert'
          title='Kontrollera följande fält'
        >
          <ul>
            {Object.keys(invalidFields).length !== 0 &&
              Object.entries(invalidFields).map(([field, value]) => (
                <li key={field}>
                  <Link href={'#' + field}>Fyll i det här fältet</Link>
                </li>
              ))}
            {Object.keys(errors).length !== 0 &&
              Object.entries(errors).map(([field, message]) => (
                <li key={field}>
                  <Link href={'#' + field}>{message}</Link>
                </li>
              ))}
          </ul>
        </InfoBanner>
      )}
      <TextField
        id='username'
        label='Användarnamn'
        name='username'
        isRequired
      />
      <TextField
        id='password'
        label='Lösenord'
        name='password'
        type='password'
        isRequired
      />
      <ButtonGroup>
        <Button type='submit'>
          {isWaiting ? (
            <>
              <Spinner
                isOnColor
                small
              />
              Skickar...
            </>
          ) : (
            'Skicka'
          )}
        </Button>
      </ButtonGroup>
    </Form>
  )
}
