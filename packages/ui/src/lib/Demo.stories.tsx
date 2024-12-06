import type { Meta, StoryObj } from '@storybook/react'
import { InfoBanner, InfoBannerProps } from '@midas-ds/info-banner'
import { DatePicker } from '@midas-ds/date-picker'
import { Flex, FlexItem } from '@midas-ds/flex'
import { TextField } from '@midas-ds/textfield'
import { Button, ButtonGroup, MidasButtonProps } from '@midas-ds/button'
import React from 'react'
import { Modal } from '@midas-ds/modal'
import { useListData } from 'react-stately'
import { DateValue, Form } from 'react-aria-components'
import {
  Column,
  Table,
  TableHeader,
  TableBody,
  Row,
  Cell
} from '@midas-ds/table'

interface DemoStory {
  type: InfoBannerProps['type']
  variant: MidasButtonProps['variant']
}

const meta: Meta<DemoStory> = {
  title: 'Examples/Öppet hus',
  argTypes: {
    type: {
      name: 'Typ av InfoBanner',
      options: ['success', 'info', 'warning'],
      control: { type: 'select' }
    },
    variant: {
      name: 'Variant på första knappen',
      options: ['primary', 'danger'],
      control: { type: 'select' }
    }
  }
}

export default meta
type Story = StoryObj<DemoStory>

interface Column {
  name: string
  id: keyof ListItem
  isRowHeader?: boolean
}

interface ListItem {
  id: number
  name: string
  date: string
}

export const Demo: Story = {
  args: { type: 'success', variant: 'primary' },
  render: function Render({ type, variant }) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [isAbortOpen, setIsAbortOpen] = React.useState<boolean>(false)
    const list = useListData<ListItem>({})
    const [name, setName] = React.useState<string>('')
    const [date, setDate] = React.useState<DateValue | null>()

    const columns = [
      { name: 'Namn', id: 'name', isRowHeader: true },
      { name: 'Datum', id: 'date' }
    ] satisfies Column[]

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      list.append({
        name,
        date: date ? date?.cycle('day', 0).toString() : 'Inget favoritdatum',
        id: e.timeStamp
      })
    }

    return (
      <>
        <Flex style={{ marginBottom: '3rem' }}>
          <FlexItem col={12}>
            <InfoBanner
              type={type}
              title='Öppet hus'
            >
              Detta är ett demokit från designsystemet.
            </InfoBanner>
          </FlexItem>
        </Flex>
        <Form onSubmit={onSubmit}>
          <Flex style={{ marginBottom: '3rem' }}>
            <FlexItem col={6}>
              <TextField
                value={name}
                onChange={setName}
                label='För- och efternamn'
                description='Namn Namnsson'
              />
            </FlexItem>
            <FlexItem col={6}>
              <DatePicker
                value={date}
                onChange={setDate}
                label='Favoritdag år 2024'
                description='Välj ett datum'
              />
            </FlexItem>
            <FlexItem col={6}>
              <ButtonGroup aria-label={''}>
                <Button
                  variant={variant}
                  type='submit'
                >
                  {variant === 'primary' ? 'Skicka' : 'Radera'}
                </Button>
                <Button
                  variant='secondary'
                  onPress={() => setIsOpen(true)}
                >
                  Avbryt
                </Button>
              </ButtonGroup>
            </FlexItem>
          </Flex>
        </Form>

        <Flex>
          <FlexItem col={12}>
            <Table
              aria-label='Files'
              selectionMode='multiple'
              rows={list.items}
              onSelectionChange={keys => list.setSelectedKeys(keys)}
            >
              <TableHeader columns={columns}>
                {column => (
                  <Column isRowHeader={column.isRowHeader}>
                    {column.name}
                  </Column>
                )}
              </TableHeader>
              <TableBody
                items={list.items}
                renderEmptyState={() => <div>Inga favoritdatum ännu</div>}
              >
                {item => (
                  <Row columns={columns}>
                    {column => <Cell>{item[column.id]}</Cell>}
                  </Row>
                )}
              </TableBody>
            </Table>
          </FlexItem>
          {list.items.length > 0 && (
            <FlexItem col='auto'>
              <Button
                variant='danger'
                isDisabled={Array.from(list.selectedKeys).length === 0}
                onPress={() => setIsAbortOpen(true)}
              >
                Ta bort
              </Button>
            </FlexItem>
          )}
        </Flex>

        <Modal
          id='modal'
          title='Är du säker på att du vill avbryta?'
          isOpen={isOpen}
          onOpenChange={isOpen => setIsOpen(isOpen)}
        >
          <ButtonGroup aria-label='Välj om du vill avbryta'>
            <Button
              onPress={() => {
                setName('')
                setDate(null)
                setIsOpen(false)
              }}
            >
              Ja
            </Button>

            <Button
              variant='secondary'
              onPress={() => setIsOpen(false)}
            >
              Nej
            </Button>
          </ButtonGroup>
        </Modal>

        <Modal
          id='modal'
          title={`Är du säker på att du vill ta bort ${Array.from(list.selectedKeys).length} ${Array.from(list.selectedKeys).length > 1 ? 'rader' : 'rad'}?`}
          isOpen={isAbortOpen}
          onOpenChange={isOpen => setIsAbortOpen(isOpen)}
        >
          <ButtonGroup aria-label='Välj om du vill avbryta'>
            <Button
              variant='danger'
              onPress={() => {
                list.removeSelectedItems()
                setIsAbortOpen(false)
              }}
            >
              Ja
            </Button>

            <Button
              variant='secondary'
              onPress={() => setIsAbortOpen(false)}
            >
              Nej
            </Button>
          </ButtonGroup>
        </Modal>
      </>
    )
  }
}
