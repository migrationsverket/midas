import styles from './Badge.module.css'
import { clsx } from '@midas-ds/utils'

export const BadgeContainer: React.FC<
  React.HTMLAttributes<HTMLSpanElement>
> = ({ children, className, ...rest }) => {
  return (
    <span
      className={clsx(styles.badgeContainer, className)}
      {...rest}
    >
      {children}
    </span>
  )
}
