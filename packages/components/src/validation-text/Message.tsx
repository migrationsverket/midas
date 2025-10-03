import React from 'react'
import clsx from '../utils/clsx'
import styles from './ValidationText.module.css'
import { ValidationTextProps } from './ValidationText'

interface MessageProps extends ValidationTextProps {
  children: React.ReactNode
}

export const Message: React.FC<MessageProps> = ({ children, className }) => (
  <span
    className={clsx(styles.validationText, className)}
    slot='errorMessage'
  >
    {children}
  </span>
)
