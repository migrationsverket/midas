import { Controller, useForm } from 'react-hook-form'
import {
  FieldError,
  Form,
  Input,
  Label,
  TextField as AriaTextField,
} from 'react-aria-components'
import { TextField, Button } from '@midas-ds/components'
import styles from '../app/app.module.css'

export function ReactHookFormPage() {
  let { handleSubmit, control, formState, reset } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
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
          rules={{ required: 'Name is required.' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <AriaTextField
              // label={'Name'}
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
              <Input ref={ref} />
              <FieldError>{error?.message}</FieldError>
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
              ref={ref}
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
              {/*            <Input ref={ref} />
            <FieldError>{error?.message}</FieldError>*/}
            </TextField>
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
