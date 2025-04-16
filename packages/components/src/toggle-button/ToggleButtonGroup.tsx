import {
  ToggleButtonGroup as AriaToggleButtonGroup,
  ToggleButtonGroupProps,
} from 'react-aria-components'
import * as React from 'react'
import styles from './ToggleButton.module.css'
import clsx from 'clsx'

export const ToggleButtonGroup: React.FC<
  ToggleButtonGroupProps & React.RefAttributes<HTMLDivElement>
> = ({ ...rest }) => {
  return (
    <AriaToggleButtonGroup
      {...rest}
      className={clsx(styles.group, rest.className)}
    />
  )
}
