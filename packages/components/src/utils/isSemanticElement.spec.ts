import { isSemanticElement } from './isSemanticElement'

describe('isSemanticElement', () => {
  it('should render a h1', () => {
    expect(
      isSemanticElement({
        component: 'h1',
        element: 'h1',
        variant: undefined,
      }),
    ).toBe(true)
    expect(
      isSemanticElement({
        component: undefined,
        element: 'h1',
        variant: 'h1',
      }),
    ).toBe(true)
    expect(
      isSemanticElement({
        variant: 'h2',
        component: 'h1',
        element: 'h1',
      }),
    ).toBe(true)
    expect(
      isSemanticElement({
        component: 'h1',
        element: 'h1',
        variant: 'h3',
      }),
    ).toBe(true)
    expect(
      isSemanticElement({
        component: 'h1',
        element: 'h1',
        variant: 'h4',
      }),
    ).toBe(true)
    expect(
      isSemanticElement({
        component: 'h1',
        element: 'h1',
        variant: 'h5',
      }),
    ).toBe(true)
  })

  it('should not render a h1', () => {
    expect(
      isSemanticElement({
        component: 'h2',
        element: 'h1',
        variant: undefined,
      }),
    ).toBe(false)
    expect(
      isSemanticElement({
        component: undefined,
        element: 'h1',
        variant: 'h2',
      }),
    ).toBe(false)
    expect(
      isSemanticElement({
        component: 'h3',
        element: 'h1',
        variant: 'h2',
      }),
    ).toBe(false)
    expect(
      isSemanticElement({
        component: 'h4',
        element: 'h1',
        variant: 'h3',
      }),
    ).toBe(false)
    expect(
      isSemanticElement({
        component: 'h5',
        element: 'h1',
        variant: 'h4',
      }),
    ).toBe(false)
    expect(
      isSemanticElement({
        component: 'h4',
        element: 'h1',
        variant: 'h5',
      }),
    ).toBe(false)
  })
})
