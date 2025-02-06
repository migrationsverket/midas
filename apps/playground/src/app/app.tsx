import styles from './app.module.css'
import { Button, SearchField, Logo, TextField } from '@midas-ds/components'
import { Select } from '../../../../packages/components/src/multi-select/Select'
const fruits = [
  'Apple',
  'Banana',
  'Kiwi',
  'Elderflower',
  'Nectarine',
  'Watermelon',
  'Pineapple',
  'Apricot',
  'Cloudberry',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Blackberry',
  'Cherry',
  'Peach',
  'Plum',
  'Grape',
  'Orange',
  'Lemon',
  'Lime',
  'Coconut',
  'Fig',
  'Papaya',
  'Guava',
  'Pomegranate',
  'Dragonfruit',
  'Starfruit',
  'Passionfruit'
]
const options = fruits.map(fruit => {
  return { name: fruit, id: fruit.toLocaleLowerCase() }
})
export function App() {
  return (
    <div className={styles.container}>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button>Primary Button</Button>
      <SearchField placeholder={'Search...'} />
      <Logo />
      <TextField label={'Text'} />
      <div className={styles.section}>
        <div className={styles.col}>
      <Select
        placeholder={'Select...'}
        defaultSelectedKeys={['kiwi']}
        label={'Select many fruits'}
        selectionMode={'multiple'}
        options={options}
        isClearable={true}
        isSelectableAll={true}
        onSelectionChange={x => console.log('onSelectionChange', x)}
      ></Select>
        </div>
        <div className={styles.col}>
        <Select
          placeholder={'Select...'}
          defaultSelectedKeys={['kiwi']}
          label={'Select a single fruit'}
          selectionMode={'single'}
          options={options}
          isClearable={false}
          isSelectableAll={false}
          onSelectionChange={x => console.log('onSelectionChange', x)}
        ></Select>
        </div>
      </div>
    </div>
  )
}

export default App
