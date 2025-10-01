import clsx from '../utils/clsx'
import {
  MenuSection as AriaMenuSection,
  MenuSectionProps,
} from 'react-aria-components'
import styles from './Menu.module.css'

export type { MenuSectionProps }

export const MenuSection = <T extends object>({
  className,
  ...rest
}: MenuSectionProps<T>) => (
  <AriaMenuSection
    className={clsx(className, styles.menuSection)}
    {...rest}
  />
)
