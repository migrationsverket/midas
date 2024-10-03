import { render } from '@testing-library/react'
import { ComboBox, ComboBoxItem } from './ComboBox'

describe('Combobox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ComboBox
        description="Beskrivning"
        label="Etikett"
        placeholder="One item..."
      >
        <ComboBoxItem>Item A</ComboBoxItem>
      </ComboBox>
    )
    expect(baseElement).toBeTruthy()
  })
})
