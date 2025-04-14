import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => (
  <form onSubmit={e => e.preventDefault()}>
    {children}
    <button type='submit'>Submit</button>
  </form>
)

/**
 * A custom render function that wraps the component(s) in a form element
 * ```tsx
 * <form>
 *   {ui}
 *   <button type='submit'>Submit</button>
 * </form>
 * ```
 * @param ui - the component to render
 */
export const renderWithForm = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Wrapper, ...options })
