import {
  Button,
  ButtonGroup,
  DatePicker,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@midas-ds/components'
import { countries } from '../assets/countries'
import { FormEvent, useState } from 'react'

const COUNTRIES = countries.map(country => ({
  name: country.name,
  id: country.code,
}))

export const FormPage = () => {
  const [submitted, setSubmitted] = useState<any>(null)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    setSubmitted(formData)
  }
  return (
    <>
      <h2>Native HTML form</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label='First Name'
          name={'firstName'}
        />
        <TextField
          label='Last Name'
          name={'lastName'}
        />
        <RadioGroup
          label={'Gender'}
          name={'gender'}
        >
          <Radio value={'male'}>Male</Radio>
          <Radio value={'female'}>Female</Radio>
        </RadioGroup>
        <Select
          label='Country'
          name={'country'}
          selectionMode={'single'}
          options={COUNTRIES}
        ></Select>
        <DatePicker
          label={'Pick a date'}
          name={'date'}
        />
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
      </form>
      <pre>{submitted && JSON.stringify(submitted)}</pre>
    </>
  )
}
