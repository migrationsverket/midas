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
} from '@midas-ds/components'

export const UncontrolledForm = () => {
  const [result, setResult] = React.useState(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setResult(data)
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className={styles.form}
        validationBehavior={'native'} // use 'aria' to allow submit when invalid
      >
        <TextField
          label={'Namn'}
          name={'name'}
          isRequired
        />
        <TextField
          label={'E-post'}
          type={'email'}
          name={'email'}
          isRequired
        />
        <CheckboxGroup
          label={'Spara mina uppgifter'}
          name={'saveData'}
          isRequired
        >
          <Checkbox value={'agree'}>Jag godkänner</Checkbox>
        </CheckboxGroup>
        <ButtonGroup>
          <Button type={'submit'}>Skicka</Button>
          <Button
            type={'reset'}
            variant={'secondary'}
          >
            Rensa
          </Button>
        </ButtonGroup>
      </Form>
      <span>{result && <pre>{JSON.stringify(result)}</pre>}</span>
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
        name={'name'}
        label={'Namn'}
        onChange={setName}
        isRequired
      />
      <div>Ditt namn: {name}</div>
      <Button type={'submit'}>Skicka</Button>
    </Form>
  )
}

export const RealtimeValidation = () => {
  const [password, setPassword] = React.useState('')
  const errors = []
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
      label={'Lösenord'}
      style={{ whiteSpace: 'pre-line' }}
      isInvalid={errors.length > 0}
      value={password}
      onChange={setPassword}
      errorMessage={errors.join('\n')}
      errorPosition={'bottom'}
    />
  )
}

export const ServerValidation = () => {
  const [isWaiting, setIsWaiting] = React.useState(false)
  // Fake server used in this example.
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  async function callServer(data) {
    setIsWaiting(true)
    await delay(1000)
    setIsWaiting(false)
    return {
      errors: {
        username: `Tyvärr, användarnamnet ${data.username} är upptaget.`,
      },
    }
  }
  const [errors, setErrors] = React.useState({})
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))
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
        label={'Användarnamn'}
        name='username'
        isRequired
      />
      <TextField
        label={'Lösenord'}
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
