import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Select,
  Flex,
  FlexItem,
  Modal,
  Dialog,
  NewModal,
  ModalTrigger
} from '@midas-ds/components'
import { Form, PressEvent } from 'react-aria-components'
import React from 'react'

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
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  return (
    <div className={styles.container}>
      <ModalTrigger
        label={'open dialog'}
        isDismissable
      >
        {(close) => (
          <Dialog title='Enter your name'>
            <Select
              placeholder={'Select...'}
              defaultSelectedKeys={['kiwi']}
              label={'Select a single fruit'}
              selectionMode={'single'}
              options={options}
              isClearable={false}
              isSelectableAll={false}
              onSelectionChange={x =>
                console.log('[single]onSelectionChange', x)
              }
            ></Select>
            <Button
              onPress={close}
              style={{ marginTop: 10 }}
            >
              Submit
            </Button>
          </Dialog>
        )}
      </ModalTrigger>
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
            onSelectionChange={x => console.log('[multi]onSelectionChange', x)}
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
            onSelectionChange={x => console.log('[single]onSelectionChange', x)}
          ></Select>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.col}>
          <Select
            placeholder={'Select...'}
            defaultSelectedKeys={['kiwi']}
            label={'Disabled fruits'}
            selectionMode={'multiple'}
            options={options}
            isDisabled
            isClearable={true}
            isSelectableAll={true}
            onSelectionChange={x => console.log('[multi]onSelectionChange', x)}
          ></Select>
        </div>
        <div className={styles.col}>
          <Select
            placeholder={'Select...'}
            defaultSelectedKeys={['kiwi']}
            label={'Kiwi selected but disabled'}
            description={'banana is also disabled'}
            selectionMode={'single'}
            options={options}
            isClearable={false}
            isSelectableAll={false}
            disabledKeys={['kiwi', 'banan']}
            onSelectionChange={x => console.log('[single]onSelectionChange', x)}
          ></Select>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.col}>
          <Select
            placeholder={'Select...'}
            defaultSelectedKeys={['kiwi']}
            label={'With tags'}
            selectionMode={'multiple'}
            showTags
            isClearable
            options={options}
            onSelectionChange={x => console.log('[multi]onSelectionChange', x)}
          ></Select>
        </div>
        <div className={styles.col}>
          <Select
            placeholder={'Select...'}
            defaultSelectedKeys={['kiwi']}
            label={'Invalid'}
            description={'this is bad'}
            errorMessage={'supply the error msg'}
            isInvalid
            selectionMode={'single'}
            options={options}
            isClearable={false}
            isSelectableAll={false}
            disabledKeys={['kiwi', 'banan']}
            onSelectionChange={x => console.log('[single]onSelectionChange', x)}
          ></Select>
        </div>
      </div>
    </div>
  )
}

export default App
