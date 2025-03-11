import { isSemanticElement } from './Heading'

describe('isSemanticElement', () => {
  it('should render a h1', () => {
    expect(isSemanticElement({ component: 'h1', element: 'h1' })).toBe(true)
    expect(isSemanticElement({ variant: 'h1', element: 'h1' })).toBe(true)
    expect(
      isSemanticElement({ variant: 'h2', component: 'h1', element: 'h1' }),
    ).toBe(true)
    expect(
      isSemanticElement({ variant: 'h3', component: 'h1', element: 'h1' }),
    ).toBe(true)
    expect(
      isSemanticElement({ variant: 'h4', component: 'h1', element: 'h1' }),
    ).toBe(true)
    expect(
      isSemanticElement({ variant: 'h5', component: 'h1', element: 'h1' }),
    ).toBe(true)
  })

  it('should not render a h1', () => {
    expect(isSemanticElement({ component: 'h2', element: 'h1' })).toBe(false)
    expect(isSemanticElement({ variant: 'h2', element: 'h1' })).toBe(false)
    expect(
      isSemanticElement({ variant: 'h2', component: 'h3', element: 'h1' }),
    ).toBe(false)
    expect(
      isSemanticElement({ variant: 'h3', component: 'h4', element: 'h1' }),
    ).toBe(false)
    expect(
      isSemanticElement({ variant: 'h4', component: 'h5', element: 'h1' }),
    ).toBe(false)
    expect(
      isSemanticElement({ variant: 'h5', component: 'h4', element: 'h1' }),
    ).toBe(false)
  })
})
