import { ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => <div>{children}</div>
