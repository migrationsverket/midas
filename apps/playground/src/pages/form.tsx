import {
  Button,
  ButtonGroup, Checkbox, CheckboxGroup,
  DatePicker,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@midas-ds/components'
import { carBrands } from '../assets/cars'
import { FormEvent, useState } from 'react'

export const FormPage = () => {
  const [submitted, setSubmitted] = useState<any>(null)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
    // @ts-ignore
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    setSubmitted(formData)
  }
  return (
    <>
      <h2>Native HTML form</h2>
      <form onSubmit={handleSubmit}>
        <CheckboxGroup label="Form">
          <Checkbox name={'likeForms'}>I like forms</Checkbox>
        </CheckboxGroup>
        <TextField
          label='First Name'
          name={'firstName'}
        />
        <TextField
          isRequired
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
          isRequired
          label='Favorite car'
          name={'car'}
          selectionMode={'single'}
          options={carBrands}
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
