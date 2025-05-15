import styles from './app.module.css'
import { MidasThemeProvider } from '@midas-ds/components/theme'
import { ComboBox, ComboBoxItem } from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <MidasThemeProvider value={{ size: 'medium' }}>
        <ComboBox
          size='large'
          label='Select a derp'
        >
          <ComboBoxItem>Derp</ComboBoxItem>
        </ComboBox>
      </MidasThemeProvider>
    </div>
  )
}

export default App
