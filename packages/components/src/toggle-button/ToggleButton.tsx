import {
  ToggleButton as AriaToggleButton,
  ToggleButtonProps,
} from 'react-aria-components'
import ButtonStyles from '../button/Button.module.css'
import styles from './ToggleButton.module.css'
import clsx from '../utils/clsx'

export const ToggleButton: React.FC<
  ToggleButtonProps & React.RefAttributes<HTMLButtonElement>
> = ({ ...rest }) => {
  return (
    <AriaToggleButton
      {...rest}
      className={clsx(
        ButtonStyles.button,
        ButtonStyles.iconBtn,
        styles.toggleButton,
        rest.className,
      )}
    />
  )
}
