import styles from './app.module.css'
import { Tab, Tabs, TabPanel, TextField, TabList } from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          gap: '2rem',
          border: '1px solid salmon',
        }}
      >
        <TextField
          label='Medium'
          description='size component'
          size='medium'
          defaultValue='this is medium'
        />
        <TextField
          size='large'
          label='Large'
          defaultValue='this is large'
          description='size component'
        />
      </div>

      <div style={{ backgroundColor: '#f2f2f2', padding: '1rem' }}>
        <Tabs defaultSelectedKey='tab1'>
          <TabList>
            <Tab id='tab1'>Tab 1</Tab>
            <Tab id='tab2'>Tab 2</Tab>
          </TabList>
          <TabPanel id='tab1'>
            <p>This is content for Tab 1.</p>
          </TabPanel>
          <TabPanel id='tab2'>
            <p>This is content for Tab 2.</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default App
