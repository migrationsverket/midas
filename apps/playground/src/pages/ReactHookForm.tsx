import { Controller, useForm } from 'react-hook-form'
import {
  FieldError as AriaFieldError,
  Form,
  Input as AriaInput,
  Label as AriaLabel,
  TextField as AriaTextField,
  Text as AriaText,
} from 'react-aria-components'
import { Input } from '../../src/components/Input'
import { Label, Text } from '../../src/components/Label'
import { FieldError } from '../../src/components/FieldError'
import { TextField as MidasTextField, Button, DateField } from '@midas-ds/components'
import {TextField} from '../../src/components/TextField'
import styles from '../app/app.module.css'

export function ReactHookFormPage() {
  let { handleSubmit, control, formState, reset } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      address: '',
      date: null,
    },
  })
  let onSubmit = (data: any) => {
    // Call your API here...
  }
  const onReset = () => {
    reset()
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        onReset={onReset}
        className={styles.container}
      >
        <Controller
          control={control}
          name='name'
          rules={{
            required: 'Name is required.',
            validate: x =>
              x === 'pixelrick' ? 'PixelRick is taken!' : undefined,
          }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <AriaTextField
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              // Let React Hook Form handle validation instead of the browser.
              validationBehavior='aria'
              isInvalid={invalid}
              // errorMessage={error?.message}
            >
              <Label>Namn</Label>
              <Text slot={'description'}>Hej</Text>
              <FieldError>{error?.message}</FieldError>
              <Input ref={ref} />
            </AriaTextField>
          )}
        />
        <Controller
          control={control}
          name='lastName'
          rules={{ required: 'Last Name is required.' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <TextField
              label={'Last Name'}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              // Let React Hook Form handle validation instead of the browser.
              validationBehavior='aria'
              isInvalid={invalid}
              errorMessage={error?.message}
            >
              // Assign React Hook Form ref to Input so it can focus the Input
              after validation.
              <FieldError>{error?.message}</FieldError>
            </TextField>
          )}
        />
        <Controller
          control={control}
          name='address'
          rules={{ required: 'Address is required.' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <AriaTextField
              // label={'Address'}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              // Let React Hook Form handle validation instead of the browser.
              validationBehavior='aria'
              isInvalid={invalid}
              // errorMessage={error?.message}
            >
              <AriaInput ref={ref}></AriaInput>
              // Assign React Hook Form ref to Input so it can focus the Input
              after validation.
              <FieldError>{error?.message}</FieldError>
            </AriaTextField>
          )}
        />
        <Controller
          control={control}
          name='date'
          rules={{ required: 'Date is required.' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <DateField
              label={'Address'}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              // Let React Hook Form handle validation instead of the browser.
              validationBehavior='aria'
              isInvalid={invalid}
              errorMessage={error?.message}
            >
              // Assign React Hook Form ref to Input so it can focus the Input
              after validation.
              <FieldError>{error?.message}</FieldError>
            </DateField>
          )}
        />
        <Button type='submit'>Submit</Button>
        <Button
          type={'reset'}
          variant={'secondary'}
        >
          Reset
        </Button>
      </Form>
      <pre>{formState && JSON.stringify(formState)}</pre>
    </>
  )
}
