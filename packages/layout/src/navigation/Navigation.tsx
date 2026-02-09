import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './Navigation.module.css'
import { Drawer } from './Drawer'
import { ModalOverlayProps } from 'react-aria-components'

export interface NavigationProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    Pick<ModalOverlayProps, 'isOpen' | 'onOpenChange'> {
  children?: ReactNode
  id: string
}

export const Navigation = ({
  children,
  className,
  id,
  isOpen,
  onOpenChange,
  ...rest
}: NavigationProps) => (
  <>
    <nav
      className={clsx(className, styles.navigation)}
      {...rest}
    >
      {children}
    </nav>
    <Drawer
      id={id}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <nav
        id={id}
        className={clsx(className, styles.navigation)}
        {...rest}
      >
        {children}
      </nav>
    </Drawer>
  </>
)
