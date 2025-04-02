import styles from './app.module.css'
import { TextArea, TextField } from '@midas-ds/components'
import { I18nProvider } from 'react-aria-components'

export function App() {
  return (
    <div className={styles.container}>
      <TextField
        label='Label'
        description='Description'
        showCounter
        type='email'
        maxLength={4}
      />
      <TextField
        label='Label'
        description='Description'
        type='password'
        validate={value => (value === 'Skriv inte hej' ? 'error' : true)}
      />
      <TextArea
        label='Label'
        description='Skriv hej'
        validate={value => (value === 'Skriv inte hej' ? 'error' : true)}
      />
      <I18nProvider locale={'de-DE'}>
        <TextField type={'password'}></TextField>
      </I18nProvider>
      <I18nProvider locale={'ko'}>
        <TextField type={'password'}></TextField>
      </I18nProvider>
      <I18nProvider locale={'ar'}>
        <TextField type={'password'}></TextField>
      </I18nProvider>
    </div>
  )
}

export default App
