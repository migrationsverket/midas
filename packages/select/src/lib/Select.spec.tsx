import { render } from '@testing-library/react'
import { Item, Select } from './Select'

describe('Select', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Select
        description="Beskrivning"
        label="Etikett"
        placeholder="One item..."
      >
        <Item>Item A</Item>
      </Select>
    )
    expect(baseElement).toBeTruthy()
  })
})
