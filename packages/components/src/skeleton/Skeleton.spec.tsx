import { render } from '@testing-library/react'

import {Skeleton} from './Skeleton'

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Skeleton />)
    expect(baseElement).toBeTruthy()
  })

  describe('form variant', () => {
    it('should render three skeleton elements (label, description, input)', () => {
      const { container } = render(<Skeleton variant="form" />)
      const skeletonElements = container.querySelectorAll('.skeleton')
      expect(skeletonElements).toHaveLength(3)
    })

    it('should apply medium size class when size is medium', () => {
      const { container } = render(<Skeleton variant="form" size="medium" />)
      const formContainer = container.querySelector('.form')
      expect(formContainer).toHaveClass('medium')
    })

    it('should not apply medium size class when size is large (default)', () => {
      const { container } = render(<Skeleton variant="form" size="large" />)
      const formContainer = container.querySelector('.form')
      expect(formContainer).not.toHaveClass('medium')
    })

    it('should apply wave animation class when isAnimated is true', () => {
      const { container } = render(<Skeleton variant="form" isAnimated={true} />)
      const skeletonElements = container.querySelectorAll('.skeleton')
      skeletonElements.forEach(element => {
        expect(element).toHaveClass('wave')
      })
    })

    it('should not apply wave animation class when isAnimated is false', () => {
      const { container } = render(<Skeleton variant="form" isAnimated={false} />)
      const skeletonElements = container.querySelectorAll('.skeleton')
      skeletonElements.forEach(element => {
        expect(element).not.toHaveClass('wave')
      })
    })

    it('should apply onLayer01 class when isOnLayer01 is true', () => {
      const { container } = render(<Skeleton variant="form" isOnLayer01={true} />)
      const skeletonElements = container.querySelectorAll('.skeleton')
      skeletonElements.forEach(element => {
        expect(element).toHaveClass('onLayer01')
      })
    })

    it('should respect custom width style', () => {
      const { container } = render(<Skeleton variant="form" width="500px" />)
      const formContainer = container.querySelector('.form')
      expect(formContainer).toHaveStyle({ width: '500px' })
    })
  })
})
