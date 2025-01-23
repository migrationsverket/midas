import { render } from '@testing-library/react'

import { DatePicker } from 'packages/components/src/date-picker/src/DatePicker'

describe('DatePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DatePicker label={'Välj ett datum'}/>)
    expect(baseElement).toBeTruthy()
  })
})
