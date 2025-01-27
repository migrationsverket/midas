import { render } from '@testing-library/react'
import { Breadcrumbs } from './'

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Breadcrumbs items={[{ title: 'Länk', href: '#' }]} />
    )
    expect(baseElement).toBeTruthy()
  })
})
