import { render } from '@testing-library/react'

import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Breadcrumbs items={[{ title: 'Länk', href: '#' }]} />
    )
    expect(baseElement).toBeTruthy()
  })
})
