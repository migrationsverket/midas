import { render } from '@testing-library/react'

import { Breadcrumbs } from 'packages/components/src/breadcrumbs/src/Breadcrumbs'

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Breadcrumbs items={[{ title: 'Länk', href: '#' }]} />
    )
    expect(baseElement).toBeTruthy()
  })
})
