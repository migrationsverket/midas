import { render } from '@testing-library/react'
import { ComboBox, Item } from './ComboBox'

describe('Combobox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ComboBox
        description="Beskrivning"
        label="Etikett"
        placeholder="One item..."
      >
        <Item>Item A</Item>
      </ComboBox>
    )
    expect(baseElement).toBeTruthy()
  })
})
