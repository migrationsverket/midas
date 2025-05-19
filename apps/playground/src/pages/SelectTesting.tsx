import { ListBox, ListBoxItem, Popover, Select as AriaSelect, Button, SelectValue, Label } from 'react-aria-components'
import { Select } from '@midas-ds/components'
import { movieCharacters } from '../data/movieCharacters'
import { useState } from 'react'

const smallSet = movieCharacters.slice(0, 50)
const mediumSet = movieCharacters.slice(0, 200)
const largeSet = movieCharacters.slice(0, 400)


export const SelectTesting = () => {

  const [currentList, setCurrentList] = useState(smallSet)

  const handleSizeChange = (size: string) => {
    if (size === 'small') {
      setCurrentList(smallSet)
    }
    if (size === 'medium') {
      setCurrentList(mediumSet)
    }
    if (size === 'large') {
      setCurrentList(largeSet)
    }
  }

  return (
    <div>
      <h1>Select testing</h1>
      <h5>select size of dataset (50 | 200 | 400)</h5>
      <select name="" id="" onChange={e => handleSizeChange(e.currentTarget.value)}>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
      </select>

      <div>
        <h3>Native Select</h3>
        <select
          name=''
          id=''
        >
          {currentList.map(item => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>React Aria Select</h3>
        <AriaSelect>
          <Label>Select name</Label>
          <Button>
            <SelectValue />
            <span aria-hidden='true'>▼</span>
          </Button>
          <Popover>
            <ListBox>
              {currentList.map(item => (
                <ListBoxItem
                  id={item.id}
                  key={item.id}
                >
                  {item.name}
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </AriaSelect>
      </div>
      <div>
        <h3>Midas Select</h3>
        <Select options={currentList} selectionMode='single' label='Midas'/>
      </div>
      <div>
        <h3>Midas Multi Select</h3>
        <Select options={currentList} selectionMode='multiple' label='Midas'/>
      </div>
    </div>
  )
}
