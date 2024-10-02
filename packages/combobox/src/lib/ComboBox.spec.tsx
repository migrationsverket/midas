import { render } from '@testing-library/react'
import { Combobox, Item } from './ComboBox'

describe('Combobox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Combobox
        description="Beskrivning"
        label="Etikett"
        placeholder="One item..."
      >
        <Item>Item A</Item>
      </Combobox>
    )
    expect(baseElement).toBeTruthy()
  })
})
