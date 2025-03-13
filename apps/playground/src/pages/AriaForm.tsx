import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@midas-ds/components'
import { carBrands } from '../assets/cars'
import { FormEvent, useContext, useState } from 'react'
import { Form, FormValidationContext } from 'react-aria-components'

// Fake server used in this example.
function callServer(data: any) {
  if (data.firstName === 'pixelrick')
  return {
    errors: {
      firstName: 'Sorry, this username is taken.'
    }
  };
  return {}
}

export const AriaFormPage = () => {
  const [value, setValue] = useState<Record<string, any>>({})
  let [errors, setErrors] = useState({});

  const handleChange = (value: Record<string, any>) => {
    setValue(prevState => ({ ...prevState, ...value }))
  }
  const handleReset = () => {
    setValue({})
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    let result = callServer(formData)
    setErrors(result.errors)
  }
  return (
    <>
      <h2>Aria Form</h2>
      <Form
        validationErrors={errors}
        onSubmit={handleSubmit}
        validationBehavior={'aria'}
        onReset={handleReset}
      >
        <CheckboxGroup label='Form'>
          <Checkbox name={'likeForms'}>I like forms</Checkbox>
        </CheckboxGroup>
        <TextField
          onChange={firstName => handleChange({ firstName })}
          label='First Name'
          description={'must be filled a valid name'}
          name={'firstName'}
          isRequired
        />
        <TextField
          onChange={lastName => handleChange({ lastName })}
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
          onSelectionChange={country => handleChange({ country })}
          label='Favorite car(s)'
          name={'car'}
          selectionMode={'multiple'}
          options={carBrands}
        ></Select>
        <DatePicker
          onChange={date => handleChange({ date })}
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
      </Form>
      <pre>{value && JSON.stringify(value)}</pre>
    </>
  )
}
