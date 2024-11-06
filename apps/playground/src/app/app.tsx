// eslint-disable-next-line @nx/enforce-module-boundaries
import '../../../../packages/theme/src/lib/global.css'
import styles from './app.module.css'
import { Button } from '@midas-ds/button'
import { Checkbox, CheckboxGroup } from '@midas-ds/checkbox'
import { Item, Select } from '@midas-ds/select'
import { RadioGroup, Radio } from '@midas-ds/radio'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@midas-ds/accordion'
import { Logo } from '@midas-ds/logo'
import { TextField } from '@midas-ds/textfield'
import {
  GlobalToastRegion,
  toastQueue,
  ToastProvider,
  MidasToastState
} from '@midas-ds/toast'

import { DialogTrigger, Modal, ModalHeader, ModalBody } from '@midas-ds/modal'
import { Flex, FlexItem } from '@midas-ds/flex'
import { TextArea } from '@midas-ds/textarea'
import { Heading } from 'react-aria-components'

export function App() {
  return (
    <div className={styles.container}>
      <div>
        <ToastProvider>
          {(state: MidasToastState) => (
            <Button
              onPress={() =>
                state.add(
                  { type: 'important', message: 'Important' },
                  { timeout: 2000 }
                )
              }
            >
              Show local toast
            </Button>
          )}
        </ToastProvider>
      </div>
      <GlobalToastRegion />
      <form action=''>
        <TextField
          type={'email'}
          label={'Email'}
          isRequired
        />
      </form>
      <Button
        onPress={() =>
          toastQueue.add(
            { message: 'glass', type: 'success' },
            { timeout: 3000 }
          )
        }
      >
        show global toast
      </Button>
      <h1>Playground app</h1>

      <Select
        label={'select label'}
        description={'beskrivning'}
        isRequired
      >
        <Item>Hej</Item>
        <Item>Hejdå</Item>
        <Item>Hallå</Item>
        <Item>Nej</Item>
      </Select>

      <div>
        <h2>Components</h2>
        <div>
          <RadioGroup
            orientation={'vertical'}
            label={'Säg ett datum'}
            description={'beskrivande text'}
            onChange={value => console.log('change radio', value)}
          >
            <Radio value={'hallå'}>Tjugonionde maj</Radio>
            <Radio value={'goodbye'}>29:e maj</Radio>
          </RadioGroup>
          <RadioGroup
            orientation={'vertical'}
            label={'Säg ett datum'}
            isInvalid={true}
            errorMessage={'Nåt gick snett'}
            description={'beskrivande text'}
            onChange={value => console.log('change radio', value)}
          >
            <Radio value={'hallå'}>Tjugonionde maj</Radio>
            <Radio value={'goodbye'}>29:e maj</Radio>
          </RadioGroup>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label={'Textfield'}
            validate={value => (value === 'glass' ? true : 'error')}
            errorMessage={'hej'}
            description={'hallå'}
          ></TextField>
          <TextField
            label={'Textfield password'}
            type={'password'}
            description={'hej hej'}
          ></TextField>
        </div>
        <div>
          <TextField
            label={'Textfield password'}
            isRequired
            type={'password'}
            description={'joråsåatte'}
          ></TextField>
        </div>
        <div className={styles['component']}>
          <Logo primary />
          <Logo
            primary
            background
          />
          <Logo
            background
            primary={false}
          />
        </div>
        <div className={styles['component']}>
          <Accordion type={'multiple'}>
            <AccordionItem value={'x'}>
              <AccordionTrigger>Rubrik</AccordionTrigger>
              <AccordionContent>
                Du som ska studera vid ett unions-program eller ett
                multilateralt program som innefattar rörlighetsåtgärder, och som
                ska påbörja dina studier på programmet i Sverige, kan ansöka om
                uppehållstillstånd för högre utbildning i Sverige för hela
                programmet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'y'}>
              <AccordionTrigger>
                En annan rubrik som är lite längre
              </AccordionTrigger>
              <AccordionContent>Mer innehåll</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            margin: 'auto',
            padding: '10px'
          }}
        >
          <Checkbox>Check or not to check</Checkbox>
          <Checkbox isIndeterminate>Indeterminate</Checkbox>
          <Checkbox isInvalid>Indeterminate</Checkbox>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            maxWidth: '100%'
          }}
        >
          <CheckboxGroup
            label={'Group label'}
            description={'Group one description'}
          >
            <Checkbox>Check or not to check</Checkbox>
            <Checkbox isIndeterminate>Indeterminate</Checkbox>
            <Checkbox
              isRequired
              isSelected
            >
              Required
            </Checkbox>
          </CheckboxGroup>
          <form action=''>
            <CheckboxGroup
              label={'Required group'}
              description={'>0 must be selected'}
              isRequired
            >
              <Checkbox value={'1'}>Check or not to check</Checkbox>
              <Checkbox value={'2'}>Some value</Checkbox>
              <Checkbox value={'3'}>Value 3</Checkbox>
            </CheckboxGroup>
          </form>
          <form action=''>
            <CheckboxGroup
              label={'Individual required'}
              description={'first two must be selected'}
            >
              <Checkbox
                value={'1'}
                isRequired
              >
                Must be checked
              </Checkbox>
              <Checkbox
                value={'2'}
                isRequired
              >
                Must be checked
              </Checkbox>
              <Checkbox value={'3'}>Do whatever</Checkbox>
            </CheckboxGroup>
            <button>submit</button>
          </form>
        </div>
        <div className={styles['component']}>
          <Button>Button</Button>
          <Button variant={'secondary'}>Secondary Button</Button>
          <Button isDisabled>Disabled</Button>
        </div>
      </div>
      <DialogTrigger>
        <Button>Öppna modal</Button>
        <Modal>
          {({ close }) => (
            <>
              <ModalHeader />
              <ModalBody
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                }}
              >
                <Flex fluid={true}>
                  <FlexItem>
                    <Heading
                      slot='title'
                      style={{ margin: 0 }}
                    >
                      Vill du avsluta uppdraget?
                    </Heading>
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem>
                    <TextArea
                      // eslint-disable-next-line jsx-a11y/no-autofocus
                      autoFocus
                      label='Ange anledning'
                      description='Skriv anledning'
                      maxCharacters={100}
                    />
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem col='auto'>
                    <Button onPress={close}>Spara korrespondens</Button>
                  </FlexItem>
                  <FlexItem>
                    <Button
                      onPress={close}
                      variant='secondary'
                    >
                      Avbryt
                    </Button>
                  </FlexItem>
                </Flex>
              </ModalBody>
            </>
          )}
        </Modal>
      </DialogTrigger>
    </div>
  )
}

export default App
