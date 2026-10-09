'use client'

import { useContext } from 'react'
import {
  Tab as AriaTab,
  TabProps,
  composeRenderProps,
  SelectionIndicator,
  DialogContext,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Tabs.module.css'
import { TabsContext } from './TabsContext'

export const Tab = ({ className, ...props }: TabProps) => {
  const { variant, size } = useContext(TabsContext)
  const dialogContext = useContext(DialogContext)

  return (
    <AriaTab
      {...props}
      className={clsx(
        styles.tab,
        {
          [styles.contained]: variant === 'contained',
          [styles.medium]: size === 'medium',
        },
        className,
      )}
    >
      {composeRenderProps(props.children, children => (
        <>
          {typeof children === 'string' || typeof children === 'number' ? (
            // The selected tab's label is heavier, and so wider. The label
            // reserves that width up front (see .labelSizer in the CSS), so
            // selecting a tab doesn't shift the tabs next to it
            <span className={styles.label}>
              {children}
              <span
                aria-hidden
                className={styles.labelSizer}
                data-label={children}
              />
            </span>
          ) : (
            children
          )}
          <SelectionIndicator
            className={clsx(styles.selectionIndicator, {
              [styles.contained]: variant === 'contained',
              // This is a workaround for preventing a bug with animations
              // See: https://github.com/adobe/react-spectrum/issues/9931
              [styles.animated]: !dialogContext,
            })}
          />
        </>
      ))}
    </AriaTab>
  )
}

export type { TabProps }
