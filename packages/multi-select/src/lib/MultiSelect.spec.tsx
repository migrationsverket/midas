import { render } from '@testing-library/react'

import MultiSelect from './MultiSelect'
import { options } from './MultiSelect.stories'

describe('MultiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MultiSelect
        label='Label'
        description='Etikett'
        items={options}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
