import React, { useState } from 'react'
import {
  Button,
  Cell,
  Column,
  DialogTrigger,
  Modal,
  Row,
  Select,
  Table,
  TableBody,
  TableHeader,
} from '@midas-ds/components'

// Problem: Select-menyn låser sig efter första Add
// Problemet uppstår inte, om ViewModalerna inte ligger i en tabell
// Problemet uppstår inte, om tabellen inte innehåller modaler
// Problemet uppstår inte, om inte Select-komponenten ligger i en modal

interface Entry {
  id: string
  value: string
}

const ViewModal = () => (
  <DialogTrigger>
    <Button>View</Button>
    <Modal>Content</Modal>
  </DialogTrigger>
)

const AddModal = ({
  addEntry,
}: Readonly<{ addEntry: (entries: Entry) => void }>) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>()

  const selectOptions = ['A', 'B', 'C'].map(value => ({
    id: value,
    name: value,
  }))

  const getSelectedKeys = () => {
    const keys = new Set<string>()
    if (selectedValue !== undefined) {
      keys.add(selectedValue)
    }
    return keys
  }

  const onSelectionChange = (keys: 'all' | Set<string | number>) => {
    if (keys !== 'all') {
      const keyValues = [...keys.values()]
      if (keyValues.length > 0) {
        const key = keyValues[0]
        const option = selectOptions.find(o => o.id === key)
        if (option !== undefined) {
          setSelectedValue(`${option.id}`)
          return
        }
      }
    }
    setSelectedValue(undefined)
  }

  const add = () => {
    if (selectedValue) {
      addEntry({
        id: `${Math.random() * 100}`,
        value: selectedValue,
      })
    }
  }

  return (
    <DialogTrigger>
      <Button>Add entry</Button>
      <Modal>
        <Select
          label='Testar select'
          options={selectOptions}
          selectedKeys={getSelectedKeys()}
          onSelectionChange={onSelectionChange}
          // eslint-disable-next-line
          autoFocus
        />
        <Button
          onPress={add}
          isDisabled={!selectedValue}
        >
          Add
        </Button>
      </Modal>
    </DialogTrigger>
  )
}

export const Test = () => {
  const [entries, setEntries] = useState<Entry[]>([])

  if (!entries) {
    return <>Loading</>
  }

  const addEntry = (entry: Entry) => {
    setEntries([...entries, entry])
  }

  const body = entries.map(entry => (
    <Row key={entry.id}>
      <Cell>
        <ViewModal />
      </Cell>
    </Row>
  ))

  return (
    <>
      <Table aria-label='tabell'>
        <TableHeader>
          <Column isRowHeader>Actions</Column>
        </TableHeader>
        <TableBody>{body}</TableBody>
      </Table>
      <AddModal addEntry={addEntry} />
    </>
  )
}

export default Test
