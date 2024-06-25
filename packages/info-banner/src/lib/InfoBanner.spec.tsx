import { render } from '@testing-library/react'

import { InfoBanner } from './InfoBanner'

describe('InfoBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <InfoBanner
        type={'info'}
        title={'Title'}
        message={'Message'}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
