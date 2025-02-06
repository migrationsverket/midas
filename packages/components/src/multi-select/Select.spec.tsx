import { render } from '@testing-library/react'

import { Select } from './Select'

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

describe('Select', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Select
        selectionMode={'multiple'}
        label='Label'
        description='Etikett'
        options={options}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
