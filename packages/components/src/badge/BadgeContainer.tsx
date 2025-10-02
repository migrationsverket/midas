import styles from './Badge.module.css'
import clsx from '../utils/clsx'

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
