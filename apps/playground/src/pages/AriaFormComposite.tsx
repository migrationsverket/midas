import { FormEvent, useState } from 'react'
import { Form } from 'react-aria-components'
import { TextField, Input, Label, FieldError } from '../components'
import { Button, ButtonGroup } from '@midas-ds/components'

export const AriaFormCompositePage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [formValue, setFormValue] = useState({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event.currentTarget)
    // @ts-ignore
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    setFormValue(formData)
  }

  return (
    <>
      <h2>Aria Form using 'new' atomic components</h2>
      <Form onSubmit={handleSubmit}>
        <TextField
          autoComplete={'off'}
          minLength={3}
          maxLength={10}
          name={'firstName'}
          isRequired
        >
          <Label>First Name</Label>
          <FieldError />
          <Input />
        </TextField>
        <TextField
          autoComplete={'off'}
          minLength={3}
          maxLength={10}
          name={'lastName'}
          isRequired
        >
          <Label>Last Name</Label>
          <FieldError />
          <Input />
        </TextField>
        <div>
          <ButtonGroup aria-label={''}>
            <Button type={'submit'}>Submit</Button>
            <Button
              type={'reset'}
              variant={'secondary'}
            >
              Reset
            </Button>
          </ButtonGroup>
        </div>
      </Form>
      <h2>Form Value</h2>
      <pre>{formValue && JSON.stringify(formValue)}</pre>
    </>
  )
}
