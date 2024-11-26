import clsx from 'clsx'
import styles from './ButtonGroup.module.css'

export interface MidasButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  'aria-label': string
}

export const ButtonGroup: React.FC<MidasButtonGroupProps> = ({
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}) => {
  return (
    <div
      role='group'
      aria-label={ariaLabel}
      className={clsx(styles.buttonGroup, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
