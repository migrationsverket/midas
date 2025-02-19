import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => (
  <form>
    {children}
    <button type='submit'>Submit</button>
  </form>
)

export const renderWithForm = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Wrapper, ...options })
